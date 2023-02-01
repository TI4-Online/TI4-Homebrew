const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.mirveda": "Mirveda",
  "faction.full.mirveda": "The Mirveda Protectorate",
  "planet.Aldra": "Aldra",
  "planet.beata": "Beata",
  "technology.name.orbital_defense_grid": "Orbital Defense Grid",
  "unit.flagship.nexus": "Nexus",
  "unit.mech.javelin": "Javelin",
};


const factions = [{
      faction: "mirveda",
      abilities: [
          "privileged_citizenry",
          "combat_drones",
      ],
      commodities: 3,
      home: 3221,
      leaders: {
          agents: ["logic_machina"],
          commanders: ["assault_machina"],
          heroes: ["wrath_machina"],
      },
      promissoryNotes: ["rapid_assembly"],
      icon: "discordant-stars/faction-icons/mirveda.png",
      source: "homebrew.discordant_stars",
      startingTech: ["ai_development_algorithm"],
      startingUnits: {
          carrier: 2,
          cruiser: 1,
          fighter: 5,
          infantry: 2,
          pds: 1,
          space_dock: 1,
      },
      techs: ["orbital_defense_grid"],
      units: [
          "nexus",
          "gauss_cannon",
          "gauss_cannon_2",
          "javelin",
      ],
  packageId: refPackageId,
}];

 const nsidToTemplateId = {
    "sheet.faction:homebrew.discordant_stars/mirveda":
      "0E038BC94612FCCD2EEF38A731C7DD4B",
    "tile.system:homebrew.discordant_stars/3221":
      "7BB5522CA5F64BFAB43A08CD06949AA3",
    "token.command:homebrew.discordant_stars/mirveda":
      "0DA982044426F25BBE321AB3F179F7AE",
    "token.control:homebrew.discordant_stars/mirveda":
      "65B466EE47AB968069C997AF45D6AA08",
};

const technologies = [{
    localeName: "technology.name.orbital_defense_grid",
    cardNsid:
      "card.technology.COLOR.mirveda:homebrew.discordant_stars/orbital_defense_grid",
    type: "Red",
    requirements: { Red: 2 },
    source: "homebrew.discordant_stars",
    faction: "mirveda",
  },
  {
    localeName: "unit.gauss_cannon_2",
    cardNsid: "card.technology.unit_upgrade.mirveda:homebrew.discordant_stars/gauss_cannon_2",
    type: "unitUpgrade",
    requirements: { Red: 1, Yellow: 1 },
    abbrev: " GC II",
    faction: "mirveda",
    unitPosition: 0,
  },
];

const systems = [
  {
    tile: 3221,
    source: "homebrew.discordant_stars",
    home: true,
    planets: [
      { localeName: "planet.aldra", resources: 2, influence: 3 },
      { localeName: "planet.beata", resources: 2, influence: 1 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.nexus",
    triggerNsid:
      "card.technology.unit_upgrade.mirveda:franken.discordant_stars/nexus",
    spaceCombat: { dice: 2, hit: 9 },
    capacity: 6,
  },
  {
    unit: "pds",
    upgradeLevel: 1,
    localeName: "unit.pds.gauss_cannon",
    triggerNsid: "card.technology.unit_upgrade.mirveda:franken.discordant_stars/gauss_cannon",
    move: 1,
    bombardment: { dice: 1, hit: 6},
  },
  {
    unit: "pds",
    upgradeLevel: 2,
    localeName: "unit.pds.gauss_cannon_2",
    triggerNsid: "card.technology.unit_upgrade.mirveda:homebrew.discordant_stars/gauss_cannon_2",
    move: 2,
    capacity: 1,
    bombardment: { dice: 1, hit: 5},
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.javelin",
    triggerNsid: "card.leader.mech.mirveda:homebrew.discordant_stars/javelin",
  },
];

const unitModifiers = [];

console.log("DISCORDANT STARS ADDING MIRVEDA");
world.TI4.homebrew.inject({
  localeStrings,
  factions,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
