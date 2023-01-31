const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.cymiae": "Cymiae",
  "faction.full.cymiae": "The Savages of Cymiae",
  "planet.cymiae": "Cymiae",
  "technology.name.recursive_worm": "Recursive Worm",
  "unit.flagship.reprocessor_alphareprocessor_alpha": "Reprocessor Alpha",
  "unit.mech.revenant": "Revenant",
};

const factions = [{
  faction: "cymiae",
  abilities: [
    "autonetic_memory",
    "cybernetic_madness"
  ],
  commodities: 3,
  home: 3213,
  leaders: {
    agents: ["skhot_unit_x12"],
    commanders: ["koryl_ferax"],
    heroes: ["the_voice_united"],
  },
  promissoryNotes: ["algorithmic_replication"],
  icon: "discordant-stars/faction-icons/cymiae.jpg",
  source: "homebrew.discordant_stars",
  startingTech: ["neural_motivator", "ai_development_algorithm"],
  startingUnits: {
    carrier: 1,
    destroyer: 1,
    fighter: 2,
    infantry: 3,
    dreadnought: 1,
    space_dock: 1,
  },
  techs: ["recursive_worm"],
  units: [
    "reprocessor_alpha",
    "unholy_abomination",
    "unholy_abomination_2",
    "revenant"
  ],
  packageId: refPackageId,
}];

 const nsidToTemplateId = {
    "sheet.faction:homebrew.discordant_stars/cymiae":
      "5D5CE68F4F44045AD16133BA5B024308",
    "tile.system:homebrew.discordant_stars/3213":
      "1CDA602307374660B9D29ABE74274553",
    "token.command:homebrew.discordant_stars/cymiae":
      "2ADBCE6C4C2330E4A7AD2195FD8ECEE1",
    "token.control:homebrew.discordant_stars/cymiae":
      "0FCE91884143F9D1CEB0F49C2E507169",
};

const technologies = [{
    localeName: "technology.name.recursive_worm",
    cardNsid:
      "card.technology.Yellow.cymiae:homebrew.discordant_stars/recursive_worm",
    type: "Yellow",
    requirements: { Yellow: 1 },
    source: "homebrew.discordant_stars",
    faction: "cymiae",
  },
  {
    localeName: "unit.unholy_abomination_2",
    cardNsid: "card.technology.unit_upgrade.cymiae:homebrew.discordant_stars/unholy_abomination_2",
    type: "unitUpgrade",
    requirements: { Green: 2 },
    abbrev: " UA II",
    faction: "cymiae",
    unitPosition: 0,
  },
];

const systems = [
  {
    tile: 3213,
    source: "homebrew.discordant_stars",
    home: true,
    planets: [
        { localeName: "planet.cymiae", resources: 3, influence: 1 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.reprocessor_alpha",
    triggerNsid:
      "card.technology.unit_upgrade.cymiae:franken.discordant_stars/reprocessor_alpha",
    spaceCombat: { dice: 2, hit: 9 },
    capacity: 6,
  },
  {
    unit: "infantry",
    upgradeLevel: 1,
    localeName: "unit.infantry.unholy_abomination",
    triggerNsid: "card.technology.unit_upgrade.cymiae:franken.discordant_stars/unholy_abomination",
    antiFighterBarrage: { dice: 1, hit: 5 },
  },
  {
    unit: "infantry",
    upgradeLevel: 2,
    localeName: "unit.infantry.unholy_abomination_2",
    triggerNsid: "card.technology.unit_upgrade.cymiae:homebrew.discordant_stars/unholy_abomination_2",
    antiFighterBarrage: { dice: 1, hit: 4 },
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.revenant",
    triggerNsid: "card.leader.mech.cymiae:homebrew.discordant_stars/revenant",
  },
];

const unitModifiers = [];

console.log("DISCORDANT STARS ADDING CYMIAE");
world.TI4.homebrew.inject({
  localeStrings,
  factions,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
