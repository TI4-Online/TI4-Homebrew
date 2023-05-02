const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.mortheus": "Mortheus",
  "faction.full.mortheus": "The Glimmer of Mortheus",
  "planet.biaheo": "Biaheo",
  "planet.empero": "Empero",
  "technology.name.fractal_plating": "Fractal Plating",
  "technology.name.fabrication_grid": "Fabrication Grid",
  "unit.flagship.particle_sieve": "Particle Sieve",
  "unit.mech.MECHID": "MECH",
};

const factions = [
  {
    faction: "mortheus",
    abilities: ["facsimile", "illusory_presence"],
    commodities: 3,
    home: 3207,
    leaders: {
      agents: ["walik"],
      commanders: ["komat"],
      heroes: ["bayan"],
    },
    promissoryNotes: ["secrets_of_the_weave"],
    icon: "discordant-stars/faction-icons/mortheus.png",
    source: "homebrew.discordant_stars",
    startingTech: ["dark_energy_tap", "sarween_tools"],
    startingUnits: {
      dreadnought: 1,
      carrier: 1,
      destroyer: 1,
      fighter: 2,
      infantry: 3,
      space_dock: 1,
    },
    techs: ["fractal_plating", "fabrication_grid"],
    units: ["particle_sieve", "duuban"],
    packageId: refPackageId,
  },
];

const factionAbilities = [
  {
    name: "Facsimile",
    description:
      "At the start of a space combat while you are not the active player, choose 1 of your opponent's ships in the active system, you may produce 1 unit of that type in that system, spending influence instead of resources.",
    source: "Mortheus (DS)",
  },
  {
    name: "Illusory Presence",
    description:
      "During the agenda phase, after another player casts votes, you may exhaust up to 2 planets you control; that player casts an additional number of votes equal to 1 more than the combined influence values of those planets.",
    source: "Mortheus (DS)",
  },
];

const nsidToTemplateId = {
  "sheet.faction:homebrew.discordant_stars/mortheus":
    "4A4C72994D754F67E9587E913950D35A",
  "tile.system:homebrew.discordant_stars/3207":
    "615DC76F745F4D668B502F5DDB91D27D",
  "token.command:homebrew.discordant_stars/mortheus":
    "8E5E183E4B1DC7DA0B07809C635C4DB7",
  "token.control:homebrew.discordant_stars/mortheus":
    "FD7834BC44A641B41E5DBD83E4C8AF58",
};

const technologies = [
  {
    localeName: "technology.name.fractal_plating",
    cardNsid:
      "card.technology.COLOR.mortheus:homebrew.discordant_stars/fractal_plating",
    type: "Red",
    requirements: { Red: 2 },
    source: "homebrew.discordant_stars",
    faction: "mortheus",
  },
  {
    localeName: "technology.name.fabrication_grid",
    cardNsid:
      "card.technology.yellow.mortheus:homebrew.discordant_stars/fabrication_grid",
    type: "Yellow",
    requirements: { Yellow: 2 },
    source: "homebrew.discordant_stars",
    faction: "mortheus",
  },
];

const systems = [
  {
    tile: 3207,
    source: "homebrew.discordant_stars",
    home: true,
    packageId: refPackageId,
    img: "discordant-stars/tiles/homeworld/tile_3207.jpg",
    planets: [
      { localeName: "planet.biaheo", resources: 3, influence: 0 },
      { localeName: "planet.empero", resources: 0, influence: 3 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.particle_sieve",
    triggerNsid:
      "card.technology.unit_upgrade.mortheus:franken.discordant_stars/particle_sieve",
    spaceCombat: { dice: 2, hit: 7 },
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.duuban",
    triggerNsid: "card.leader.mech.mortheus:homebrew.discordant_stars/duuban",
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
