const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.axis": "Axis",
  "faction.full.axis": "Shipwrights of Axis",
  "planet.axis": "Axis",
  "unit.mech.forgetender": "Forgetender",
  "technology.name.rift_engines": "Rift Engines",
  "technology.name.emergency_deployment": "Emergency Deployment",
  "unit.flagship.bearer_of_heavens": "Bearer of Heavens",
};

const factions = [
  {
    faction: "axis",
    abilities: ["military_industrial_complex", "arms_dealers"],
    commodities: 5,
    home: 3209,
    leaders: {
      agents: ["shipmonger_zsknck"],
      commanders: ["designer_tckvsk"],
      heroes: ["demiqueen_mdckssk"],
    },
    packageId: refPackageId,
    promissoryNotes: ["industry_secrets"],
    icon: "discordant-stars/faction-icons/axis.png",
    source: "homebrew.discordant_stars",
    startingTech: ["sarween_tools, ai_development_algorithm"],
    startingUnits: {
      carrier: 1,
      cruiser: 1,
      fighter: 2,
      infantry: 4,
      dreadnought: 1,
      pds: 1,
      space_dock: 1,
    },
    techs: ["rift_engines", "emergency_deployment"],
    units: ["bearer_of_heavens", "forgetender"],
    unpackExtra: [
      {
        // This is a deck of cards.
        tokenNsid: "card.axis:homebrew.discordant_stars/0",
        tokenCount: 1,
      },
    ],
  },
];

const nsidToTemplateId = {
  "card.axis:homebrew.discordant_stars/0": "2012ED3D6A479DFA443063A612E77765",
  "sheet.faction:homebrew.discordant_stars/axis":
    "6C5A13D4D44D0619BADAC7A37DB4FC56",
  "tile.system:homebrew.discordant_stars/3209":
    "8371CA8B6CFE426D89E58B6A96B48098",
  "token.command:homebrew.discordant_stars/axis":
    "25C643C3C74DF02CC3F69A81C3ECEE26",
  "token.control:homebrew.discordant_stars/axis":
    "F7E651503548FC0EB276B09759239405",
};

const technologies = [
  {
    localeName: "technology.name.rift_engines",
    cardNsid:
      "card.technology.blue.axis:homebrew.discordant_stars/rift_engines",
    type: "Blue",
    requirements: { Blue: 1 },
    source: "homebrew.discordant_stars",
    faction: "axis",
  },
  {
    localeName: "technology.name.emergency_deployment",
    cardNsid:
      "card.technology.yellow.axis:homebrew.discordant_stars/emergency_deployment",
    type: "Yellow",
    requirements: {
      Yellow: 3,
    },
    source: "homebrew.discordant_stars",
    faction: "axis",
  },
];

const systems = [
  {
    tile: 3209,
    source: "homebrew.discordant_stars",
    home: true,
    planets: [{ localeName: "planet.axis", resources: 4, influence: 0 }],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.bearer_of_heavens",
    triggerNsid:
      "card.technology.unit_upgrade.axis:franken.discordant_stars/bearer_of_heavens",
    spaceCombat: { dice: 2, hit: 7 },
    capacity: 3,
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.forgetender",
    triggerNsid: "card.leader.mech.axis:homebrew.discordant_stars/forgetender",
  },
];

const unitModifiers = [];

console.log("DISCORDANT STARS ADDING AXIS");
world.TI4.homebrew.inject({
  localeStrings,
  factions,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
