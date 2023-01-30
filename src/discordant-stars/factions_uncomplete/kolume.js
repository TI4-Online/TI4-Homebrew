const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.kolume": "Kolume",
  "faction.full.kolume": "The Monks of Kolume",
  "planet.azle": "azle",
  "planet.alesna": "alesna",
  "technology.name.applied_biothermics": "Applied Biothermics",
  "technology.name.omniscience_field": "Omniscience Field",
  "unit.flagship.halberd": "Halberd",
  "unit.mech.rook": "rook",
};


const factions = [{
  faction: "kolume",
  abilities: [
    "starfall_gunnery",
    "deliberate_action",
    "meditation",
  ],
  commodities: 3,
  home: 3233,
  leaders: {
    agents: ["disciple_fran"],
    commanders: ["issac_of_sinci"],
    heroes: ["wonell_the_silent"],
  },
  promissoryNotes: ["combinatorial_bypass"],
  //icon: "discordant-stars/faction-icons/kolume.png",
  source: "discordant_stars",
  startingTech: ["graviton_laser_system", "predictive_intelligence"],
  startingUnits: {
    carrier: 2,
    cruiser: 1,
    fighter: 2,
    infantry: 4,
    space_dock: 1,
  },
  techs: ["applied_biothermics", "omniscience_field"],
  units: ["halberd", "rook"],
  packageId: refPackageId,
}];

 const nsidToTemplateId = {
    "sheet.faction:homebrew.discordant_stars/kolume":
      "XXXXXXX",
    "tile.system:homebrew.discordant_stars/3233":
      "XXXXXXX",
    "token.command:homebrew.discordant_stars/kolume":
      "XXXXXXX",
    "token.control:homebrew.discordant_stars/kolume":
      "XXXXXXX",
    "token.unit:homebrew.discordant-stars.UNITID/kolume":
      "XXXXXXX",
};

const technologies = [{
    localeName: "technology.name.applied_biothermics",
    cardNsid:
      "card.technology.green.kolume:homebrew.discordant_stars/applied_biothermics",
    type: "Green",
    requirements: { Green: 2 },
    source: "homebrew.discordant_stars",
    faction: "kolume",
  }, {
    localeName: "technology.name.omniscience_field",
    cardNsid:
        "card.technology.red.kolume:homebrew.discordant_stars/omniscience_field",
    type: "Red",
    requirements: { Red: 3 },
    source: "homebrew.discordant_stars",
    faction: "kolume",
  },
];

const systems = [
  {
    tile: 3233,
    source: "homebrew.discordant_stars",
    home: true,
    planets: [
      { localeName: "planet.azle", resources: 2, influence: 0 },
      { localeName: "planet.alesna", resources: 2, influence: 0 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.halberd",
    triggerNsid:
      "card.technology.unit_upgrade.kolume:franken.discordant_stars/halberd",
    spaceCombat: { dice: 2, hit: 7 },
    spaceCannon: { dice: 1, hit: 7 },
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.rook",
    triggerNsid: "card.leader.mech.kolume:homebrew.discordant_stars/rook",
    spaceCannon: { dice: 2, hit: 8 },
  },
];

const unitModifiers = [];

console.log("DISCORDANT STARS ADDING KOLUME");
world.TI4.homebrew.inject({
  localeStrings,
  factions,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
