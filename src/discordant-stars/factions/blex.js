const { world, refPackageId } = require("@tabletop-playground/api");
const { getBlightStatus } = require("./../scripts/blight_status");

const localeStrings = {
  "faction.abbr.blex": "Blex",
  "faction.full.blex": "Blex Pestilence",
  "planet.avicenna": "Avicenna",
  "technology.name.biotic_weapons": "Biotic Weapons",
  "unit.flagship.auriga": "Auriga",
  "unit.fighter.vector": "Vector",
  "unit.fighter.vector_2": "Vector 2",
  "unit.mech.pustule": "Pustule",
  "unit_modifier.name.blight": "Blight",
  "unit_modifier.desc.blight": "-1 to the results of non-blex players' combat rolls during the first round of combat in systems that contain Blight tokens" ,
  "unit_modifier.name.biotic_weapons": "Biotic Weapons",
  "unit_modifier.desc.biotic_weapons": "1 of your units may roll 1 additional combat die",
  "unit_modifier.name.shared_misery": "Shared Misery",
  "unit_modifier.desc.shared_misery": "-1 to COMBAT rolls during this combat",
};


const factions = [{
  faction: "blex",
  abilities: [
    "contagion",
    "blight",
    "shared_misery",
  ],
  commodities: 2,
  home: 3231,
  leaders: {
    agents: ["tox"],
    commanders: ["silas_deriga"],
    heroes: ["speygh"],
  },
  promissoryNotes: ["shared_misery"],
  icon: "discordant-stars/faction-icons/blex.png",
  source: "homebrew.discordant_stars",
  startingTechChoice: "blex",
  startingTechChoices: ["dacxive_animators", "biostims"],
  startingTech: [],
  startingUnits: {
    carrier: 1,
    dreadnought: 1,
    destroyer: 1,
    infantry: 3,
    space_dock: 1,
  },
  techs: ["biotic_weapons"],
  units: ["auriga", "vector", "vector_2", "pustule"],
  packageId: refPackageId,
  unpackExtra: [{
    tokenNsid: "token.system:homebrew.discordant_stars.blight/blex",
    tokenCount: 4,
  }, {
    tokenNsid: "token.system:homebrew.discordant_stars.blight_controller/blex",
  }]

}];

 const nsidToTemplateId = {
    "sheet.faction:homebrew.discordant_stars/blex":
      "87BBEE704B999E945F806DB0A881ED50",
    "tile.system:homebrew.discordant_stars/3231":
      "D979798344A89C664EC1E1B464534D21",
    "token.command:homebrew.discordant_stars/blex":
      "E1D61045492625569AB4BA82E05F4C9D",
    "token.control:homebrew.discordant_stars/blex":
      "F78A93DE437BF9F76AA260A0F0D8E7F6",
    "token.system:homebrew.discordant_stars.blight/blex":
      "F8A85C7B4CE5FD661DC7DA905C80E3DF",
    "token.system:homebrew.discordant_stars.blight_controller/blex":
      "7CAACDB94E6E48F148DC2A951875F065"
};

const technologies = [{
    localeName: "technology.name.biotic_weapons",
    cardNsid:
      "card.technology.green.blex:homebrew.discordant_stars/biotic_weapons",
    type: "Green",
    requirements: { Green: 2 },
    source: "homebrew.discordant_stars",
    faction: "blex",
  }, {
    localeName: "unit.fighter.vector_2",
    cardNsid: "card.technology.unit_upgrade.blex:homebrew.discordant_stars/vector_2",
    type: "unitUpgrade",
    requirements: { Green: 1, Blue: 1 },
    abbrev: " VE II",
    source: "homebrew.discordant_stars",
    faction: "blex",
    unitPosition: 9,
  },
];

