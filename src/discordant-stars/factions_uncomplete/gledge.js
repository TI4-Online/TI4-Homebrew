const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.gledge": "Gledge",
  "faction.full.gledge": "The Gledge Union",
  "planet.laststop": "Last Stop",
  "technology.name.lightning_drives": "Lightning Drives",
  "unit.flagship.beg_bersha": "Beg Bersha",
  "unit.mech.exodriller": "Exodriller",
};


const factions = [{
  faction: "gledge",
  abilities: [
    "mantle_cracking",
    "celestial_reclamation",
    "deep_mining",
  ],
  commodities: 2,
  home: 3229,
  leaders: {
    agents: ["durran"],
    commanders: ["voldun"],
    heroes: ["gorthrim"],
  },
  promissoryNotes: ["gledge_base"],
  //icon: "discordant-stars/faction-icons/gledge.png",
  source: "discordant_stars",
  startingTech: ["pscyhoarchaeology", "scanlink_drone_network", "ai_development_algorithm"],
  startingUnits: {
    carrier: 1,
    destroyer: 1,
    dreadnought: 1,
    fighter: 3,
    infantry: 2,
    mech: 1,
    space_dock: 1,
  },
  techs: ["lightning_drives"],
  units: ["beg_bersha", "orion_platform", "orion_platform_2", "exodriller"],
  packageId: refPackageId,
  unpackExtra: [{
    tokenNsid: "token.system:homebrew.discordant-stars.core/gledge",
    tokenCount: 3,
  },{
    tokenNsid: "token.attachment:homebrew.discordant-stars.base/gledge",
  },],
}];

 const nsidToTemplateId = {
    "sheet.faction:homebrew.discordant_stars/gledge":
      "9AB953F640599183201E659C6943EBFF",
    "tile.system:homebrew.discordant_stars/3229":
      "02A3304A43BB9866A22F44B222173427",
    "token.command:homebrew.discordant_stars/gledge":
      "XXXXXXX",
    "token.control:homebrew.discordant_stars/gledge":
      "XXXXXXX",
    "token.unit:homebrew.discordant-stars.UNITID/gledge":
      "XXXXXXX",
};

const technologies = [{
    localeName: "technology.name.lightning_drives",
    cardNsid:
      "card.technology.blue.gledge:homebrew.discordant_stars/lightning_drives",
    type: "Blue",
    requirements: { Blue: 3 },
    source: "homebrew.discordant_stars",
    faction: "gledge",
  }, {
    localeName: "unit.orion_platform_2",
    cardNsid: "card.technology.unit_upgrade.gledge:homebrew.discordant_stars/orion_platform_2",
    type: "unitUpgrade",
    requirements: { Red: 1, Yellow: 1 },
    abbrev: " OP II",
    faction: "gledge",
    unitPosition: 0,
  },
];

const systems = [
  {
    tile: 3229,
    source: "homebrew.discordant_stars",
    home: true,
    planets: [
        { localeName: "planet.laststop", resources: 3, influence: 0 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.beg_bersha",
    triggerNsid:
      "card.technology.unit_upgrade.gledge:franken.discordant_stars/beg_bersha",
    spaceCombat: { dice: 1, hit: 7 },
    bombardment: { dice: 1, hit: 7 },
  },
  {
    unit: "pds",
    upgradeLevel: 1,
    localeName: "unit.pds.orion_platform",
    triggerNsid: "card.technology.unit_upgrade.gledge:franken.discordant_stars/orion_platform",
  },
  {
    unit: "pds",
    upgradeLevel: 2,
    localeName: "unit.pds.orion_platform_2",
    triggerNsid: "card.technology.unit_upgrade.gledge:homebrew.discordant_stars/orion_platform_2",
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.exodriller",
    triggerNsid: "card.leader.mech.gledge:homebrew.discordant_stars/exodriller",
  },
];

const unitModifiers = [];

console.log("DISCORDANT STARS ADDING GLEDGE");
world.TI4.homebrew.inject({
  localeStrings,
  factions,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
