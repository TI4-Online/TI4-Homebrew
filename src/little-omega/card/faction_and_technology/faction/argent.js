const { world } = require("@tabletop-playground/api");

const factions = [
  {
    faction: "argent",
    abilities: ["zeal", "raid_formation"],
    commodities: 3,
    home: 58,
    leaders: {
      agents: ["trilossa_aun_mirik"],
      commanders: ["trrakan_aun_zulok"],
      heroes: ["mirik_aun_sissiri"],
    },
    promissoryNotes: ["strike_wing_ambuscade"],
    icon: "global/factions/argent_icon.png",
    source: "pok",
    startingTech: ["sarween_tools", "plasma_scoring"],
    startingUnits: {
      carrier: 1,
      destroyer: 2,
      fighter: 2,
      infantry: 5,
      pds: 1,
      space_dock: 1,
    },
    techs: ["aerie_hololattice"],
    units: [
      "quetzecoatl",
      "strike_wing_alpha",
      "strike_wing_alpha_2",
      "aerie_sentinel",
    ],
  },
];

const nsidToTemplateId = {
  "sheet.faction:pok/argent": "CB80B541FA97459DA3667E37DB7EC6E3",
};

const replace = {
  "card.promissory.argent:pok/strike_wing_ambuscade":
    "card.promissory.argent:homebrew.little-omega/strike_wing_ambuscade",
  "card.technology.yellow.argent:pok/aerie_hololattice":
    "card.technology.yellow.argent:homebrew.little-omega/aerie_hololattice",
};

const unitModifiers = [
  {
    // "+1 die to a unit ability (anti-fighter barrage, bombardment, space cannon)",
    isCombat: true,
    localeName: "unit_modifier.name.strike_wing_ambuscade",
    localeDescription: "unit_modifier.desc.strike_wing_ambuscade",
    owner: "self",
    priority: "choose",
    triggerNsid:
      "card.promissory.argent:homebrew.little-omega/strike_wing_ambuscade",
    filter: (auxData) => {
      return (
        auxData.rollType === "spaceCannon" ||
        auxData.rollType === "antiFighterBarrage" ||
        auxData.rollType === "bombardment"
      );
    },
    applyAll: (unitAttrsSet, auxData) => {
      // antiFighterBarrage.
      let best = false;
      for (const unitAttrs of unitAttrsSet.values()) {
        if (
          unitAttrs.raw.antiFighterBarrage &&
          auxData.self.has(unitAttrs.raw.unit)
        ) {
          if (
            !best ||
            unitAttrs.raw.antiFighterBarrage.hit <
              best.raw.antiFighterBarrage.hit
          ) {
            best = unitAttrs;
          }
        }
      }
      if (best) {
        best.raw.antiFighterBarrage.extraDice =
          (best.raw.antiFighterBarrage.extraDice || 0) + 1;
      }
      // Bombardment.
      best = false;
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
      // Space cannon.
      best = false;
      for (const unitAttrs of unitAttrsSet.values()) {
        let has = auxData.self.has(unitAttrs.raw.unit);
        if (!has && auxData.self.hasAdjacent(unitAttrs.raw.unit)) {
          has =
            unitAttrs.raw.spaceCannon &&
            unitAttrs.raw.spaceCannon.range &&
            unitAttrs.raw.spaceCannon.range > 0;
        }
        if (unitAttrs.raw.spaceCannon && has) {
          if (
            !best ||
            unitAttrs.raw.spaceCannon.hit < best.raw.spaceCannon.hit
          ) {
            best = unitAttrs;
          }
        }
      }
      if (best) {
        best.raw.spaceCannon.extraDice =
          (best.raw.spaceCannon.extraDice || 0) + 1;
      }
    },
  },
];

world.TI4.homebrew.inject({
  factions,
  nsidToTemplateId,
  unitModifiers,
  replace,
});
