const { world } = require("@tabletop-playground/api");

const factions = [{
  source: "base",
  faction: "arborec",
  abilities: ["mitosis"],
  commodities: 3,
  home: 5,
  leaders: {
    agents: ["letani_ospha"],
    commanders: ["dirzuga_rophal"],
    heroes: ["letani_miasmiala"],
  },
  promissoryNotes: ["stymie"],
  icon: "global/factions/arborec_icon.png",

  startingTech: ["magen_defense_grid"],
  startingUnits: {
      carrier: 1,
      cruiser: 1,
      destroyer: 1,
      fighter: 2,
      infantry: 4,
      pds: 1,
      space_dock: 1,
  },
  techs: ["bioplasmosis"],
  units: [
      "duha_menaimon",
      "letani_warrior",
      "letani_warrior_2",
      "letani_behemoth",
  ],
}];

 const nsidToTemplateId = {
    "sheet.faction:base/arborec":
      "AF6BCC30403B6F27E798EBA9EC4337AF",
};

const replace = {
  "card.technology.green.arborec:base/bioplasmosis" : "card.technology.green.arborec:homebrew.miltymod/bioplasmosis",
  "card.promissory.arborec:codex.ordinian/stymie.omega" : "card.promissory.arborec:homebrew.miltymod/stymie",
  "card.technology.unit_upgrade.arborec:base/letani_warrior_2" : "card.technology.unit_upgrade.arborec:homebrew.miltymod/letani_warrior_2"
};

const technologies = [{
    localeName: "technology.name.bioplasmosis",
    cardNsid:
        "card.technology.green.arborec:homebrew.miltymod/bioplasmosis",
    type: "Green",
    requirements: { Green: 1 },
    source: "homebrew.miltymod",
    faction: "arborec"
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.duha_menaimon",
    triggerNsid:
        "card.technology.unit_upgrade.arborec:homebrew.miltymod/duha_menaimon",
    spaceCombat: { dice: 2, hit: 7 },
    capacity: 5,
    production: 5,
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
