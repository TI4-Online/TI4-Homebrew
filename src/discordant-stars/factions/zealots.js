const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.zealots": "Zealots",
  "faction.full.zealots": "The Zealots Of Rhodun",
  "planet.poh": "Poh",
  "planet.orad": "Orad",
  "technology.name.sanctification_field": "Sanctification Field",
  "technology.name.pilgrimage_beacons": "Pilgrimage Beacons",
  "unit.flagship.reckoning": "Reckoning",
  "unit.mech.templar": "Templar",
};


const factions = [{
    faction: "zealots",
    abilities: [
        "conspirators",
        "ancient_knowledge",
    ],
    commodities: 3,
    home: 3224,
    leaders: {
        agents: ["priestess_tuh"],
        commanders: ["bishop_ulin"],
        heroes: ["saint_binal"],
    },
    promissoryNotes: ["favor_of_zealots"],
    //icon: "discordant-stars/faction-icons/zealots.png",
    source: "homebrew.discordant_stars",
    startingTech: [],
    startingUnits: {
        carrier: 1,
        cruiser: 1,
        fighter: 3,
        infantry: 4,
        destroyer: 1,
        space_dock: 1,
    },
    techs: ["sanctification_field", "pilgrimage_beacons"],
    units: [
        "reckoning",
        "templar",
    ],
  packageId: refPackageId,
}];

 const nsidToTemplateId = {
    "sheet.faction:homebrew.discordant_stars/zealots":
      "60A4F8964A3FC41C03551797DBE57F92",
    "tile.system:homebrew.discordant_stars/3224":
      "819715212DA746268C281C3B2259FCBE",
    "token.command:homebrew.discordant_stars/zealots":
      "9FF20E2A441141EF3F48B799FF66EB74",
    "token.control:homebrew.discordant_stars/zealots":
      "A202270546BEF2F45CE81AA7240C5780",
};

const technologies = [{
  localeName: "technology.name.sanctification_field",
  cardNsid:
    "card.technology.yellow.zealots:homebrew.discordant_stars/sanctification_field",
  type: "Yellow",
  requirements: { Yellow: 3 },
  source: "homebrew.discordant_stars",
  faction: "zealots",
},{
  localeName: "technology.name.pilgrimage_beacons",
  cardNsid:
    "card.technology.blue.zealots:homebrew.discordant_stars/pilgrimage_beacons",
  type: "Blue",
  requirements: { Blue: 2 },
  source: "homebrew.discordant_stars",
  faction: "zealots",
},
];

const systems = [
  {
    tile: 3224,
    source: "homebrew.discordant_stars",
    home: true,
    planets: [
      { localeName: "planet.poh", resources: 2, influence: 0 },
      { localeName: "planet.orad", resources: 3, influence: 1 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.reckoning",
    triggerNsid:
      "card.technology.unit_upgrade.zealots:franken.discordant_stars/reckoning",
    spaceCombat: { dice: 2, hit: 7 },
    capacity: 6,
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.templar",
    triggerNsid: "card.leader.mech.zealots:homebrew.discordant_stars/templar",
  },
];

const unitModifiers = [];

console.log("DISCORDANT STARS ADDING zealots");
world.TI4.homebrew.inject({
  localeStrings,
  factions,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
