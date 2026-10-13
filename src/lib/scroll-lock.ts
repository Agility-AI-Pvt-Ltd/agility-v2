export const SCROLL_LOCK_EVENT = "agility:scroll-lock";
export const SCROLL_UNLOCK_EVENT = "agility:scroll-unlock";

let lockCount = 0;
let savedScrollY = 0;

type SavedBodyStyle = {
  position: string;
  top: string;
  left: string;
  right: string;
  width: string;
  overflow: string;
  paddingRight: string;
};

let savedBody: SavedBodyStyle | null = null;
let savedHtmlOverflow = "";

function scrollbarWidth(): number {
  return window.innerWidth - document.documentElement.clientWidth;
}

export function lockPageScroll(): void {
  if (typeof document === "undefined") return;

  lockCount += 1;
  if (lockCount > 1) return;

  savedScrollY = window.scrollY;
  const body = document.body;
  const html = document.documentElement;

  savedBody = {
    position: body.style.position,
    top: body.style.top,
    left: body.style.left,
    right: body.style.right,
    width: body.style.width,
    overflow: body.style.overflow,
    paddingRight: body.style.paddingRight,
  };
  savedHtmlOverflow = html.style.overflow;

  const gap = scrollbarWidth();
  if (gap > 0) {
    body.style.paddingRight = `${gap}px`;
  }

  body.style.position = "fixed";
  body.style.top = `-${savedScrollY}px`;
  body.style.left = "0";
  body.style.right = "0";
  body.style.width = "100%";
  body.style.overflow = "hidden";
  html.style.overflow = "hidden";

  window.dispatchEvent(new Event(SCROLL_LOCK_EVENT));
}

export function unlockPageScroll(): void {
  if (typeof document === "undefined") return;

  lockCount = Math.max(0, lockCount - 1);
  if (lockCount > 0 || !savedBody) return;

  const body = document.body;
  const html = document.documentElement;

  body.style.position = savedBody.position;
  body.style.top = savedBody.top;
  body.style.left = savedBody.left;
  body.style.right = savedBody.right;
  body.style.width = savedBody.width;
  body.style.overflow = savedBody.overflow;
  body.style.paddingRight = savedBody.paddingRight;
  html.style.overflow = savedHtmlOverflow;

  savedBody = null;
  window.scrollTo(0, savedScrollY);

  window.dispatchEvent(new Event(SCROLL_UNLOCK_EVENT));
}
