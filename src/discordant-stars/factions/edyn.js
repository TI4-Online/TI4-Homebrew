const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.edyn": "Edyn",
  "faction.full.edyn": "The Edyn Mandate",
  "planet.edyn": "PLANET",
  "planet.ekko": "Ekko",
  "planet.okke": "Okke",
  "technology.name.unity_algorithm": "unity_algorithm",
  "technology.name.encrypted_trade_hub": "encrypted_trade_hub",
  "unit.flagship.kaliburn": "Kaliburn",
  "unit.mech.runebearer": "runebearer",
};


const factions = [{
  faction: "edyn",
  abilities: [
    "enlightenment",
    "grace",
    "royal_decree",
  ],
  commodities: 3,
  home: 3225,
  leaders: {
    agents: ["allant"],
    commanders: ["kadryn"],
    heroes: ["midir"],
  },
  promissoryNotes: ["edyn_diplomatic_support"],
  icon: "discordant-stars/faction-icons/edyn.png",
  source: "homebrew.discordant_stars",
  startingTech: ["pscyhoarchaeology", "dark_energy_tap", "scanlink_drone_network", "ai_development_algorithm"],
  startingUnits: {
    carrier: 1,
    destroyer: 2,
    fighter: 3,
    infantry: 3,
    pds: 1,
    space_dock: 1,
  },
  techs: ["unity_algorithm", "encrypted_trade_hub"],
  units: ["kaliburn", "runebearer"],
  packageId: refPackageId,
}];

 const nsidToTemplateId = {
    "sheet.faction:homebrew.discordant_stars/edyn":
      "AA54CD4F4C77171C2CCE0DA3B5690049",
    "tile.system:homebrew.discordant_stars/3225":
      "A6D5845C4AEB1F0729B7BBB1F2EE1AF3",
    "token.command:homebrew.discordant_stars/edyn":
      "6F815DD54DC0C07307F5B6AAA053139B",
    "token.control:homebrew.discordant_stars/edyn":
      "503464A847FB262835C7ACBC3EC40ADF",
};

const technologies = [{
  localeName: "technology.name.unity_algorithm",
  cardNsid:
      "card.technology.green.edyn:homebrew.discordant_stars/unity_algorithm",
  type: "Green",
  requirements: { Green: 3 },
  source: "homebrew.discordant_stars",
  faction: "cheiran",
}, {
  localeName: "technology.name.encrypted_trade_hub",
  cardNsid:
      "card.technology.yellow.edyn:homebrew.discordant_stars/encrypted_trade_hub",
  type: "Yellow",
  requirements: { Yellow: 2 },
  source: "homebrew.discordant_stars",
  faction: "cheiran",
},];

const systems = [
  {
    tile: 3225,
    source: "homebrew.discordant_stars",
    home: true,
    planets: [
      { localeName: "planet.edyn", resources: 3, influence: 3 },
      { localeName: "planet.okke", resources: 0, influence: 1 },
      { localeName: "planet.ekko", resources: 0, influence: 1 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.kaliburn",
    triggerNsid:
      "card.technology.unit_upgrade.edyn:franken.discordant_stars/kaliburn",
    spaceCombat: { dice: 2, hit: 7 },
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.runebearer",
    triggerNsid: "card.leader.mech.edyn:homebrew.discordant_stars/runebearer",
  },
];

const unitModifiers = [];

console.log("DISCORDANT STARS ADDING EDYN");
world.TI4.homebrew.inject({
  localeStrings,
  factions,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
