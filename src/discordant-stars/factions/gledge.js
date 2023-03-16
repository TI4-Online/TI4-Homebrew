const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.gledge": "Gledge",
  "faction.full.gledge": "The Gledge Union",
  "planet.laststop": "Last Stop",
  "technology.name.lightning_drives": "Lightning Drives",
  "unit.flagship.beg_bersha": "Beg Bersha",
  "unit.mech.exodriller": "Exodriller",
  "unit.pds.orion_platform": "Orion Platform",
  "unit.pds.orion_platform_2": "Orion Platform 2",
  "unit_modifier.desc.beg_bersha": "When this unit makes a combat or ability roll, it rolls 1 additional die for each of your mechs in or adjacent to this system.",
  "attachment:homebrew.discordant_stars.gledge_base/gledge": "Gledge Base",
  "attachment:homebrew.discordant_stars.gledge_core/gledge": "Gledge Core",
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
  icon: "discordant-stars/faction-icons/gledge.png",
  source: "homebrew.discordant_stars",
  startingTechChoice: "gledge",
  startingTechChoices: ["psychoarchaeology", "scanlink_drone_network", "ai_development_algorithm"],
  startingTech: [],
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
    tokenNsid: "token.attachment:homebrew.discordant_stars.core/gledge",
    tokenCount: 3,
  },{
    tokenNsid: "token.attachment:homebrew.discordant_stars.base/gledge",
  },],
}];

 const nsidToTemplateId = {
    "sheet.faction:homebrew.discordant_stars/gledge":
      "9AB953F640599183201E659C6943EBFF",
    "tile.system:homebrew.discordant_stars/3229":
      "02A3304A43BB9866A22F44B222173427",
    "token.command:homebrew.discordant_stars/gledge":
      "FB6B0915408D5694A2569BBF116E0793",
    "token.control:homebrew.discordant_stars/gledge":
      "769697144BB91D8B28D85FB7BBD22151",
    "token.attachment:homebrew.discordant_stars.core/gledge":
      "B7E3699F43976271223BFD911638C6CE",
    "token.attachment:homebrew.discordant_stars.base/gledge":
      "A260D577422758DC751497BAECE228FA",
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
    localeName: "unit.pds.orion_platform_2",
    cardNsid: "card.technology.unit_upgrade.gledge:homebrew.discordant_stars/orion_platform_2",
    type: "unitUpgrade",
    requirements: { Red: 1, Yellow: 1 },
    abbrev: " OP II",
    faction: "gledge",
    unitPosition: 6,
  },
];

const systems = [
  {
    tile: 3229,
    source: "homebrew.discordant_stars",
    home: true,
    packageId: refPackageId,
    img: "discordant-stars/tiles/homeworld/tile_3229.jpg",
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
    unitAbility: "unit.flagship.beg_bersha",
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
    spaceCannon: { hit: 5 },
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.exodriller",
    triggerNsid: "card.leader.mech.gledge:homebrew.discordant_stars/exodriller",
  },
];

const unitModifiers = [{
  isCombat: true,
  localeName: "unit.flagship.beg_bersha",
  localeDescription: "unit_modifier.desc.beg_bersha",
  owner: "self",
  priority: "adjust",
  triggerUnitAbility: "unit.flagship.beg_bersha",
  filter: (auxData) => {
    return auxData.self.has("flagship");
  },
  applyAll: (unitAttrsSet, auxData) => {
    const units = [].concat(auxData.plastic, auxData.adjacentPlastic);
    const ownMechCount = units.filter(unit => (unit.unit === "mech" && unit.owningPlayerSlot === auxData.self.playerSlot));

    const flagshipAttrs = unitAttrsSet.get("flagship");
    flagshipAttrs.raw.spaceCombat.dice += ownMechCount;
    flagshipAttrs.raw.bombardment.dice += ownMechCount;
    if (flagshipAttrs.raw.spaceCannon) {
      flagshipAttrs.raw.spaceCannon.dice += ownMechCount;
    }
    if (flagshipAttrs.raw.antiFighterBarrage) {
      flagshipAttrs.raw.antiFighterBarrage.dice += ownMechCount;
    }
  },
},
];


const attachments = [{
  packageId: refPackageId,
  localeName: "attachment:homebrew.discordant_stars.gledge_core/gledge",
  cardNsid: "card.promissory.gledge:homebrew.discordant_stars/gledge_core",
  tokenNsid: "token.attachment:homebrew.discordant_stars.core/gledge",
  faceUp: {
    resources: 2, // TODO: should overwrite the base, not add
    influence: 0, // TODO: should overwrite the base, not add
    image: "discordant-stars/extras/Gledge Core.png",
  },
},{
  packageId: refPackageId,
  localeName: "attachment:homebrew.discordant_stars.gledge_base/gledge",
  cardNsid: "card.promissory.gledge:homebrew.discordant_stars/gledge_base",
  tokenNsid: "token.attachment:homebrew.discordant_stars.base/gledge",
  faceUp: {
    resources: 2,
    image: "discordant-stars/extras/Gledge Base.png",
  },
},];

//TODO: add promissory note attachement logic

world.TI4.homebrew.inject({
  localeStrings,
  attachments,
  factions,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
