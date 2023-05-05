const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.cheiran": "Cheiran",
  "faction.full.cheiran": "The Cheiran Hordes",
  "planet.arche": "Arche",
  "planet.gghurntheta": "Gghurn Theta",
  "technology.name.brood_podbrood_pod": "Brood PodBrood Pod",
  "unit.dreadnought.chitin_hulk": "Chitin Hulk",
  "unit.dreadnought.chitin_hulk_2": "Chitin Hulk 2",
  "unit.flagship.lithodax": "lithodax",
  "unit.mech.nauplius": "nauplius",
  "unit_modifier.desc.lithodax":
    "NOT YET IMPLEMENTED!!! +1 die to SPACE COMBAT and ability rolls if this system is adjacent or contains 1 of your structures",
};

const factions = [
  {
    faction: "cheiran",
    abilities: ["teeming", "moult", "byssus"],
    commodities: 3,
    home: 3234,
    leaders: {
      agents: ["operator_kkavras"],
      commanders: ["spc_phquaiset"],
      heroes: ["thakt_clqua"],
    },
    promissoryNotes: ["carcinisation"],
    icon: "discordant-stars/faction-icons/cheiran.png",
    source: "homebrew.discordant_stars",
    startingTechChoice: "cheiran",
    startingTechChoices: ["magen_defense_grid", "self_assembly_routines"],
    startingTech: [],
    startingUnits: {
      carrier: 1,
      destroyer: 2,
      fighter: 3,
      infantry: 3,
      pds: 1,
      space_dock: 1,
    },
    techs: ["brood_pod"],
    units: ["lithodax", "chitin_hulk", "chitin_hulk_2", "nauplius"],
    packageId: refPackageId,
    unpackExtra: [
      {
        tokenNsid: "token.unit:homebrew.discordant_stars.dreadnought/cheiran",
        tokenCount: 2,
      },
      {
        tokenNsid: "token.unit:homebrew.discordant_stars.mech/cheiran",
      },
    ],
  },
];

const factionAbilities = [
  {
    name: "Teeming",
    description:
      "During setup place the 2 Cheiran dreadnought and 1 Cheiran mech tokens in your reinforcements. The Cheiran unit tokens are additional units of their type.",
    source: "Cheiran (DS)",
  },
  {
    name: "Moult",
    description:
      "After you win a space combat, you may place 1 ship from your reinforcements in that system of the same ship type as any of your ships that were destroyed during that combat.",
    source: "Cheiran (DS)",
  },
  {
    name: "Byssus",
    description:
      "Your mechs on planets are treated as structures for all purposes other than scoring objectives.",
    source: "Cheiran (DS)",
  },
];

const factionUndraftable = [
  {
    name: "Cheiran dreadnought token",
    nsid: "token.unit:homebrew.discordant_stars.dreadnought/cheiran",
    count: 2,
    triggerAbility: "Teeming",
  },
  {
    name: "Cheiran mech token",
    nsid: "token.unit:homebrew.discordant_stars.mech/cheiran",
    count: 1,
    triggerAbility: "Teeming",
  },
];

const nsidToTemplateId = {
  "sheet.faction:homebrew.discordant_stars/cheiran":
    "954D23304C5988F518ECD291EFA0239D",
  "tile.system:homebrew.discordant_stars/3234":
    "265F914448215A0673271AB47B2D474D",
  "token.command:homebrew.discordant_stars/cheiran":
    "9430444C4749D658CCAD40A1A2F4F884",
  "token.control:homebrew.discordant_stars/cheiran":
    "FA9B682B4E02B8433F29AD9B0349526C",
  "token.unit:homebrew.discordant_stars.dreadnought/cheiran":
    "D4F66F804EFE54FF069216B86C83795D",
  "token.unit:homebrew.discordant_stars.mech/cheiran":
    "95A9A7FA4ED0A59FEC7DB78439B12FD3",
};

const technologies = [
  {
    localeName: "technology.name.brood_pod",
    cardNsid: "card.technology.red.cheiran:homebrew.discordant_stars/brood_pod",
    type: "Red",
    requirements: { Red: 2 },
    source: "homebrew.discordant_stars",
    faction: "cheiran",
  },
  {
    localeName: "unit.dreadnought.chitin_hulk_2",
    cardNsid:
      "card.technology.unit_upgrade.cheiran:homebrew.discordant_stars/chitin_hulk_2",
    type: "unitUpgrade",
    requirements: { Blue: 2, Yellow: 1 },
    abbrev: " CH II",
    faction: "cheiran",
    unitPosition: 4,
  },
];

const systems = [
  {
    tile: 3234,
    source: "homebrew.discordant_stars",
    home: true,
    packageId: refPackageId,
    img: "discordant-stars/tiles/homeworld/tile_3234.jpg",
    planets: [
      { localeName: "planet.arche", resources: 2, influence: 2 },
      { localeName: "planet.gghurntheta", resources: 2, influence: 1 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.lithodax",
    unitAbility: "unit.flagship.lithodax",
    triggerNsid:
      "card.technology.unit_upgrade.cheiran:franken.discordant_stars/lithodax",
    antiFighterBarrage: { dice: 2, hit: 7 },
  },
  {
    unit: "dreadnought",
    upgradeLevel: 1,
    localeName: "unit.dreadnought.chitin_hulk",
    triggerNsid:
      "card.technology.unit_upgrade.cheiran:franken.discordant_stars/chitin_hulk",
  },
  {
    unit: "dreadnought",
    upgradeLevel: 2,
    localeName: "unit.dreadnought.chitin_hulk_2",
    triggerNsid:
      "card.technology.unit_upgrade.cheiran:homebrew.discordant_stars/chitin_hulk_2",
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.nauplius",
    triggerNsid: "card.leader.mech.cheiran:homebrew.discordant_stars/nauplius",
  },
];

const unitModifiers = [
  {
    // "space combat and abilities roll 1 additional die for each adjacent asteroid field",
    isCombat: true,
    localeName: "unit.flagship.lithodax",
    localeDescription: "unit_modifier.desc.lithodax",
    owner: "self",
    priority: "adjust",
    triggerUnitAbility: "unit.flagship.lithodax",
    filter: (auxData) => {
      return auxData.self.has("flagship");
    },
    applyAll: (unitAttrsSet, auxData) => {
      //TODO: combat: implement
    },
  },
];

function getIndex(obj) {
  const json = obj.getSavedData() || "";
  if (json.length > 0) {
    const parsed = JSON.parse(json);
    if ("deskIndex" in parsed) {
      return parsed.deskIndex;
    }
  }
  return -1;
}

world.TI4.homebrew.inject({
  localeStrings,
  factions,
  factionAbilities,
  factionUndraftable,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
