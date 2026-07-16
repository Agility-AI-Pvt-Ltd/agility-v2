import { getHrmsConfig, hrmsAuthHeaders } from "@/lib/hrms/config";
import { NextResponse } from "next/server";

async function toUploadFile(value: FormDataEntryValue | null): Promise<File | null> {
  if (!(value instanceof Blob) || value.size === 0) {
    return null;
  }

  const bytes = await value.arrayBuffer();
  const name =
    value instanceof File && value.name.trim()
      ? value.name
      : "resume.pdf";
  const type = value.type || "application/pdf";

  return new File([bytes], name, { type });
}

export async function POST(
  request: Request,
  context: { params: Promise<{ slug: string }> },
) {
  const config = getHrmsConfig();

  if (!config) {
    return NextResponse.json(
      { error: "Careers API is not configured." },
      { status: 503 },
    );
  }

  const { slug } = await context.params;

  if (!slug) {
    return NextResponse.json({ error: "Job slug is required." }, { status: 400 });
  }

  let incoming: FormData;

  try {
    incoming = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
  }

  const fullName = incoming.get("fullName");
  const email = incoming.get("email");
  const phone = incoming.get("phone");
  const coverLetter = incoming.get("coverLetter");
  const resume = await toUploadFile(incoming.get("resume"));

  if (
    typeof fullName !== "string" ||
    !fullName.trim() ||
    typeof email !== "string" ||
    !email.trim() ||
    typeof phone !== "string" ||
    !phone.trim() ||
    typeof coverLetter !== "string" ||
    !coverLetter.trim()
  ) {
    return NextResponse.json(
      { error: "Name, email, phone, and cover letter are required." },
      { status: 400 },
    );
  }

  if (!resume) {
    return NextResponse.json({ error: "Resume file is required." }, { status: 400 });
  }

  const form = new FormData();
  form.append("fullName", fullName.trim());
  form.append("email", email.trim());
  form.append("phone", phone.trim());
  form.append("coverLetter", coverLetter.trim());
  form.append("resume", resume, resume.name);

  try {
    const res = await fetch(
      `${config.baseUrl}/api/public/jobs/${encodeURIComponent(slug)}/apply`,
      {
        method: "POST",
        headers: hrmsAuthHeaders(config.apiKey),
        body: form,
      },
    );

    if (!res.ok) {
      let message = "Application could not be submitted.";

      try {
        const body = (await res.json()) as { error?: string; message?: string };
        message = body.error ?? body.message ?? message;
      } catch {
        // use default message
      }

      if (process.env.NODE_ENV === "development") {
        console.error("[careers/apply]", slug, res.status, message);
      }

      return NextResponse.json({ error: message }, { status: res.status });
    }

    const body = (await res.json()) as { message?: string };
    return NextResponse.json({
      ok: true,
      message: body.message ?? "Application submitted successfully",
    });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[careers/apply] upstream error", error);
    }

    return NextResponse.json(
      { error: "Unable to reach the careers service. Please try again." },
      { status: 502 },
    );
  }
}
