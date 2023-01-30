const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.FACTIONID": "FACT",
  "faction.full.FACTIONID": "FACTION",
  "planet.PLANETID": "PLANET",
  "technology.name.unity_algorithm": "unity_algorithm",
  "technology.name.encrypted_trade_hub": "encrypted_trade_hub",
  "unit.flagship.FLAGSHIPID": "FLAGSHIP",
  "unit.mech.MECHID": "MECH",
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
  source: "discordant_stars",
  startingTech: ["pscyhoarchaeology", "dark_energy_tap", "scanlink_drone_network", "ai_development_algorithm"],
  startingUnits: {
    carrier: 1,
    destroyer: 2,
    fighter: 3,
    infantry: 3,
    pds: 1,
    spacedock: 1,
  },
  techs: ["unity_algorithm", "encrypted_trade_hub"],
  units: ["kaliburn", "runebearer"],
  packageId: refPackageId,
}];

 const nsidToTemplateId = {
    "sheet.faction:homebrew.discordant_stars/FACTIONID":
      "XXXXXXX",
    "tile.system:homebrew.discordant_stars/32XX":
      "XXXXXXX",
    "token.command:homebrew.discordant_stars/FACTIONID":
      "XXXXXXX",
    "token.control:homebrew.discordant_stars/FACTIONID":
      "XXXXXXX",
    "token.unit:homebrew.discordant-stars.UNITID/FACTIONID":
      "XXXXXXX",
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
    tile: 3200, // TILEID
    source: "homebrew.discordant_stars",
    home: true,
    planets: [
        { localeName: "planet.PLANET", resources: 2, influence: 1 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.FLAGSHIPID",
    triggerNsid:
      "card.technology.unit_upgrade.FACTIONID:franken.discordant_stars/FLAGSHIPID",
    spaceCombat: { dice: 2, hit: 7 },
    capacity: 6,
  },
  {
    unit: "BASE_UNIT",
    upgradeLevel: 1,
    localeName: "unit.BASE_UNIT.UNITID",
    triggerNsid: "card.technology.unit_upgrade.FACTIONID:franken.discordant_stars/UNITID",
    antiFighterBarrage: { dice: 2, hit: 6 },
  },
  {
    unit: "BASE_UNIT",
    upgradeLevel: 2,
    localeName: "unit.BASE_UNIT.UNITID_2",
    triggerNsid: "card.technology.unit_upgrade.FACTIONID:homebrew.discordant_stars/UNITID_2",
    antiFighterBarrage: { dice: 2, hit: 6 },
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.MECHID",
    triggerNsid: "card.leader.mech.FACTIONID:homebrew.discordant_stars/MECHID",
  },
];

const unitModifiers = [];

console.log("DISCORDANT STARS ADDING FACTION");
world.TI4.homebrew.inject({
  localeStrings,
  factions,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
