export const yearOptions = Array.from({ length: 44 }, (_, i) => {
  return { value: 1950 + i, label: 1950 + i };
}).reverse();

export const ratingOptions = Array.from({ length: 10 }, (_, i) => {
  return { value: 10 - i, label: 10 - i };
});

export const countryOptions = [
  { label: "Any", value: "Any" },
  { label: "United States", value: "USA" },
  { label: "United Kingdom", value: "USA" },
  { label: "France", value: "France" },
  { label: "South Korea", value: "South Korea" },
  { label: "Italy", value: "Italy" },
  { label: "Japan", value: "Japan" },
  { label: "Spain", value: "Spain" },
  { label: "Turkey", value: "Turkey" },
  { label: "Sweden", value: "Sweden" },
  { label: "Hong Kong", value: "Hong Kong" },
  { label: "Australia", value: "Australia" },
  { label: "Belgium", value: "Belgium" },
  { label: "Netherlands", value: "Netherlands" },
  { label: "Greece", value: "Greece" },
  { label: "Austria", value: "Austria" },
];

countryOptions.forEach((el) => {
  el.value = el.label;
});

export const movieGenres = [
  "Any",
  "Action",
  "Adventure",
  "Animated",
  "Biography",
  "Comedy",
  "Crime",
  "Dance",
  "Disaster",
  "Documentary",
  "Drama",
  "Erotic",
  "Family",
  "Fantasy",
  "Found Footage",
  "Historical",
  "Horror",
  "Independent",
  "Legal",
  "Live Action",
  "Martial Arts",
  "Musical",
  "Mystery",
  "Noir",
  "Performance",
  "Political",
  "Romance",
  "Satire",
  "Science Fiction",
  "Short",
  "Silent",
  "Slasher",
  "Sports",
  "Spy",
  "Superhero",
  "Supernatural",
  "Suspense",
  "Teen",
  "Thriller",
  "War",
  "Western",
];
//for each option in genrese add a value and labesl with name of genre
export const genreOptions = movieGenres.map((genre) => {
  return { value: genre, label: genre };
});
