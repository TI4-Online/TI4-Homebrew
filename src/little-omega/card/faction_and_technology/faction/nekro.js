const { world } = require("@tabletop-playground/api");

const factions = [
  {
    faction: "nekro",
    abilities: ["galactic_threat", "technological_singularity", "propagation"],
    commodities: 3,
    home: 8,
    leaders: {
      agents: ["nekro_malleon"],
      commanders: ["nekro_acidos"],
      heroes: ["unitdsgnflayesh"],
    },
    promissoryNotes: ["oracle_system"],
    icon: "global/factions/nekro_icon.png",
    source: "base",
    startingTech: [
      "dacxive_animators",
      "valefar_assimilator_x",
      "valefar_assimilator_y",
    ],
    startingUnits: {
      carrier: 1,
      dreadnought: 1,
      fighter: 3,
      infantry: 2,
      space_dock: 1,
    },
    techs: ["valefar_assimilator_x", "valefar_assimilator_y"],
    units: ["the_alastor", "mordred"],
    unpackExtra: [
      {
        tokenNsid: "token.nekro:base/valefar_assimilator_x",
      },
      {
        tokenNsid: "token.nekro:base/valefar_assimilator_y",
      },
      {
        tokenNsid: "token.nekro:pok/dimensional_tear",
        tokenCount: 3,
      },
    ],
  },
];

const nsidToTemplateId = {
  "sheet.faction:base/nekro": "1479ED7CA70E45E6A459D5CA159348CF",
};

const replace = {
  "card.promissory.nekro:base/antivirus":
    "card.promissory.nekro:homebrew.little-omega/oracle_system",
  "card.leader.agent.nekro:pok/nekro_malleon":
    "card.leader.agent.nekro:homebrew.little-omega/nekro_malleon",
};

world.TI4.homebrew.inject({
  factions,
  nsidToTemplateId,
  replace,
});
