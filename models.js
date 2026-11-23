// ─────────────────────────────────────────────────────────────
// Site settings and the list of models.
// To add a new model: put its zip in files/, its picture in
// images/, then copy one block in MODELS below and edit it.
// ─────────────────────────────────────────────────────────────

const SITE = {
  // Your Buy Me a Coffee (or Ko-fi) page. Leave "" to hide the button.
  coffeeUrl: "https://buymeacoffee.com/twoshedzz",
  rosterBuilderUrl: "https://bloodbowlrosterbuilder.co.uk/",
};

const MODELS = [
  {
    id: "orkshire-coach",
    name: "Orkshire Coach",
    tagline: "A retired orc bruiser in a flat cap, bellowing plays from the touchline.",
    // Pictures shown in the switcher, first one shows by default.
    // type is "image" or "video". Leave any out that you don't have.
    views: [
      {
        label: "Painted",
        type: "image",
        src: "images/orkshire-coach-painted.jpg",
        alt: "Painted orc coach miniature on a round base: black flat cap, grey beard, pink shirt, pointing with one hand and holding a blue clipboard with a white rose",
        caption: "Painted by Martin Rowntree",
      },
      {
        label: "Concept art",
        type: "image",
        src: "images/orkshire-coach.jpg",
        alt: "AI concept art of the orc coach in a brown flat cap and torn shirt, pointing and holding a clipboard with a white rose",
        caption: "The AI concept art the 3D model was made from",
      },
      {
        label: "3D model",
        type: "video",
        src: "images/orkshire-coach-render.mp4",
        alt: "Turntable video of the unpainted 3D model",
        caption: "Turnaround of the STL",
      },
    ],
    file: "files/orkshire-coach.zip",
    fileSize: "37 MB zip (95 MB STL)",
    added: "November 2026",
    notes: [
      "Single-piece figure, no base: glue to a base of your choice",
      "Designed for resin printing; check supports on the pointing finger and clipboard",
      "First handed out as prints at club tournaments",
    ],
  },
];
