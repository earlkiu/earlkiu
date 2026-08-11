// ─────────────────────────────────────────────
// COLLECTIONS — Single source of truth
//
// Paste new collections anywhere in the array — order is handled
// automatically by the sort at the bottom of this file (newest first,
// by `year`). Do not hand-order entries; it will be overwritten.
//
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
    title:    'Sneha Shaw',
    url:      '/collection/sneha-shaw-2023-01.html',
    category: 'People',
    year:     '2023',
    cover:    'https://res.cloudinary.com/dljk05sju/image/upload/q_auto/f_auto/v1786459480/Sneha_Shaw_23-07-23_3606_1_qo65ob.jpg'
  },
  {
    title:    'Cindy Lee',
    url:      '/collection/cindy-lee-2023-05.html',
    category: 'People',
    year:     '2023/05',
    cover:    'https://res.cloudinary.com/dljk05sju/image/upload/q_auto/f_auto/v1779692573/Cindy-03-05-23-2335_qlayth.jpg'
  },
  {
    title:    'Sneha Shaw',
    url:      '/collection/sneha-shaw-2023-07.html',
    category: 'People',
    year:     '2023/07',
    cover:    'https://res.cloudinary.com/dljk05sju/image/upload/q_auto/f_auto/v1786459480/Sneha_Shaw_23-07-23_3606_1_qo65ob.jpg'
  },
];

// Newest first, by shoot month. Keeps the grid and the prev/next nav
// from ever drifting apart — both read this array.
collections.sort((a, b) => b.year.localeCompare(a.year));
