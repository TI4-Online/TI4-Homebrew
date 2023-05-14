module.exports = [
    {
        // "Apply +1 to COMBAT rolls, reroll misses but must destroy any units that do not produce at least one hit",
        isCombat: true,
        localeName: "unit_modifier.name.the_crown_of_thalnos",
        localeDescription: "unit_modifier.desc.the_crown_of_thalnos",
        owner: "self",
        priority: "adjust",
        toggleActive: true,
        triggerNsid: "card.relic:homebrew.little-omega/the_crown_of_thalnos",
        filter: (auxData) => {
            return (
                auxData.rollType === "spaceCombat" ||
                auxData.rollType === "groundCombat"
            );
        },
        applyEach: (unitAttrs, auxData) => {
            if (unitAttrs.raw.spaceCombat) {
                unitAttrs.raw.spaceCombat.hit -= 1;
                unitAttrs.raw.spaceCombat.rerollMisses = true;
            }
            if (unitAttrs.raw.groundCombat) {
                unitAttrs.raw.groundCombat.hit -= 1;
                unitAttrs.raw.groundCombat.rerollMisses = true;
            }
        },
    }
]