const { world } = require("@tabletop-playground/api");

const localeStrings = {
  "unit_modifier.name.munitions_reserves" : "Munitions Reserves",
  "unit_modifier.desc.munitions_reserves" : "At the start of a round of space combat, you may spend 2 resources; you may reroll any number of your dice during that combat round.",
  "unit_modifier.name.war_funding" : "War Funding",
  "unit_modifier.desc.war_funding" : "At the start of a round of space combat: During this combat round, reroll any number of your dice.",
}

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
  unpackExtra: [
    {
        cardNsid: "card.other.portrait:homebrew.miltymod/munitions_reserves",
        tokenCount: 1,
    },
  ],
}];

 const nsidToTemplateId = {
    "sheet.faction:base/letnev": "3C3F37004A26ABDBDEBED09E7C23C9CC",
      "card.other.portrait:homebrew.miltymod/munitions_reserves" : "4F79F7584719D121346E5786E4B4AD0E",
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

const unitModifiers = [
  {
    // Reroll space combat misses.
    isCombat: true,
    localeName: "unit_modifier.name.munitions_reserves",
    localeDescription: "unit_modifier.desc.munitions_reserves",
    owner: "self",
    priority: "adjust",
    toggleActive: true,
    triggerNsid: "card.other.portrait:homebrew.miltymod/munitions_reserves",
    filter: (auxData) => {
        return auxData.rollType === "spaceCombat";
    },
    applyEach: (unitAttrs, auxData) => {
        if (unitAttrs.raw.spaceCombat) {
            unitAttrs.raw.spaceCombat.rerollMisses = true;
        }
    },
  },
  {
    // Reroll space combat misses.
    isCombat: true,
    localeName: "unit_modifier.name.war_funding",
    localeDescription: "unit_modifier.desc.war_funding",
    owner: "any",
    priority: "adjust",
    toggleActive: true,
    triggerNsid: "card.promissory.letnev:homebrew.miltymod/war_funding",
    filter: (auxData) => {
        return auxData.rollType === "spaceCombat";
    },
    applyEach: (unitAttrs, auxData) => {
        if (unitAttrs.raw.spaceCombat) {
            unitAttrs.raw.spaceCombat.rerollMisses = true;
        }
    },
  },
];

world.TI4.homebrew.inject({
  localeStrings,
  factions,
  nsidToTemplateId,
  technologies,
  unitAttrs,
  unitModifiers,
  replace,
});