const systems = [
  {
    tile: 3231,
    source: "homebrew.discordant_stars",
    home: true,
    packageId: refPackageId,
    img: "discordant-stars/tiles/homeworld/tile_3231.jpg",
    planets: [
        { localeName: "planet.avicenna", resources: 4, influence: 0 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.auriga",
    triggerNsid:
      "card.technology.unit_upgrade.blex:franken.discordant_stars/auriga",
    spaceCombat: { dice: 2, hit: 7 },
    capacity: 6,
  },
  {
    unit: "fighter",
    upgradeLevel: 1,
    localeName: "unit.fighter.vector",
    triggerNsid: "card.technology.unit_upgrade.blex:franken.discordant_stars/vector",
    move: 2,
  },
  {
    unit: "fighter",
    upgradeLevel: 2,
    localeName: "unit.fighter.vector_2",
    triggerNsid: "card.technology.unit_upgrade.blex:homebrew.discordant_stars/vector_2",
    spaceCombat: { hit: 8 },
    move: 3,
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.pustule",
    triggerNsid: "card.leader.mech.blex:homebrew.discordant_stars/pustule",
  },
];

function getBlightHexes() {
  return world.getAllObjects().filter(obj => {
    const nsid = world.TI4.ObjectNamespace.getNsid(obj);
    return nsid === "token.system:homebrew.discordant_stars.blight/blex" || nsid === "unit:pok/mech";
  }).filter(obj => {
      const owner = obj.getOwningPlayer();
      return owner && world.TI4.getFactionBySlot(owner.getSlot()).nsidName === "blex";
  }).map(gameObject => {
    return world.TI4.Hex.fromPosition(gameObject.getPosition());
  });
}

const unitModifiers = [{
  // "-1 on other players combat rolls in the first round of combat in systems with a blight token",
  isCombat: true,
  localeName: "unit_modifier.name.blight",
  localeDescription: "unit_modifier.desc.blight",
  owner: "any",
  priority: "adjust",
  toggleActive: true,
  triggerNsids: [
    "sheet.faction:homebrew.discordant_stars/blex",
    "token.system:homebrew.discordant_stars.blight/blex",
  ],
  triggerIf: (auxData) => {
    debugger;
    return (
      getBlightStatus() && // blight is active (aka first combat round)
      ["groundCombat", "spaceCombat"].includes(auxData.rollType) && // only affects combat
      auxData.self.faction && // empty seats does not provide a faction
      auxData.self.faction.nsidName !== "blex" && // does not affects blex
      getBlightHexes().includes(auxData.hex) // only in blight systems (blight token or blex mech)
    )
  },
  applyEach: (unitAttrs, auxData) => {
    if (unitAttrs.raw.groundCombat) {
      unitAttrs.raw.groundCombat.hit += 1;
    }

    if (unitAttrs.raw.spaceCombat) {
      unitAttrs.raw.spaceCombat.hit += 1;
    }
  },
},{
  // "+1 dice for one unit with the token",
  isCombat: true,
  localeName: "unit_modifier.name.biotic_weapons",
  localeDescription: "unit_modifier.desc.biotic_weapons",
  owner: "self",
  priority: "adjust",
  triggerNsids: [
    "card.technology.green.blex:homebrew.discordant_stars/biotic_weapons",
  ],
  filter: (auxData) => {
    debugger;
    return (
      ["groundCombat", "spaceCombat"].includes(auxData.rollType) // only affects combat
    )
  },
  applyAll: (unitAttrsSet, auxData) => {
    let best = false;
    for (const unitAttrs of unitAttrsSet.values()) {
        if (
            unitAttrs.raw[auxData.rollType] &&
            auxData.self.has(unitAttrs.raw.unit)
        ) {
            if (
                !best ||
                unitAttrs.raw[auxData.rollType].hit <
                    best.raw[auxData.rollType].hit
            ) {
                best = unitAttrs;
            }
        }
    }
    if (best) {
        best.raw[auxData.rollType].extraDice =
            (best.raw[auxData.rollType].extraDice || 0) + 1;
    }
  },
},
{
    // "-1 for opponent on a ground combat",
    isCombat: true,
    localeName: "unit_modifier.name.shared_misery",
    localeDescription: "unit_modifier.desc.shared_misery",
    owner: "opponent",
    priority: "adjust",
    triggerNsid: "card.promissory.blex:homebrew.discordant_stars/shared_misery",
    filter: (auxData) => {
        return (
            auxData.rollType === "groundCombat" &&
            auxData.self.faction && // empty seats does not provide a faction
            auxData.self.faction.nsidName !== "blex" // does not affects blex
        );
    },
    applyEach: (unitAttrs, auxData) => {
      if (unitAttrs.raw.groundCombat) {
        unitAttrs.raw.groundCombat.hit += 1;
      }
    },
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
