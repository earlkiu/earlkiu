// ─────────────────────────────────────────────
// COLLECTIONS — Single source of truth
//
// Add new collections here in chronological order, newest last.
// This file drives:
//   1. Prev/Next navigation on every individual collection page
//   2. The grid on collection.html — auto-builds from this array
//
// Format:
// {
//   title:    'Talent Name',          ← name only, no date
//   url:      '/collection/file-slug.html',
//   category: 'People',               ← People / Fashion / Editorial
//   year:     '2025/05',              ← YYYY/MM, month of the shoot
//   cover:    'https://res.cloudinary.com/...'   ← strongest image from the collection
// }
//
// Slug convention: name-YYYY-MM.html — the number is the MONTH, not a sequence.
// ─────────────────────────────────────────────

const collections = [
  {
    title:    'Zyra',
    url:      '/collection/zyra-2025-05.html',
    category: 'People',
    year:     '2025/05',
    cover:    'https://res.cloudinary.com/dljk05sju/image/upload/q_auto/f_auto/v1779119897/Zyra_03-05-25_10526_ivngdo.jpg'
  },
  {
    title:    'Ming Xuan',
    url:      '/collection/ming-xuan-2025-08.html',
    category: 'People',
    year:     '2025/08',
    cover:    'https://res.cloudinary.com/dljk05sju/image/upload/q_auto/f_auto/v1779116539/Ming-Xuan-14-08-25-0087_k8gptw.jpg'
  },
  {
    title:    'Denise',
    url:      '/collection/denise-2024-04.html',
    category: 'People',
    year:     '2024/04',
    cover:    'https://res.cloudinary.com/dljk05sju/image/upload/q_auto/f_auto/v1779382053/Denise_28-04-24_5451_fhm8jy.jpg'
  },
  {
    title:    'Cindy Lee',
    url:      '/collection/cindy-lee-2023-05.html',
    category: 'People',
    year:     '2023/05',
    cover:    'https://res.cloudinary.com/dljk05sju/image/upload/q_auto/f_auto/v1779692573/Cindy-03-05-23-2335_qlayth.jpg'
  },
];
