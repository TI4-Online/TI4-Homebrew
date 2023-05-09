module.exports = [
{
        // Close Quarters
        // At the start of a combat:
        // Apply +3 to the result of each unit's combat rolls during this combat.
        isCombat: true,
        localeName: "unit_modifier.name.close_quarters",
        localeDescription: "unit_modifier.desc.close_quarters",
        owner: "any",
        priority: "adjust",
        triggerNsid: "card.action:homebrew.action_deck_2/close_quarters",
        filter: (auxData) => {
            return auxData.rollType === "spaceCombat" ||
                auxData.rollType === "groundCombat";
        },
        applyEach: (unitAttrs, auxData) => {
            if (unitAttrs.raw.spaceCombat) {
                unitAttrs.raw.spaceCombat.hit -= 3;
            }
            if (unitAttrs.raw.groundCombat) {
                unitAttrs.raw.groundCombat.hit -= 3;
            }
        }
    },
    {
        // Graviton Shielding
        // At the start of an invasion:
        // During this invasion, each planet you control in the active system gains Planetary Shield, as if it were a unit.
        isCombat: true,
        localeName: "unit_modifier.name.graviton_shielding",
        localeDescription: "unit_modifier.desc.graviton_shielding",
        owner: "opponent",
        priority: "mutate.late", // after adding bombardment elsewhere
        triggerNsid: "card.action:homebrew.action_deck_2/graviton_shielding",
        filter: (auxData) => {
            return auxData.rollType === "bombardment";
        },
        applyEach: (unitAttrs, auxData) => {
            let anyDisable = false;
            for (const unitAttrs of auxData.self.unitAttrsSet.values()) {
                if (!auxData.self.has(unitAttrs.unit)) {
                    continue;
                }
                if (unitAttrs.raw.disablePlanetaryShield) {
                    anyDisable = true;
                    break;
                }
            }
            if (anyDisable) {
                return false;
            }
            if (unitAttrs.raw.bombardment) {
                delete unitAttrs.raw.bombardment;
            }
        }
    },
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
                        !best || unitAttrs.raw.bombardment.hit < best.raw.bombardment.hit
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
    },
    {
        // Shrapnel Turrets
        // Before you roll dice for Anti-Fighter Barrage:
        // Each of your non-fighter ships in the active system that do not have Anti-Fighter Barrage gain Anti-Fighter Barrage 9 (x2) until the end of the combat.
        isCombat: true,
        localeName: "unit_modifier.name.shrapnel_turrets",
        localeDescription: "unit_modifier.desc.shrapnel_turrets",
        owner: "self",
        priority: "mutate",
        triggerNsid: "card.action:homebrew.action_deck_2/shrapnel_turrets",
        filter: (auxData) => {
            return auxData.rollType === "antiFighterBarrage";
        },
        applyEach: (unitAttrs, auxData) => {
            if (
                unitAttrs.raw.ship &&
                unitAttrs.raw.unit !== "fighter" &&
                !unitAttrs.raw.antiFighterBarrage
            ) {
                unitAttrs.raw.antiFighterBarrage = {
                    dice: 2,
                    hit: 9
                };
            }
        }
    },
    {
        // Virulent Gas Canisters
        // Before your units use Bombardment or Space Cannon against another player's ground forces:
        // Apply +1 to the result of each die roll; hits produced by these rolls cannot be assigned to mechs.
        isCombat: true,
        localeName: "unit_modifier.name.virulent_gas_canisters",
        localeDescription: "unit_modifier.desc.virulent_gas_canisters",
        owner: "self",
        priority: "adjust",
        triggerNsid: "card.action:homebrew.action_deck_2/virulent_gas_canisters",
        filter: (auxData) => {
            return (auxData.rollType === "spaceCannon" && auxData.activePlanet) // planet means space cannon defense
                || auxData.rollType === "bombardment";
        },
        applyEach: (unitAttrs, auxData) => {
            if (unitAttrs.raw.spaceCannon) {
                unitAttrs.raw.spaceCannon.hit -= 1;
            }
            if (unitAttrs.raw.bombardment) {
                unitAttrs.raw.bombardment.hit -= 1;
            }
        }
    }
]