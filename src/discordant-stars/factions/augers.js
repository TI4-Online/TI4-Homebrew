const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.augers": "Augers",
  "faction.full.augers": "The Augurs Of Ilyxum",
  "planet.demis": "Demis",
  "planet.chrion": "Chrion",
  "technology.name.psychographics": "Psychographics",
  "technology.name.sentient_datapool": "Sentient Datapool",
  "unit.flagship.nemsys": "Nemsys",
  "unit.mech.iledrith": "Iledrith",
};

const factions = [{
  faction: "augers",
  abilities: [
    "oracle_ai",
    "limited_vision",
    "probability_algorithms",
  ],
  commodities: 3,
  home: 3208,
  leaders: {
    agents: ["clodho"],
    commanders: ["lachis"],
    heroes: ["atropha"],
  },
  promissoryNotes: ["read_the_fates"],
  icon: "discordant-stars/faction-icons/augers.png",
  source: "homebrew.discordant_stars",
  startingTech: ["scanlink_drone_network", "ai_development_algorithm"],
  startingUnits: {
    carrier: 1,
    destroyers: 2,
    fighter: 2,
    infantry: 4,
    pds: 1,
    space_dock: 1,
  },
  techs: ["psychographics", "sentient_datapool"],
  units: [
    "nemsys",
    "iledrith",
  ],
  packageId: refPackageId,
}];

 const nsidToTemplateId = {
    "sheet.faction:homebrew.discordant_stars/augers":
      "657B6BE447C76A7F2AA6019407863E5B",
    "tile.system:homebrew.discordant_stars/3208":
      "152C3545E9F246048D0215F7CBA63D6D",
    "token.command:homebrew.discordant_stars/augers":
      "F771FF974971D1FD1362E09380F06B0B",
    "token.control:homebrew.discordant_stars/augers":
      "E02C123942347B03BD7074B2F481DE99",
};

const technologies = [{
    localeName: "technology.name.sentient_datapool",
    cardNsid:
        "card.technology.yellow.augers:homebrew.discordant_stars/sentient_datapool",
    type: "Yellow",
    requirements: { Yellow: 2 },
    source: "homebrew.discordant_stars",
    faction: "augers",
  }, {
    localeName: "technology.name.psychographics",
      cardNsid:
  "card.technology.green.augers:homebrew.discordant_stars/psychographics",
      type: "Green",
      requirements: { Green: 3 },
  source: "homebrew.discordant_stars",
      faction: "augers",
  },
];

const systems = [
  {
    tile: 3208,
    source: "homebrew.discordant_stars",
    home: true,
    planets: [
      { localeName: "planet.demis", resources: 2, influence: 2 },
      { localeName: "planet.chrion", resources: 2, influence: 3 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.nemsys",
    triggerNsid:
      "card.technology.unit_upgrade.augers:franken.discordant_stars/nemsys",
    spaceCombat: { dice: 1, hit: 5 },
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.iledrith",
    triggerNsid: "card.leader.mech.augers:homebrew.discordant_stars/iledrith",
  },
];

const unitModifiers = [];

console.log("DISCORDANT STARS ADDING AUGERS");
world.TI4.homebrew.inject({
  localeStrings,
  factions,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
