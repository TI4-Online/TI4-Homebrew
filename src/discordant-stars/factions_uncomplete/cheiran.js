const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.cheiran": "FACT",
  "faction.full.cheiran": "FACTION",
  "planet.PLANETID": "PLANET",
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
  source: "discordant_stars",
  startingTech: ["magen_defense_grid", "self_assembly_routines"],
  startingUnits: {
    carrier: 1,
    destroyer: 2,
    fighter: 3,
    infantry: 3,
    pds: 1,
    spacedock: 1,
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
    localeName: "technology.name.encrypted_trade_hub",
    cardNsid:
        "card.technology.yellow.cheiran:homebrew.discordant_stars/encrypted_trade_hub",
    type: "Yellow",
    requirements: { Yellow: 2 },
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
        { localeName: "planet.PLANET", resources: 2, influence: 1 },
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
