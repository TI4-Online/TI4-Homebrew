const { world } = require("@tabletop-playground/api");
const unitModifiers = require("./unit-modifiers");

const voteCountModifiers = [
    (playerDesk, currentVoteCount) => {
        const checkIsDiscardPile = true;
        const allowFaceDown = false;
        for (const obj of world.getAllObjects()) {
            const nsid = world.TI4.ObjectNamespace.getNsid(obj);
            if (nsid !== "card.agenda:homebrew.little-omega/representative_government") {
                continue;
            }
            if (!world.TI4.CardUtil.isLooseCard(obj, checkIsDiscardPile, allowFaceDown)) {
                continue;
            }
            if (world.TI4.agenda.getAgendaNsid() === nsid) {
                continue; // currently being voted on
            }
            return -currentVoteCount + 1;
        }
        return 0;
    }
];

const wormholeAdjacencyModifiers = [
    (connected) => {
        for (const obj of world.getAllObjects()) {
            const nsid = world.TI4.ObjectNamespace.getNsid(obj);
            if (nsid !== "card.agenda:homebrew.little-omega/wormhole_reconstruction") {
                continue;
            }
            if (!world.TI4.CardUtil.isLooseCard(obj, true)) {
                continue; // not a lone, faceup card on the table
            }
            connected.forEach((wormholeConnections, wormhole, _connected) => {
                if (wormhole !== "delta") {
                    wormholeConnections.add("non-delta");
                }
            });
        }
    }
];

world.TI4.homebrew.inject({
    nsidToTemplateId:
    {
        "card.agenda:homebrew.little-omega/0": "B4317F50842B48A2A732FDA8B7745854"
    },
    replace:
    {
        "card.agenda:base/antiintellectual_revolution": "card.agenda:homebrew.little-omega/antiintellectual_revolution",
        "card.agenda:base/arms_reduction": "card.agenda:homebrew.little-omega/arms_reduction",
        "card.agenda:pok/articles_of_war": "card.agenda:homebrew.little-omega/articles_of_war",
        "card.agenda:pok/checks_and_balances": "card.agenda:homebrew.little-omega/checks_and_balances",
        "card.agenda:pok/clandestine_operations": "card.agenda:homebrew.little-omega/clandestine_operations",
        "card.agenda:base/classified_document_leaks": "card.agenda:homebrew.little-omega/classified_document_leaks",
        "card.agenda:base/colonial_redistribution": "card.agenda:homebrew.little-omega/colonial_redistribution",
        "card.agenda:base/committee_formation": "card.agenda:homebrew.little-omega/committee_formation",
        "card.agenda:base/compensated_disarmament": "card.agenda:homebrew.little-omega/compensated_disarmament",
        "card.agenda:base/conventions_of_war": "card.agenda:homebrew.little-omega/conventions_of_war",
        "card.agenda:base/covert_legislation": "card.agenda:homebrew.little-omega/covert_legislation",
        "card.agenda:base/economic_equality": "card.agenda:homebrew.little-omega/economic_equality",
        "card.agenda:base/enforced_travel_ban": "card.agenda:homebrew.little-omega/enforced_travel_ban",
        "card.agenda:base/executive_sanctions": "card.agenda:homebrew.little-omega/executive_sanctions",
        "card.agenda:base/fleet_regulations": "card.agenda:homebrew.little-omega/fleet_regulations",
        "card.agenda:base/galactic_crisis_pact": "card.agenda:homebrew.little-omega/galactic_crisis_pact",
        "card.agenda:base/homeland_defense_act": "card.agenda:homebrew.little-omega/homeland_defense_act",
        "card.agenda:base/imperial_arbiter": "card.agenda:homebrew.little-omega/imperial_arbiter",
        "card.agenda:base/incentive_program": "card.agenda:homebrew.little-omega/incentive_program",
        "card.agenda:base/ixthian_artifact": "card.agenda:homebrew.little-omega/ixthian_artifact",
        "card.agenda:base/judicial_abolishment": "card.agenda:homebrew.little-omega/judicial_abolishment",
        "card.agenda:pok/minister_of_antiquities": "card.agenda:homebrew.little-omega/minister_of_antiquities",
        "card.agenda:base/minister_of_commerce": "card.agenda:homebrew.little-omega/minister_of_commerce",
        "card.agenda:base/minister_of_exploration": "card.agenda:homebrew.little-omega/minister_of_exploration",
        "card.agenda:base/minister_of_industry": "card.agenda:homebrew.little-omega/minister_of_industry",
        "card.agenda:base/minister_of_peace": "card.agenda:homebrew.little-omega/minister_of_peace",
        "card.agenda:base/minister_of_policy": "card.agenda:homebrew.little-omega/minister_of_policy",
        "card.agenda:base/minister_of_sciences": "card.agenda:homebrew.little-omega/minister_of_sciences",
        "card.agenda:base/minister_of_war": "card.agenda:homebrew.little-omega/minister_of_war",
        "card.agenda:base/miscount_disclosed": "card.agenda:homebrew.little-omega/miscount_disclosed",
        "card.agenda:base/mutiny": "card.agenda:homebrew.little-omega/mutiny",
        "card.agenda:base/new_constitution": "card.agenda:homebrew.little-omega/new_constitution",
        "card.agenda:pok/nexus_sovereignty": "card.agenda:homebrew.little-omega/nexus_sovereignty",
        "card.agenda:base/political_censure": "card.agenda:homebrew.little-omega/political_censure",
        "card.agenda:base/prophecy_of_ixth": "card.agenda:homebrew.little-omega/prophecy_of_ixth",
        "card.agenda:base/public_execution": "card.agenda:homebrew.little-omega/public_execution",
        "card.agenda:base/publicize_weapon_schematics": "card.agenda:homebrew.little-omega/publicize_weapon_schematics",
        "card.agenda:pok/rearmament_agreement": "card.agenda:homebrew.little-omega/rearmament_agreement",
        "card.agenda:base/regulated_conscription": "card.agenda:homebrew.little-omega/regulated_conscription",
        "card.agenda:pok/representative_government": "card.agenda:homebrew.little-omega/representative_government",
        "card.agenda:pok/research_grant_reallocation": "card.agenda:homebrew.little-omega/research_grant_reallocation",
        "card.agenda:base/search_warrant": "card.agenda:homebrew.little-omega/search_warrant",
        "card.agenda:base/seed_of_an_empire": "card.agenda:homebrew.little-omega/seed_of_an_empire",
        "card.agenda:base/shared_research": "card.agenda:homebrew.little-omega/shared_research",
        "card.agenda:base/swords_to_plowshares": "card.agenda:homebrew.little-omega/swords_to_plowshares",
        "card.agenda:base/unconventional_measures": "card.agenda:homebrew.little-omega/unconventional_measures",
        "card.agenda:base/wormhole_reconstruction": "card.agenda:homebrew.little-omega/wormhole_reconstruction",
        "card.agenda:base/wormhole_research": "card.agenda:homebrew.little-omega/wormhole_research"
    },
    unitModifiers,
    voteCountModifiers,
    wormholeAdjacencyModifiers
});

if (!world.__littleOmegaFull && !world.__littleOmegaAgendaLoaded) {
    world.TI4.homebrew.resetOnTableDecks();
    world.__littleOmegaAgendaLoaded = true;
}