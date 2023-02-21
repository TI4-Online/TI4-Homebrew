const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.vaden": "Vaden",
  "faction.full.vaden": "The Vaden Banking Clans",
  "planet.norvus": "norvus",
  "planet.vadarian": "vadarian",
  "technology.name.midas_turbine": "midas_turbine",
  "technology.name.krovoz_strike_teams": "krovoz_strike_teams",
  "unit.flagship.aurum_vadra": "Aurum Vadra",
  "unit.mech.collector": "Collector",
};


const factions = [{
  faction: "vaden",
  abilities: [
    "fine_print",
    "collateralized_loans",
    "binding_debts",
  ],
  commodities: 3,
  home: 3206,
  leaders: {
    agents: ["yudri_sukhov"],
    commanders: ["komdar_borodin"],
    heroes: ["putriv_sirvonsk"],
  },
  promissoryNotes: ["vaden_handshake"],
  icon: "discordant-stars/faction-icons/vaden.png",
  source: "homebrew.discordant_stars",
  // startingTechChoice: "vaden",
  startingTech: [], //"neural_motivator", "antimass_deflectors", "sarween_tools"],
  startingUnits: {
    dreadnought: 1,
    carrier: 1,
    cruiser: 1,
    fighter: 2,
    infantry: 3,
    space_dock: 1,
  },
  techs: ["midas_turbine", "krovoz_strike_teams"],
  units: [
    "aurum_vadra",
    "collector",
  ],
  packageId: refPackageId,
}];

 const nsidToTemplateId = {
    "sheet.faction:homebrew.discordant_stars/vaden":
      "F93124B441A5119AE249F68C1D4B3824",
    "tile.system:homebrew.discordant_stars/3206":
      "9F83BC9B59F1461B96F525398E21C400",
    "token.command:homebrew.discordant_stars/vaden":
      "11BC808047DC273097A15194C47E941C",
    "token.control:homebrew.discordant_stars/vaden":
      "EB28C1574C11B816895096BDC8D0B9D6",
};

const technologies = [{
    localeName: "technology.name.turbine",
    cardNsid:
      "card.technology.blue.vaden:homebrew.discordant_stars/turbine",
    type: "Blue",
    requirements: { Blue: 1 },
    source: "homebrew.discordant_stars",
    faction: "vaden",
  }, {
    localeName: "technology.name.krovoz_strike_teams",
    cardNsid:
        "card.technology.yellow.krovoz_strike_teams:homebrew.discordant_stars/krovoz_strike_teams",
    type: "Yellow",
    requirements: { Yellow: 2 },
    source: "homebrew.discordant_stars",
    faction: "vaden",
  },
];

const systems = [
  {
    tile: 3206,
    source: "homebrew.discordant_stars",
    home: true,
    packageId: refPackageId,
    img: "discordant-stars/tiles/homeworld/tile_3206.jpg",
    planets: [
      { localeName: "planet.vadarian", resources: 3, influence: 0 },
      { localeName: "planet.norvus", resources: 1, influence: 2 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.aurum_vadra",
    triggerNsid:
      "card.technology.unit_upgrade.vaden:franken.discordant_stars/aurum_vadra",
    spaceCombat: { dice: 2, hit: 7 },
    bombardment: { dice: 2, hit: 5 },
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.collector",
    triggerNsid: "card.leader.mech.vaden:homebrew.discordant_stars/collector",
  },
];

const unitModifiers = [];

console.log("DISCORDANT STARS ADDING VADEN");
world.TI4.homebrew.inject({
  localeStrings,
  factions,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
