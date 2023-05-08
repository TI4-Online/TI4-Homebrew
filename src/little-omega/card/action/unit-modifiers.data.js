module.exports = [
    {
        // "One in or adjacent Space Dock gets SPACE CANNON 5x3",
        isCombat: true,
        localeName: "unit_modifier.name.experimental_battlestation",
        localeDescription: "unit_modifier.desc.experimental_battlestation",
        owner: "self",
        priority: "mutate",
        triggerNsid: "card.action:homebrew.little-omega/experimental_battlestation",
        filter: (auxData) => {
            return (
                auxData.rollType === "spaceCannon" &&
                !auxData.planet &&
                (auxData.self.has("space_dock") ||
                    auxData.hasAdjacent("space_dock"))
            );
        },
        applyAll: (unitAttrs, auxData) => {
            if (
                auxData.self.has("space_dock") ||
                auxData.self.hasAdjacent("space_dock")
            ) {
                unitAttrs.addSpecialUnit(
                    new world.TI4.UnitAttrs({
                        unit: "experimental_battlestation",
                        localeName:
                            "unit_modifier.name.experimental_battlestation",
                        spaceCannon: { hit: 5, dice: 3, range: 1 },
                    })
                );
                auxData.self.overrideCount("experimental_battlestation", 1);
            }
            world.TI4.agenda.Agenda
        }
    },
    {
        // Tactical Bombardment
        // At the start of an invasion:
        // During this invasion, on each planet you use Bombardment against, apply +1 to the result of each of your unit's combat rolls.
        isCombat: true,
        localeName: "unit_modifier.name.tactical_bombardment",
        localeDescription: "unit_modifier.desc.tactical_bombardment",
        owner: "self",
        priority: "adjust",
        toggleActive: true,
        triggerNsid: "card.action:homebrew.little-omega/tactical_bombardment",
        filter: (auxData) => {
            return auxData.rollType === "groundCombat";
        },
        applyEach: (unitAttrs, auxData) => {
            if (unitAttrs.raw.groundCombat) {
                unitAttrs.raw.groundCombat.hit -= 1;
            }
        }
    }
]