const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.ghoti": "Ghoti",
  "faction.full.ghoti": "",
  "planet.ghoti": "ghoti",
  "technology.name.networked_command": "Networked Command",
  "technology.name.parallel_production": "Parallel Production",
  "unit.flagship.all_mother": "All Mother",
  "unit.mech.tioleombp": "Tioleombp",
};


const factions = [{
  faction: "ghoti",
  abilities: [
    "mobile_command",
    "spawning_grounds",
    "all_mothers_embrace",
  ],
  commodities: 4,
  home: 3232,
  leaders: {
    agents: ["becece"],
    commanders: ["ceie_dolegueaunm"],
    heroes: ["nmenmede"],
  },
  promissoryNotes: ["ghoti_relay"],
  icon: "discordant-stars/faction-icons/ghoti.png",
  source: "homebrew.discordant_stars",
  startingTech: ["gravity_drive", "sling_relay"],
  startingUnits: {
    flagship: 1,
    cruiser: 1,
    fighter: 2,
    infantry: 3,
  },
  techs: ["networked_command", "parallel_production"],
  units: ["all_mother", "tioleombp"],
  packageId: refPackageId,
  unpackExtra: [{
    tokenNsid: "card.ghoti:homebrew.discordant_stars/0"
  },{
    tokenNsid: "card.ghoti:homebrew.discordant_stars/1"
  },],
 
}];

 const nsidToTemplateId = {
    "sheet.faction:homebrew.discordant_stars/ghoti":
      "B914AC224E9C7D563B8B1DA8B0DACE73",
    "tile.system:homebrew.discordant_stars/3232":
      "3345D54A43F11698476A1C9489A51CC7",
    "token.command:homebrew.discordant_stars/ghoti":
      "FC45996647F32A9B68972C9243A379CE",
    "token.control:homebrew.discordant_stars/ghoti":
      "1A74F12646A5156484F70AA345F4BD7B",
    "card.ghoti:homebrew.discordant_stars/0":
      "A01D2D674BABC0EB5FBD96988E88F5F5",
    "card.ghoti:homebrew.discordant_stars/1":
      "38554059466E2AD0F53CA7B683FFC56D",
};

const technologies = [{
    localeName: "technology.name.networked_command",
    cardNsid:
      "card.technology.green.ghoti:homebrew.discordant_stars/networked_command",
    type: "Green",
    requirements: { Green: 1 },
    source: "homebrew.discordant_stars",
    faction: "ghoti",
  }, {
    localeName: "technology.name.parallel_production",
    cardNsid:
        "card.technology.yellow.ghoti:homebrew.discordant_stars/parallel_production",
    type: "Yellow",
    requirements: { Yellow: 1 },
    source: "homebrew.discordant_stars",
    faction: "ghoti",
  },
];

const systems = [
  {
    tile: 3232,
    source: "homebrew.discordant_stars",
    home: true,
    planets: [],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.all_mother",
    triggerNsid:
      "card.technology.unit_upgrade.ghoti:franken.discordant_stars/all_mother",
    spaceCombat: { dice: 2, hit: 7 },
    capacity: 5,
    production: 3, // TODO: calculate based on the fleet pool
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.tioleombp",
    triggerNsid: "card.leader.mech.ghoti:homebrew.discordant_stars/tioleombp",
  },
];

const unitModifiers = [];

console.log("DISCORDANT STARS ADDING GHOTI");
world.TI4.homebrew.inject({
  localeStrings,
  factions,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
