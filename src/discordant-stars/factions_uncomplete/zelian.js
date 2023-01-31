const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.zelian": "Zelian",
  "faction.full.zelian": "The Zelian Purifier",
  "planet.zelian": "Zelian",
  "planet.gen": "Gen",
  "technology.name.shard_volley": "Shard Volley",
  "unit.flagship.world-cracker": "World Cracker",
  "unit.mech.collider": "Collider",
};


const factions = [{
  faction: "zelian",
  abilities: [
    "obsessive_designs",
    "biophobic",
    "paranoia",
  ],
  commodities: 3,
  home: 3215,
  leaders: {
    agents: ["zelian_a"],
    commanders: ["zelian_b"],
    heroes: ["zelian_r"],
  },
  promissoryNotes: ["hyperkinetic_ordinance"],
  icon: "discordant-stars/faction-icons/zelian.jpg",
  source: "homebrew.discordant_stars",
  startingTech: ["anti-mass_deflectors, ai_development_algorithm"],
  startingUnits: {
    dreadnought: 1,
    carrier: 1,
    destroyer: 1,
    fighter: 1,
    infantry: 5,
    space_dock: 1,
    pds: 1,
  },
  techs: ["shard_volley"],
  units: [
    "world-cracker",
    "impactor",
    "impactor_2",
    "collider",
  ],
  unpackExtra: [
    {
      tokenNsid: "tile.system:homebrew.discordant-stars.zelian/cataclysm",
    },
  ],
  packageId: refPackageId,
}];

 const nsidToTemplateId = {
    "sheet.faction:homebrew.discordant_stars/zelian":
      "B9A41EE64A7B15AE07DC3BBA470789EB",
    "tile.system:homebrew.discordant_stars/3215":
      "0D10F9991C184DBA89140C252A343BD3",
    "token.command:homebrew.discordant_stars/zelian":
      "65B38E384BE799411C63FB844FBE9CB8",
    "token.control:homebrew.discordant_stars/zelian":
      "ABAF21054A0DE613B202F5BFDF01A960",
    "tile.system:homebrew.discordant-stars.zelian/cataclysm":
      "CFB133FD79F5450AAEED1281FCB25D26",
};

const technologies = [{
    localeName: "technology.name.shard_volley",
    cardNsid:
      "card.technology.red.zelian:homebrew.discordant_stars/shard_volley",
    type: "Red",
    requirements: { Red: 1 },
    source: "homebrew.discordant_stars",
    faction: "zelian",
  }, {
    localeName: "unit.impactor_2",
    cardNsid: "card.technology.unit_upgrade.zelian:homebrew.discordant_stars/impactor_2",
    type: "unitUpgrade",
    requirements: { Green: 2 },
    abbrev: " IM II",
    faction: "zelian",
    unitPosition: 0,
  },
];

const systems = [
  {
    tile: 3215,
    source: "homebrew.discordant_stars",
    home: true,
    planets: [
      { localeName: "planet.zelian", resources: 3, influence: 3 },
      { localeName: "planet.gen", resources: 2, influence: 0 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.world-cracker",
    triggerNsid:
      "card.technology.unit_upgrade.zelian:franken.discordant_stars/world-cracker",
    spaceCombat: { dice: 1, hit: 5 },
    antiFighterBarrage: { dice: 1, hit: 5 },
    bombardment: { dice: 1, hit: 5 },
  },
  {
    unit: "infantry",
    upgradeLevel: 1,
    localeName: "unit.infantry.impactor",
    triggerNsid: "card.technology.unit_upgrade.zelian:franken.discordant_stars/impactor",
    bombardment: { dice: 1, hit: 8 },
  },
  {
    unit: "infantry",
    upgradeLevel: 2,
    localeName: "unit.infantry.impactor_2",
    triggerNsid: "card.technology.unit_upgrade.zelian:homebrew.discordant_stars/impactor_2",
    bombardment: { dice: 1, hit: 7 },
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.collider",
    triggerNsid: "card.leader.mech.zelian:homebrew.discordant_stars/collider",
  },
];

const unitModifiers = [];

console.log("DISCORDANT STARS ADDING ZELIAN");
world.TI4.homebrew.inject({
  localeStrings,
  factions,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
