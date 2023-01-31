const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.rohdhna": "Rohdhna",
  "faction.full.rohdhna": "Roh'Dhna Mechatronics",
  "planet.prind": "prind",
  "technology.name.contractual_obligations": "Contractual Obligations",
  "unit.flagship.ky_vir": "Ky'Vir the Replicator",
  "unit.mech.autofabricator": "autofabricator",
};


const factions = [{
  faction: "rohdhna",
  abilities: [
      "industrious",
      "recycled_materials",
      "orbital_foundries",
  ],
  commodities: 4,
  home: 3214,
  leaders: {
      agents: ["rond_briay"],
      commanders: ["bunit_205643a"],
      heroes: ["rohvhin_dhna_mk4"],
  },
  promissoryNotes: ["automatons"],
  icon: "discordant-stars/faction-icons/rohdhna.jpg",
  source: "homebrew.discordant_stars",
  startingTech: ["psychoarchaeology", "sarween_tools"],
  startingUnits: {
      carrier: 1,
      cruiser: 1,
      fighter: 2,
      infantry: 4,
      dreadnought: 1,
      pds: 1,
      space_dock: 1,
  },
  techs: ["contractual_obligations"],
  units: [
      "ky_vir",
      "terrafactory",
      "terrafactory_2",
      "autofabricator",
  ],
  unpackExtra: [
      {
          tokenNsid: "token.attachment:homebrew.discordant-stars.automatons/rohdhna",
      },
  ],
  packageId: refPackageId,
}];

 const nsidToTemplateId = {
    "sheet.faction:homebrew.discordant_stars/rohdhna":
      "55E4DC2D4D19F0D3F1D537A2718C0216",
    "tile.system:homebrew.discordant_stars/3214":
      "3B006A999C5D4340B8346BFB841BADA3",
    "token.command:homebrew.discordant_stars/rohdhna":
      "1CD315F0410A9F5F00B658B8265D9474",
    "token.control:homebrew.discordant_stars/rohdhna":
      "0897DEEE4845E5160E043990A59B4403",
    "token.attachment:homebrew.discordant-stars.automatons/rohdhna":
      "227493894C55B220A6DA81B5053F0BE0",
};

const technologies = [{
    localeName: "technology.name.contractual_obligations",
    cardNsid:
      "card.technology.yellow.rohdhna:homebrew.discordant_stars/contractual_obligations",
    type: "Yellow",
    requirements: { Yellow: 2 },
    source: "homebrew.discordant_stars",
    faction: "rohdhna",
  },
  {
    localeName: "unit.terrafactory",
    cardNsid: "card.technology.unit_upgrade.rohdhna:homebrew.discordant_stars/terrafactory",
    type: "unitUpgrade",
    requirements: { Red: 3, Yellow: 1 },
    abbrev: " TF II",
    faction: "rohdhna",
    unitPosition: 0,
  },
];

const systems = [
  {
    tile: 3214,
    source: "homebrew.discordant_stars",
    home: true,
    planets: [
        { localeName: "planet.prind", resources: 3, influence: 3 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.ky_vir",
    triggerNsid:
      "card.technology.unit_upgrade.rohdhna:franken.discordant_stars/ky_vir",
    spaceCombat: { dice: 1, hit: 5 },
    capacity: 3,
  },
  {
    unit: "war_sun",
    upgradeLevel: 1,
    localeName: "unit.war_sun.terrafactory",
    triggerNsid: "card.technology.unit_upgrade.rohdhna:franken.discordant_stars/terrafactory",
    combat: { dice: 2, hit: 5 },
    production: 5,
    capacity: 4,
    bombardment: { dice: 0, hit: 0 },
  },
  {
    unit: "war_sun",
    upgradeLevel: 2,
    localeName: "unit.war_sun.terrafactory_2",
    triggerNsid: "card.technology.unit_upgrade.rohdhna:homebrew.discordant_stars/terrafactory_2",
    production: 5
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.autofabricator",
    triggerNsid: "card.leader.mech.rohdhna:homebrew.discordant_stars/autofabricator",
  },
];

const unitModifiers = [];

console.log("DISCORDANT STARS ADDING ROHDHNA");
world.TI4.homebrew.inject({
  localeStrings,
  factions,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
