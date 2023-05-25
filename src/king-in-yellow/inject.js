const { world, refPackageId } = require("@tabletop-playground/api");

const nsidToTemplateId = {
  "sheet.faction:homebrew.king_in_yellow/king_in_yellow":
    "8E8BF90DB842C61F143D3BBC14B742F0",
  "token.command:homebrew.king_in_yellow/king_in_yellow":
    "7A5A15846E46FAD957FBD994BDD9411B",
  "token.control:homebrew.king_in_yellow/king_in_yellow":
    "0C5B538C3E4B2BD163AE18998122FCC2",
  "tile.system:homebrew.king_in_yellow/998": "D7686B45E5440ED86B92F6B4F65BB844",
  "card.leader:homebrew.king_in_yellow/0": "74973EEE98495943F84800BD41EA9F2F",
  "card.planet:homebrew.king_in_yellow/0": "3AC074FE1845CD09A1D7D1A8D47623CB",
  "card.promissory:homebrew.king_in_yellow/0":
    "49741CA1344FB9FBA48ECBBCC09B0395",
  "card.technology:homebrew.king_in_yellow/0":
    "888951E1834B33571ECED1AE9DEEDEBD",
  "token:homebrew.king_in_yellow/king_in_yellow":
    "E658619C3F4D9CBD0C5D41BDE57AE2A9",
};

const localeStrings = {
  "faction.abbr.king_in_yellow": "King In Yellow",
  "faction.full.king_in_yellow": "The King In Yellow",
  "planet.carcosa": "Carcosa",
  "technology.name.leroy_engine": "Leroy Engine",
  "technology.name.entropic_escapement": "Entropic Escapement",
  "unit.flagship.monument_to_the_king": "Monument to the King",
  "unit.mech.byakhee_monolith": "Byakhee Monolith",
};

const factions = [
  {
    faction: "king_in_yellow",
    abilities: [
      "song_that_the_hyades_shall_sing",
      "where_flap_the_tatters_of_the_king",
      "must_die_unheard_in_lost_carcosa",
    ],
    commodities: 4,
    home: 998,
    icon: "king-in-yellow/kiy-faction-icon.png",
    leaders: {
      agents: ["repairer_of_reputations"],
      commanders: ["the_lake_of_hali"],
      heroes: ["act_iii"],
    },
    packageId: refPackageId,
    promissoryNotes: ["unspeakable_oath"],
    source: "homebrew.king_in_yellow",
    startingTech: ["self_assembly_routines", "psychoarchaeology"],
    startingUnits: {
      carrier: 1,
      destroyer: 1,
      dreadnought: 1,
      fighter: 2,
      infantry: 3,
      space_dock: 1,
    },
    techs: ["leroy_engine", "entropic_escapement"],
    units: ["monument_to_the_king", "byakhee_monolith"],
    unpackExtra: [
      {
        tokenNsid: "token:homebrew.king_in_yellow/king_in_yellow",
      },
    ],
  },
];

const systems = [
  {
    tile: 998,
    source: "homebrew.king_in_yellow",
    home: true,
    packageId: refPackageId,
    img: "king-in-yellow/kiy-home-system-tile.jpg",
    planets: [{ localeName: "planet.carcosa", resources: 2, influence: 4 }],
  },
];

const technologies = [
  {
    localeName: "technology.name.leroy_engine",
    cardNsid:
      "card.technology.green.king_in_yellow:homebrew.king_in_yellow/leroy_engine",
    type: "Green",
    requirements: { Green: 1 },
    source: "homebrew.king_in_yellow",
    faction: "king_in_yellow",
  },
  {
    localeName: "technology.name.entropic_escapement",
    cardNsid:
      "card.technology.green.king_in_yellow:homebrew.king_in_yellow/entropic_escapement",
    type: "Green",
    requirements: { Green: 2 },
    source: "homebrew.king_in_yellow",
    faction: "king_in_yellow",
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.monument_to_the_king",
    move: 0,
    capacity: 0,
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.byakhee_monolith",
    triggerNsid:
      "card.leader.mech.king_in_yellow:homebrew.king_in_yellow/byakhee_monolith",
    antiFighterBarrage: { dice: 2, hit: 6 },
    spaceCombat: { dice: 1, hit: 6 },
  },
];

const unitModifiers = [];

world.TI4.homebrew.inject({
  localeStrings,
  factions,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});

console.log("loaded king_in_yellow");
