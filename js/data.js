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
  { src: "images/placeholder-1.jpg", alt: "Portrait session", span: "tall" },
  { src: "images/placeholder-2.jpg", alt: "Cinematic portrait" },
  { src: "images/placeholder-3.jpg", alt: "Editorial shoot" },
  { src: "images/placeholder-4.jpg", alt: "Brand content", span: "wide" },
  { src: "images/placeholder-5.jpg", alt: "Studio portrait", span: "tall" },
  { src: "images/placeholder-6.jpg", alt: "Outdoor portrait" },
  { src: "images/placeholder-7.jpg", alt: "Event coverage" },
  { src: "images/placeholder-8.jpg", alt: "Creative direction" },
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
    title: "Beginner Editing Guide",
    price: "$27",
    tag: "Guide",
    img: "images/product-placeholder-2.jpg",
    buyUrl: "#",
    desc: "Learn the editing workflow behind every shot.",
  },
];
