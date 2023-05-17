const { world } = require("@tabletop-playground/api");

world.TI4.homebrew.inject({
    nsidToTemplateId:
    {
        "card.technology.blue:homebrew.little-omega/0": "D2446BD708E543EC85712BA54B7BAEB9",
        "card.technology.green:homebrew.little-omega/0": "6F76BC9582C34A4FAA6B86340DD32FBE",
        "card.technology.red:homebrew.little-omega/0": "B5444DBD508D4B9D8104C986740C9AD3",
        "card.technology.yellow:homebrew.little-omega/0": "120D893371DB41DCB4F7117EA3E94BA9"
    },
    replace:
    {
            "card.technology.blue:base/fleet_logistics": "card.technology.blue:homebrew.little-omega/fleet_logistics",
            "card.technology.blue:base/gravity_drive": "card.technology.blue:homebrew.little-omega/gravity_drive",
            "card.technology.blue:base/lightwave_deflector": "card.technology.blue:homebrew.little-omega/lightwave_deflector",
            "card.technology.green:base/dacxive_animators": "card.technology.green:homebrew.little-omega/dacxive_animators",
            "card.technology.green:base/hyper_metabolism": "card.technology.green:homebrew.little-omega/hyper_metabolism",
            "card.technology.green:base/neural_motivator": "card.technology.green:homebrew.little-omega/neural_motivator",
            "card.technology.green:pok/psychoarchaeology": "card.technology.green:homebrew.little-omega/psychoarchaeology",
            "card.technology.green:base/x89_bacterial_weapon": "card.technology.green:homebrew.little-omega/x89_bacterial_weapon",
            "card.technology.red:pok/ai_development_algorithm": "card.technology.red:homebrew.little-omega/ai_development_algorithm",
            "card.technology.red:base/duranium_armor": "card.technology.red:homebrew.little-omega/duranium_armor",
            "card.technology.red:pok/self_assembly_routines": "card.technology.red:homebrew.little-omega/graviton_laser_system",
            "card.technology.red:base/magen_defense_grid": "card.technology.red:homebrew.little-omega/magen_defense_grid",
            "card.technology.red:base/plasma_scoring": "card.technology.red:homebrew.little-omega/plasma_scoring",
            "card.technology.yellow:base/integrated_economy": "card.technology.yellow:homebrew.little-omega/integrated_economy",
            "card.technology.yellow:pok/predictive_intelligence": "card.technology.yellow:homebrew.little-omega/predictive_intelligence",
            "card.technology.yellow:base/graviton_laser_system": "card.technology.yellow:homebrew.little-omega/self_assembly_routines",
            "card.technology.yellow:base/sarween_tools": "card.technology.yellow:homebrew.little-omega/sarween_tools"
    }
});

if (!world.__littleOmegaFull && !world.__littleOmegaFactionAndTechnologyLoaded) {
    world.TI4.homebrew.resetOnTableDecks();
    world.__littleOmegaFactionAndTechnologyLoaded = true;
}