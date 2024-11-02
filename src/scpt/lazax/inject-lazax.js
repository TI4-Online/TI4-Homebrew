const { world, refPackageId } = require("@tabletop-playground/api");

const nsidToTemplateId = {
  "sheet.faction:homebrew.scpt.lazax/lazax": "C171D8F9ED49F40E7722F78197A1A6A5",
  "token.command:homebrew.scpt.lazax/lazax": "68D37D5540479E0BA03DBD9B5289B885",
  "token.control:homebrew.scpt.lazax/lazax": "871549A1FF42731FB23B658100F932EC",
  "tile.system:homebrew.scpt.lazax/997": "824444DE66437A2B5B484DB8B3485C8F",
  "card.leader:homebrew.scpt.lazax/0": "648F825DA84585312741359C81D530F1",
  "card.planet:homebrew.scpt.lazax/0": "D8AFD1C2FD40134B4F94C5B6548763E9",
  "card.promissory:homebrew.scpt.lazax/0": "BB25B5BA6B44064FE3750F80C53AEFDD",
  "card.technology:homebrew.scpt.lazax/0": "1D31DB604B43762AD02F6D841FB05CE4",
};

const localeStrings = {
  "faction.abbr.lazax": "Lazax",
  "faction.full.lazax": "The Lazax",
  "planet.mecatol_rex_alpha": "Mecatol Rex Alpha",
  "technology.name.royal_battlecruiser_2": "Royal Battlecruiser II",
  "technology.name.government_shutdown": "Government Shutdown",
  "unit.flagship.lazax_flagship_name": "Pax Magnifica",
  "unit.mech.lazax_mech_name": "Targeting Computer",
  "unit.cruiser.lazax_battlecruiser": "Royal Battlecruiser",
  "unit_modifier.desc.targeting_computer": "+1 bombard die",
};

const factions = [
  {
    faction: "lazax",
    abilities: ["political_capital"],
    commodities: 5,
    home: 997,
    icon: "scpt/lazax/lazax-faction-icon.png",
    leaders: {
      agents: ["manthom_iq_seerva"],
      commanders: ["ibna_vel_syd"],
      heroes: ["the_maandu_edict"],
    },
    packageId: refPackageId,
    promissoryNotes: ["lazax_ontology"],
    source: "homebrew.scpt.lazax",
    startingTech: ["fleet_logistics"],
    startingUnits: {
      carrier: 1,
      cruiser: 2,
      fighter: 2,
      infantry: 5,
      space_dock: 1,
    },
    techs: ["royal_battlecruiser_2", "government_shutdown"],
    units: [
      "pax_magnifica",
      "targeting_computer",
      "lazax_battlecruiser",
      "lazax_battlecruiser_2",
    ],
    unpackExtra: [],
  },
];

const systems = [
  {
    tile: 997,
    source: "homebrew.scpt.lazax",
    home: true,
    packageId: refPackageId,
    img: "scpt/lazax/home-ui.png",
    planets: [
      {
        localeName: "planet.mecatol_rex_alpha",
        resources: 2,
        influence: 6,
      },
    ],
  },
];

const technologies = [
  {
    localeName: "technology.name.government_shutdown",
    cardNsid:
      "card.technology.yellow.lazax:homebrew.scpt.lazax/government_shutdown",
    type: "Yellow",
    requirements: { Yellow: 1 },
    source: "homebrew.scpt.lazax",
    faction: "lazax",
  },
  {
    localeName: "technology.name.royal_battlecruiser_2",
    cardNsid:
      "card.technology.unit_upgrade.lazax:homebrew.scpt.lazax/royal_battlecruiser_2",
    type: "Unit_Upgrade",
    requirements: { Green: 1, Yellow: 1, Red: 1 },
    source: "homebrew.scpt.lazax",
    faction: "lazax",
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.pax_magnifica",
    move: 1,
    capacity: 3,
    spaceCombat: { dice: 2, hit: 5 },
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.targeting_computer",
    triggerNsid:
      "card.leader.mech.lazax:homebrew.scpt.lazax/targeting_computer",
  },
  {
    unit: "cruiser",
    upgradeLevel: 1,
    localeName: "unit.cruiser.lazax_battlecruiser",
    bombardment: { dice: 1, hit: 6 },
    spaceCombat: { dice: 1, hit: 6 },
  },
  {
    unit: "cruiser",
    upgradeLevel: 2,
    localeName: "unit.cruiser.lazax_battlecruiser_2",
    triggerNsid:
      "card.technology.unit_upgrade.lazax:homebrew.scpt.lazax/lazax_battlecruiser_2",
    bombardment: { dice: 1, hit: 6 },
    spaceCombat: { dice: 2, hit: 6 },
    move: 3,
    capacity: 0,
  },
];

const unitModifiers = [
  {
    // Bombard when off planet.
    isCombat: true,
    localeName: "unit.mech.targeting_computer",
    localeDescription: "unit_modifier.desc.targeting_computer",
    owner: "self",
    priority: "mutate",
    triggerNsid:
      "card.leader.mech.lazax:homebrew.scpt.lazax/targeting_computer",
    filter: (auxData) => {
      return (
        auxData.self.has("mech") &&
        (auxData.rollType === "bombardment" ||
          auxData.rollType === "groundCombat")
      );
    },
    applyAll: (unitAttrsSet, auxData) => {
      let best = false;
      for (const unitAttrs of unitAttrsSet.values()) {
        if (unitAttrs.raw.bombardment && auxData.self.has(unitAttrs.raw.unit)) {
          if (
            !best ||
            unitAttrs.raw.bombardment.hit < best.raw.bombardment.hit
          ) {
            best = unitAttrs;
          }
        }
      }
      if (best) {
        best.raw.bombardment.extraDice =
          (best.raw.bombardment.extraDice || 0) + 1;
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

console.log("loaded scpt/lazax");
