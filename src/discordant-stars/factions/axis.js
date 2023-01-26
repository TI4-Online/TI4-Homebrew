const { world } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.axis": "Axis",
  "faction.full.axis": "Shipwrights of Axis",
  "planet.axis": "Axis",
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
    promissoryNotes: ["industry_secrets"],
    //icon: "homebrew.discordant_stars/faction-icons/axis.png",
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
  "card.faction_reference:homebrew.discordant_stars/0":
    "4F22FB07F07E6459B4FCE6D78FC1CBC7",
  "card.leader:homebrew.discordant_stars/0": "8936B49627881B8C765E675D2250AB61",
  "card.leader:homebrew.discordant_stars/1": "E34668B87CBFACBD71B7A0780F47C9CE",
  "card.planet:homebrew.discordant_stars/0": "F08EE692CC4397E98DA0FCC9D95250D8",
  "card.planet:homebrew.discordant_stars/1": "992B9253D95387168DE44CA28E840043",
  "card.planet:homebrew.discordant_stars/2": "F070B846D649615314D5BF1BB4A727F4",
  "card.planet:homebrew.discordant_stars/3": "B2F40CA93740A58609979F9F29F2B67B",
  "card.planet:homebrew.discordant_stars/4": "4247DBC0E9772B2245CAA106E42CBE15",
  "card.planet:homebrew.discordant_stars/5": "A4921F608196B66A9391B662C5D5A48D",
  "card.planet:homebrew.discordant_stars/6": "28D7B55501A75E6DAB7F225A72A3071E",
  "card.promissory:homebrew.discordant_stars/0":
    "8A1A369D814751CB4173B18300170079",
  "card.technology.blue:homebrew.discordant_stars/0":
    "94057D09CAC45C93C2E4D0202B253EC6",
  "card.technology.green:homebrew.discordant_stars/0":
    "AB665B9F7B0857DAF6194A51F6021322",
  "card.technology.red:homebrew.discordant_stars/0":
    "2712AC45E5CB3EEEE52260DB4A331251",
  "card.technology.yellow:homebrew.discordant_stars/0":
    "79AE03AF50430FBF22765C6CBC33A2B7",
  "card.technology.unit_upgrade:homebrew.discordant_stars/0":
    "ABE7C9BE9813C516BA8CBFC436278C51",
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
