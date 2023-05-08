const { world } = require("@tabletop-playground/api");
const UNIT_MODIFIERS = require("./unit-modifiers.data");

world.TI4.homebrew.inject({
    nsidToTemplateId:
    {
        "card.action:homebrew.little-omega/0": "1C24DF4E709944BB940F417D66E67B8C"
    },
    replace:
    {
        "card.action:base/ancient_burial_sites": "card.action:homebrew.little-omega/ancient_burial_sites",
        "card.action:base/assassinate_representative": "card.action:homebrew.little-omega/assassinate_representative",
        "card.action:base/bribery": "card.action:homebrew.little-omega/bribery",
        "card.action:base/confusing_legal_text": "card.action:homebrew.little-omega/confusing_legal_text",
        "card.action:base/construction_rider": "card.action:homebrew.little-omega/construction_rider",
        "card.action:base/cripple_defenses": "card.action:homebrew.little-omega/cripple_defenses",
        "card.action:base/direct_hit.1": "card.action:homebrew.little-omega/direct_hit.1",
        "card.action:base/direct_hit.2": "card.action:homebrew.little-omega/direct_hit.2",
        "card.action:base/direct_hit.3": "card.action:homebrew.little-omega/direct_hit.3",
        "card.action:base/direct_hit.4": "card.action:homebrew.little-omega/direct_hit.4",
        "card.action:base/distinguished_councilor": "card.action:homebrew.little-omega/distinguished_councilor",
        "card.action:base/experimental_battlestation": "card.action:homebrew.little-omega/experimental_battlestation",
        "card.action:base/economic_initiative": "card.action:homebrew.little-omega/economic_initiative",
        "card.action:codex.ordinian/fighter_conscription": "card.action:homebrew.little-omega/fighter_conscription",
        "card.action:codex.ordinian/ghost_squad": "card.action:homebrew.little-omega/ghost_squad",
        "card.action:codex.ordinian/hack_election": "card.action:homebrew.little-omega/hack_election",
        "card.action:base/industrial_initiative": "card.action:homebrew.little-omega/industrial_initiative",
        "card.action:base/infiltrate": "card.action:homebrew.little-omega/infiltrate",
        "card.action:codex.ordinian/insider_information": "card.action:homebrew.little-omega/insider_information",
        "card.action:base/lost_star_chart": "card.action:homebrew.little-omega/lost_star_chart",
        "card.action:base/lucky_shot": "card.action:homebrew.little-omega/lucky_shot",
        "card.action:base/maneuvering_jets.1": "card.action:homebrew.little-omega/maneuvering_jets.1",
        "card.action:base/maneuvering_jets.2": "card.action:homebrew.little-omega/maneuvering_jets.2",
        "card.action:base/maneuvering_jets.3": "card.action:homebrew.little-omega/maneuvering_jets.3",
        "card.action:base/maneuvering_jets.4": "card.action:homebrew.little-omega/maneuvering_jets.4",
        "card.action:base/reactor_meltdown": "card.action:homebrew.little-omega/reactor_meltdown",
        "card.action:base/salvage": "card.action:homebrew.little-omega/salvage",
        "card.action:codex.ordinian/scramble_frequency": "card.action:homebrew.little-omega/scramble_frequency",
        "card.action:base/tactical_bombardment": "card.action:homebrew.little-omega/tactical_bombardment",
        "card.action:base/unexpected_action": "card.action:homebrew.little-omega/unexpected_action",
        "card.action:base/upgrade": "card.action:homebrew.little-omega/upgrade",
        "card.action:base/warfare_rider": "card.action:homebrew.little-omega/warfare_rider"
    },
    unitModifiers: UNIT_MODIFIERS
});

world.TI4.homebrew.resetOnTableDecks()