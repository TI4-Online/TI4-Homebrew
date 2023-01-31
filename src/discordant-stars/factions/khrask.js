const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.khrask": "Khrask",
  "faction.full.khrask": "The L'Tokk Khrask",
  "planet.bohldhur": "Bohl-Dhur",
  "technology.name.stones_embrace": "Stones Embrace",
  "unit.flagship.splintering_gale": "Splintering Gale",
  "unit.mech.megalith": "megalith",
};


const factions = [{
  faction: "khrask",
  abilities: [
      "lithoids",
      "garden_worlds",
      "meteor_slings",
  ],
  commodities: 2,
  home: 3222,
  leaders: {
      agents: ["udosh_brtul"],
      commanders: ["hkot_tokal"],
      heroes: ["vehl_tikar"],
  },
  promissoryNotes: ["stone_speakers"],
  icon: "discordant-stars/faction-icons/khrask.jpg",
  source: "homebrew.discordant_stars",
  startingTech: ["scanlink_drone_network", "plasma_scoring"],
  startingUnits: {
      cruiser: 3,
      fighter: 1,
      infantry: 3,
      pds: 1,
      space_dock: 1,
  },
  techs: ["stones_embrace"],
  units: [
      "splintering_gale",
      "shattered_sky",
      "shattered_sky_2",
      "megalith",
  ],
  packageId: refPackageId,
}];

 const nsidToTemplateId = {
    "sheet.faction:homebrew.discordant_stars/khrask":
      "D470A857461BB977E6B56CB33FE00B4D",
    "tile.system:homebrew.discordant_stars/3222":
      "03E16DFF2D1D40B1BBB054F55BB8064F",
    "token.command:homebrew.discordant_stars/khrask":
      "E868EE884B7C6CD56264A886F4D6729C",
    "token.control:homebrew.discordant_stars/khrask":
      "0C57D53846C48BB6246E818FF50ECAA4",
};

const technologies = [{
    localeName: "technology.name.stones_embrace",
    cardNsid:
      "card.technology.Green.khrask:homebrew.discordant_stars/stones_embrace",
    type: "Green",
    requirements: { Green: 2 },
    source: "homebrew.discordant_stars",
    faction: "khrask",
  },
  {
    localeName: "unit.shattered_sky_2",
    cardNsid: "card.technology.unit_upgrade.khrask:homebrew.discordant_stars/shattered_sky_2",
    type: "unitUpgrade",
    requirements: { Red: 1, Yellow: 1, Green: 1 },
    abbrev: " SS II",
    faction: "khrask",
    unitPosition: 0,
  },
];

const systems = [
  {
    tile: 3222,
    source: "homebrew.discordant_stars",
    home: true,
    planets: [
        { localeName: "planet.bohldhur", resources: 3, influence: 4 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.splintering_gale",
    triggerNsid:
      "card.technology.unit_upgrade.khrask:franken.discordant_stars/splintering_gale",
    spaceCombat: { dice: 2, hit: 7 },
    capacity: 6,
  },
  {
    unit: "cruiser",
    upgradeLevel: 1,
    localeName: "unit.cruiser.shattered_sky",
    triggerNsid: "card.technology.unit_upgrade.khrask:franken.discordant_stars/shattered_sky",
    bombardment: { dice: 1, hit: 7 },
  },
  {
    unit: "cruiser",
    upgradeLevel: 2,
    localeName: "unit.cruiser.shattered_sky_2",
    triggerNsid: "card.technology.unit_upgrade.khrask:homebrew.discordant_stars/shattered_sky_2",
    bombardment: { dice: 1, hit: 6 },
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.megalith",
    triggerNsid: "card.leader.mech.khrask:homebrew.discordant_stars/megalith",
  },
];

const unitModifiers = [];

console.log("DISCORDANT STARS ADDING KHRASK");
world.TI4.homebrew.inject({
  localeStrings,
  factions,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
