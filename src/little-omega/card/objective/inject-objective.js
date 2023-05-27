const { world } = require("@tabletop-playground/api");

world.TI4.homebrew.inject({
    nsidToTemplateId:
    {
        "card.objective.public_1:homebrew.little-omega/0": "D36F63FE12634723B697FFB878349422",
        "card.objective.public_2:homebrew.little-omega/0": "D4082C79DF8F4152A9109743F8CBDED4",
        "card.objective.secret:homebrew.little-omega/0": "9D34B4A00257449D9491900486FADDA6"
    },
    replace:
    {
        "card.objective.public_1:pok/discover_lost_outposts": "card.objective.public_1:homebrew.little-omega/bestow_a_keleres_fleet",
        "card.objective.public_1:base/diversify_research": "card.objective.public_1:homebrew.little-omega/impose_order",
        "card.objective.public_1:base/develop_weaponry": "card.objective.public_1:homebrew.little-omega/monopolize_a_trade_route",
        "card.objective.public_1:base/lead_from_the_front": "card.objective.public_1:homebrew.little-omega/study_the_unknown",
        "card.objective.public_1:base/erect_a_monument": "card.objective.public_1:homebrew.little-omega/erect_a_momument",
        "card.objective.public_1:base/expand_borders": "card.objective.public_1:homebrew.little-omega/expand_borders",
        "card.objective.public_1:base/found_research_outposts": "card.objective.public_1:homebrew.little-omega/found_research_outposts",
        "card.objective.public_1:base/intimidate_council": "card.objective.public_1:homebrew.little-omega/intimidate_the_council",
        "card.objective.public_1:pok/make_history": "card.objective.public_1:homebrew.little-omega/make_history",
        "card.objective.public_1:base/negotiate_trade_routes": "card.objective.public_1:homebrew.little-omega/negotiate_trade_routes",
        "card.objective.public_1:pok/engineer_a_marvel": "card.objective.public_1:homebrew.little-omega/parade_marvels",
        "card.objective.public_1:pok/raise_a_fleet": "card.objective.public_1:homebrew.little-omega/raise_a_fleet",
        "card.objective.public_1:base/sway_the_council": "card.objective.public_1:homebrew.little-omega/sway_the_council",
        "card.objective.public_2:base/galvanize_the_people": "card.objective.public_2:homebrew.little-omega/establish_an_imperial_navy",
        "card.objective.public_2:base/master_the_sciences": "card.objective.public_2:homebrew.little-omega/declare_victory",
        "card.objective.public_2:base/revolutionize_warfare": "card.objective.public_2:homebrew.little-omega/dominate_cities",
        "card.objective.public_2:pok/reclaim_ancient_monuments": "card.objective.public_2:homebrew.little-omega/learn_the_secrets_of_the_cosmos",
        "card.objective.public_2:base/form_galactic_brain_trust": "card.objective.public_2:homebrew.little-omega/form_a_galactic_brain_trust",
        "card.objective.public_2:pok/patrol_vast_territories": "card.objective.public_2:homebrew.little-omega/patrol_vast_territories",
        "card.objective.public_2:pok/protect_the_border": "card.objective.public_2:homebrew.little-omega/protect_the_border",
        "card.objective.public_2:base/subdue_the_galaxy": "card.objective.public_2:homebrew.little-omega/subdue_the_galaxy",
        "card.objective.public_2:base/unify_the_colonies": "card.objective.public_2:homebrew.little-omega/unify_the_colonies",
        "card.objective.secret:pok/brave_the_void": "card.objective.secret:homebrew.little-omega/brave_the_void",
        "card.objective.secret:pok/defy_space_and_time": "card.objective.secret:homebrew.little-omega/defy_space_and_time",
        "card.objective.secret:pok/establish_hegemony": "card.objective.secret:homebrew.little-omega/establish_hegemony",
        "card.objective.secret:codex.vigil/fight_with_precision.omega": "card.objective.secret:homebrew.little-omega/fight_with_precision",
        "card.objective.secret:pok/hoard_raw_materials": "card.objective.secret:homebrew.little-omega/hoard_raw_materials",
        "card.objective.secret:codex.vigil/make_an_example_of_their_world.omega": "card.objective.secret:homebrew.little-omega/make_an_example_of_their_world",
        "card.objective.secret:pok/occupy_the_fringe": "card.objective.secret:homebrew.little-omega/occupy_the_fringe",
        "card.objective.secret:pok/seize_an_icon": "card.objective.secret:homebrew.little-omega/seize_an_icon",
        "card.objective.secret:base/threaten_enemies": "card.objective.secret:homebrew.little-omega/threaten_enemies",
        "card.objective.secret:base/unveil_flagship": "card.objective.secret:homebrew.little-omega/unveil_a_masterpiece",
        "card.objective.secret:pok/demonstrate_your_power": "card.objective.secret:homebrew.little-omega/demonstrate_your_power",
        "card.objective.secret:codex.vigil/turn_their_fleets_to_dust.omega": "card.objective.secret:homebrew.little-omega/contain_their_culture",
        "card.objective.secret:pok/betray_a_friend": "card.objective.secret:homebrew.little-omega/cripple_their_economy",
        "card.objective.secret:pok/drive_the_debate": "card.objective.secret:homebrew.little-omega/disrupt_hostile_logistics",
        "card.objective.secret:base/become_the_gatekeeper": "card.objective.secret:homebrew.little-omega/diversify_fleets",
        "card.objective.secret:pok/dictate_policy": "card.objective.secret:homebrew.little-omega/reclaim_ancient_monuments",
        "card.objective.secret:base/learn_the_secrets_of_the_cosmos": "card.objective.secret:homebrew.little-omega/learn_from_others",
        "card.objective.secret:pok/strengthen_bonds": "card.objective.secret:homebrew.little-omega/vertically_integrate"
    }
});

if (!world.__littleOmegaFull && !world.__littleOmegaObjectiveLoaded) {
    world.TI4.homebrew.resetOnTableDecks();
    world.__littleOmegaObjectiveLoaded = true;
}