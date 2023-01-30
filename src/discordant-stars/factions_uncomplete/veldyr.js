const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.veldyr": "Veldyr",
  "faction.full.veldyr": "The Veldyr Sovereignty",
  "planet.rhune": "Rhune",
  "technology.name.seidr_project": "Seidr Project",
  "unit.flagship.richtyrian": "Richtyrian",
  "unit.mech.aurora_stormcaller": "Aurora Stormcaller",
};


const factions = [{
  faction: "veldyr",
  abilities: [
    "corporate_entity",
    "holding_company",
    "targeted_acquisition",
  ],
  commodities: 4,
  home: 3201,
  leaders: {
    agents: ["solis_morden"],
    commanders: ["vera_khage"],
    heroes: ["auberon_elyrin"],
  },
  promissoryNotes: ["branch_office-tax_haven", "branch_office-broadcast_hub", "branch_office-reserve_bank", "branch_office-orbital_shipyard"],
  //icon: "discordant-stars/faction-icons/veldyr.png",
  source: "homebrew.discordant_stars",
  startingTech: ["dark_energy_tap", "ai_development_algorithm"],
  startingUnits: {
    dreadnought: 1,
    carrier: 1,
    destroyer: 1,
    fighter: 2,
    infantry: 4,
    space_dock: 1,
    pds: 1,
  },
  techs: ["seidr_project"],
  units: [
    "richtyrian",
    "lancer",
    "lancer_2",
    "aurora_stormcaller",
  ],
  unpackExtra: [
    {
      tokenNsid: "token.attachment:homebrew.discordant-stars.branch_office_influence/veldyr",
      tokenCount: 2,
    },{
      tokenNsid: "token.attachment:homebrew.discordant-stars.branch_office_resources/veldyr",
      tokenCount: 2,
    },
  ],
  packageId: refPackageId,
}];

 const nsidToTemplateId = {
    "sheet.faction:homebrew.discordant_stars/veldyr":
      "B1102612431EBBAC41599296DE4937D3",
    "tile.system:homebrew.discordant_stars/3201":
      "F1E6206B09454402B9A5E52B1934BAD6",
    "token.command:homebrew.discordant_stars/veldyr":
      "XXXXXXX",
    "token.control:homebrew.discordant_stars/veldyr":
      "XXXXXXX",
   "token.attachment:homebrew.discordant-stars.branch_office_influence/veldyr":
       "XXXXXXX",
   "token.attachment:homebrew.discordant-stars.branch_office_resources/veldyr":
       "XXXXXXX",
};

const technologies = [{
    localeName: "technology.name.seidr_project",
    cardNsid:
      "card.technology.red.veldyr:homebrew.discordant_stars/seidr_project",
    type: "Red",
    requirements: { Red: 2 },
    source: "homebrew.discordant_stars",
    faction: "veldyr",
  }, {
    localeName: "unit.lancer_2",
    cardNsid: "card.technology.unit_upgrade.veldyr:homebrew.discordant_stars/lancer_2",
    type: "unitUpgrade",
    requirements: { Blue: 2, Yellow: 1 },
    abbrev: " LD II",
    faction: "veldyr",
    unitPosition: 0,
  },
];

const systems = [
  {
    tile: 3201,
    source: "homebrew.discordant_stars",
    home: true,
    planets: [
        { localeName: "planet.rhune", resources: 3, influence: 4 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.richtyrian",
    triggerNsid:
      "card.technology.unit_upgrade.veldyr:franken.discordant_stars/richtyrian",
    spaceCombat: { dice: 2, hit: 7 },
  },
  {
    unit: "dreadnought",
    upgradeLevel: 1,
    localeName: "unit.dreadnought.lancer",
    triggerNsid: "card.technology.unit_upgrade.veldyr:franken.discordant_stars/lancer",
    spaceCannon: { dice: 1, hit: 8 },
  },
  {
    unit: "dreadnought",
    upgradeLevel: 2,
    localeName: "unit.dreadnought.lancer_2",
    triggerNsid: "card.technology.unit_upgrade.veldyr:homebrew.discordant_stars/lancer_2",
    spaceCannon: { dice: 1, hit: 5 },
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.aurora_stormcaller",
    triggerNsid: "card.leader.mech.veldyr:homebrew.discordant_stars/aurora_stormcaller",
  },
];

const unitModifiers = [];

console.log("DISCORDANT STARS ADDING VELDYR");
world.TI4.homebrew.inject({
  localeStrings,
  factions,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
