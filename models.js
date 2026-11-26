// ─────────────────────────────────────────────────────────────
// Site settings and the list of models.
// To add a new model: put its zip in files/, its picture in
// images/, then copy one block in MODELS below and edit it.
// ─────────────────────────────────────────────────────────────

const SITE = {
  // Your Buy Me a Coffee (or Ko-fi) page. Leave "" to hide the button.
  coffeeUrl: "https://buymeacoffee.com/twoshedzz",
  rosterBuilderUrl: "https://bloodbowlrosterbuilder.co.uk/",
  // Google Analytics 4 measurement ID. Only loads after a visitor says yes.
  // Leave "" to turn analytics (and the banner) off.
  gaId: "G-7L7YHE9KNL",
};

const MODELS = [
  {
    id: "orkshire-coach",
    name: "Orkshire Coach",
    tagline: "Known at the club as Kluffy: a retired orc bruiser in a flat cap, bellowing plays from the touchline.",
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
        label: "Printed",
        type: "image",
        src: "images/orkshire-coach-printed-front.jpg",
        alt: "Unpainted grey resin print of the orc coach standing on a wooden table, three-quarter front view, pointing and holding the clipboard",
        caption: "Unpainted resin print, straight off the printer",
      },
      {
        label: "Pointing",
        type: "image",
        src: "images/orkshire-coach-printed-pointing-at-you.jpg",
        alt: "Unpainted resin print seen from the front with the pointing finger aimed at the camera",
        caption: "Unpainted resin print, pointing right at you",
      },
      {
        label: "Back",
        type: "image",
        src: "images/orkshire-coach-printed-back.jpg",
        alt: "Back of the unpainted resin print showing the shirt folds, cap and boots",
        caption: "Unpainted resin print, from behind",
      },
      {
        label: "Side",
        type: "image",
        src: "images/orkshire-coach-printed-side.jpg",
        alt: "Side view of the unpainted resin print showing the clipboard held against the body",
        caption: "Unpainted resin print, from the side",
      },
      {
        label: "Scale",
        type: "image",
        src: "images/orkshire-coach-printed.jpg",
        alt: "Unpainted grey resin print of the orc coach lying on a wooden table next to a pound coin for scale",
        caption: "Unpainted resin print, next to a £1 coin for scale",
      },
      {
        label: "Club logo",
        type: "image",
        src: "images/orkshire-logo.png",
        alt: "Black and white Orkshire club logo: a bearded orc in a flat cap in front of a Yorkshire rose, above a banner reading ORKSHIRE",
        caption: "The Orkshire club logo by Martin Rowntree, which the coach is based on. Logo © Martin Rowntree, used with permission",
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
    // Links to the same model on other sites. Leave out any you have not posted to.
    elsewhere: [
      { name: "MakerWorld", url: "https://makerworld.com/en/models/3669837-orkshire-coach-fantasy-football-coach-miniature" },
    ],
    fileSize: "9 MB zip (19 MB STL)",
    added: "November 2026",
    // Shown as a "Design credit" line under the notes.
    credit: "Based on the Orkshire club logo designed by Martin Rowntree, who also painted the mini shown here. Thanks, Martin!",
    notes: [
      "Ready to print at 38mm tall, the same size as the club prints: no scaling needed",
      "Single-piece figure, no base: glue to a base of your choice",
      "Designed for resin printing; check supports on the pointing finger and clipboard",
      "First handed out as prints at club tournaments",
    ],
  },
];
