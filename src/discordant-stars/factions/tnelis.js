const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.tnelis": "Tnelis",
  "faction.full.tnelis": "The Tnelis Syndicate",
  "planet.discordia": "Discordia",
  "technology.name.daedalon_flight_system": "Daedalon Flight System",
  "unit.flagship.principia_aneris": "Principia Aneris",
  "unit.mech.daedalon": "Daedalon",
};


const factions = [{
  faction: "tnelis",
  abilities: [
    "plausible_deniability",
    "information_brokers",
    "stealth_insertion",
  ],
  commodities: 2,
  home: 3212,
  leaders: {
    agents: ["davish_snorri"],
    commanders: ["fillipo_rois"],
    heroes: ["turra_sveyar"],
  },
  promissoryNotes: ["plots_within_plots"],
  icon: "discordant-stars/faction-icons/tnelis.png",
  source: "homebrew.discordant_stars",
  startingTech: ["neural_motivator", "antimass_deflectors", "plasma_scoring"],
  startingUnits: {
    carrier: 1,
    destroyer: 2,
    fighter: 2,
    infantry: 4,
    pds: 1,
    space_dock: 1,
  },
  techs: ["daedalon_flight_system"],
  units: [
    "principia_aneris",
    "daedalon",
    "blockade_runner",
    "blockade_runner_2",
  ],
  packageId: refPackageId,
}];

 const nsidToTemplateId = {
    "sheet.faction:homebrew.discordant_stars/tnelis":
      "8A849C90477BE025EB3DA89FA077CC8B",
    "tile.system:homebrew.discordant_stars/3212":
      "2EC81B92A6974C8FA215E62235671284",
    "token.command:homebrew.discordant_stars/tnelis":
      "2C112E1845AD443288D703AC4D773770",
    "token.control:homebrew.discordant_stars/tnelis":
      "1FF8D16242C17ED0E40B2598C37591E7",
};

const technologies = [{
    localeName: "technology.name.daedalon_flight_system",
    cardNsid:
      "card.technology.yellow.tnelis:homebrew.discordant_stars/daedalon_flight_system",
    type: "Yellow",
    requirements: { Yellow: 1 },
    source: "homebrew.discordant_stars",
    faction: "tnelis",
  }, {
    localeName: "unit.blockade_runner_2",
    cardNsid: "card.technology.unit_upgrade.tnelis:homebrew.discordant_stars/blockade_runner_2",
    type: "unitUpgrade",
    requirements: { Red: 2 },
    abbrev: " BR II",
    faction: "tnelis",
    unitPosition: 0,
  },
];

const systems = [
  {
    tile: 3212,
    source: "homebrew.discordant_stars",
    home: true,
    planets: [
        { localeName: "planet.discordia", resources: 4, influence: 1 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.principia_aneris",
    triggerNsid:
      "card.technology.unit_upgrade.tnelis:franken.discordant_stars/principia_aneris",
    spaceCombat: { dice: 9, hit: 4 },
    move: 2,
  },
  {
    unit: "destroyer",
    upgradeLevel: 1,
    localeName: "unit.destroyer.blockade_runner",
    triggerNsid: "card.technology.unit_upgrade.tnelis:franken.discordant_stars/blockade_runner",
    antiFighterBarrage: { dice: 3, hit: 9 },
  },
  {
    unit: "destroyer",
    upgradeLevel: 2,
    localeName: "unit.destroyer.blockade_runner_2",
    triggerNsid: "card.technology.unit_upgrade.tnelis:homebrew.discordant_stars/blockade_runner_2",
    antiFighterBarrage: { dice: 4, hit: 6 },
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.daedalon",
    triggerNsid: "card.leader.mech.tnelis:homebrew.discordant_stars/daedalon",
  },
];

const unitModifiers = [];

console.log("DISCORDANT STARS ADDING TNELIS");
world.TI4.homebrew.inject({
  localeStrings,
  factions,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
