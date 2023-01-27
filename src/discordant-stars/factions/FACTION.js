const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.FACTIONID": "FACT",
  "faction.full.FACTIONID": "FACTION",
  "planet.PLANETID": "PLANET",
  "technology.name.TECHID": "TECH",
  "unit.flagship.FLAGSHIPID": "FLAGSHIP",
  "unit.mech.MECHID": "MECH",
};


const factions = [{
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
    localeName: "technology.name.TECHID",
    cardNsid:
      "card.technology.COLOR.FACTIONID:homebrew.discordant_stars/TECHID",
    type: "Red",
    requirements: { Red: 2 },
    source: "homebrew.discordant_stars",
    faction: "FACTIONID",
  },
  {
    localeName: "unit.UNITID",
    cardNsid: "card.technology.unit_upgrade.FACTIONID:homebrew.discordant_stars/UNITID",
    type: "unitUpgrade",
    requirements: { Yellow: 2 },
    abbrev: " XX II",
    faction: "FACTIONID",
    unitPosition: 0,
  },
];

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
