const { world, refPackageId } = require("@tabletop-playground/api");

const factions = [{
  faction: "l1z1x",
  abilities: ["assimilate", "harrow"],
  commodities: 2,
  home: 6,
  leaders: {
      agents: ["i48s"],
      commanders: ["2ram"],
      heroes: ["the_helmsman"],
  },
  promissoryNotes: ["cybernetic_enhancements"],
  icon: "global/factions/l1z1x_icon.png",
  source: "base",
  startingTech: ["neural_motivator", "plasma_scoring"],
  startingUnits: {
      carrier: 1,
      dreadnought: 1,
      fighter: 3,
      infantry: 4,
      space_dock: 1,
  },
  techs: ["inheritance_systems"],
  units: ["001", "superdreadnought", "superdreadnought_2", "annihilator"],
}];

 const nsidToTemplateId = {
    "sheet.faction:base/l1z1x":
      "9D043C50455F0440EC81BCB0309DCE50",
};

const replace = {
  "card.technology.yellow.l1z1x:base/inheritance_systems" : "card.technology.yellow.l1z1x:homebrew.miltymod/inheritance_systems",
  "card.promissory.l1z1x:codex.ordinian/cybernetic_enhancements.omega" : "card.promissory.l1z1x:homebrew.miltymod/cybernetic_enhancements",
  "card.promissory.l1z1x:base/cybernetic_enhancements" : "card.promissory.l1z1x:homebrew.miltymod/cybernetic_enhancements",
  "card.technology.unit_upgrade.l1z1x:base/super_dreadnought_2" : "card.technology.unit_upgrade.l1z1x:homebrew.miltymod/super_dreadnought_2"
};

const technologies = [{
    localeName: "technology.name.inheritance_systems",
    cardNsid:
        "card.technology.green.l1z1x:homebrew.miltymod/inheritance_systems",
    type: "Yellow",
    requirements: { Yellow: 1 },
    source: "homebrew.miltymod",
    faction: "l1z1x"
  },
];

const unitAttrs = [
  {
    unit: "dreadnought",
    upgradeLevel: 2,
    localeName: "unit.dreadnought.super_dreadnought_2",
    triggerNsid:
        "card.technology.unit_upgrade.l1z1x:homebrew.miltymod/superdreadnought_2",
    bombardment: { dice: 1, hit: 3 },
    spaceCombat: { hit: 3 },
    move: 2,
    capacity: 2,
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
