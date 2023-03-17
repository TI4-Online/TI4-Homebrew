const { world } = require("@tabletop-playground/api");

const factions = [{
  faction: "mentak",
  abilities: ["ambush", "pillage"],
  commodities: 2,
  home: 2,
  leaders: {
      agents: ["suffi_an"],
      commanders: ["sula_mentarion"],
      heroes: ["ipswitch_loose_cannon"],
  },
  promissoryNotes: ["promise_of_protection"],
  icon: "global/factions/mentak_icon.png",
  source: "base",
  startingTech: ["sarween_tools", "plasma_scoring"],
  startingUnits: {
      carrier: 1,
      cruiser: 2,
      fighter: 3,
      infantry: 4,
      pds: 1,
      space_dock: 1,
  },
  techs: ["mirror_computing", "salvage_operations"],
  units: ["fourth_moon", "moll_terminus"],
}];

 const nsidToTemplateId = {
    "sheet.faction:base/mentak":
      "7D8C064D476D619034D519A0701274C7",
};

const replace = {};

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
