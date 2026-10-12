"""Normalize founding team images in public/assets/image onto one shared studio bg."""

from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

img_dir = Path(r"e:\agility ai\agilityai-v2\public\assets\image")
files = ["sharad.png", "shreya.png", "aryan.png"]

BG_TOP = np.array([236, 234, 230], dtype=np.float32)
BG_BOTTOM = np.array([214, 211, 205], dtype=np.float32)
LIME = np.array([205, 220, 57], dtype=np.float32)


def studio_bg(size: tuple[int, int]) -> Image.Image:
    w, h = size
    ys = np.linspace(0, 1, h, dtype=np.float32)[:, None]
    grad = BG_TOP[None, None, :] * (1 - ys[:, :, None]) + BG_BOTTOM[None, None, :] * ys[
        :, :, None
    ]
    grad = np.repeat(grad, w, axis=1)
    rgba = np.dstack([grad, np.full((h, w), 255, dtype=np.float32)])
    return Image.fromarray(rgba.astype(np.uint8), "RGBA")


def to_cutout(im: Image.Image) -> Image.Image:
    rgba = np.array(im.convert("RGBA"), dtype=np.float32)
    rgb = rgba[:, :, :3]
    alpha = rgba[:, :, 3].copy()
    has_alpha = bool(alpha.min() < 250)

    white_dist = np.linalg.norm(rgb - np.array([255, 255, 255], dtype=np.float32), axis=2)
    lime_dist = np.linalg.norm(rgb - LIME, axis=2)

    if not has_alpha:
        alpha[white_dist < 28] = 0
        soft = (white_dist >= 28) & (white_dist < 55)
        alpha[soft] = alpha[soft] * ((white_dist[soft] - 28) / 27)

    alpha[lime_dist < 70] = 0

    edge = (alpha > 0) & (alpha < 250)
    spill = np.maximum(0, rgb[:, :, 1] - np.maximum(rgb[:, :, 0], rgb[:, :, 2]))
    rgb[edge, 1] = np.clip(rgb[edge, 1] - spill[edge] * 0.8, 0, 255)

    rgba[:, :, :3] = rgb
    rgba[:, :, 3] = alpha
    cut = Image.fromarray(rgba.astype(np.uint8), "RGBA")
    cut.putalpha(cut.getchannel("A").filter(ImageFilter.GaussianBlur(0.5)))
    return cut


def crop_content(cutout: Image.Image, pad: int = 12) -> Image.Image:
    bbox = cutout.getchannel("A").getbbox()
    if not bbox:
        return cutout
    l, t, r, b = bbox
    return cutout.crop(
        (
            max(0, l - pad),
            max(0, t - pad),
            min(cutout.width, r + pad),
            min(cutout.height, b + pad),
        )
    )


def fit(cutout: Image.Image, canvas: tuple[int, int]) -> Image.Image:
    cw, ch = canvas
    bg = studio_bg(canvas)
    cutout = crop_content(cutout)
    scale = min(cw / cutout.width, ch / cutout.height) * 0.92
    nw, nh = max(1, int(cutout.width * scale)), max(1, int(cutout.height * scale))
    resized = cutout.resize((nw, nh), Image.Resampling.LANCZOS)
    x = (cw - nw) // 2
    y = ch - nh
    if y > int(ch * 0.1):
        y = int(ch * 0.06)
    bg.alpha_composite(resized, (x, y))
    return bg


def main() -> None:
    canvas = (900, 1125)
    source_dir = img_dir / "source"
    source_dir.mkdir(exist_ok=True)

    for name in files:
        path = img_dir / name
        backup = source_dir / name
        print(f"Processing {name}...")
        if not backup.exists():
            Image.open(path).save(backup)
            print(f"  backed up source/{name}")

        cutout = to_cutout(Image.open(backup))
        composed = fit(cutout, canvas)
        composed.convert("RGB").save(path, "PNG", optimize=True)
        print(f"  saved {name}")
    print("Done.")


if __name__ == "__main__":
    main()
