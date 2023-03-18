const { world } = require("@tabletop-playground/api");

const factions = [    {
  faction: "xxcha",
  abilities: ["peace_accords", "quash"],
  commodities: 4,
  home: 14,
  leaders: {
      agents: ["ggrocuto_rinn"],
      commanders: ["elder_qanoj"],
      heroes: ["xxekir_grom"],
  },
  promissoryNotes: ["political_favor"],
  icon: "global/factions/xxcha_icon.png",
  source: "base",
  startingTech: ["graviton_laser_system"],
  startingUnits: {
      carrier: 1,
      cruiser: 2,
      fighter: 3,
      infantry: 4,
      pds: 1,
      space_dock: 1,
  },
  techs: ["instinct_training", "nullification_field"],
  units: ["loncara_ssodu", "indomitus"],
}];

 const nsidToTemplateId = {
    "sheet.faction:base/xxcha":
      "06E21F984DEAF90DDDDB7088048F910A",
};

const replace = {
  "card.technology.green.xxcha:base/instinct_training" : "card.technology.green.xxcha:homebrew.miltymod/instinct_training",
  "card.promissory.xxcha:base/political_favor" : "card.promissory.xxcha:homebrew.miltymod/political_favor",
  "sheet.faction:base/xxcha" : "sheet.faction:homebrew.miltymod/xxcha",
};

const technologies = [{
    localeName: "technology.name.instinct_training",
    cardNsid:
        "card.technology.green.xxcha:homebrew.miltymod/instinct_training",
    type: "Green",
    requirements: { Green: 1 },
    source: "homebrew.miltymod",
    faction: "xxcha"
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
