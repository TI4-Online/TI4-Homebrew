const { world } = require("@tabletop-playground/api");

const localeStrings = {
  "unit_modifier.name.wrath_of_kenara": "Wrath of Kenara Flagship Ability",
  "unit_modifier.desc.wrath_of_kenara":
    "At the start of a round of space combat, you may spend 1 trade good to apply +1 to the result of each of your combat rolls.",
};

const factions = [
  {
    faction: "hacan",
    abilities: ["masters_of_trade", "guild_ships", "arbiters"],
    commodities: 6,
    home: 16,
    leaders: {
      agents: ["carth_of_golden_sands"],
      commanders: ["gila_the_silvertongue"],
      heroes: ["harrugh_gefhara"],
    },
    promissoryNotes: ["trade_convoys"],
    icon: "global/factions/hacan_icon.png",
    source: "base",
    startingTech: ["antimass_deflectors", "sarween_tools"],
    startingUnits: {
      carrier: 1,
      cruiser: 1,
      dreadnought: 1,
      fighter: 2,
      infantry: 4,
      space_dock: 1,
    },
    techs: ["quantum_datahub_node", "production_biomes"],
    units: ["wrath_of_kenara", "pride_of_kenara"],
    unpackExtra: [
      {
        cardNsid: "card.ability:homebrew.little-omega/wrath_of_kenara",
        tokenCount: 1,
      },
    ],
  },
];

const nsidToTemplateId = {
  "sheet.faction:base/hacan": "A61D3D7D2A4B45959A2605A3FFC13667",
};

const replace = {
  "card.leader.agent.hacan:pok/carth_of_golden_sands":
    "card.leader.agent.hacan:homebrew.little-omega/carth_of_golden_sands",
  "card.technology.green.hacan:base/production_biomes":
    "card.technology.green.hacan:homebrew.little-omega/production_biomes",
  "card.promissory.hacan:base/trade_convoys":
    "card.promissory.hacan:homebrew.little-omega/trade_convoys",
  "card.leader.mech.hacan:pok/pride_of_kenara":
    "card.leader.mech.hacan:homebrew.little-omega/pride_of_kenara",
};

const technologies = [
  {
    localeName: "technology.name.production_biomes",
    cardNsid:
      "card.technology.green.hacan:homebrew.little-omega/production_biomes",
    type: "Green",
    requirements: { Green: 2 },
    source: "homebrew.little-omega",
    faction: "hacan",
  },
];

const unitAttrs = [
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.pride_of_kenara",
    triggerNsid: "card.leader.mech.hacan:homebrew.little-omega/pride_of_kenara",
  },
];

const unitModifiers = [
  {
    isCombat: true,
    localeName: "unit_modifier.name.wrath_of_kenara",
    localeDescription: "unit_modifier.desc.wrath_of_kenara",
    owner: "self",
    priority: "adjust",
    toggleActive: true,
    triggerNsid: "card.ability:homebrew.little-omega/wrath_of_kenara",
    filter: (auxData) => {
      return (
        auxData.rollType === "spaceCombat" ||
        auxData.rollType === "groundCombat"
      );
    },
    applyEach: (unitAttrs, auxData) => {
      if (unitAttrs.raw.spaceCombat) {
        unitAttrs.raw.spaceCombat.hit -= 1;
      }
      if (unitAttrs.raw.groundCombat) {
        unitAttrs.raw.groundCombat.hit -= 1;
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
