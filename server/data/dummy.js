const planets = [
  {
    name: "Tatooine",
    description:
      "Tatooine is a sparsely inhabited circumbinary desert planet located in the galaxy's Outer Rim Territories.",
    code: "XT-FOE-43",
    picture_url:
      "https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg",
  },
  {
    name: "Aargau",
    description:
      "Aargau is a planet in the Zug system of the Core Worlds region, not far from Coruscant and the Corellian Run.",
    code: "FN-BBA-22",
    picture_url:
      "https://static.wikia.nocookie.net/starwars/images/a/a9/Aargau.jpg",
  },
  {
    name: "Malastare",
    description:
      "Malastare is the high-gravity homeworld of the quadrupedal Dug race, on the Hydian Way.",
    code: "EM-PVA-98",
    picture_url:
      "https://static.wikia.nocookie.net/starwars/images/d/df/MalastareNEGAS.jpg",
  },
];

const characters = [
  {
    name: "Chewbacca",
    description:
      "Chewbacca, known affectionately to his friends as Chewie, is a Wookiee male warrior, smuggler, mechanic, pilot, and resistance fighter.",
    planet: "FN-BBA-22",
    picture_url:
      "https://upload.wikimedia.org/wikipedia/en/6/6d/Chewbacca-2-.jpg",
  },
  {
    name: "Norbert Ériu",
    description: "Norbert is a farmer.",
    planet: "FN-BBA-22",
    picture_url: "https://images.unsplash.com/photo-1588422333078-44ad73367bcb",
  },
  {
    name: "Sümeyye Sitora",
    description: "Sümeyye is a teacher.",
    planet: "FN-BBA-22",
    picture_url: "https://images.unsplash.com/photo-1606103955054-99913abd77c8",
  },
  {
    name: "Cori Blagovesta",
    description: "Cori is known as the most teasing person in the galaxy.",
    planet: "XT-FOE-43",
    picture_url: "https://images.unsplash.com/photo-1530071100468-90954e4921d0",
  },
  {
    name: "Nisha Amala",
    description: "Nisha is curious about what happens in the Outer Rim",
    planet: "XT-FOE-43",
    picture_url: "https://images.unsplash.com/photo-1592210566091-9e18a5fc01b4",
  },
  {
    name: "Spyro Gerarda",
    description: "Spyro is Spyro",
    planet: "EM-PVA-98",
    picture_url: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc",
  },
];

module.exports = { planets, characters };
