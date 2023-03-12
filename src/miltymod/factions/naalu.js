const { world, refPackageId } = require("@tabletop-playground/api");

const factions = [{
  faction: "naalu",
  abilities: ["telepathic", "foresight"],
  commodities: 3,
  home: 9,
  leaders: {
      agents: ["zeu"],
      commanders: ["maban"],
      heroes: ["the_oracle"],
  },
  promissoryNotes: ["gift_of_prescience"],
  icon: "global/factions/naalu_icon.png",
  source: "base",
  startingTech: ["neural_motivator", "sarween_tools"],
  startingUnits: {
      carrier: 1,
      cruiser: 1,
      destroyer: 1,
      fighter: 3,
      infantry: 4,
      pds: 1,
      space_dock: 1,
  },
  techs: ["neuroglaive"],
  units: [
      "matriarch",
      "hybrid_crystal_fighter",
      "hybrid_crystal_fighter_2",
      "iconoclast",
  ],
  unpackExtra: [
      {
          tokenNsid: "token.naalu:base/zero",
      },
  ],
}];

 const nsidToTemplateId = {
    "sheet.faction:base/naalu":
      "284DB8C74A15AC9384D25FB401326C4A",
};

const replace = {
  "card.technology.unit_upgrade.naalu:base/hybrid_crystal_fighter_2" : "card.technology.unit_upgrade.naalu:homebrew.miltymod/hybrid_crystal_fighter_2"
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
