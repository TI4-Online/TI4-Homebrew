const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.blex": "Blex",
  "faction.full.blex": "Blex Pestilence",
  "planet.avicenna": "Avicenna",
  "technology.name.biotic_weapons": "Biotic Weapons",
  "unit.flagship.auriga": "Auriga",
  "unit.mech.pustule": "Pustule",
};


const factions = [{
  faction: "blex",
  abilities: [
    "contagion",
    "blight",
    "shared_misery",
  ],
  commodities: 2,
  home: 3231,
  leaders: {
    agents: ["tox"],
    commanders: ["silas_deriga"],
    heroes: ["speygh"],
  },
  promissoryNotes: ["blex_agents"],
  promissoryNotes: ["secrets_of_the_weave"],
  //icon: "discordant-stars/faction-icons/blex.png",
  source: "discordant_stars",
  startingTech: ["daxcive_animators", "biostims"],
  startingUnits: {
    carrier: 1,
    dreadnought: 1,
    destroyer: 1,
    infantry: 3,
    space_dock: 1,
  },
  techs: ["meldships"],
  units: ["auriga", "vector", "vector_2", "pustule"],
  packageId: refPackageId,
  unpackExtra: [{
    tokenNsid: "token.system:homebrew.discordant-stars.blight/blex",
    tokenCount: 4,
  }]

}];

 const nsidToTemplateId = {
    "sheet.faction:homebrew.discordant_stars/blex":
      "87BBEE704B999E945F806DB0A881ED50",
    "tile.system:homebrew.discordant_stars/3231":
      "D979798344A89C664EC1E1B464534D21",
    "token.command:homebrew.discordant_stars/blex":
      "E1D61045492625569AB4BA82E05F4C9D",
    "token.control:homebrew.discordant_stars/blex":
      "F78A93DE437BF9F76AA260A0F0D8E7F6",
    "token.system:homebrew.discordant-stars.blight/blex":
      "XXXXXXX",
};

const technologies = [{
    localeName: "technology.name.biotic_weapons",
    cardNsid:
      "card.technology.green.blex:homebrew.discordant_stars/biotic_weapons",
    type: "Green",
    requirements: { Green: 2 },
    source: "homebrew.discordant_stars",
    faction: "blex",
  }, {
    localeName: "unit.vector_2",
    cardNsid: "card.technology.unit_upgrade.blex:homebrew.discordant_stars/vector_2",
    type: "unitUpgrade",
    requirements: { Green: 1, Blue: 1 },
    abbrev: " VE II",
    faction: "blex",
    unitPosition: 0,
  },
];

const systems = [
  {
    tile: 3231,
    source: "homebrew.discordant_stars",
    home: true,
    planets: [
        { localeName: "planet.avicenna", resources: 4, influence: 0 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.auriga",
    triggerNsid:
      "card.technology.unit_upgrade.blex:franken.discordant_stars/auriga",
    spaceCombat: { dice: 2, hit: 7 },
    capacity: 6,
  },
  {
    unit: "fighter",
    upgradeLevel: 1,
    localeName: "unit.fighter.vector",
    triggerNsid: "card.technology.unit_upgrade.blex:franken.discordant_stars/vector",
    move: 2,
  },
  {
    unit: "fighter",
    upgradeLevel: 2,
    localeName: "unit.fighter.vector_2",
    triggerNsid: "card.technology.unit_upgrade.blex:homebrew.discordant_stars/vector_2",
    move: 3,
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.pustule",
    triggerNsid: "card.leader.mech.blex:homebrew.discordant_stars/pustule",
  },
];

const unitModifiers = [];

console.log("DISCORDANT STARS ADDING BLEX");
world.TI4.homebrew.inject({
  localeStrings,
  factions,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
