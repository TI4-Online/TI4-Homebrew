const { world } = require("@tabletop-playground/api");

world.TI4.homebrew.inject({
    nsidToTemplateId:
    {
        "card.technology.blue:homebrew.little-omega/0": "D2446BD708E543EC85712BA54B7BAEB9",
        "card.technology.blue:homebrew.little-omega/1": "CE84A93A4BFF4386BCF4B6D1C156B9BE",
        "card.technology.green:homebrew.little-omega/0": "6F76BC9582C34A4FAA6B86340DD32FBE",
        "card.technology.green:homebrew.little-omega/1": "66AB03149A95430A8EC8864682E7A8E7",
        "card.technology.red:homebrew.little-omega/0": "B5444DBD508D4B9D8104C986740C9AD3",
        "card.technology.red:homebrew.little-omega/1": "CA5910712ED9444A896F34B5EF38A142",
        "card.technology.yellow:homebrew.little-omega/0": "120D893371DB41DCB4F7117EA3E94BA9",
        "card.technology.yellow:homebrew.little-omega/1": "3593CBE42FA54538AF48639AD3B8EA4B",
        "card.promissory:homebrew.little-omega/1": "E88B029F33C5472296BFB0952E4DDD13",
        "card.leader:homebrew.little-omega/0": "F555351430D64FAF803BAFA4F5738595",
        "card.starting_technology:homebrew.little-omega/0": "F7B14042E88349E8BB082C147565AB08"
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

require("./faction/hacan");
require("./faction/jolnar");
require("./faction/xxcha");
require("./faction/mentak");
require("./faction/yin");

if (!world.__littleOmegaFull && !world.__littleOmegaFactionAndTechnologyLoaded) {
    world.TI4.homebrew.resetOnTableDecks();
    world.__littleOmegaFactionAndTechnologyLoaded = true;
}