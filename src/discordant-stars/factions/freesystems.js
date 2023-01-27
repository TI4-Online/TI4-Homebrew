const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.freesystems": "Free Systems",
  "faction.full.freesystems": "The Free Systems Compact",
  "planet.cyrra": "Cyrra",
  "planet.kroll": "Kroll",
  "planet.idyn": "Idyn",
  "technology.name.envoy_network": "Envoy Network",
  "technology.name.covert_strike_teams": "Covert Strike Teams",
  "unit.flagship.vox": "Vox",
  "unit.mech.liberator": "Liberator",
};

const factions = [{
  faction: "freesystems",
  abilities: [
    "rally_to_the_cause",
    "diplomats",
    "free_people",
  ],
  commodities: 3,
  home: 3202,
  leaders: {
    agents: ["cordo_haved"],
    commanders: ["president_cyhn"],
    heroes: ["count_otto_pmay"],
  },
  promissoryNotes: [],
  icon: "discordant-stars/faction-icons/freesystems.png",
  source: "homebrew.discordant_stars",
  startingTech: ["psychoarchaeology"],
  startingUnits: {
    carrier: 1,
    cruiser: 2,
    fighter: 2,
    infantry: 4,
    pds: 1,
    space_dock: 1,
  },
  techs: ["envoy_network", "covert_strike_teams"],
  units: [
    "vox",
    "liberator",
  ],
  unpackExtra: [
    {
      tokenNsid: "token.attachment:homebrew.discordant-stars.heart_of_rebellion/freesystems",
      tokenCount: 0,
    },
  ],
  packageId: refPackageId,
}];

 const nsidToTemplateId = {
    "sheet.faction:homebrew.discordant_stars/freesystems":
      "9B6DD5614B3AAB4C0BBCEFA2A4F0C374",
    "tile.system:homebrew.discordant_stars/3202":
      "71C6CF8E8326420B9B72B5BD0329A173",
    "token.command:homebrew.discordant_stars/freesystems":
      "XXXXXXX",
    "token.control:homebrew.discordant_stars/freesystems":
      "XXXXXXX",
};

const technologies = [{
  localeName: "technology.name.envoy_network",
  cardNsid:
      "card.technology.green.freesystems:homebrew.discordant_stars/envoy_network",
  type: "Green",
  requirements: { Green: 1 },
  source: "homebrew.discordant_stars",
  faction: "freesystems",
},{
  localeName: "technology.name.covert_strike_teams",
  cardNsid:
      "card.technology.yellow.freesystems:homebrew.discordant_stars/covert_strike_teams",
  type: "Yellow",
  requirements: { Yellow: 2 },
  source: "homebrew.discordant_stars",
  faction: "covert_strike_teams",
},
];

const systems = [
  {
    tile: 3202,
    source: "homebrew.discordant_stars",
    home: true,
    planets: [
      { localeName: "planet.kroll", resources: 1, influence: 1 },
      { localeName: "planet.cyrra", resources: 0, influence: 1 },
      { localeName: "planet.idyn", resources: 1, influence: 0 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.vox",
    triggerNsid:
      "card.technology.unit_upgrade.freesystems:franken.discordant_stars/vox",
    spaceCombat: { dice: 2, hit: 7 },
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.liberator",
    triggerNsid: "card.leader.mech.freesystems:homebrew.discordant_stars/liberator",
  },
];

const unitModifiers = [];

console.log("DISCORDANT STARS ADDING FREESYSTEMS");
world.TI4.homebrew.inject({
  localeStrings,
  factions,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
