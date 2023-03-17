const { world } = require("@tabletop-playground/api");

const factions = [{
  faction: "winnu",
  abilities: ["blood_ties", "reclamation"],
  commodities: 4,
  home: 7,
  leaders: {
      agents: ["berekar_berekon"],
      commanders: ["rickar_rickani"],
      heroes: ["mathis_mathinus"],
  },
  promissoryNotes: ["acquiescence"],
  icon: "global/factions/winnu_icon.png",
  source: "base",
  startingTechChoice: "winnu",
  startingTech: [],
  startingUnits: {
      carrier: 1,
      cruiser: 2,
      fighter: 2,
      infantry: 3,
      pds: 1,
      space_dock: 1,
  },
  techs: ["lazax_gate_folding", "hegemonic_trade_policy"],
  units: ["salai_sai_corian", "reclaimer"],
}];

 const nsidToTemplateId = {
    "sheet.faction:base/winnu":
      "5E8E78B1478DADEC1C992CAB0D9E61C3",
};

const replace = {
  "card.technology.yellow.winnu:base/hegemonic_trade_policy" : "card.technology.yellow.winnu:homebrew.miltymod/hegemonic_trade_policy",
  "card.technology.blue.winnu:base/lazax_gate_folding" : "card.technology.blue.winnu:homebrew.miltymod/lazax_gate_folding",
  "card.promissory.winnu:base/acquiescence" : "card.promissory.winnu:codex.ordinian/acquiescence.omega",
};

const technologies = [{
    localeName: "technology.name.hegemonic_trade_policy",
    cardNsid:
        "card.technology.yellow.winnu:homebrew.miltymod/hegemonic_trade_policy",
    type: "Yellow",
    requirements: { Yellow: 1 },
    source: "homebrew.miltymod",
    faction: "winnu"
  },
  {
    localeName: "technology.name.lazax_gate_folding",
    cardNsid:
        "card.technology.yellow.winnu:homebrew.miltymod/lazax_gate_folding",
    type: "Blue",
    requirements: { Blue : 1},
    source: "homebrew.miltymod",
    faction: "winnu"
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.salai_sai_corian",
    triggerNsid:
        "card.technology.unit_upgrade.winnu:homebrew.miltymod/salai_sai_corian",
    spaceCombat: { dice: 1, hit: 7 },
    unitAbility: "unit.flagship.salai_sai_corian",
  },
];

const unitModifiers = [
  {
    // Rolls number of dice equal to number of opponent's non-fighter ships
    isCombat: true,
    localeName: "unit.flagship.salai_sai_corian",
    localeDescription: "unit_modifier.desc.salai_sai_corian",
    owner: "self",
    priority: "adjust",
    triggerUnitAbility: "unit.flagship.salai_sai_corian",
    filter: (auxData) => {
        return (
            auxData.rollType === "spaceCombat" &&
            auxData.self.has("flagship")
        );
    },
    applyAll: (unitAttrsSet, auxData) => {
        let nonFighterShipCount = 0;
        for (const unitAttrs of auxData.opponent.unitAttrsSet.values()) {
            if (unitAttrs.raw.ship && unitAttrs.raw.unit !== "fighter") {
                nonFighterShipCount += auxData.opponent.count(
                    unitAttrs.raw.unit
                );
            }
        }
        const flagshipAttrs = unitAttrsSet.get("flagship");
        if (flagshipAttrs.raw.spaceCombat) {
            flagshipAttrs.raw.spaceCombat.dice = nonFighterShipCount + 1;
        }
    },
  },
];

world.TI4.homebrew.inject({
  factions,
  nsidToTemplateId,
  technologies,
  unitAttrs,
  unitModifiers,
  replace,
});
