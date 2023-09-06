module.exports = [
    {
        // "Mechs lose non-SUSTAIN DAMAGE abilities",
        isCombat: true,
        localeName: "unit_modifier.name.articles_of_war",
        localeDescription: "unit_modifier.desc.articles_of_war",
        owner: "any",
        priority: "mutate",
        triggerNsid: "card.agenda:homebrew.little-omega/articles_of_war",
        filter: (auxData) => {
            return auxData.self.has("mech");
        },
        applyAll: (unitAttrsSet, auxData) => {
            const mechAttrs = unitAttrsSet.get("mech");
            delete mechAttrs.raw.antiFighterBarrage;
            delete mechAttrs.raw.bombardment;
            delete mechAttrs.raw.planetaryShield;
            delete mechAttrs.raw.production;
            delete mechAttrs.raw.spaceCannon;
        },
    },
    {
        // Players cannot use Bombardment against units that are on planets that have a trait
        isCombat: true,
        localeName: "unit_modifier.name.conventions_of_war",
        localeDescription: "unit_modifier.desc.conventions_of_war",
        owner: "any",
        priority: "mutate",
        triggerNsid: "card.agenda:homebrew.little-omega/conventions_of_war",
        filter: (auxData) => {
            if (auxData.rollType !== "bombardment") {
                return false;
            }
            const planet = auxData.self.activePlanet;
            return planet && planet.traits.includes("cultural") || planet.traits.includes("industrial") 
                || planet.traits.includes("hazardous");
        },
        applyEach: (unitAttrs, auxData) => {
            if (unitAttrs.raw.bombardment) {
                delete unitAttrs.raw.bombardment;
            }
        },
    },
    {
        // "+1 to fighter's COMBAT rolls",
        isCombat: true,
        localeName: "unit_modifier.name.prophecy_of_ixth",
        localeDescription: "unit_modifier.desc.prophecy_of_ixth",
        owner: "self",
        priority: "adjust",
        triggerNsid: "card.agenda:homebrew.little-omega/prophecy_of_ixth",
        filter: (auxData) => {
            return (
                auxData.has("fighter") &&
                (auxData.rollType === "spaceCombat" ||
                    auxData.rollType === "groundCombat")
            );
        },
        applyAll: (unitAttrsSet, auxData) => {
            const fighterAttrs = unitAttrsSet.get("fighter");
            if (fighterAttrs.raw.spaceCombat) {
                fighterAttrs.raw.spaceCombat.hit -= 1;
            }
            if (fighterAttrs.raw.groundCombat) {
                fighterAttrs.raw.groundCombat.hit -= 1;
            }
        },
    }
]