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
  "unit.unit_modifier.name.starfall": "Starfall",
  "unit_modifier.desc.starfall": "NOT YET IMPLEMENTED!!! not active: only one unit can use SPACE CANNON, active: up to 3 non-fighter ships gain SPACE CANNON 8",
  "unit.unit_modifier.name.issac_of_sinci": "Issac of Sinci",
  "unit_modifier.desc.issac_of_sinci": "NOT YET IMPLEMENTED!!! +1 to each unit's ability rolls",
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
  icon: "discordant-stars/faction-icons/kolume.png",
  source: "homebrew.discordant_stars",
  startingTech: [], //"graviton_laser_system", "predictive_intelligence"],
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
      "FCA7F3274E7875C09A871B83207E494F",
    "tile.system:homebrew.discordant_stars/3233":
      "9945F0D04D0B1B52F31B108B40DA77BF",
    "token.command:homebrew.discordant_stars/kolume":
      "7FE3A22F4921130F96BDC9843C23D740",
    "token.control:homebrew.discordant_stars/kolume":
      "AE6D0B1944B794A7C92884B6AA477384",
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
    packageId: refPackageId,
    img: "discordant-stars/tiles/homeworld/tile_3233.jpg",
    planets: [
      { localeName: "planet.alesna", resources: 2, influence: 0 },
      { localeName: "planet.azle", resources: 2, influence: 0 },
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

const unitModifiers = [
  {
    // "not active: only one unit can use SPACE CANNON, active: up to 3 non-fighter ships gain SPACE CANNON 8",
    isCombat: true,
    localeName: "unit.unit_modifier.name.starfall",
    localeDescription: "unit_modifier.desc.starfall",
    owner: "self",
    priority: "adjust",
    filter: (auxData) => {
      return auxData.self.faction.nsidName === "kolume";
    },
    applyAll: (unitAttrsSet, auxData) => {
      // TODO: implement
    },
  },
  {
    // "+1 to all unit ability rolls",
    isCombat: true,
    localeName: "unit.unit_modifier.name.issac_of_sinci",
    localeDescription: "unit_modifier.desc.issac_of_sinci",
    owner: "self",
    priority: "adjust",
    triggerNsids: [
      "card.leader.commander.kolume:homebrew.discordant_stars/issac_of_sinci",
      //"card.alliance:homebrew/kolume",
    ],
    filter: (auxData) => {
      return ["spaceCannon", "antiFighterBarrage", "bombardment"].includes(auxData.rollType);
    },
    applyAll: (unitAttrsSet, auxData) => {
      // TODO: implement
    },
  },
];




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
