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
    <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-neutral-100 sm:aspect-auto sm:h-full sm:w-[132px] sm:min-h-[148px] md:w-[148px]">
      <Image
        src={current}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, 148px"
        className="object-cover"
        onError={() => {
          if (current !== fallback) setCurrent(fallback);
        }}
      />
    </div>
  );
}
