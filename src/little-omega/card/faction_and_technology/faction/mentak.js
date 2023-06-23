const { world } = require("@tabletop-playground/api");

const factions = [
  {
    faction: "mentak",
    abilities: ["ambush", "pillage"],
    commodities: 2,
    home: 2,
    leaders: {
      agents: ["suffi_an"],
      commanders: ["sula_mentarion"],
      heroes: ["ipswitch_loose_cannon"],
    },
    promissoryNotes: ["promise_of_protection"],
    icon: "global/factions/mentak_icon.png",
    source: "base",
    startingTechChoice: "mentak",
    startingTechChoices: [
      "antimass_deflectors",
      "neural_motivator",
      "sarween_tools",
      "plasma_scoring",
      "ai_development_algorithm",
      "psychoarchaeology",
      "dark_energy_tap",
      "scanlink_drone_network",
    ],
    startingTech: [],
    startingUnits: {
      carrier: 1,
      cruiser: 2,
      fighter: 3,
      infantry: 4,
      pds: 1,
      space_dock: 1,
    },
    techs: ["mirror_computing", "salvage_operations"],
    units: ["fourth_moon", "moll_terminus"],
  },
];

const nsidToTemplateId = {
  "sheet.faction:base/mentak": "FE7AC311B1A84FE1875C53D96A68ED30",
};

const replace = {
  "card.technology.yellow.mentak:base/salvage_operations":
    "card.technology.red.mentak:homebrew.little-omega/salvage_operations",
  "card.promissory.mentak:base/promise_of_protection":
    "card.promissory.mentak:homebrew.little-omega/promise_of_protection",
  "card.leader.hero.mentak:pok/ipswitch_loose_cannon":
    "card.leader.hero.mentak:homebrew.little-omega/ipswitch_loose_cannon",
};

const technologies = [
  {
    localeName: "technology.name.salvage_operations",
    cardNsid:
      "card.technology.red.mentak:homebrew.little-omega/salvage_operations",
    type: "Red",
    requirements: { Red: 1 },
    source: "homebrew.little-omega",
    faction: "mentak",
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
