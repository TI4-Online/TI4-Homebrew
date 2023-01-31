const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.vaylerian": "Vaylerian",
  "faction.full.vaylerian": "The Vaylerian Scourge",
  "planet.vaylar": "vaylar",
  "technology.name.scavenger_exos": "Scavenger Exos",
  "unit.flagship.lost_cause": "Lost Cause",
  "unit.mech.eclipse": "Eclipse",
};


const factions = [{
  faction: "vaylerian",
  abilities: [
    "cargo raiders",
    "scour",
    "raze",
  ],
  commodities: 2,
  home: 3216,
  leaders: {
    agents: ["yvin_korduul"],
    commanders: ["pyndil_gonsuul"],
    heroes: ["dyln_harthuul"],
  },
  promissoryNotes: ["clans_favor"],
  icon: "discordant-stars/faction-icons/vaylerian.jpg",
  source: "homebrew.discordant_stars",
  startingTech: ["neural_motivator", "dark_energy_tap"],
  startingUnits: {
    carrier: 1,
    cruiser: 1,
    fighter: 3,
    infantry: 3,
    pds: 1,
    space_dock: 1,
  },
  techs: ["scavenger_exos"],
  units: [
    "lost_cause",
    "raider",
    "raider_2",
    "eclipse",
  ],
  packageId: refPackageId,
}];

 const nsidToTemplateId = {
    "sheet.faction:homebrew.discordant_stars/vaylerian":
      "643982334DDC9455D5AC7DBF7A0F1C4D",
    "tile.system:homebrew.discordant_stars/3216":
      "072DCEE6DDAB44E3BA26706A31EE0E45",
    "token.command:homebrew.discordant_stars/vaylerian":
      "68BCD71440443EEB3520649096F77592",
    "token.control:homebrew.discordant_stars/vaylerian":
      "24491709479ABDAC9F73BF804E6C8B5D",
};

const technologies = [{
    localeName: "technology.name.scavenger_exos",
    cardNsid:
      "card.technology.red.vaylerian:homebrew.discordant_stars/scavenger_exos",
    type: "Red",
    requirements: { Red: 1 },
    source: "homebrew.discordant_stars",
    faction: "vaylerian",
  }, {
    localeName: "unit.raider_2",
    cardNsid: "card.technology.unit_upgrade.vaylerian:homebrew.discordant_stars/raider_2",
    type: "unitUpgrade",
    requirements: { Red: 1, Yellow: 1, Green: 1 },
    abbrev: " XX II",
    faction: "vaylerian",
    unitPosition: 0,
  },
];

const systems = [
  {
    tile: 3216,
    source: "homebrew.discordant_stars",
    home: true,
    planets: [
        { localeName: "planet.vaylar", resources: 3, influence: 2 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.lost_cause",
    triggerNsid:
      "card.technology.unit_upgrade.vaylerian:franken.discordant_stars/lost_cause",
    spaceCombat: { dice: 2, hit: 7 },
    move: 2,
  },
  {
    unit: "cruiser",
    upgradeLevel: 1,
    localeName: "unit.cruiser.raider",
    triggerNsid: "card.technology.unit_upgrade.vaylerian:franken.discordant_stars/raider",
    capacity: 1
  },
  {
    unit: "cruiser",
    upgradeLevel: 2,
    localeName: "unit.cruiser.raider_2",
    triggerNsid: "card.technology.unit_upgrade.vaylerian:homebrew.discordant_stars/raider_2",
    antiFighterBarrage: { dice: 2, hit: 6 },
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.eclipse",
    triggerNsid: "card.leader.mech.vaylerian:homebrew.discordant_stars/eclipse",
  },
];

const unitModifiers = [];

console.log("DISCORDANT STARS ADDING VAYLERIAN");
world.TI4.homebrew.inject({
  localeStrings,
  factions,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
