const { world, refPackageId } = require("@tabletop-playground/api");

const nsidToTemplateId = {
  "sheet.faction:homebrew.skunee/lunartiks": "65AC8F3C622449ABB3514BB74A719488",
  "token.command:homebrew.skunee/lunartiks": "0A2704BBE8AD4AC1ACBDC786FCCD1C04",
  "token.control:homebrew.skunee/lunartiks": "40965A0BA78242F89673D990844F81AC",
  "tile.system:homebrew.skunee/3350": "624343F6FA3E46599A0AAC3FFB39C9D9",
  "card.faction_reference:homebrew.skunee/0":
    "D6614E5FFD4742E240C1EDB325A42E10",
  "card.leader:homebrew.skunee/0": "CA6F59F5235E41BE96D847D37E45538A",
  "card.planet:homebrew.skunee/0": "3FFD7DB333284152BBB64B3F97DF4BBF",
  "card.promissory:homebrew.skunee/0": "7AF05E6634E3448E8B2F104A2F1542C7",
  "card.technology:homebrew.skunee/0": "74EC4B26AB184002BD59D720628DF29F",
  "token:homebrew.skunee/lunartiks": "0BCEABB59CFE4910A3F3842E2B300E18",
  "token:homebrew.skunee/tidal_force": "AC6DFA88094B0BC75A0C329748CCE1BB",
  "token:homebrew.skunee/moon_base_alpha": "5138269D8D4D843A6848378D4EF31F8F",
};

const localeStrings = {
  "faction.abbr.lunartiks": "Lunartiks",
  "faction.full.lunartiks": "Lunartiks",
  "planet.htyde": "H Tyde",
  "planet.lotyde": "Lo Tyde",
  "technology.name.orbital_relay_2": "Orbital Relay II",
  "technology.name.ares_orbiter_2": "Ares Orbiter II",
  "unit.flagship.unnatural_satellite": "Unnatural Satellite",
  "unit.mech.ares_orbiter": "Ares Orbiter",
};

const factions = [
  {
    faction: "lunartiks",
    abilities: ["tidal_forces", "orbit", "eclipse"],

    commodities: 3,
    home: 3350,
    icon: "skunee/lunartiks/lunartiks-faction-icon.png",
    leaders: {
      agents: ["inanis"],
      commanders: ["mores_desuper"],
      heroes: ["collapsing_orbit"],
    },
    packageId: refPackageId,
    promissoryNotes: ["ares_orbiter_prototype"],
    source: "homebrew.skunee",
    startingTech: ["self_assembly_routines"],
    startingUnits: {
      carrier: 1,
      dreadnought: 1,
      fighter: 1,
      infantry: 3,
      cruiser: 1,
      space_dock: 1,
    },
    techs: [],
    units: [
      "unnatural_satellite",
      "orbital_relay",
      "ares_orbiter",
      "orbital_relay_2",
      "ares_orbiter_2",
    ],
    unpackExtra: [
      {
        tokenNsid: "token:homebrew.skunee/tidal_force",
        tokenCount: 1,
      },
      {
        tokenNsid: "token:homebrew.skunee/moon_base_alpha",
        tokenCount: 1,
      },
    ],
  },
];

const factionAbilities = [
  {
    name: "Tidal Forces",
    description:
      "Swap the resource and influence values of non-home planets you control.  Place a Tidal Forces token on planets you control.",
    source: "lunartiks",
  },
  {
    name: "Orbit",
    description:
      "ou may activate a system that is adjacent to a supernova and contains 1 of your command tokens.  If you do, you may move all your units in that system’s space area to another system that is adjacent to that supernova and does not contain another player’s ships.",
    source: "lunartiks",
  },
  {
    name: "Eclipse",
    description:
      "After you use your Orbit faction ability, you may redistribute 1 command token in your fleet pool.  If you do, remove a token from your fleet pool.",
    source: "lunartiks",
  },
];

const systems = [
  {
    tile: 3350,
    source: "homebrew.skunee",
    home: true,
    packageId: refPackageId,
    img: "skunee/lunartiks/lunartiks-homesystem.jpg",
    planets: [
      { localeName: "planet.htyde", resources: 4, influence: 0 },
      { localeName: "planet.lotyde", resources: 0, influence: 2 },
    ],
  },
];

const technologies = [
  {
    localeName: "technology.name.orbital_relay_2",
    cardNsid:
      "card.technology.unit_upgrade.lunartiks:homebrew.skunee/orbital_relay_2",
    type: "unitUpgrade",
    requirements: { Yellow: 1, Red: 1 },
    source: "homebrew.skunee",
    faction: "lunartiks",
  },
  {
    localeName: "technology.name.ares_orbiter_2",
    cardNsid:
      "card.technology.unit_upgrade.lunartiks:homebrew.skunee/ares_orbiter_2",
    type: "unitUpgrade",
    requirements: { Green: 1, Blue: 1, Red: 1 },
    source: "homebrew.skunee",
    faction: "lunartiks",
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.unnatural_satellite",
    move: 2,
    capacity: 3,
    spaceCombat: { dice: 2, hit: 9 },
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.ares_orbiter",
    triggerNsid: "card.leader.mech.lunartiks:homebrew.skunee/ares_orbiter",
    bombardment: { dice: 1, hit: 7 },
    groundCombat: { dice: 1, hit: 6 },
  },
  {
    unit: "mech",
    upgradeLevel: 2,
    localeName: "unit.mech.ares_orbiter_2",
    triggerNsid: "card.leader.mech.lunartiks:homebrew.skunee/ares_orbiter_2",
    bombardment: { dice: 2, hit: 7 },
    groundCombat: { dice: 2, hit: 6 },
  },
  {
    unit: "pds",
    upgradeLevel: 1,
    localeName: "unit.pds.orbital_relay",
    triggerNsid: "card.technology.unit.lunartiks:homebrew.skunee/orbital_relay",
    spaceCannon: { dice: 1, hit: 6 },
  },
  {
    unit: "pds",
    upgradeLevel: 2,
    localeName: "unit.pds.orbital_relay_2",
    triggerNsid:
      "card.technology.unit.lunartiks:homebrew.skunee/orbital_relay_2",
    spaceCannon: { dice: 2, hit: 5 },
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

world.TI4.homebrew.resetOnTableDecks();

console.log("loaded lunartiks");
