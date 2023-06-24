const { world } = require("@tabletop-playground/api");

const factions = [
  {
    faction: "nomad",
    abilities: ["the_company", "future_sight"],
    commodities: 4,
    home: 53,
    leaders: {
      agents: ["artuno_the_betrayer", "field_marshal_mercer", "the_thundarian"],
      commanders: ["navarch_feng"],
      heroes: ["ahksyl_siven"],
    },
    promissoryNotes: ["the_cavalry"],
    icon: "global/factions/nomad_icon.png",
    source: "pok",
    startingTech: ["sling_relay"],
    startingUnits: {
      carrier: 1,
      destroyer: 1,
      fighter: 3,
      flagship: 1,
      infantry: 4,
      space_dock: 1,
    },
    techs: ["temporal_command_suite"],
    units: ["memoria", "memoria_2", "quantum_manipulator"],
  },
];

const nsidToTemplateId = {
  "sheet.faction:pok/nomad": "0B750A424CC842A684E1E8D1C2384D18",
};

const replace = {
  "card.technology.unit_upgrade.nomad:pok/memoria_2":
    "card.technology.unit_upgrade.nomad:homebrew.little-omega/memoria_2",
  "card.technology.yellow.nomad:pok/temporal_command_suite":
    "card.technology.yellow.nomad:homebrew.little-omega/temporal_command_suite",
};

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 2,
    localeName: "unit.flagship.memoria_ii",
    triggerNsid: "card.technology.unit_upgrade.nomad:pok/memoria_2",
    antiFighterBarrage: { dice: 3, hit: 5 },
    spaceCombat: { dice: 2, hit: 5 },
    capacity: 6,
  },
];

const technologies = [
  {
    localeName: "unit.flagship.memoria_ii",
    cardNsid: "card.technology.unit_upgrade.nomad:pok/memoria_2",
    type: "unitUpgrade",
    requirements: {
      Blue: 1,
      Yellow: 1,
      Green: 1,
      Red: 1,
    },
    abbrev: "Memoria II",
    faction: "nomad",
    source: "PoK",
    unitPosition: -4,
  },
  {
    localeName: "technology.name.temporal_command_suite",
    cardNsid:
      "card.technology.yellow.nomad:homebrew.little-omega/temporal_command_suite",
    type: "Yellow",
    requirements: { Yellow: 1 },
    source: "homebrew.little-omega",
    faction: "nomad",
  },
];

world.TI4.homebrew.inject({
  factions,
  nsidToTemplateId,
  unitAttrs,
  technologies,
  replace,
});
