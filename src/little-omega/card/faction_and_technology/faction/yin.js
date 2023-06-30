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
  "sheet.faction:base/yin": "6E52BBDF20BC43F58C3E7744C087BC69",
};

const replace = {
  "card.technology.yellow.yin:base/impulse_core":
    "card.technology.red.yin:homebrew.little-omega/impulse_core",
  "card.leader.agent.yin:pok/brother_milor":
    "card.leader.agent.yin:homebrew.little-omega/brother_milor",
  "card.leader.agent.yin:codex.vigil/brother_milor.omega":
    "card.leader.agent.yin:homebrew.little-omega/brother_milor",
  "card.leader.commander.yin:pok/brother_omar":
    "card.leader.commander.yin:homebrew.little-omega/brother_omar",
  "card.leader.commander.yin:codex.vigil/brother_omar.omega":
    "card.leader.commander.yin:homebrew.little-omega/brother_omar",
  "card.leader.hero.yin:pok/dannel_of_the_tenth":
    "card.leader.hero.yin:homebrew.little-omega/dannel_of_the_tenth",
  "card.leader.hero.yin:codex.vigil/dannel_of_the_tenth.omega":
    "card.leader.hero.yin:homebrew.little-omega/dannel_of_the_tenth",
  "card.alliance:pok/yin": "card.alliance:homebrew.little-omega/yin",
  "card.alliance:codex.vigil/yin.omega":
    "card.alliance:homebrew.little-omega/yin",
};

const technologies = [
  {
    localeName: "technology.name.impulse_core",
    cardNsid: "card.technology.red.yin:homebrew.little-omega/impulse_core",
    type: "Red",
    requirements: { Red: 1 },
    source: "homebrew.little-omega",
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
