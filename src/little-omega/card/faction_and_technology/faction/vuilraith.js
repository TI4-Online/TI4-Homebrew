const { world } = require("@tabletop-playground/api");

const factions = [
  {
    faction: "vuilraith",
    abilities: ["devour", "amalgamation", "riftmeld"],
    commodities: 2,
    home: 54,
    leaders: {
      agents: ["the_stillness_of_stars"],
      commanders: ["that_which_molds_flesh"],
      heroes: ["it_feeds_on_carrion"],
    },
    promissoryNotes: ["crucible"],
    icon: "global/factions/vuilraith_icon.png",
    source: "pok",
    startingTech: ["graviton_laser_system"],
    startingUnits: {
      carrier: 1,
      cruiser: 1,
      dreadnought: 1,
      fighter: 3,
      infantry: 3,
      space_dock: 1,
    },
    techs: ["vortex"],
    units: [
      "the_terror_between",
      "dimensional_tear",
      "dimensional_tear_2",
      "reanimator",
    ],
    unpackExtra: [
      {
        tokenNsid: "token.vuilraith:pok/dimensional_tear",
        tokenCount: 3,
      },
    ],
  },
];

const nsidToTemplateId = {
  "sheet.faction:pok/vuilraith": "CFA1A1EE72B7459CB5A94E1B0F80D495",
};

const replace = {
  "card.promissory.vuilraith:pok/crucible":
    "card.promissory.vuilraith:homebrew.little-omega/crucible",
  "card.technology.unit_upgrade.vuilraith:pok/dimensional_tear_2":
    "card.technology.unit_upgrade.vuilraith:homebrew.little-omega/dimensional_tear_2",
  "card.leader.hero.vuilraith:pok/it_feeds_on_carrion":
    "card.leader.hero.vuilraith:homebrew.little-omega/it_feeds_on_carrion",
};

const technologies = [
  {
    localeName: "unit.space_dock.dimensional_tear_2",
    cardNsid:
      "card.technology.unit_upgrade.vuilraith:homebrew.little-omega/dimensional_tear_2",
    type: "unitUpgrade",
    requirements: {
      Yellow: 2,
    },
    abbrev: "Dim Tear II",
    faction: "vuilraith",
    unitPosition: 11,
  },
];

const unitAttrs = [
  {
    unit: "space_dock",
    upgradeLevel: 2,
    localeName: "unit.space_dock.dimensional_tear_2",
    triggerNsid:
      "card.technology.unit_upgrade.vuilraith:homebrew.little-omega/dimensional_tear_2",
    production: 7,
  },
];

const unitModifiers = [];

world.TI4.homebrew.inject({
  factions,
  nsidToTemplateId,
  technologies,
  unitAttrs,
  unitModifiers,
  replace,
});
