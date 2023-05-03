const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "planet.garbozia": "Garbozia",
};

const nsidToTemplateId = {
  "card.planet:homebrew.garbozia/0": "74DE324DF54C9C1D69B904B524B2C549",
  "card.legendary_planet:homebrew.garbozia/0":
    "4457614C3B41D654AE29CBAFA7BCE3DB",
  "tile.system:homebrew.garbozia/999": "6BBD0CC9634EF721F337D9A738043D89",
};

const systems = [
  {
    tile: 999,
    source: "homebrew.garbozia",
    home: false,
    packageId: refPackageId,
    img: "garbozia/garbozia_tile.jpg",
    planets: [
      {
        localeName: "planet.garbozia",
        resources: 1,
        influence: 0,
        legendary: true,
        legendaryCard: "card.legendary_planet:homebrew.garbozia/the_wasteland",
      },
    ],
  },
];

world.TI4.homebrew.inject({
  localeStrings,
  nsidToTemplateId,
  systems,
});

world.TI4.homebrew.resetOnTableDecks();
