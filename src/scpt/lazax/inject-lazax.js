const { world, refPackageId } = require("@tabletop-playground/api");

const nsidToTemplateId = {
  "sheet.faction:homebrew.scpt.lazax/lazax": "",
  "token.command:homebrew.scpt.lazax/lazax": "",
  "token.control:homebrew.scpt.lazax/lazax": "",
  "tile.system:homebrew.scpt.lazax/997": "",
  "card.leader:homebrew.scpt.lazax/0": "",
  "card.planet:homebrew.scpt.lazax/0": "",
  "card.promissory:homebrew.scpt.lazax/0": "",
  "card.technology:homebrew.scpt.lazax/0": "",
};

const localeStrings = {
  "faction.abbr.lazax": "Lazax",
  "faction.full.lazax": "The Lazax",
  "planet.x": "X",
  "technology.name.x": "x",
  "technology.name.x2": "x",
  "unit.flagship.lazax_flagship_name": "x",
  "unit.mech.lazax_mech_name": "x",
};

const factions = [
  {
    faction: "lazax",
    abilities: ["political_capital"],
    commodities: 5,
    home: 997,
    icon: "scpt/lazax/lazax-faction-icon.png",
    leaders: {
      agents: ["lazax_agent_name"],
      commanders: ["lazax_commander_name"],
      heroes: ["lazax_hero_name"],
    },
    packageId: refPackageId,
    promissoryNotes: ["lazax_ontology"],
    source: "homebrew.scpt.lazax",
    startingTech: ["fleet_logistics"],
    startingUnits: {
      carrier: 1,
      cruiser: 2,
      fighter: 2,
      infantry: 5,
      space_dock: 1,
    },
    techs: ["x", "x"],
    units: [
      "lazax_flagship_name",
      "lazax_mech_name",
      "lazax_battlecruiser",
      "lazax_battlecruiser_2",
    ],
    unpackExtra: [],
  },
];

const systems = [
  {
    tile: 997,
    source: "homebrew.scpt.lazax",
    home: true,
    packageId: refPackageId,
    img: "scpt/lazax/system-tile.jpg",
    planets: [{ localeName: "planet.x", resources: 2, influence: 4 }],
  },
];

const technologies = [
  {
    localeName: "technology.name.x",
    cardNsid:
      "card.technology.green.king_in_yellow:homebrew.king_in_yellow/leroy_engine",
    type: "Green",
    requirements: { Green: 1 },
    source: "homebrew.king_in_yellow",
    faction: "king_in_yellow",
  },
  {
    localeName: "technology.name.entropic_escapement",
    cardNsid:
      "card.technology.green.king_in_yellow:homebrew.king_in_yellow/entropic_escapement",
    type: "Green",
    requirements: { Green: 2 },
    source: "homebrew.king_in_yellow",
    faction: "king_in_yellow",
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.lazax_flagship_name",
    move: 1,
    capacity: 3,
    spaceCombat: { dice: 2, hit: 5 },
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.lazax_mech_name",
    triggerNsid: "card.leader.mech.lazax:homebrew.scpt.lazax/lazax_mech_name",
  },
  {
    unit: "cruiser",
    upgradeLevel: 1,
    localeName: "unit.cruiser.lazax_battlecruiser",
    bombardment: { dice: 1, hit: 6 },
    spaceCombat: { dice: 1, hit: 6 },
  },
  {
    unit: "cruiser",
    upgradeLevel: 2,
    localeName: "unit.cruiser.lazax_battlecruiser_2",
    triggerNsid:
      "card.technology.unit_upgrade.lazax:homebrew.scpt.lazax/lazax_battlecruiser_2",
    bombardment: { dice: 2, hit: 6 },
    spaceCombat: { dice: 2, hit: 6 },
    move: 3,
    capacity: 0,
  },
];

const unitModifiers = [];

world.TI4.homebrew.inject({
  localeStrings,
  factions,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});

console.log("loaded scpt/lazax");
