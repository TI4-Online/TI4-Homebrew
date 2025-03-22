const { world, Vector, Card } = require("@tabletop-playground/api");

// Cards to be removed from the base decks, by metadata
const REMOVE = [
]

// Cards to be replaced in the base decks, by metadata
const REPLACE = {
};

// Cards or decks to be added/appended, first value is the metadata string, second value is the GUID, even if they are replaced above, any new content needs to be added here as well
const ADD = {
  "card.technology:scpt/0": 
    "081C834E437A4B5D9A4A0F9E0755FC66", // SCPT Codex Technologies
}

const TECHS = [
  {
    localeName: "technology.name.cerebral_tracers",
    cardNsid:
      "card.technology:scpt/0",
    type: "Green",
    requirements: { Green: 2 },
    source: "scpt",
  },
  {
    localeName: "technology.name.mass_efficiency_relay",
    cardNsid:
      "card.technology:scpt/0",
    type: "Green",
    requirements: { Green: 3 },
    source: "scpt",
  },
  {
    localeName: "technology.name.evac_beacons",
    cardNsid:
      "card.technology:scpt/0",
    type: "Blue",
    requirements: { Blue: 2 },
    source: "scpt",
  },
  {
    localeName: "technology.name.vacuum_transposition",
    cardNsid:
      "card.technology:scpt/0",
    type: "Blue",
    requirements: { Blue: 3 },
    source: "scpt",
  },
  {
    localeName: "technology.name.heavy_rifle_hardpoints",
    cardNsid:
      "card.technology:scpt/0",
    type: "Red",
    requirements: { Red: 2 },
    source: "scpt",
  },
  {
    localeName: "technology.name.solar_magnetic_force_fields",
    cardNsid:
      "card.technology:scpt/0",
    type: "Red",
    requirements: { Red: 3 },
    source: "scpt",
  },
  {
    localeName: "technology.name.modular_satellite_grid",
    cardNsid:
      "card.technology:scpt/0",
    type: "Yellow",
    requirements: { Yellow: 2 },
    source: "scpt",
  },
  {
    localeName: "technology.name.terradesic_dividends",
    cardNsid:
      "card.technology:scpt/0",
    type: "Yellow",
    requirements: { Yellow: 3 },
    source: "scpt",
  },
];

const NAMES = {
  "technology.name.cerebral_tracers": "Cerebreal Tracers",
  "technology.name.mass_efficiency_relay": "Mass Efficiency Relay",
  "technology.name.evac_beacons" : "Evac Beacons",
  "technology.name.vacuum_transposition" : "Vacuum Transposition",
  "technology.name.heavy_rifle_hardpoints" : "Heavy Rifle Hardpoints",
  "technology.name.solar_magnetic_force_fields" : "Solar Magnetic Force Fields",
  "technology.name.modular_satellite_grid" : "Modular Satellite Grid",
  "technology.name.terradesic_dividends" : "Terradesic Dividends",
};

// Tell the TI4 mod to update it's lists of objects with the above adjustments
world.TI4.homebrew.inject({
  //extraBoxes: extraStuff,
  localeStrings: NAMES,
  nsidToTemplateId: ADD,
  remove: REMOVE,
  replace: REPLACE,
  technologies: TECHS,
});

// Reload changed objects (each kind has it's own function)
world.TI4.homebrew.resetOnTableDecks();
