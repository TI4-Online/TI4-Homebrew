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

const factions = [
  {
    faction: "ghoti",
    abilities: ["mobile_command", "spawning_grounds", "all_mothers_embrace"],
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
    startingTechChoice: "ghoti",
    startingTechChoices: ["gravity_drive", "sling_relay"],
    startingTech: [],
    startingUnits: {
      flagship: 1,
      cruiser: 1,
      fighter: 2,
      infantry: 3,
    },
    techs: ["networked_command", "parallel_production"],
    units: ["all_mother", "tioleombp"],
    packageId: refPackageId,
    unpackExtra: [
      {
        tokenNsid: "card.ghoti:homebrew.discordant_stars/0",
      },
      {
        tokenNsid: "card.ghoti:homebrew.discordant_stars/1",
      },
    ],
  },
];

const factionAbilities = [
  {
    name: "Mobile Command",
    description:
      "When you create the game board, place the Ghoti Space tile where your home system would normally be placed. The Ghoti Space system is not a home system. The system that contains your flagship is your home system. You may not score public objectives if your flagship is not on the game board.",
    source: "Ghoti (DS)",
  },
  {
    name: "Spawning Grounds",
    description:
      "During setup, gain and ready the Ghoti planet card and its legendary planet ability card; you cannot lose those cards.",
    source: "Ghoti (DS)",
  },
];

const factionUndraftable = [
  {
    name: "Ghoti spawning grounds cards",
    nsid: "card.ghoti:homebrew.discordant_stars/0",
    count: 1,
    triggerAbility: "Spawning Grounds",
  },
  {
    name: "Ghoti spawning grounds cards",
    nsid: "card.ghoti:homebrew.discordant_stars/1",
    count: 1,
    triggerAbility: "Spawning Grounds",
  },
];

const nsidToTemplateId = {
  "sheet.faction:homebrew.discordant_stars/ghoti":
    "B914AC224E9C7D563B8B1DA8B0DACE73",
  "tile.system:homebrew.discordant_stars/3232":
    "3345D54A43F11698476A1C9489A51CC7",
  "token.command:homebrew.discordant_stars/ghoti":
    "FC45996647F32A9B68972C9243A379CE",
  "token.control:homebrew.discordant_stars/ghoti":
    "1A74F12646A5156484F70AA345F4BD7B",
  "card.ghoti:homebrew.discordant_stars/0": "A01D2D674BABC0EB5FBD96988E88F5F5",
  "card.ghoti:homebrew.discordant_stars/1": "38554059466E2AD0F53CA7B683FFC56D",
};

const technologies = [
  {
    localeName: "technology.name.networked_command",
    cardNsid:
      "card.technology.green.ghoti:homebrew.discordant_stars/networked_command",
    type: "Green",
    requirements: { Green: 1 },
    source: "homebrew.discordant_stars",
    faction: "ghoti",
  },
  {
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
    packageId: refPackageId,
    img: "discordant-stars/ui/tiles/tile_3232.png",
    planets: [],
  },
  {
    // must register planet in a system for detection
    tile: -3232,
    source: "homebrew.discordant_stars",
    packageId: refPackageId,
    img: "discordant-stars/ui/tiles/tile_-2.png",
    planets: [
      {
        localeName: "planet.ghoti",
        resources: 3,
        influence: 3,
      },
    ],
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

// TODO: add vote count for the networked command tech

world.TI4.homebrew.inject({
  localeStrings,
  factions,
  factionAbilities,
  factionUndraftable,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
