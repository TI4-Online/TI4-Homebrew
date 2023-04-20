const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.olradin": "Olradin",
  "faction.full.olradin": "The Olradin League",
  "planet.sanctuary": "Sanctuary",
  "technology.name.false_flag_operations": "False Flag Operations",
  "technology.name.geosympathic_impeller": "Geosympathic Impeller",
  "unit.flagship.rallypoint": "Rallypoint",
  "unit.mech.exemplar": "Exemplar",
};

const factions = [
  {
    faction: "olradin",
    abilities: ["policies"],
    commodities: 3,
    home: 3210,
    leaders: {
      agents: ["baggil_wildpaw"],
      commanders: ["knak_halfear"],
      heroes: ["pahn_silverfur"],
    },
    promissoryNotes: ["incite_revolution"],
    icon: "discordant-stars/faction-icons/olradin.png",
    source: "homebrew.discordant_stars",
    startingTech: ["psychoarchaeology", "scanlink_drone_network"],
    startingUnits: {
      carrier: 2,
      cruiser: 1,
      fighter: 3,
      infantry: 4,
      space_dock: 1,
    },
    techs: ["false_flag_operations", "geosympathic_impeller"],
    units: ["rallypoint", "exemplar"],
    unpackExtra: [
      {
        tokenNsid: "card.olradin:homebrew.discordant_stars/0",
      },
      {
        tokenNsid:
          "token.commodity:homebrew.discordant_stars.2_commodities/olradin",
      },
    ],
    packageId: refPackageId,
  },
];

const factionAbilities = [];

const nsidToTemplateId = {
  "sheet.faction:homebrew.discordant_stars/olradin":
    "7F3F98FE429EA7BD97DE65A70B2B2B6C",
  "tile.system:homebrew.discordant_stars/3210":
    "B50C67991C214A08B5CDAB1E3C121044",
  "token.command:homebrew.discordant_stars/olradin":
    "D170631C44F10C65E3ADC0B215F48571",
  "token.control:homebrew.discordant_stars/olradin":
    "A5806B064F7CC3CE4350DC811DE380C8",
  "card.olradin:homebrew.discordant_stars/0":
    "B35A5E4F4563B06C7FBD0F9330477096",
  "token.commodity:homebrew.discordant_stars.2_commodities/olradin":
    "8177765141DA35F8DA75748E4203C9FE",
};

const technologies = [
  {
    localeName: "technology.name.false_flag_operations",
    cardNsid:
      "card.technology.red.olradin:homebrew.discordant_stars/false_flag_operations",
    type: "Red",
    requirements: { Red: 1 },
    source: "homebrew.discordant_stars",
    faction: "olradin",
  },
  {
    localeName: "technology.name.geosympathic_impeller",
    cardNsid:
      "card.technology.blue.olradin:homebrew.discordant_stars/geosympathic_impeller",
    type: "Blue",
    requirements: { Blue: 1 },
    source: "homebrew.discordant_stars",
    faction: "olradin",
  },
];

const systems = [
  {
    tile: 3210,
    source: "homebrew.discordant_stars",
    home: true,
    packageId: refPackageId,
    img: "discordant-stars/tiles/homeworld/tile_3210.jpg",
    planets: [{ localeName: "planet.sanctuary", resources: 3, influence: 4 }],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.rallypoint",
    triggerNsid:
      "card.technology.unit_upgrade.olradin:franken.discordant_stars/rallypoint",
    spaceCombat: { dice: 2, hit: 9 },
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.exemplar",
    triggerNsid: "card.leader.mech.olradin:homebrew.discordant_stars/exemplar",
  },
];

const unitModifiers = [];

//TODO: implement mech resource/influence adjustment
//TODO: implement policy: the people - vote adjustment

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
