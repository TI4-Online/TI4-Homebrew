const { world } = require("@tabletop-playground/api");

const factions = [{
  faction: "sol",
  abilities: ["orbital_drop", "versatile"],
  commodities: 4,
  home: 1,
  leaders: {
      agents: ["evelyn_delouis"],
      commanders: ["claire_gibson"],
      heroes: ["jace_x_4th_air_legion"],
  },
  promissoryNotes: ["military_support"],
  icon: "global/factions/sol_icon.png",
  source: "base",
  startingTech: ["antimass_deflectors", "neural_motivator"],
  startingUnits: {
      carrier: 2,
      fighter: 3,
      infantry: 5,
      space_dock: 1,
  },
  techs: [],
  units: [
      "genesis",
      "advanced_carrier",
      "advanced_carrier_2",
      "spec_ops",
      "spec_ops_2",
      "zs_thunderbolt_m2",
  ],
}];

 const nsidToTemplateId = {
    "sheet.faction:base/sol":
      "1868372F4EC0B6B56F00519EE7196A7E",
};

const replace = {
  "card.promissory.sol:base/military_support" : "card.promissory.sol:homebrew.miltymod/military_support",
  "sheet.faction:base/sol" : "sheet.faction:homebrew.miltymod/sol",
  "card.technology.unit_upgrade.sol:base/advanced_carrier_2" : "card.technology.unit_upgrade.sol:homebrew.miltymod/advanced_carrier_2",
  "card.technology.unit_upgrade.sol:base/spec_ops_2" : "card.technology.unit_upgrade.sol:homebrew.miltymod/spec_ops_2"
};

const technologies = [];

const unitAttrs = [];

const unitModifiers = [];

world.TI4.homebrew.inject({
  factions,
  nsidToTemplateId,
  technologies,
  unitAttrs,
  unitModifiers,
  replace,
});
