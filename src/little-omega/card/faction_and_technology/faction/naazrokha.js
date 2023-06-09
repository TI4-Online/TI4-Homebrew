const { world } = require("@tabletop-playground/api");

const factions = [
  {
    faction: "naazrokha",
    abilities: ["distant_suns", "fabrication"],
    commodities: 3,
    home: 57,
    leaders: {
      agents: ["garv_and_gunn"],
      commanders: ["dart_and_tai"],
      heroes: ["hesh_and_prit"],
    },
    promissoryNotes: ["black_market_forgery"],
    icon: "global/factions/naazrokha_icon.png",
    source: "pok",
    startingTech: ["psychoarchaeology", "ai_development_algorithm"],
    startingUnits: {
      carrier: 2,
      destroyer: 1,
      fighter: 2,
      infantry: 3,
      mech: 1,
      space_dock: 1,
    },
    techs: ["supercharge", "prefab_arcologies"],
    units: ["visz_el_vir", "eidolon"],
  },
];

const nsidToTemplateId = {
  "sheet.faction:pok/naazrokha": "640B216AF4454BB3B347D89A12C0A76E",
};

const replace = {
  "card.technology.red.naazrokha:pok/supercharge":
    "card.technology.red.naazrokha:homebrew.little-omega/supercharge",
};

const technologies = [
  {
    localeName: "technology.name.supercharge",
    cardNsid: "card.technology.red.naazrokha:homebrew.little-omega/supercharge",
    type: "Red",
    requirements: {
      Red: 1,
    },
    abbrev: "Supercharge",
    faction: "naazrokha",
    source: "PoK",
  },
];

world.TI4.homebrew.inject({
  factions,
  nsidToTemplateId,
  technologies,
  replace,
});
