const { world, refPackageId } = require("@tabletop-playground/api");

const factions = [{
  source: "base",
  faction: "letnev",
  abilities: ["munitions_reserves", "armada"],
  commodities: 2,
  home: 10,
  leaders: {
      agents: ["viscount_unlenn"],
      commanders: ["rear_admiral_farran"],
      heroes: ["darktalon_treilla"],
  },
  promissoryNotes: ["war_funding"],
  icon: "global/factions/letnev_icon.png",
  startingTech: ["antimass_deflectors", "plasma_scoring"],
  startingUnits: {
      carrier: 1,
      destroyer: 1,
      dreadnought: 1,
      fighter: 1,
      infantry: 3,
      space_dock: 1,
  },
  techs: ["l4_disruptors", "noneuclidean_shielding"],
  units: ["arc_secundus", "dunlain_reaper"],
}];

 const nsidToTemplateId = {
    "sheet.faction:base/letnev":
      "3C3F37004A26ABDBDEBED09E7C23C9CC",
};

const replace = {
  "card.technology.yellow.letnev:base/l4_disruptors" : "card.technology.yellow.letnev:homebrew.miltymod/l4_disruptors",
  "card.promissory.letnev:codex.ordinian/war_funding.omega" : "card.promissory.letnev:homebrew.miltymod/war_funding",
  "card.promissory.letnev:base/war_funding" : "card.promissory.letnev:homebrew.miltymod/war_funding",
};

const technologies = [{
    localeName: "technology.name.l4_disruptors",
    cardNsid:
        "card.technology.yellow.letnev:homebrew.miltymod/l4_disruptors",
    type: "Yellow",
    requirements: { },
    source: "homebrew.miltymod",
    faction: "letnev"
  },
];

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
