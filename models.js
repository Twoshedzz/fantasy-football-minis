// ─────────────────────────────────────────────────────────────
// Site settings and the list of models.
// To add a new model: put its zip in files/, its picture in
// images/, then copy one block in MODELS below and edit it.
// ─────────────────────────────────────────────────────────────

const SITE = {
  // Your Buy Me a Coffee (or Ko-fi) page. Leave "" to hide the button.
  coffeeUrl: "",
  rosterBuilderUrl: "https://bloodbowlrosterbuilder.co.uk/",
};

const MODELS = [
  {
    id: "orkshire-coach",
    name: "Orkshire Coach",
    tagline: "A retired orc bruiser in a flat cap, bellowing plays from the touchline.",
    image: "images/orkshire-coach-painted.jpg",
    imageAlt: "Painted orc coach miniature on a round base: black flat cap, grey beard, pink shirt, pointing with one hand and holding a blue clipboard with a white rose",
    video: "images/orkshire-coach-render.mp4",
    file: "files/orkshire-coach.zip",
    fileSize: "37 MB zip (95 MB STL)",
    added: "November 2026",
    notes: [
      "Single-piece figure, no base: glue to a base of your choice",
      "Designed for resin printing; check supports on the pointing finger and clipboard",
      "First handed out as prints at club tournaments",
    ],
    paintedBy: "Painted by a fellow club member", // swap in their name/handle once they're happy to be credited
  },
];
