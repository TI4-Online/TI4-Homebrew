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

const factions = [
  {
    faction: "vaden",
    abilities: ["fine_print", "collateralized_loans", "binding_debts"],
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
    startingTechChoice: "vaden",
    startingTechChoices: [
      "neural_motivator",
      "antimass_deflectors",
      "sarween_tools",
    ],
    startingTech: [],
    startingUnits: {
      carrier: 1,
      cruiser: 1,
      dreadnought: 1,
      fighter: 2,
      infantry: 3,
      space_dock: 1,
    },
    techs: ["midas_turbine", "krovoz_strike_teams"],
    units: ["aurum_vadra", "collector"],
    packageId: refPackageId,
  },
];

const factionAbilities = [
  {
    name: "Fine Print",
    description:
      "After a player resolves the secondary ability of 1 of your strategy cards, place up to 1 of their control tokens on your faction sheet.",
    source: "Vaden (DS)",
  },
  {
    name: "Collateralized Loans",
    description:
      "After 1 of your opponent’s ships is destroyed during a round of space combat, you may remove 1 of that player’s control tokens from your faction sheet to place 1 ship of that type from your reinforcements in the active system.",
    source: "Vaden (DS)",
  },
  {
    name: "Binding Debts",
    description:
      "Other players may place their control tokens on your faction sheet at any time. At the start of the status phase, each of your neighbors may give you 1 trade good to remove up to 2 of their control tokens from your faction sheet.",
    source: "Vaden (DS)",
  },
];

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

const technologies = [
  {
    localeName: "technology.name.midas_turbine",
    cardNsid: "card.technology.blue.vaden:homebrew.discordant_stars/turbine",
    type: "Blue",
    requirements: { Blue: 1 },
    source: "homebrew.discordant_stars",
    faction: "vaden",
  },
  {
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
    img: "discordant-stars/ui/tiles/tile_3206.png",
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

world.TI4.homebrew.inject({
  localeStrings,
  factions,
  factionAbilities,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
