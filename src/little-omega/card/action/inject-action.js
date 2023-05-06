const { world } = require("@tabletop-playground/api");

world.TI4.homebrew.inject({
    nsidToTemplateId:
    {
        "card.action:homebrew.little-omega.action/0": "1C24DF4E709944BB940F417D66E67B8C"
    },
    replace:
    {
        "card.action:base/ancient_burial_sites": "card.action:homebrew.little-omega.action/ancient_burial_sites",
        "card.action:base/assassinate_representative": "card.action:homebrew.little-omega.action/assassinate_representative",
        "card.action:base/bribery": "card.action:homebrew.little-omega.action/bribery",
        "card.action:base/confusing_legal_text": "card.action:homebrew.little-omega.action/confusing_legal_text",
        "card.action:base/construction_rider": "card.action:homebrew.little-omega.action/construction_rider",
        "card.action:base/cripple_defenses": "card.action:homebrew.little-omega.action/cripple_defenses",
        "card.action:base/direct_hit.1": "card.action:homebrew.little-omega.action/direct_hit.1",
        "card.action:base/direct_hit.2": "card.action:homebrew.little-omega.action/direct_hit.2",
        "card.action:base/direct_hit.3": "card.action:homebrew.little-omega.action/direct_hit.3",
        "card.action:base/direct_hit.4": "card.action:homebrew.little-omega.action/direct_hit.4",
        "card.action:base/distinguished_councilor": "card.action:homebrew.little-omega.action/distinguished_councilor",
        "card.action:base/experimental_battlestation": "card.action:homebrew.little-omega.action/experimental_battlestation",
        "card.action:base/economic_initiative": "card.action:homebrew.little-omega.action/economic_initiative",
        "card.action:codex.ordinian/fighter_conscription": "card.action:homebrew.little-omega.action/fighter_conscription",
        "card.action:codex.ordinian/ghost_squad": "card.action:homebrew.little-omega.action/ghost_squad",
        "card.action:codex.ordinian/hack_election": "card.action:homebrew.little-omega.action/hack_election",
        "card.action:base/industrial_initiative": "card.action:homebrew.little-omega.action/industrial_initiative",
        "card.action:base/infiltrate": "card.action:homebrew.little-omega.action/infiltrate",
        "card.action:codex.ordinian/insider_information": "card.action:homebrew.little-omega.action/insider_information",
        "card.action:base/lost_star_chart": "card.action:homebrew.little-omega.action/lost_star_chart",
        "card.action:base/lucky_shot": "card.action:homebrew.little-omega.action/lucky_shot",
        "card.action:base/maneuvering_jets.1": "card.action:homebrew.little-omega.action/maneuvering_jets.1",
        "card.action:base/maneuvering_jets.2": "card.action:homebrew.little-omega.action/maneuvering_jets.2",
        "card.action:base/maneuvering_jets.3": "card.action:homebrew.little-omega.action/maneuvering_jets.3",
        "card.action:base/maneuvering_jets.4": "card.action:homebrew.little-omega.action/maneuvering_jets.4",
        "card.action:base/reactor_meltdown": "card.action:homebrew.little-omega.action/reactor_meltdown",
        "card.action:base/salvage": "card.action:homebrew.little-omega.action/salvage",
        "card.action:codex.ordinian/scramble_frequency": "card.action:homebrew.little-omega.action/scramble_frequency",
        "card.action:base/tactical_bombardment": "card.action:homebrew.little-omega.action/tactical_bombardment",
        "card.action:base/unexpected_action": "card.action:homebrew.little-omega.action/unexpected_action",
        "card.action:base/upgrade": "card.action:homebrew.little-omega.action/upgrade",
        "card.action:base/warfare_rider": "card.action:homebrew.little-omega.action/warfare_rider"
    }
  });

world.TI4.homebrew.resetOnTableDecks()