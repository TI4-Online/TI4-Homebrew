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
  promissoryNotes: ["secrets_of_the_weave"],
  //icon: "discordant-stars/faction-icons/ghoti.png",
  source: "discordant_stars",
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
    // This is a stack of cards (planet & legendary)
    tokenNsid: "card.ghoti:homebrew.discordant_stars/0"
  }],
}];

 const nsidToTemplateId = {
    "sheet.faction:homebrew.discordant_stars/ghoti":
      "XXXXXXX",
    "tile.system:homebrew.discordant_stars/3232":
      "XXXXXXX",
    "token.command:homebrew.discordant_stars/ghoti":
      "XXXXXXX",
    "token.control:homebrew.discordant_stars/ghoti":
      "XXXXXXX",
    "card.ghoti:homebrew.discordant-stars/0":
      "XXXXXXX",
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
