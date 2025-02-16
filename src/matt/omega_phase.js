const { world } = require("@tabletop-playground/api");

// Cards to be removed from the base decks, by metadata
const REMOVE = [
  //Remove each Stage 1 Public
	"card.objective.public_1:base/corner_the_market",
	"card.objective.public_1:base/develop_weaponry",
	"card.objective.public_1:base/diversify_research",
	"card.objective.public_1:base/erect_a_monument",
	"card.objective.public_1:base/expand_borders",
	"card.objective.public_1:base/found_research_outposts",
	"card.objective.public_1:base/intimidate_council",
	"card.objective.public_1:base/lead_from_the_front",
	"card.objective.public_1:base/negotiate_trade_routes",
	"card.objective.public_1:base/sway_the_council",
	"card.objective.public_1:pok/amass_wealth",
	"card.objective.public_1:pok/build_defenses",
	"card.objective.public_1:pok/discover_lost_outposts",
	"card.objective.public_1:pok/engineer_a_marvel",
	"card.objective.public_1:pok/explore_deep_space",
	"card.objective.public_1:pok/improve_infrastructure",
	"card.objective.public_1:pok/make_history",
	"card.objective.public_1:pok/populate_the_outer_rim",
	"card.objective.public_1:pok/push_boundaries",
	"card.objective.public_1:pok/raise_a_fleet",

	//Remove each Stage 2 Public
	"card.objective.public_2:base/centralize_galactic_trade",
	"card.objective.public_2:base/conquer_the_weak",
	"card.objective.public_2:base/form_galactic_brain_trust",
	"card.objective.public_2:base/found_a_golden_age",
	"card.objective.public_2:base/galvanize_the_people",
	"card.objective.public_2:base/manipulate_galactic_law",
	"card.objective.public_2:base/master_the_sciences",
	"card.objective.public_2:base/revolutionize_warfare",
	"card.objective.public_2:base/subdue_the_galaxy",
	"card.objective.public_2:base/unify_the_colonies",
	"card.objective.public_2:pok/achieve_supremacy",
	"card.objective.public_2:pok/become_a_legend",
	"card.objective.public_2:pok/command_an_armada",
	"card.objective.public_2:pok/construct_massive_cities",
	"card.objective.public_2:pok/control_the_borderlands",
	"card.objective.public_2:pok/hold_vast_reserves",
	"card.objective.public_2:pok/patrol_vast_territories",
	"card.objective.public_2:pok/protect_the_border",
	"card.objective.public_2:pok/reclaim_ancient_monuments",
	"card.objective.public_2:pok/rule_distant_lands",
]

// Cards to be replaced in the base decks, by metadata
const REPLACE = {
  //Replace the stage 1 mat with an expanded stage 1 mat
  "mat:base/objectives_1":
    "mat:omegaphase/objectives",
  //Replace the stage 2 mat with the priority track
  "mat:base/objectives_2":
    "token:omegaphase/prioritytrack",
};

// Cards or decks to be added/appended, first value is the metadata string, second value is the GUID, even if they are replaced above, any new content needs to be added here as well
const ADD = {
  "token:omegaphase/prioritytrack": 
    "6F0E6DB14B9BD0E1616529808DAA43A0", // Priority Track
  "card.agenda:omegaphase/0": 
    "E71AFDD6436FE73293414CAA4AC8F5B2", // Voice of the Council
  "card.objective.public_1:omegaphase/0": 
    "546976534401B8502FDA5A964BF8B538", // Omega Objectives
  "mat:omegaphase/objectives":
	"8A3D45A6475208E8971108AAB388CB50", // 10 Slot Stage 1 Objective Mat
}

const extraStuff = [
  {
    name: "Omega Phase",
    nsids:[
      "token:omegaphase/prioritytrack",
      "card.agenda:omegaphase/0",
    ]
  }
]

// Tell the TI4 mod to update it's lists of objects with the above adjustments
world.TI4.homebrew.inject({
  extraBoxes: extraStuff,
  nsidToTemplateId: ADD,
  remove: REMOVE,
  replace: REPLACE,
});

// Reload changed objects (each kind has it's own function)
world.TI4.homebrew.resetOnTableDecks();
