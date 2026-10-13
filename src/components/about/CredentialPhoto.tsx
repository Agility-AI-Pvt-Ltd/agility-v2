"use client";

import Image from "next/image";
import { useState } from "react";

type CredentialPhotoProps = {
  src: string;
  fallback: string;
  alt: string;
};

export default function CredentialPhoto({
  src,
  fallback,
  alt,
}: CredentialPhotoProps) {
  const [current, setCurrent] = useState(src);

  return (
    <div className="relative min-h-[220px] w-full overflow-hidden bg-neutral-100 lg:min-h-0 lg:h-full">
      <Image
        src={current}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 320px"
        className="object-cover object-center"
        onError={() => {
          if (current !== fallback) setCurrent(fallback);
        }}
      />
    </div>
  );
}
