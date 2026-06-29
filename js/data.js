/* ============================================================
   DATA FILE — edit this file to update content.
   No backend needed. Just save and refresh.
   ============================================================ */

/* ── PHOTOS ──────────────────────────────────────────────────
   Each entry:
   {
     src:     "path/to/image.jpg",   // relative path or full URL
     alt:     "Description",
     span:    "tall" | "wide" | ""   // optional: controls grid sizing
   }
   ──────────────────────────────────────────────────────────── */
const PHOTOS = [
  { src: "images/DSC06942.jpg",  alt: "Portrait", span: "tall" },
  { src: "images/DSC06954.jpg",  alt: "Portrait", span: "tall" },
  { src: "images/DSC07046.jpg",  alt: "Portrait", span: "tall" },
  { src: "images/IMG_3748-2.jpg", alt: "Portrait", span: "tall" },
  { src: "images/IMG_3764-2.jpg", alt: "Portrait", span: "tall" },
];

/* ── VIDEOS ──────────────────────────────────────────────────
   Each entry:
   {
     title:      "Video Title",
     thumb:      "images/thumb.jpg",     // thumbnail image path
     embedUrl:   "https://www.youtube.com/embed/VIDEO_ID",
                 // YouTube: https://www.youtube.com/embed/VIDEO_ID
                 // Vimeo:   https://player.vimeo.com/video/VIDEO_ID
     type:       "YouTube" | "Vimeo"
   }
   ──────────────────────────────────────────────────────────── */
const VIDEOS = [
  {
    title: "Cinematic Portrait Film",
    thumb: "images/video-thumb-1.jpg",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    type: "YouTube",
  },
  {
    title: "Brand Campaign Reel",
    thumb: "images/video-thumb-2.jpg",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    type: "YouTube",
  },
  {
    title: "Editorial Series",
    thumb: "images/video-thumb-3.jpg",
    embedUrl: "https://player.vimeo.com/video/76979871",
    type: "Vimeo",
  },
];

/* ── PRODUCTS ────────────────────────────────────────────────
   Each entry:
   {
     title:    "Product Name",
     price:    "$37",
     tag:      "Presets" | "Guide" | "Bundle" | etc.
     img:      "images/product-1.jpg",
     buyUrl:   "#",   // replace with Gumroad / Stripe link
     desc:     "One-line description"
   }
   ──────────────────────────────────────────────────────────── */
const PRODUCTS = [
  {
    title: "Signature Preset Pack",
    price: "$37",
    tag: "Presets",
    img: "images/product-placeholder-1.jpg",
    buyUrl: "#",
    desc: "My full cinematic Lightroom preset collection.",
  },
  {
    title: "Photography Ebook",
    price: "TBD",
    tag: "Ebook",
    img: "images/product-placeholder-2.jpg",
    buyUrl: "#",
    desc: "The full photography guide — light, composition, and the edit.",
  },
  {
    title: "Videography Ebook",
    price: "TBD",
    tag: "Ebook",
    img: "images/product-placeholder-3.jpg",
    buyUrl: "#",
    desc: "The full videography guide — movement, color, and cinematic storytelling.",
  },
];
