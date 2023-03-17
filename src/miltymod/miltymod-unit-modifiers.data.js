module.exports = [
    // Unit modifiers
{
    // "+1 die to a single SPACE CANNON or BOMBARDMENT roll",
    isCombat: true,
    localeName: "unit_modifier.name.plasma_scoring",
    localeDescription: "unit_modifier.desc.plasma_scoring",
    owner: "self",
    priority: "choose",
    triggerNsid: "card.technology.red:homebrew.miltymod/plasma_scoring",
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
]