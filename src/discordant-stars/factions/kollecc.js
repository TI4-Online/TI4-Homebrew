const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.kollecc": "Kollecc",
  "faction.full.kollecc": "The Kollecc Society",
  "planet.susuros": "Susuros",
  "technology.name.seeker_drones": "Seeker Drones",
  "technology.name.shrouded_skirmishers": "Shrouded Skirmishers",
  "unit.flagship.nightingale_v": "nightingale_v",
  "unit.mech.nightshade_vanguard": "nightshade_vanguard",
};

const factions = [
  {
    faction: "kollecc",
    abilities: ["cloaked_fleets", "shroud_of_lith", "treasure_hunters"],
    commodities: 3,
    home: 3223,
    leaders: {
      agents: ["captain dust"],
      commanders: ["kado s’mah-qar"],
      heroes: ["dorrahn griphyn"],
    },
    promissoryNotes: ["ai_survey"],
    icon: "discordant-stars/faction-icons/kollecc.png",
    source: "homebrew.discordant_stars",
    startingTech: ["scanlink_drone_network"],
    startingUnits: {
      carrier: 2,
      cruiser: 1,
      fighter: 2,
      infantry: 4,
      space_dock: 1,
    },
    techs: ["seeker_drones", "shrouded_skirmishers"],
    units: ["nightingale_v", "nightshade_vanguard"],
    packageId: refPackageId,
  },
];

const factionAbilities = [
  {
    name: "Cloaked Fleets",
    description:
      "After you produce 1 or more ships, you may place up to 2 of those ships on your faction sheet, those ships are captured.",
    source: "Kollecc (DS)",
  },
  {
    name: "Shroud of Lith",
    description:
      "After movement, if the active system contains 1 or more of your non-fighter ships, you may place up to 2 of your captured ships and 2 of your captured ground forces from your faction sheet in that system’s space area.",
    source: "Kollecc (DS)",
  },
  {
    name: "Treasure Hunters",
    description:
      "At the start of your turn, you may look at the top card of the cultural, hazardous, or industrial exploration deck. Then, look at the top card of the relic deck.",
    source: "Kollecc (DS)",
  },
];

const nsidToTemplateId = {
  "sheet.faction:homebrew.discordant_stars/kollecc":
    "48130FE44B136EB72AD74193E401DBF1",
  "tile.system:homebrew.discordant_stars/3223":
    "F61083209FB643A395790E821767AE4D",
  "token.command:homebrew.discordant_stars/kollecc":
    "7FDF1BE74FE79BD6156DD082D25769C8",
  "token.control:homebrew.discordant_stars/kollecc":
    "F5BDEAD74D6021C2ECE644BEAA32D92E",
};

const technologies = [
  {
    localeName: "technology.name.seeker_drones",
    cardNsid:
      "card.technology.yellow.kollecc:homebrew.discordant_stars/seeker_drones",
    type: "Yellow",
    requirements: { Yellow: 2 },
    source: "homebrew.discordant_stars",
    faction: "kollecc",
  },
  {
    localeName: "technology.name.shrouded_skirmishers",
    cardNsid:
      "card.technology.blue.kollecc:homebrew.discordant_stars/shrouded_skirmishers",
    type: "Blue",
    requirements: { Blue: 1 },
    source: "homebrew.discordant_stars",
    faction: "kollecc",
  },
];

const systems = [
  {
    tile: 3223,
    source: "homebrew.discordant_stars",
    home: true,
    packageId: refPackageId,
    img: "discordant-stars/tiles/homeworld/tile_3223.jpg",
    planets: [{ localeName: "planet.susuros", resources: 4, influence: 4 }],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.nightingale_v",
    triggerNsid:
      "card.technology.unit_upgrade.kollecc:franken.discordant_stars/nightingale_v",
    spaceCombat: { dice: 2, hit: 5 },
    capacity: 6,
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.nightshade_vanguard",
    triggerNsid:
      "card.leader.mech.kollecc:homebrew.discordant_stars/nightshade_vanguard",
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
