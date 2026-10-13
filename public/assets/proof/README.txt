Agility AI — Interactive Proof section assets

The homepage proof section loads files from this folder only (no inline SVG fallbacks).

Load order per icon:
  1. .png
  2. .jpg / .jpeg
  3. .webp
  4. .svg (only when no raster exists, except brand icons — PNG only)

Expected basenames:
  clock.*              — By Hand header
  bolt.*               — With Agility AI header
  check.*              — answer banner
  sparkle.*            — toggle (also tries 27_sparkle_decorations.png)
  robot.png            — robot mascot

  source-email.*
  source-spreadsheet.*
  source-crm.*
  source-chat.*

  brand-gmail.png      — use PNG (SVG ignored for brands)
  brand-sheets.png
  brand-salesforce.png
  brand-slack.png

Add PNG or JPG versions to replace the bundled .svg placeholders.
