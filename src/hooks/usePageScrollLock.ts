"use client";

import { useEffect } from "react";
import { lockPageScroll, unlockPageScroll } from "@/lib/scroll-lock";

export function usePageScrollLock(active: boolean): void {
  useEffect(() => {
    if (!active) return;
    lockPageScroll();
    return () => unlockPageScroll();
  }, [active]);
}
