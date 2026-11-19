import fs from "fs";
import http from "http";
import path from "path";

const dir = path.resolve(
  "public/testimonials/photos/Govt entity (NDDB & Anand)",
);
const files = fs
  .readdirSync(dir)
  .filter((f) => /\.(jpe?g|png|webp|gif)$/i.test(f))
  .sort((a, b) => a.localeCompare(b));

console.log("on disk", files.length);
for (const f of files) {
  const buf = fs.readFileSync(path.join(dir, f));
  const hex = buf.slice(0, 4).toString("hex");
  const ok =
    hex.startsWith("ffd8") || // jpeg
    hex === "89504e47" || // png
    hex === "52494646" || // webp/riff
    hex.startsWith("4749"); // gif
  console.log(`${ok ? "OK" : "BAD"} ${buf.length} ${f} ${hex}`);
}

function head(urlPath) {
  return new Promise((resolve) => {
    const req = http.request(
      { hostname: "localhost", port: 3000, path: urlPath, method: "HEAD" },
      (res) => resolve(res.statusCode),
    );
    req.on("error", () => resolve(0));
    req.end();
  });
}

const badHttp = [];
for (const f of files) {
  const url =
    "/testimonials/photos/" +
    encodeURIComponent("Govt entity (NDDB & Anand)") +
    "/" +
    encodeURIComponent(f);
  const status = await head(url);
  if (status !== 200) badHttp.push({ f, status });
}
console.log("http bad", badHttp);
