console.log("Adding Arborec");

const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.arborec": "Arborec",
  "faction.full.arborec": "The Arborec",
  "planet.nestphar": "Nestphar",
  "technology.name.bioplasmosis": "Bioplasmosis",
  "unit.flagship.duha_menaimon": "Duha Menaimon",
  "unit.infantry.letani_warrior": "Letani Warrior"
  "unit.infantry.letani_warrior_2": "Letani Warrior II",
  "unit.mech.letani_behemoth": "Letani Behemoth",
};

const factions = [{
  faction: "arborec",
  abilities: ["mitosis"],
  commodities: 3,
  home: 5,
  leaders: {
    agents: ["letani_ospha"],
    commanders: ["dirzuga_rophal"],
    heroes: ["letani_miasmiala"],
  },
  promissoryNotes: ["stymie"],
  icon: "global/factions/arborec_icon.png",
  source: "homebrew.miltymod",
  startingTech: ["magen_defense_grid"],
  startingUnits: {
      carrier: 1,
      cruiser: 1,
      destroyer: 1,
      fighter: 2,
      infantry: 4,
      pds: 1,
      space_dock: 1,
  },
  techs: ["bioplasmosis"],
  units: [
      "duha_menaimon",
      "letani_warrior",
      "letani_warrior_2",
      "letani_behemoth",
  ],
  packageId: refPackageId,
}];

 const nsidToTemplateId = {
    "sheet.faction:homebrew.miltymod/arborec":
      "AF6BCC30403B6F27E798EBA9EC4337AF",
    "tile.system:base/5":
      "CBBCC32B7DB84D08B66CA9BB65036763",
    "token.command:base/arborec":
      "B4F7F52733F34A3CBA08BC908540B9F6",
    "token.control:base/arborec":
      "D0E7337CA6914EF2BBE7BD9DBC6FAFEB",
};

const technologies = [{
    localeName: "technology.name.bioplasmosis",
    cardNsid:
        "card.technology.green.arborec:homebrew.miltymod/bioplasmosis",
    type: "Green",
    requirements: { Green: 1 },
    source: "homebrew.miltymod",
    faction: "arborec"
  },
];

const systems = [
  {
    tile: 5,
    source: "base",
    home: true,
    packageId: refPackageId,
    img: "tiles/base/homeworld/tile_005.jpg",
    planets: [
      { localeName: "planet.nestphar", resources: 3, influence: 2 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.duha_menaimon",
    unitAbility: "unit.flagship.duha_menaimon",
    spaceCombat: { dice: 2, hit: 7 },
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.letani_behemoth",
    triggerNsid: "card.leader.mech.arborec:base/letani_behemoth",
  },
];

world.TI4.homebrew.inject({
  localeStrings,
  factions,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
