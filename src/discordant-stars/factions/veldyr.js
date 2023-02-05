const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.veldyr": "Veldyr",
  "faction.full.veldyr": "The Veldyr Sovereignty",
  "planet.rhune": "Rhune",
  "technology.name.seidr_project": "Seidr Project",
  "unit.dreadnought.lancer_dreadnought": "Lancer Dreadnought",
  "unit.dreadnought.lancer_dreadnought_2": "Lancer Dreadnought 2",
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
  promissoryNotes: ["branch_office_tax_haven", "branch_office_broadcast_hub", "branch_office_reserve_bank", "branch_office_orbital_shipyard"],
  icon: "discordant-stars/faction-icons/veldyr.png",
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
    "lancer_dreadnought",
    "lancer_dreadnought_2",
    "aurora_stormcaller",
  ],
  unpackExtra: [
    {
      tokenNsid: "token.attachment:homebrew.discordant_stars.branch_office_influence/veldyr",
      tokenCount: 2,
    },{
      tokenNsid: "token.attachment:homebrew.discordant_stars.branch_office_resources/veldyr",
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
      "F86B5FE44294E7B974A5F0B9B752EC2C",
    "token.control:homebrew.discordant_stars/veldyr":
      "4D68C5B6411D49C89B1C178ACAE19722",
   "token.attachment:homebrew.discordant_stars.branch_office_influence/veldyr":
       "9A6ED58D4B2121E04D9E4090AB9129A1",
   "token.attachment:homebrew.discordant_stars.branch_office_resources/veldyr":
       "BCB0EEF040954BA45C1074962C4681CB",
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
    localeName: "unit.dreadnought.lancer_dreadnought_2",
    cardNsid: "card.technology.unit_upgrade.veldyr:homebrew.discordant_stars/lancer_dreadnought_2",
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
    packageId: refPackageId,
    img: "discordant-stars/tiles/homeworld/tile_3201.jpg",
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
    localeName: "unit.dreadnought.lancer_dreadnought",
    triggerNsid: "card.technology.unit_upgrade.veldyr:franken.discordant_stars/lancer_dreadnought",
    spaceCannon: { dice: 1, hit: 8 },
  },
  {
    unit: "dreadnought",
    upgradeLevel: 2,
    localeName: "unit.dreadnought.lancer_dreadnought_2",
    triggerNsid: "card.technology.unit_upgrade.veldyr:homebrew.discordant_stars/lancer_dreadnought_2",
    move: 2,
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
