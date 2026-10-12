"""Crop founder cutouts and frame on a uniform 4:5 white canvas (face-centered)."""

from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

out_dir = Path(r"e:\agility ai\agilityai-v2\public\assets\image")
source_dir = out_dir / "source"

files = ["sharad.png", "shreya.png", "aryan.png"]
CANVAS = (900, 1125)
FACE_Y = 0.34
LIME = np.array([205, 220, 57], dtype=np.float32)


def load_rgba(path: Path) -> Image.Image:
    im = Image.open(path).convert("RGBA")
    rgba = np.array(im, dtype=np.float32)
    rgb = rgba[:, :, :3]
    alpha = rgba[:, :, 3]

    lime_dist = np.linalg.norm(rgb - LIME, axis=2)
    alpha[lime_dist < 72] = 0

    if alpha.min() > 250:
        white_dist = np.linalg.norm(
            rgb - np.array([255, 255, 255], dtype=np.float32), axis=2
        )
        alpha[white_dist < 24] = 0
        soft = (white_dist >= 24) & (white_dist < 50)
        alpha[soft] = alpha[soft] * ((white_dist[soft] - 24) / 26)

    rgba[:, :, 3] = alpha
    cut = Image.fromarray(rgba.astype(np.uint8), "RGBA")
    cut.putalpha(cut.getchannel("A").filter(ImageFilter.GaussianBlur(0.4)))
    return cut


def content_bbox(im: Image.Image) -> tuple[int, int, int, int] | None:
    rgba = np.array(im.convert("RGBA"))
    rgb = rgba[:, :, :3]
    alpha = rgba[:, :, 3]
    mask = alpha > 24 if alpha.min() < 250 else np.any(rgb < 245, axis=2)
    if not mask.any():
        return None
    ys, xs = np.where(mask)
    return int(xs.min()), int(ys.min()), int(xs.max()) + 1, int(ys.max()) + 1


def crop_subject(im: Image.Image, pad_frac: float = 0.03) -> Image.Image:
    bbox = content_bbox(im)
    if not bbox:
        return im.convert("RGBA")
    l, t, r, b = bbox
    w, h = im.size
    pw = int((r - l) * pad_frac)
    ph = int((b - t) * pad_frac)
    return im.crop(
        (
            max(0, l - pw),
            max(0, t - ph),
            min(w, r + pw),
            min(h, b + ph),
        )
    ).convert("RGBA")


def frame_portrait(cutout: Image.Image) -> Image.Image:
    cw, ch = CANVAS
    bg = Image.new("RGBA", CANVAS, (255, 255, 255, 255))
    subject = crop_subject(cutout)
    sw, sh = subject.size

    scale = max(cw / sw, ch / sh)
    nw, nh = int(sw * scale), int(sh * scale)
    resized = subject.resize((nw, nh), Image.Resampling.LANCZOS)

    face_y_in_subject = sh * 0.2
    x = (cw - nw) // 2
    y = int(ch * FACE_Y - face_y_in_subject * scale)

    if y + nh < ch:
        y = ch - nh
    y = min(y, int(ch * 0.06))

    bg.alpha_composite(resized, (x, y))
    return bg


def resolve_source(name: str) -> Path:
    src = source_dir / name
    if src.exists():
        return src
    return out_dir / name


def main() -> None:
    source_dir.mkdir(exist_ok=True)
    for name in files:
        src_path = resolve_source(name)
        print(f"Framing {name} from {src_path}...")
        cutout = load_rgba(src_path)
        framed = frame_portrait(cutout)
        out_path = out_dir / name
        framed.convert("RGB").save(out_path, "PNG", optimize=True)
        print(f"  -> {out_path} ({CANVAS[0]}x{CANVAS[1]})")


if __name__ == "__main__":
    main()
