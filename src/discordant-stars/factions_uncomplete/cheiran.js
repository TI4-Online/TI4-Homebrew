const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.cheiran": "Cheiran",
  "faction.full.cheiran": "The Cheiran Hordes",
  "planet.arche": "Arche",
  "planet.gghurntheta": "Gghurn Theta",
  "technology.name.brood_podbrood_pod": "Brood PodBrood Pod",
  "unit.flagship.lithodax": "lithodax",
  "unit.mech.nauplius": "nauplius",
};


const factions = [{
  faction: "cheiran",
  abilities: [
    "teeming",
    "moult",
    "byssus",
  ],
  commodities: 3,
  home: 3234,
  leaders: {
    agents: ["operator_kkavras"],
    commanders: ["spc_Phquaiset"],
    heroes: ["thakt_clqua"],
  },
  promissoryNotes: ["carcinisation"],
  promissoryNotes: ["secrets_of_the_weave"],
  //icon: "discordant-stars/faction-icons/cheiran.png",
  source: "discordant_stars",
  startingTech: ["magen_defense_grid", "self_assembly_routines"],
  startingUnits: {
    carrier: 1,
    destroyer: 2,
    fighter: 3,
    infantry: 3,
    pds: 1,
    space_dock: 1,
  },
  techs: ["brood_pod"],
  units: ["lithodax", "chitin_hulk", "chitin_hulk_2", "nauplius"],
  packageId: refPackageId,
  unpackExtra: [
    {
      tokenNsid: "token.attachment:homebrew.discordant-stars.dreadnought/cheiran",
      tokenCount: 2,
    },
    {
      tokenNsid: "token.attachment:homebrew.discordant-stars.mech/cheiran",
    },
  ],
}];

 const nsidToTemplateId = {
    "sheet.faction:homebrew.discordant_stars/cheiran":
      "XXXXXXX",
    "tile.system:homebrew.discordant_stars/3234":
      "XXXXXXX",
    "token.command:homebrew.discordant_stars/cheiran":
      "XXXXXXX",
    "token.control:homebrew.discordant_stars/cheiran":
      "XXXXXXX",
   "token.attachment:homebrew.discordant-stars.dreadnought/cheiran":
      "XXXXXXX",
   "token.attachment:homebrew.discordant-stars.mech/cheiran":
      "XXXXXXX",
};

const technologies = [{
    localeName: "technology.name.brood_pod",
    cardNsid:
      "card.technology.red.cheiran:homebrew.discordant_stars/brood_pod",
    type: "Red",
    requirements: { Red: 2 },
    source: "homebrew.discordant_stars",
    faction: "cheiran",
  }, {
    localeName: "unit.chitin_hulk_2",
    cardNsid: "card.technology.unit_upgrade.cheiran:homebrew.discordant_stars/chitin_hulk_2",
    type: "unitUpgrade",
    requirements: { Blue: 2, Yellow: 1 },
    abbrev: " CH II",
    faction: "cheiran",
    unitPosition: 0,
  },
];

const systems = [
  {
    tile: 3234,
    source: "homebrew.discordant_stars",
    home: true,
    planets: [
      { localeName: "planet.arche", resources: 2, influence: 2 },
      { localeName: "planet.gghurntheta", resources: 2, influence: 1 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.lithodax",
    triggerNsid:
      "card.technology.unit_upgrade.cheiran:franken.discordant_stars/lithodax",
    antiFighterBarrage: { dice: 2, hit: 7 },
  },
  {
    unit: "dreadnought",
    upgradeLevel: 1,
    localeName: "unit.dreadnought.chitin_hulk",
    triggerNsid: "card.technology.unit_upgrade.cheiran:franken.discordant_stars/chitin_hulk",
  },
  {
    unit: "dreadnought",
    upgradeLevel: 2,
    localeName: "unit.dreadnought.chitin_hulk_2",
    triggerNsid: "card.technology.unit_upgrade.cheiran:homebrew.discordant_stars/chitin_hulk_2",
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.nauplius",
    triggerNsid: "card.leader.mech.cheiran:homebrew.discordant_stars/nauplius",
  },
];

const unitModifiers = [];

console.log("DISCORDANT STARS ADDING CHEIRAN");
world.TI4.homebrew.inject({
  localeStrings,
  factions,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
