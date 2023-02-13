const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.nivyn": "Nivyn",
  "faction.full.nivyn": "The Nivyn Star Kings",
  "planet.ellas": "ellas",
  "technology.name.voidwake_missiles": "Voidwake Missiles",
  "unit.flagship.eradica": "Eradica",
  "unit.mech.voidflare_warden": "Voidflare Warden",
  "unit.mech.voidflare_warden_2": "Voidflare Warden 2",
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
    heroes: ["krill_drakkon"],
  },
  promissoryNotes: ["nivyn_guidance"],
  icon: "discordant-stars/faction-icons/nivyn.png",
  source: "homebrew.discordant_stars",
  startingTech: ["dark_energy_tap", "plasma_scoring"],
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
  packageId: refPackageId,
}];

 const nsidToTemplateId = {
    "sheet.faction:homebrew.discordant_stars/nivyn":
      "65CEF4BC4F8B87C1BA2B3FB93F94BC2D",
    "tile.system:homebrew.discordant_stars/3220":
      "FB1B4ACEA6C840DDBB341E553419F7C7",
    "token.command:homebrew.discordant_stars/nivyn":
      "50AC87214A1A4B687DB454ACF7ED9C7F",
    "token.control:homebrew.discordant_stars/nivyn":
      "14D5EDF64A2C018BF1FEF584CADEA72F",
    "token.system:homebrew.discordant_stars.wound/nivyn":
      "1D1C59194A9083D738A34C8D4AF48167",
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
    localeName: "unit.mech.voidflare_warden_2",
    cardNsid: "card.technology.unit_upgrade.nivyn:homebrew.discordant_stars/voidflare_warden_2",
    type: "unitUpgrade",
    requirements: { Red: 1, Yellow: 1, Blue: 1 },
    abbrev: " VW II",
    faction: "nivyn",
    unitPosition: 7,
  },
];

const systems = [
  {
    tile: 3220,
    source: "homebrew.discordant_stars",
    home: true,
    packageId: refPackageId,
    img: "discordant-stars/tiles/homeworld/tile_3220.jpg",
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
    groundCombat: { dice: 1, hit: 5 },
  },
  {
    unit: "mech",
    upgradeLevel: 2,
    localeName: "unit.mech.voidflare_warden_2",
    triggerNsid: "card.technology.unit_upgrade.nivyn:homebrew.discordant_stars/voidflare_warden_2",
    groundCombat: { dice: 1, hit: 4 },
  },
];

const unitModifiers = [];

console.log("DISCORDANT STARS ADDING NIVYN");
world.TI4.homebrew.inject({
  localeStrings,
  factions,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
