const { world, Vector, Card } = require("@tabletop-playground/api");

// Cards to be removed from the base decks, by metadata
const REMOVE = [
  "card.technology.yellow.letnev:base/l4_disruptors"
]

// Cards to be replaced in the base decks, by metadata
const REPLACE = {
  // Leaders
  "card.leader.commander.arborec:pok/dirzuga_rophal" : "card.leader.commander.arborec:scpt/dirzuga_rophal",
  "card.leader.hero.arborec:pok/letani_miasmiala" : "card.leader.hero.arborec:scpt/letani_miasmiala",
  "card.leader.agent.letnev:pok/viscount_unlenn" : "card.leader.agent.letnev:scpt/viscount_unlenn",
  "card.leader.hero.letnev:pok/darktalon_treilla" : "card.leader.hero.letnev:scpt/darktalon_treilla",
  "card.leader.hero.winnu:pok/mathis_mathinus" : "card.leader.hero.winnu:scpt/mathis_mathinus",

  // Technologies
  "card.technology.green.arborec:base/bioplasmosis" : "card.technology.green.arborec:scpt/bioplasmosis",
  "card.technology.unit_upgrade.arborec:base/letani_warrior_2" : "card.technology.unit_upgrade.arborec:scpt/letani_warrior_2",
  "card.technology.yellow.letnev:base/l4_disruptors" : "card.technology.red.letnev:scpt/l4_disruptors",
  "card.technology.yellow.winnu:base/hegemonic_trade_policy" : "card.technology.yellow.winnu:scpt/hegemonic_trade_policy",
  "card.technology.blue.winnu:base/lazax_gate_folding" : "card.technology.blue.winnu:scpt/lazax_gate_folding",
};

// Cards or decks to be added/appended, first value is the metadata string, second value is the GUID, even if they are replaced above, any new content needs to be added here as well
const ADD = {
  "card.leader:scpt/0": 
    "2B29931B472A100F8548A9909DD5AED1", // SCPT Codex Leaders
  "card.technology:scpt/1": 
    "36F17E624337274160081295F9405990", // SCPT Codex Faction Technologies
}

const TECHS = [
  {
    localeName: "technology.name.bioplasmosis",
    cardNsid:
      "card.technology.green.arborec:scpt/bioplasmosis",
    type: "Green",
    requirements: { Green: 2 },
    source: "scpt",
    faction: "arborec",
  },
  {
    localeName: "unit.infantry.letani_warrior_2",
    cardNsid:
      "card.technology.unit_upgrade.arborec:scpt/letani_warrior_2",
    type: "unitUpgrade",
    requirements: { Green: 2 },
    abbrev: "LW II",
    source: "scpt",
    faction: "arborec",
    unitPosition: 10,
  },
  {
    localeName: "technology.name.l4_disruptors",
    cardNsid:
      "card.technology.red.letnev:scpt/l4_disruptors",
    type: "Red",
    requirements: { Red: 1 },
    source: "scpt",
    faction: "letnev",
  },
  {
    localeName: "technology.name.hegemonic_trade_policy",
    cardNsid:
      "card.technology.yellow.winnu:scpt/hegemonic_trade_policy",
    type: "Yellow",
    requirements: { Yellow: 1 },
    source: "scpt",
    faction: "winnu",
  },
  {
    localeName: "technology.name.lazax_gate_folding",
    cardNsid:
      "card.technology.blue.winnu:scpt/lazax_gate_folding",
    type: "Blue",
    requirements: { Blue: 1 },
    source: "scpt",
    faction: "winnu",
  },
];

const ATTRS = [
  {
    unit: "infantry",
    upgradeLevel: 2,
    localeName: "unit.infantry.letani_warrior_2",
    triggerNsid:
      "card.technology.unit_upgrade.arborec:scpt/letani_warrior_2",
    groundCombat: { hit: 7 },
    production: 2,
  },
];

const NAMES = {
  // Technologies
  "technology.name.bioplasmosis": "Bioplasmosis",
  "technology.name.l4_disruptors": "L5 Disruptors",
  "technology.name.hegemonic_trade_policy" : "Hegemonic Trade Policy",
  "technology.name.lazax_gate_folding" : "Lazax Gate Folding",
  "unit.infantry.letani_warrior_2" : "Letani Warrior II",
};

// Tell the TI4 mod to update it's lists of objects with the above adjustments
world.TI4.homebrew.inject({
  //extraBoxes: extraStuff,
  localeStrings: NAMES,
  nsidToTemplateId: ADD,
  remove: REMOVE,
  replace: REPLACE,
  technologies: TECHS,
  unitAttrs: ATTRS,
});

// Reload changed objects (each kind has it's own function)
world.TI4.homebrew.resetOnTableDecks();
