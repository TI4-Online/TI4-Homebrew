const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.florzen": "Florzen",
  "faction.full.florzen": "The Florzen Profiteers",
  "planet.delmor": "Delmor",
  "planet.kyd": "Kyd",
  "technology.name.blackmail_programs": "Blackmail Programs",
  "technology.name.corsair_2": "Corsair II",
  "unit.flagship.man_o_war": "Man o` War",
  "unit.mech.privateer": "Privateer",
};

const factions = [{
  faction: "florzen",
  abilities: [
    "mercenaries",
    "data_leak",
    "black_markets",
  ],
  commodities: 4,
  home: 3217,
  leaders: {
    agents: ["sal_gavda"],
    commanders: ["quaxdol_junitas"],
    heroes: ["banua_gowen"],
  },
  promissoryNotes: ["blackmail_programs"],
  //icon: "discordant-stars/faction-icons/florzen.png",
  source: "homebrew.discordant_stars",
  startingTech: ["neural_motivator", "scanlink_drone_network"],
  startingUnits: {
    carrier: 2,
    fighter: 4,
    infantry: 4,
    space_dock: 1,
  },
  techs: ["blackmail_programs"],
  units: [
    "man_o_war",
    "corsair",
    "corsair_2",
    "privateer"
  ],
  packageId: refPackageId,
}];

 const nsidToTemplateId = {
    "sheet.faction:homebrew.discordant_stars/florzen":
      "74D69937471106DF8BAA21AA78B770ED",
    "tile.system:homebrew.discordant_stars/3217":
      "C4C4D351119540A7AEC663965FE2837B",
    "token.command:homebrew.discordant_stars/florzen":
      "7C8EE5D049C2C22A80B92C95BADEBD85",
    "token.control:homebrew.discordant_stars/florzen":
      "2EC2FB8C4CACEDEDAA52C2888492183B",
};

const technologies = [{
    localeName: "technology.name.blackmail_programs",
    cardNsid:
      "card.technology.green.florzen:homebrew.discordant_stars/blackmail_programs",
    type: "Green",
    requirements: { Green: 2 },
    source: "homebrew.discordant_stars",
    faction: "florzen",
  },
  {
    localeName: "unit.corsair_2",
    cardNsid: "card.technology.unit_upgrade.florzen:homebrew.discordant_stars/corsair_2",
    type: "unitUpgrade",
    requirements: { Green: 1, Blue: 1 },
    abbrev: " C II",
    faction: "florzen",
    unitPosition: 0,
  },
];

const systems = [
  {
    tile: 3217,
    source: "homebrew.discordant_stars",
    home: true,
    planets: [
      { localeName: "planet.delmor", resources: 2, influence: 1 },
      { localeName: "planet.kyd", resources: 1, influence: 2 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.man_o_war",
    triggerNsid:
      "card.technology.unit_upgrade.florzen:franken.discordant_stars/man_o_war",
    spaceCombat: { dice: 2, hit: 7 },
    capacity: 5,
  },
  {
    unit: "fighter",
    upgradeLevel: 1,
    localeName: "unit.fighter.corsair",
    triggerNsid: "card.technology.unit_upgrade.florzen:franken.discordant_stars/corsair",
    antiFighterBarrage: { dice: 1, hit: 9 },
  },
  {
    unit: "fighter",
    upgradeLevel: 2,
    localeName: "unit.fighter.corsair_2",
    triggerNsid: "card.technology.unit_upgrade.florzen:homebrew.discordant_stars/corsair_2",
    antiFighterBarrage: { dice: 1, hit: 8 },
    move: 3,
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.privateer",
    triggerNsid: "card.leader.mech.florzen:homebrew.discordant_stars/privateer",
  },
];

const unitModifiers = [];

console.log("DISCORDANT STARS ADDING Florzen");
world.TI4.homebrew.inject({
  localeStrings,
  factions,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
