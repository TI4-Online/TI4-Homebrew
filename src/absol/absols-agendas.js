const { world } = require("@tabletop-playground/api");

const REMOVE = [
  "card.agenda:base/antiintellectual_revolution",
  "card.agenda:base/archived_secret",
  "card.agenda:base/arms_reduction",
  "card.agenda:base/classified_document_leaks",
  "card.agenda:base/colonial_redistribution",
  "card.agenda:base/committee_formation",
  "card.agenda:base/compensated_disarmament",
  "card.agenda:base/conventions_of_war",
  "card.agenda:base/economic_equality",
  "card.agenda:base/enforced_travel_ban",
  "card.agenda:base/executive_sanctions",
  "card.agenda:base/fleet_regulations",
  "card.agenda:base/homeland_defense_act",
  "card.agenda:base/imperial_arbiter",
  "card.agenda:base/incentive_program",
  "card.agenda:base/ixthian_artifact",
  "card.agenda:base/judicial_abolishment",
  "card.agenda:base/minister_of_commerce",
  "card.agenda:base/minister_of_exploration",
  "card.agenda:base/minister_of_industry",
  "card.agenda:base/minister_of_peace",
  "card.agenda:base/minister_of_policy",
  "card.agenda:base/minister_of_sciences",
  "card.agenda:base/minister_of_war",
  "card.agenda:base/miscount_disclosed",
  "card.agenda:base/mutiny",
  "card.agenda:base/new_constitution",
  "card.agenda:base/prophecy_of_ixth",
  "card.agenda:base/public_execution",
  "card.agenda:base/publicize_weapon_schematics",
  "card.agenda:base/regulated_conscription",
  "card.agenda:base/seed_of_an_empire",
  "card.agenda:base/shared_research",
  "card.agenda:base/swords_to_plowshares",
  "card.agenda:base/unconventional_measures",
  "card.agenda:base/wormhole_reconstruction",
  "card.agenda:base/wormhole_research",
  "card.agenda:pok/armed_forces_standardization",
  "card.agenda:pok/articles_of_war",
  "card.agenda:pok/checks_and_balances",
  "card.agenda:pok/clandestine_operations",
  "card.agenda:pok/covert_legislation",
  "card.agenda:pok/galactic_crisis_pact",
  "card.agenda:pok/minister_of_antiquities",
  "card.agenda:pok/nexus_sovereignty",
  "card.agenda:pok/political_censure",
  "card.agenda:pok/rearmament_agreement",
  "card.agenda:pok/representative_government",
  "card.agenda:pok/research_grant_reallocation",
  "card.agenda:pok/search_warrant",
];

const REPLACE = {
  "card.promissory.blue:base/political_secret":
    "card.promissory.blue:homebrew.absol/potical_secret",
  "card.promissory.green:base/political_secret":
    "card.promissory.green:homebrew.absol/potical_secret",
  "card.promissory.orange:base/political_secret":
    "card.promissory.orange:homebrew.absol/potical_secret",
  "card.promissory.pink:base/political_secret":
    "card.promissory.pink:homebrew.absol/potical_secret",
  "card.promissory.purple:base/political_secret":
    "card.promissory.purple:homebrew.absol/potical_secret",
  "card.promissory.red:base/political_secret":
    "card.promissory.red:homebrew.absol/potical_secret",
  "card.promissory.white:base/political_secret":
    "card.promissory.white:homebrew.absol/potical_secret",
  "card.promissory.yellow:base/political_secret":
    "card.promissory.yellow:homebrew.absol/potical_secret",
};

world.TI4.homebrew.inject({
  nsidToTemplateId: {
    "card.agenda:homebrew.absol/0": "E31A61AEA348FE419BA0FB897E410CFE",
    "card.promissory:homebrew.absol/0": "B63E1C820B4A4127844CC1A95209070C",
  },
  remove: REMOVE,
  replace: REPLACE,
});

world.TI4.homebrew.resetOnTableDecks();
world.TI4.homebrew.resetGenericPromissoryNotes();
