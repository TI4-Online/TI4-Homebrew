const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "unit_modifier.name.wrath_of_kenara" : "Wrath of Kenara Flagship Ability",
  "unit_modifier.desc.wrath_of_kenara" : "At the start of a round of space combat, you may spend 1 trade good to apply +1 to the result of each of your combat rolls."
}

const factions = [{
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
      dreadnought: 1,
      cruiser: 1,
      fighter: 2,
      infantry: 4,
      space_dock: 1,
  },
  techs: ["quantum_datahub_node", "production_biomes"],
  units: ["wrath_of_kenara", "pride_of_kenara"],
  unpackExtra: [
    {
        cardNsid: "card.other.portrait:homebrew.miltymod/wrath_of_kenara",
        tokenCount: 1,
    },
  ],
}];

 const nsidToTemplateId = {
    "sheet.faction:base/hacan": "76C161AB4320F427D40D13A5B246BA80",
    "card.other.portrait:homebrew.miltymod/wrath_of_kenara" : "5230F3634D51771D59381CBAE70AE634",
};

const replace = {
  "card.technology.green.hacan:base/production_biomes" : "card.technology.green.hacan:homebrew.miltymod/production_biomes",
};

const technologies = [{
    localeName: "technology.name.production_biomes",
    cardNsid:
        "card.technology.yellow.hacan:homebrew.miltymod/production_biomes",
    type: "Green",
    requirements: { Green : 2},
    source: "homebrew.miltymod",
    faction: "hacan"
  },
];

const unitAttrs = [];

const unitModifiers = [
  {
    // Reroll space combat misses.
    isCombat: true,
    localeName: "unit_modifier.name.wrath_of_kenara",
    localeDescription: "unit_modifier.desc.wrath_of_kenara",
    owner: "self",
    priority: "adjust",
    toggleActive: true,
    triggerNsid: "card.other.portrait:homebrew.miltymod/wrath_of_kenara",
    filter: (auxData) => {
        return auxData.rollType === "spaceCombat";
    },
    applyEach: (unitAttrs, auxData) => {
      if (unitAttrs.raw.spaceCombat) {
          unitAttrs.raw.spaceCombat.hit -= 1;
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
