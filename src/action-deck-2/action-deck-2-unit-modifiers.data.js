module.exports = [
	{
		// Shock and Awe
		// Before you roll dice for Bombardment:
        // Choose 1 of your ships with Bombardment in the active system. That ship may roll 2 additional dice.
        isCombat: true,
        localeName: "unit_modifier.name.shock_and_awe",
        localeDescription: "unit_modifier.desc.shock_and_awe",
        owner: "self",
        priority: "choose",
        triggerNsid: "card.action:homebrew.action_deck_2/shock_and_awe",
		filter: (auxData) => {
            if (auxData.rollType === "bombardment") {
				const isFirst = auxData.isFirstBombardmentPlanet;
                return isFirst === undefined || isFirst;
            }
        },
        applyAll: (unitAttrsSet, auxData) => {
            // Bombardment.
            let best = false;
            unitAttrsSet.values().forEach((unitAttrs) => {
                if (
                    unitAttrs.raw.bombardment &&
                    auxData.self.has(unitAttrs.raw.unit)
                ) {
                    if (
                        !best ||
                        unitAttrs.raw.bombardment.hit < best.raw.bombardment.hit
                    ) {
                        best = unitAttrs;
                    }
                }
            })
            if (best) {
                best.raw.bombardment.extraDice =
                    (best.raw.bombardment.extraDice || 0) + 2;
            }
        }
    }
]