const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.dihmohn": "Dih-Mohn",
  "faction.full.dihmohn": "The Dih-Mohn Flotilla",
  "planet.abyssus": "Abyssus",
  "technology.name.impressment_programs": "Impressment Programs",
  "unit.flagship.maximus": "Maximus",
  "unit.mech.repairitor": "Repairitor",
};

const factions = [{
  faction: "dihmohn",
  abilities: ["capital_fleet", "migrant_fleet", "flotilla"],
  commodities: 3,
  home: 3218,
  leaders: {
    agents: ["jgin_faru"],
    commanders: ["clona_bathru"],
    heroes: ["verrisus_ypru"],
  },
  promissoryNotes: ["combat_drills"],
  icon: "discordant-stars/faction-icons/dihmohn.png",
  source: "homebrew.discordant_stars",
  startingTech: ["dark-energy_tap", "scanlink_drone_network"],
  startingUnits: {
    dreadnought: 2,
    destroyers: 2,
    fighter: 2,
    mech: 1,
    infantry: 2,
    space_dock: 1,
  },
  techs: ["impressment_programs"],
  units: [
    "maximus",
    "aegis",
    "aegis_2",
    "repairitor",
  ],
  packageId: refPackageId,
}];

 const nsidToTemplateId = {
    "sheet.faction:homebrew.discordant_stars/dihmohn":
      "6E7C28384077CE7BD08D47B48B367126",
    "tile.system:homebrew.discordant_stars/3218":
      "B1BB3A41C2B845A5BE4CE5DE2F0E7F7D",
    "token.command:homebrew.discordant_stars/dihmohn":
      "07ED35EA4E3275E07646EEBDCC721A67",
    "token.control:homebrew.discordant_stars/dihmohn":
      "6F2BA51B4DA77DF5AA72DA97E31FC6C8",
};

const technologies = [{
    localeName: "technology.name.impressment_programs",
    cardNsid:
      "card.technology.yellow.dihmohn:homebrew.discordant_stars/impressment_programs",
    type: "Yellow",
    requirements: { Yellow: 2 },
    source: "homebrew.discordant_stars",
    faction: "dihmohn",
  },
  {
    localeName: "unit.aegis_2",
    cardNsid: "card.technology.unit_upgrade.dihmohn:homebrew.discordant_stars/aegis_2",
    type: "unitUpgrade",
    requirements: { Blue: 2, Yellow: 1 },
    abbrev: " AE II",
    faction: "dihmohn",
    unitPosition: 0,
  },
];

const systems = [
  {
    tile: 3218,
    source: "homebrew.discordant_stars",
    home: true,
    planets: [
        { localeName: "planet.abyssus", resources: 4, influence: 2 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.maximus",
    triggerNsid:
      "card.technology.unit_upgrade.dihmohn:franken.discordant_stars/maximus",
    spaceCombat: { dice: 2, hit: 7 },
    capacity: 6,
  },
  {
    unit: "dreadnought",
    upgradeLevel: 1,
    localeName: "unit.dreadnought.aegis",
    triggerNsid: "card.technology.unit_upgrade.dihmohn:franken.discordant_stars/aegis",
  },
  {
    unit: "dreadnought",
    upgradeLevel: 2,
    localeName: "unit.dreadnought.aegis_2",
    triggerNsid: "card.technology.unit_upgrade.dihmohn:homebrew.discordant_stars/aegis_2",
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.repairitor",
    triggerNsid: "card.leader.mech.dihmohn:homebrew.discordant_stars/repairitor",
  },
];

const unitModifiers = [];

console.log("DISCORDANT STARS ADDING DIHMOHN");
world.TI4.homebrew.inject({
  localeStrings,
  factions,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
