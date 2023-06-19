const { world } = require("@tabletop-playground/api");

const factions = [
  {
    faction: "yin",
    abilities: ["indoctrination", "devotion"],
    commodities: 2,
    home: 3,
    leaders: {
      agents: ["brother_milor"],
      commanders: ["brother_omar"],
      heroes: ["dannel_of_the_tenth"],
    },
    promissoryNotes: ["greyfire_mutagen"],
    icon: "global/factions/yin_icon.png",
    source: "base",
    startingTech: ["sarween_tools"],
    startingUnits: {
      carrier: 2,
      destroyer: 1,
      fighter: 3,
      infantry: 5,
      space_dock: 1,
    },
    techs: ["yin_spinner", "impulse_core"],
    units: ["van_hauge", "moyins_ashes"],
  },
];

const nsidToTemplateId = {
  "sheet.faction:base/yin": "443E6D944A8EEF39E616C5977A9B453C",
};

const replace = {
  "card.technology.yellow.yin:base/impulse_core":
    "card.technology.yellow.yin:homebrew.miltymod/impulse_core",
  "card.technology.green.yin:base/yin_spinner":
    "card.technology.green.yin:homebrew.miltymod/yin_spinner",
  "card.technology.green.yin:codex.ordinian/yin_spinner.omega":
    "card.technology.green.yin:homebrew.miltymod/yin_spinner",
  "card.promissory.yin:base/greyfire_mutagen":
    "card.promissory.yin:homebrew.miltymod/greyfire_mutagen",
  "card.promissory.yin:codex.ordinian/greyfire_mutagen.omega":
    "card.promissory.yin:homebrew.miltymod/greyfire_mutagen",
  "sheet.faction:base/yin": "sheet.faction:homebrew.miltymod/yin",
};

const technologies = [
  {
    localeName: "technology.name.impulse_core",
    cardNsid: "card.technology.yellow.yin:homebrew.miltymod/impulse_core",
    type: "Yellow",
    requirements: { Yellow: 1 },
    source: "homebrew.miltymod",
    faction: "yin",
  },
  {
    localeName: "technology.name.yin_spinner",
    cardNsid: "card.technology.yellow.yin:homebrew.miltymod/yin_spinner",
    type: "Green",
    requirements: { Green: 1 },
    source: "homebrew.miltymod",
    faction: "yin",
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
