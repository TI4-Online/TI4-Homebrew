const { world } = require("@tabletop-playground/api");

const factions = [{
  faction: "saar",
  abilities: ["scavenge", "nomadic"],
  commodities: 3,
  home: 11,
  leaders: {
      agents: ["captain_mendosa"],
      commanders: ["rowl_sarrig"],
      heroes: ["gurno_aggero"],
  },
  promissoryNotes: ["raghs_call"],
  icon: "global/factions/saar_icon.png",
  source: "base",
  startingTech: ["antimass_deflectors"],
  startingUnits: {
      carrier: 1,
      cruiser: 1,
      fighter: 2,
      infantry: 4,
      space_dock: 1,
  },
  techs: ["chaos_mapping"],
  units: [
      "son_of_ragh",
      "floating_factory",
      "floating_factory_2",
      "scavenger_zeta",
  ],
}];

 const nsidToTemplateId = {
    "sheet.faction:base/saar":
      "4238585B4356C7E3278F71B837B7287D",
};

const replace = {
  "card.technology.blue.saar:base/chaos_mapping" : "card.technology.blue.saar:homebrew.miltymod/chaos_mapping",
  "sheet.faction:base/saar" : "sheet.faction:homebrew.miltymod/saar",
  "card.technology.unit_upgrade.saar:base/floating_factory_2" : "card.technology.unit_upgrade.saar:homebrew.miltymod/floating_factory_2"
};

const technologies = [{
    localeName: "technology.name.chaos_mapping",
    cardNsid:
        "card.technology.blue.saar:homebrew.miltymod/chaos_mapping",
    type: "Blue",
    requirements: { Blue : 2 },
    source: "homebrew.miltymod",
    faction: "saar"
  },
];

const unitAttrs = [
  {
    unit: "space_dock",
    upgradeLevel: 1,
    localeName: "unit.space_dock.floating_factory",
    triggerNsid:
        "card.technology.unit_upgrade.saar:homebrew.miltymod/floating_factory",
    production: 4,
    move: 1,
    capacity: 4,
  },
  {
      unit: "space_dock",
      upgradeLevel: 2,
      localeName: "unit.space_dock.floating_factory_2",
      triggerNsid:
          "card.technology.unit_upgrade.saar:homebrew.miltymod/floating_factory_2",
      production: 7,
      move: 2,
      capacity: 6,
  },
];

const unitModifiers = [];

world.TI4.homebrew.inject({
  factions,
  nsidToTemplateId,
  technologies,
  unitAttrs,
  unitModifiers,
  replace,
});
