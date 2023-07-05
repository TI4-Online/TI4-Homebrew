const { world } = require("@tabletop-playground/api");

const factions = [
  {
    faction: "ul",
    abilities: ["terragenesis", "awaken", "coalescence"],
    commodities: 2,
    home: 55,
    leaders: {
      agents: ["tellurian"],
      commanders: ["tungstantus"],
      heroes: ["ul_the_progenitor"],
    },
    promissoryNotes: ["terraform"],
    icon: "global/factions/ul_icon.png",
    source: "pok",
    startingTech: ["scanlink_drone_network"],
    startingUnits: {
      cruiser: 2,
      dreadnought: 1,
      fighter: 2,
      infantry: 3,
      space_dock: 1,
    },
    techs: [],
    units: [
      "ouranos",
      "saturn_engine",
      "saturn_engine_2",
      "heltitan",
      "heltitan_2",
      "hecatoncheires",
    ],
    unpackExtra: [
      {
        tokenNsid: "token.ul:pok/sleeper",
        tokenCount: 5,
      },
      {
        tokenNsid: "token.attachment.ul:pok/geoform",
      },
      {
        tokenNsid: "token.attachment.ul:pok/terraform",
      },
    ],
  },
];

const nsidToTemplateId = {
  "sheet.faction:base/ul": "3D86BA5DC85F49FC94D01AD27BB13403",
};

world.TI4.homebrew.inject({
  factions,
  nsidToTemplateId,
});
