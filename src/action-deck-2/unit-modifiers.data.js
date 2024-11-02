module.exports = [
    {
        // Shock Troops
        // At the start of a combat:
        // Apply +1 to the result of each of your unit's combat rolls during this combat.
        isCombat: true,
        localeName: "unit_modifier.name.shock_troops",
        localeDescription: "unit_modifier.desc.shock_troops",
        owner: "self",
        priority: "adjust",
        triggerNsid: "card.action:homebrew.action_deck_2/shock_troops",
        filter: (auxData) => {
            return auxData.rollType === "spaceCombat" ||
                auxData.rollType === "groundCombat";
        },
        applyEach: (unitAttrs, auxData) => {
            if (unitAttrs.raw.spaceCombat) {
                unitAttrs.raw.spaceCombat.hit -= 1;
            }
            if (unitAttrs.raw.groundCombat) {
                unitAttrs.raw.groundCombat.hit -= 1;
            }
        }
    }
]