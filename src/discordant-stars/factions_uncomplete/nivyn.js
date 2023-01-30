const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.nivyn": "Nivyn",
  "faction.full.nivyn": "The Nivyn Star Kings",
  "planet.ellas": "ellas",
  "technology.name.voidwake_missiles": "Voidwake Missiles",
  "unit.flagship.eradica": "Eradica",
  "unit.mech.voidflare_warden": "Voidflare Warden",
};


const factions = [{
  faction: "nivyn",
  abilities: [
    "celestial_guides",
    "singularity_point",
    "voidsailors",
  ],
  commodities: 3,
  home: 3220,
  leaders: {
    agents: ["suldhan_wraeg"],
    commanders: ["thussad_krath"],
    heroes: ["kwill_drakkon"],
  },
  promissoryNotes: ["nivyn_guidance"],
  //icon: "discordant-stars/faction-icons/nivyn.png",
  source: "homebrew.discordant_stars",
  startingUnits: {
    carrier: 1,
    cruiser: 1,
    dreadnought: 1,
    fighter: 3,
    infantry: 3,
    mech: 1,
    space_dock: 1,
  },
  techs: ["voidwake_missiles"],
  units: [
    "eradica",
    "voidflare_warden",
    "voidflare_warden_2",
  ],
  unpackExtra: [
    {
      tokenNsid: "token.system:homebrew.discordant-stars.wound/nivyn",
    },
  ],
  packageId: refPackageId,
}];

 const nsidToTemplateId = {
    "sheet.faction:homebrew.discordant_stars/nivyn":
      "65CEF4BC4F8B87C1BA2B3FB93F94BC2D",
    "tile.system:homebrew.discordant_stars/3220":
      "FB1B4ACEA6C840DDBB341E553419F7C7",
    "token.command:homebrew.discordant_stars/nivyn":
      "XXXXXXX",
    "token.control:homebrew.discordant_stars/nivyn":
      "XXXXXXX",
};

const technologies = [{
    localeName: "technology.name.voidwake_missiles",
    cardNsid:
        "card.technology.yellow.nivyn:homebrew.discordant_stars/voidwake_missiles",
    type: "Yellow",
    requirements: { Yellow: 1 },
    source: "homebrew.discordant_stars",
    faction: "nivyn",
  }, {
    localeName: "unit.voidflare_warden_2",
    cardNsid: "card.technology.unit_upgrade.nivyn:homebrew.discordant_stars/voidflare_warden_2",
    type: "unitUpgrade",
    requirements: { Red: 1, Yellow: 1, Blue: 1 },
    abbrev: " VW II",
    faction: "nivyn",
    unitPosition: 0,
  },
];

const systems = [
  {
    tile: 3220,
    source: "homebrew.discordant_stars",
    home: true,
    planets: [
        { localeName: "planet.ellas", resources: 3, influence: 3 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.eradica",
    triggerNsid:
      "card.technology.unit_upgrade.nivyn:franken.discordant_stars/eradica",
    spaceCombat: { dice: 2, hit: 5 },
    capacity: 6,
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.voidflare_warden",
    triggerNsid: "card.leader.mech.nivyn:homebrew.discordant_stars/voidflare_warden",
    combat: { dice: 1, hit: 5 },
  },
  {
    unit: "mech",
    upgradeLevel: 2,
    localeName: "unit.mech.voidflare_warden_2",
    triggerNsid: "card.technology.unit_upgrade.nivyn:homebrew.discordant_stars/voidflare_warden_2",
    combat: { dice: 1, hit: 4 },
  },
];

const unitModifiers = [];

console.log("DISCORDANT STARS ADDING FACTION");
world.TI4.homebrew.inject({
  localeStrings,
  factions,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
