const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.tnelis": "Tnelis",
  "faction.full.tnelis": "The Tnelis Syndicate",
  "planet.discordia": "Discordia",
  "technology.name.daedalon_flight_system": "Daedalon Flight System",
  "unit.destroyer.blockade_runner": "Blockade Runner",
  "unit.destroyer.blockade_runner_2": "Blockade Runner 2",
  "unit.flagship.principia_aneris": "Principia Aneris",
  "unit.mech.daedalon": "Daedalon",
  "unit_modifier.desc.principia_aneris":
    "NOT YET APPLIED!!! 1 ship in this system, during this combat round rolls 1 less combat die",
  "unit_modifier.name.davish_snorri": "Davish S'Norri",
  "unit_modifier.desc.davish_snorri":
    "NOT YET APPLIED!!! Choose 1 ship during this invasion, that ship may use its ANTI-FIGHTER BARRAGE as if it were BOMBARDMENT",
};

const factions = [
  {
    faction: "tnelis",
    abilities: [
      "plausible_deniability",
      "information_brokers",
      "stealth_insertion",
    ],
    commodities: 2,
    home: 3212,
    leaders: {
      agents: ["davish_snorri"],
      commanders: ["fillipo_rois"],
      heroes: ["turra_sveyar"],
    },
    promissoryNotes: ["plots_within_plots"],
    icon: "discordant-stars/faction-icons/tnelis.png",
    source: "homebrew.discordant_stars",
    startingTechChoice: "tnelis",
    startingTechChoices: [
      "neural_motivator",
      "antimass_deflectors",
      "plasma_scoring",
    ],
    startingTech: [],
    startingUnits: {
      carrier: 1,
      destroyer: 2,
      fighter: 2,
      infantry: 4,
      pds: 1,
      space_dock: 1,
    },
    techs: ["daedalon_flight_system"],
    units: [
      "principia_aneris",
      "daedalon",
      "blockade_runner",
      "blockade_runner_2",
    ],
    packageId: refPackageId,
  },
];

const factionAbilities = [
  {
    name: "Plausible Deniability",
    description:
      "When you draw 1 or more secret objective cards, draw 1 additional secret objective card. Then, return 1 secret objective card to the secret objective deck; shuffle that deck.",
    source: "Tnelis (DS)",
  },
  {
    name: "Information Brokers",
    description: "You may have 1 additional unscored secret objective.",
    source: "Tnelis (DS)",
  },
  {
    name: "Stealth Insertion",
    description:
      "If you place units onto the same planet as another player's units, your units must participate in combat during the 'Ground Combat' step.",
    source: "Tnelis (DS)",
  },
];

const nsidToTemplateId = {
  "sheet.faction:homebrew.discordant_stars/tnelis":
    "8A849C90477BE025EB3DA89FA077CC8B",
  "tile.system:homebrew.discordant_stars/3212":
    "2EC81B92A6974C8FA215E62235671284",
  "token.command:homebrew.discordant_stars/tnelis":
    "2C112E1845AD443288D703AC4D773770",
  "token.control:homebrew.discordant_stars/tnelis":
    "1FF8D16242C17ED0E40B2598C37591E7",
};

const technologies = [
  {
    localeName: "technology.name.daedalon_flight_system",
    cardNsid:
      "card.technology.yellow.tnelis:homebrew.discordant_stars/daedalon_flight_system",
    type: "Yellow",
    requirements: { Yellow: 1 },
    source: "homebrew.discordant_stars",
    faction: "tnelis",
  },
  {
    localeName: "unit.destroyer.blockade_runner_2",
    cardNsid:
      "card.technology.unit_upgrade.tnelis:homebrew.discordant_stars/blockade_runner_2",
    type: "unitUpgrade",
    requirements: { Red: 2 },
    abbrev: " BR II",
    faction: "tnelis",
    unitPosition: 5,
  },
];

const systems = [
  {
    tile: 3212,
    source: "homebrew.discordant_stars",
    home: true,
    packageId: refPackageId,
    img: "discordant-stars/tiles/homeworld/tile_3212.jpg",
    planets: [{ localeName: "planet.discordia", resources: 4, influence: 1 }],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.principia_aneris",
    unitAbility: "unit.flagship.principia_aneris",
    triggerNsid:
      "card.technology.unit_upgrade.tnelis:franken.discordant_stars/principia_aneris",
    spaceCombat: { dice: 4, hit: 9 },
    move: 2,
  },
  {
    unit: "destroyer",
    upgradeLevel: 1,
    localeName: "unit.destroyer.blockade_runner",
    triggerNsid:
      "card.technology.unit_upgrade.tnelis:franken.discordant_stars/blockade_runner",
    antiFighterBarrage: { dice: 3, hit: 9 },
  },
  {
    unit: "destroyer",
    upgradeLevel: 2,
    localeName: "unit.destroyer.blockade_runner_2",
    triggerNsid:
      "card.technology.unit_upgrade.tnelis:homebrew.discordant_stars/blockade_runner_2",
    spaceCombat: { hit: 8 },
    antiFighterBarrage: { dice: 4, hit: 6 },
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.daedalon",
    triggerNsid: "card.leader.mech.tnelis:homebrew.discordant_stars/daedalon",
  },
];

const unitModifiers = [
  {
    // TODO: combat: test
    // "-1 die to a single SPACE COMBAT roll of the opponent",
    isCombat: true,
    localeName: "unit.flagship.principia_aneris",
    localeDescription: "unit_modifier.desc.principia_aneris",
    triggerUnitAbility: "unit.flagship.principia_aneris",
    owner: "opponent",
    priority: "adjust",
    filter: (auxData) => {
      return auxData.rollType === "spaceCombat";
    },
    applyAll: (unitAttrsSet, auxData) => {
      let best = false;
      for (const unitAttrs of unitAttrsSet.values()) {
        if (
            unitAttrs.raw.spaceCombat &&
            auxData.self.has(unitAttrs.raw.unit)
        ) {
          if (
              !best ||
              unitAttrs.raw.spaceCombat.hit < best.raw.spaceCombat.hit
          ) {
            best = unitAttrs;
          }
        }
      }
      if (best && best.raw.spaceCombat.dice > 0) {
        best.raw.spaceCombat.dice -= 1;
      }
    },
  },
  {
    // TODO: combat: test
    // "one unit may use its ANTI FIGHTER BARRAGE as BOMBARDMENT",
    isCombat: true,
    localeName: "unit_modifier.name.davish_snorri",
    localeDescription: "unit_modifier.desc.davish_snorri",
    toggleActive: true,
    owner: "self",
    priority: "adjust",
    triggerNsids: [
      "card.leader.agent.tnelis:homebrew.discordant_stars/davish_snorri",
    ],
    filter: (auxData) => {
      return auxData.rollType === "bombardment";
    },
    applyAll: (unitAttrsSet, auxData) => {
      let best = false;
      let bestHitCount = 0;
      for (const unitAttrs of unitAttrsSet.values()) {
        if (
            unitAttrs.raw.antiFighterBarrage &&
            auxData.self.has(unitAttrs.raw.unit)
        ) {
          const unitHitCount = unitAttrs.raw.antiFighterBarrage.dice * (11 - unitAttrs.raw.antiFighterBarrage.hit);
          if (
              !best ||
              bestHitCount < unitHitCount
          ) {
            best = unitAttrs;
            bestHitCount = unitHitCount;
          }
        }
      }
      if (best && best.raw.antiFighterBarrage.dice > 0) {
        best.raw.bombardment = best.raw.antiFighterBarrage;
      }
    },
  },
];

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
