const { world, refPackageId } = require("@tabletop-playground/api");

const factions = [{
  faction: "hacan",
  abilities: ["masters_of_trade", "guild_ships", "arbiters"],
  commodities: 6,
  home: 16,
  leaders: {
      agents: ["carth_of_golden_sands"],
      commanders: ["gila_the_silvertongue"],
      heroes: ["harrugh_gefhara"],
  },
  promissoryNotes: ["trade_convoys"],
  icon: "global/factions/hacan_icon.png",
  source: "base",
  startingTech: ["antimass_deflectors", "sarween_tools"],
  startingUnits: {
      carrier: 1,
      dreadnought: 1,
      cruiser: 1,
      fighter: 2,
      infantry: 4,
      space_dock: 1,
  },
  techs: ["quantum_datahub_node", "production_biomes"],
  units: ["wrath_of_kenara", "pride_of_kenara"],
}];

 const nsidToTemplateId = {
    "sheet.faction:base/hacan":
      "76C161AB4320F427D40D13A5B246BA80",
};

const replace = {
  "card.technology.green.hacan:base/production_biomes" : "card.technology.green.hacan:homebrew.miltymod/production_biomes",
};

const technologies = [{
    localeName: "technology.name.production_biomes",
    cardNsid:
        "card.technology.yellow.hacan:homebrew.miltymod/production_biomes",
    type: "Green",
    requirements: { Green : 2},
    source: "homebrew.miltymod",
    faction: "hacan"
  },
];

const unitAttrs = [];

const unitModifiers = [];

world.TI4.homebrew.inject({
  factions,
  nsidToTemplateId,
  technologies,
  unitAttrs,
  unitModifiers,
  replace,
});
