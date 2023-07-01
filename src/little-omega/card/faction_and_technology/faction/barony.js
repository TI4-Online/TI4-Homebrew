const { world } = require("@tabletop-playground/api");

const factions = [
  {
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
    source: "base",
    startingTech: ["antimass_deflectors", "plasma_scoring"],
    startingUnits: {
      carrier: 1,
      cruiser: 1,
      destroyer: 2,
      dreadnought: 1,
      infantry: 3,
      space_dock: 1,
    },
    techs: ["l4_disruptors", "noneuclidean_shielding"],
    units: ["arc_secundus", "dunlain_reaper"],
    unpackExtra: [
      {
        cardNsid: "card.ability:homebrew.little-omega/munitions_reserves",
        tokenCount: 1,
      },
    ],
  },
];

const nsidToTemplateId = {
  "sheet.faction:base/letnev": "20FBBD329870425CA21EF61921B28852",
};

const replace = {
  "card.technology.yellow.letnev:base/l4_disruptors":
    "card.technology.yellow.letnev:homebrew.little-omega/l4_disruptors",
  "card.promissory.letnev:base/war_funding":
    "card.promissory.letnev:homebrew.little-omega/war_funding",
  "card.promissory.letnev:codex.ordinian/war_funding.omega":
    "card.promissory.letnev:homebrew.little-omega/war_funding",
  "card.leader.agent.letnev:pok/viscount_unlenn":
    "card.leader.agent.letnev:homebrew.little-omega/viscount_unlenn",
  "card.leader.commander.letnev:pok/rear_admiral_farran":
    "card.leader.commander.letnev:homebrew.little-omega/rear_admiral_farran",
  "card.leader.hero.letnev:pok/darktalon_treilla":
    "card.leader.hero.letnev:homebrew.little-omega/darktalon_treilla",
  "card.alliance:pok/letnev": "card.alliance:homebrew.little-omega/letnev",
};

const technologies = [
  {
    localeName: "technology.name.l4_disruptors",
    cardNsid:
      "card.technology.yellow.letnev:homebrew.little-omega/l4_disruptors",
    type: "Yellow",
    requirements: {
      Yellow: 1,
    },
    abbrev: "L4 Disrupt",
    faction: "letnev",
  },
];

const unitModifiers = [
  {
    // "+1 die to a single SPACE COMBAT roll",
    isCombat: true,
    localeName: "unit_modifier.name.viscount_unlenn",
    localeDescription: "unit_modifier.desc.viscount_unlenn",
    owner: "self",
    priority: "choose",
    toggleActive: true,
    triggerNsid:
      "card.leader.agent.letnev:homebrew.little-omega/viscount_unlenn",
    filter: (auxData) => {
      return auxData.rollType === "spaceCombat";
    },
    applyAll: (unitAttrsSet, auxData) => {
      let best = false;
      for (const unitAttrs of unitAttrsSet.values()) {
        if (unitAttrs.raw.spaceCombat && auxData.self.has(unitAttrs.raw.unit)) {
          if (
            !best ||
            unitAttrs.raw.spaceCombat.hit < best.raw.spaceCombat.hit
          ) {
            best = unitAttrs;
          }
        }
      }
      if (best) {
        best.raw.spaceCombat.extraDice =
          (best.raw.spaceCombat.extraDice || 0) + 1;
      }
    },
  },
  {
    // Reroll space combat misses.
    isCombat: true,
    localeName: "unit_modifier.name.munitions_reserves",
    localeDescription: "unit_modifier.desc.munitions_reserves",
    owner: "self",
    priority: "adjust",
    toggleActive: true,
    triggerNsid: "card.ability:homebrew.little-omega/munitions_reserves",
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
  factions,
  nsidToTemplateId,
  technologies,
  unitModifiers,
  replace,
});
