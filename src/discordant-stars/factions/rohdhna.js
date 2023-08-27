const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.rohdhna": "Rohdhna",
  "faction.full.rohdhna": "Roh'Dhna Mechatronics",
  "planet.prind": "prind",
  "technology.name.contractual_obligations": "Contractual Obligations",
  "unit.flagship.ky_vir": "Ky'Vir the Replicator",
  "unit.mech.autofabricator": "autofabricator",
  "unit.war_sun.terrafactory": "Terrafactory",
  "unit.war_sun.terrafactory_2": "Terrafactory 2",
  "attachment:homebrew.discordant_stars.automatons/rohdhna": "Automatons",
};

const factions = [
  {
    faction: "rohdhna",
    abilities: ["industrious", "recycled_materials", "orbital_foundries"],
    commodities: 4,
    home: 3214,
    leaders: {
      agents: ["rond_briay"],
      commanders: ["bunit_205643a"],
      heroes: ["rohvhin_dhna_mk4"],
    },
    promissoryNotes: ["automatons"],
    icon: "discordant-stars/faction-icons/rohdhna.png",
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
    units: ["ky_vir", "terrafactory", "terrafactory_2", "autofabricator"],
    unpackExtra: [
      {
        tokenNsid:
          "token.attachment:homebrew.discordant_stars.automatons/rohdhna",
      },
    ],
    packageId: refPackageId,
  },
];

const factionAbilities = [
  {
    name: "Industrious",
    description:
      "After you place a space dock on a planet in a system that contains no other players' ships, you may spend 6 resources and remove that space dock to place 1 war sun in that system's space area.",
    source: "Roh’Dhna (DS)",
  },
  {
    name: "Recycled Materials",
    description:
      "After you activate a system, you may return 1 cruiser, carrier, or dreadnought you control in that system to your reinforcements to gain a number of trade goods equal to 1 less than that unit’s cost value.",
    source: "Roh’Dhna (DS)",
  },
  {
    name: "Orbital Foundries",
    description:
      "For the purpose of scoring objectives, you may treat each of your war sun units as though it is a structure on any planet you control.",
    source: "Roh’Dhna (DS)",
  },
];

const factionUndraftable = [
  {
    name: "Roh’Dhna automatons token",
    nsid: "token.attachment:homebrew.discordant_stars.automatons/rohdhna",
    count: 1,
    triggerNsid: "card.promissory.rohdhna:homebrew.discordant_stars/automatons",
  },
];

const nsidToTemplateId = {
  "sheet.faction:homebrew.discordant_stars/rohdhna":
    "55E4DC2D4D19F0D3F1D537A2718C0216",
  "tile.system:homebrew.discordant_stars/3214":
    "3B006A999C5D4340B8346BFB841BADA3",
  "token.command:homebrew.discordant_stars/rohdhna":
    "1CD315F0410A9F5F00B658B8265D9474",
  "token.control:homebrew.discordant_stars/rohdhna":
    "0897DEEE4845E5160E043990A59B4403",
  "token.attachment:homebrew.discordant_stars.automatons/rohdhna":
    "227493894C55B220A6DA81B5053F0BE0",
};

const technologies = [
  {
    localeName: "technology.name.contractual_obligations",
    cardNsid:
      "card.technology.yellow.rohdhna:homebrew.discordant_stars/contractual_obligations",
    type: "Yellow",
    requirements: { Yellow: 2 },
    source: "homebrew.discordant_stars",
    faction: "rohdhna",
  },
  {
    localeName: "unit.war_sun.terrafactory_2",
    cardNsid:
      "card.technology.unit_upgrade.rohdhna:homebrew.discordant_stars/terrafactory_2",
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
    packageId: refPackageId,
    img: "discordant-stars/ui/tiles/tile_3214.png",
    planets: [{ localeName: "planet.prind", resources: 3, influence: 3 }],
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
    triggerNsid:
      "card.technology.unit_upgrade.rohdhna:franken.discordant_stars/terrafactory",
    combat: { dice: 2, hit: 5 },
    production: 5,
    capacity: 4,
    bombardment: { dice: 0, hit: 0 },
    move: 0,
    sustainDamage: false,
  },
  {
    unit: "war_sun",
    upgradeLevel: 2,
    localeName: "unit.war_sun.terrafactory_2",
    triggerNsid:
      "card.technology.unit_upgrade.rohdhna:homebrew.discordant_stars/terrafactory_2",
    production: 5,
    capacity: 6,
    sustainDamage: true,
    bombardment: { dice: 3, hit: 3 },
    move: 2,
    spaceCombat: { dice: 3, hit: 3 },
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.autofabricator",
    triggerNsid:
      "card.leader.mech.rohdhna:homebrew.discordant_stars/autofabricator",
  },
];

const unitModifiers = [];

const attachments = [
  {
    packageId: refPackageId,
    localeName: "attachment:homebrew.discordant_stars.automatons/rohdhna",
    cardNsid: "card.promissory.rohdhna:homebrew.discordant_stars/automatons",
    tokenNsid: "token.attachment:homebrew.discordant_stars.automatons/rohdhna",
    faceUp: {
      image: "discordant-stars/tokens/faction/rohdhna_automatons.face.jpg",
    },
  },
];

world.TI4.homebrew.inject({
  localeStrings,
  attachments,
  factions,
  factionAbilities,
  factionUndraftable,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
