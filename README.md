# Free Fantasy Football Minis

A simple static download page for my original 3D-printable fantasy football miniatures, hosted on GitHub Pages.

Once published, it will be at **https://petesmithdesign.com/fantasy-football-minis/** (the custom domain on `twoshedzz.github.io` carries over to project sites).

## What's here

| Path | What it is |
|------|------------|
| `index.html` | The page (no build step) |
| `models.js` | Site settings (coffee link, roster builder link) and the list of models |
| `files/` | Zipped STLs for download |
| `images/` | Pictures and render videos |

## Add a new model

1. Zip the STL: `zip -9 -j files/<name>.zip "<path to>.stl"`. Keep each file under 100 MB (GitHub's limit); zipping usually saves 60%.
2. Add a picture to `images/`, about 900px wide, as JPG.
3. In `models.js`, copy the Orkshire Coach block and edit it.
4. Commit and push. The page updates in about a minute.

## Set the coffee link

Put your Buy Me a Coffee or Ko-fi URL in `coffeeUrl` in `models.js`. The buttons stay hidden while it's empty.

## Keeping it legal and copyright safe

- Each design starts from my own text prompt and was generated on a **paid Tripo plan** (keep a screenshot of the plan and terms with each model's prompt).
- Never use "Blood Bowl", Games Workshop names, logos or official team names in titles, file names or images. Say "fantasy football".
- Licence: CC BY-NC 4.0. The page states it's unofficial and not linked to Games Workshop.
- Get written permission before using anyone else's painted photo, and credit them (`paintedBy` in `models.js`).
- Tick the "AI-generated" option when posting to MakerWorld or Printables.

## Preview locally

```bash
python3 -m http.server 8765
```

Then open http://localhost:8765/.
