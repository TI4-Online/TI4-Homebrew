const { world } = require("@tabletop-playground/api");

const factions = [
  {
    faction: "empyrean",
    abilities: ["voidborn", "aetherpassage", "dark_whispers"],
    commodities: 4,
    home: 56,
    leaders: {
      agents: ["acamar"],
      commanders: ["xuange"],
      heroes: ["conservator_procyon"],
    },
    promissoryNotes: ["blood_pact", "dark_pact"],

    icon: "global/factions/empyrean_icon.png",
    source: "pok",
    startingTech: ["dark_energy_tap"],
    startingUnits: {
      carrier: 2,
      destroyer: 1,
      fighter: 2,
      infantry: 4,
      space_dock: 1,
    },
    techs: ["aetherstream", "voidwatch"],
    units: ["dynamo", "watcher"],
  },
];

const nsidToTemplateId = {
  "sheet.faction:pok/empyrean": "411467A48A32401BBB5BE8A04023929E",
};

const replace = {
  "card.technology.blue.empyrean:pok/aetherstream":
    "card.technology.blue.empyrean:homebrew.little-omega/aetherstream",
  "card.technology.green.empyrean:pok/voidwatch":
    "card.technology.green.empyrean:homebrew.little-omega/voidwatch",
};

const technologies = [
  {
    localeName: "technology.name.aetherstream",
    cardNsid:
      "card.technology.blue.empyrean:homebrew.little-omega/aetherstream",
    type: "Blue",
    requirements: {
      Blue: 2,
    },
    abbrev: "Aetherstream",
    faction: "empyrean",
  },
  {
    localeName: "technology.name.voidwatch",
    cardNsid: "card.technology.green.empyrean:homebrew.little-omega/voidwatch",
    type: "Green",
    requirements: {
      Green: 1,
    },
    abbrev: "Voidwatch",
    faction: "empyrean",
  },
];

const unitModifiers = [];

world.TI4.homebrew.inject({
  factions,
  nsidToTemplateId,
  technologies,
  replace,
});
