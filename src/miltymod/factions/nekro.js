const { world } = require("@tabletop-playground/api");

const factions = [{
  faction: "nekro",
  abilities: [
      "galactic_threat",
      "technological_singularity",
      "propagation",
  ],
  commodities: 3,
  home: 8,
  leaders: {
      agents: ["nekro_malleon"],
      commanders: ["nekro_acidos"],
      heroes: ["unitdsgnflayesh"],
  },
  promissoryNotes: ["antivirus"],
  icon: "global/factions/nekro_icon.png",
  source: "base",
  startingTech: [
      "dacxive_animators",
      "valefar_assimilator_x",
      "valefar_assimilator_y",
  ],
  startingUnits: {
      carrier: 1,
      cruiser: 1,
      dreadnought: 1,
      fighter: 2,
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
}];

 const nsidToTemplateId = {
    "sheet.faction:base/nekro":
      "FC8A6B63434CD1BF5E43F6B7C42DDFD8",
};

const replace = {
  "card.promissory.nekro:base/antivirus" : "card.promissory.nekro:homebrew.miltymod/antivirus",
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
