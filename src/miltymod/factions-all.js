const { world, refPackageId } = require("@tabletop-playground/api");
// Factions could all be in one giant file.  Splitting them up makes it easier
// to fix specific factions and add scripted unit modifiers.

const UNIT_ATTRS = require("./miltymod-unit-attrs.data");
const TECHNOLOGY_DATA = require("./miltymod-technology.data");

// injecting the basic nsidToTemplateId
world.TI4.homebrew.inject({
    nsidToTemplateId:
    {
        "card.faction_reference:homebrew.miltymod/0": "2F70A9B54BF0527F382F70812900F66E",
        "card.action:homebrew.miltymod/0": "878731F242B5CA6FD0D89CB86CCFA7CE",
        "card.action:homebrew.miltymod/1": "35BA7B80493D1C3BBB83DDA8DED896C2",
        "card.action:homebrew.miltymod/2": "76D23FE746A91AC8227923BC1E76BC12",
        "card.agenda:homebrew.miltymod/0": "9892C72A46F454B0DC93EEB78A3D32CF",
        "card.agenda:homebrew.miltymod/1": "3A5A08EE4A4B5F3ABE29B99B8079F5E2",
        "card.agenda:homebrew.miltymod/2": "382A70DD42E49F27387509A1D6F7376F",
        "card.objective.public_1:homebrew.miltymod/0": "46861A47466086241C96319270BDB366",
        "card.objective.public_2:homebrew.miltymod/0": "DC0AF7254730A7181B110894E4E10BF7",
        "card.objective.secret:homebrew.miltymod/0": "C4DCE39745D64EAF449970AFA2AE7DFE",
        "card.promissory:homebrew.miltymod/0": "1CAAFC56490272F09423D99CDEDE5445",
        "card.promissory:homebrew.miltymod/1": "9387CDBF46A30C38D60B6480B64489F4",
        "card.technology.blue:homebrew.miltymod/0": "9E325A5040A6BC6D4EA7F6B06906444D",
        "card.technology.green:homebrew.miltymod/0": "BCA6BD1F423CD6AA487A57922D16377D",
        "card.technology.green:homebrew.miltymod/1": "E476715A4921E26316398CBE11AE42D7",
        "card.technology.red:homebrew.miltymod/0": "7731E0E44EE0BABF78670097690E4C97",
        "card.technology.red:homebrew.miltymod/1": "4C9B66F64AFB6AFDDDE93FB3D2015685",
        "card.technology.yellow:homebrew.miltymod/0": "BE15F7214B9E7B6B73AA45AEFB564C2D",
        "card.technology.yellow:homebrew.miltymod/1": "E49655E84CE484775F2EF8941F41DE0C",
        "card.technology.unit_upgrade:homebrew.miltymod/0": "C14887A644F2DC65576E269839EE6320",
        "card.technology.unit_upgrade:homebrew.miltymod/1": "62758D0C4A97F23757AC6E810CF2A200",
        "card.technology.unit_upgrade:homebrew.miltymod/2": "B38E6FF44BD9A7FF26A7A4B2ECBDA50D",
        "tile.strategy:base/construction:" : "5C4DF749446C11D225F2DFB6DB069BAE",
    },
    replace:
    {
      "card.technology.blue:base/fleet_logistics" : "card.technology.blue:homebrew.miltymod/fleet_logistics",
      "card.technology.green:base/dacxive_animators" : "card.technology.green:homebrew.miltymod/dacxive_animators",
      "card.technology.green:base/neural_motivator" : "card.technology.green:homebrew.miltymod/neural_motivator",
      "card.technology.green:base/hyper_metabolism" : "card.technology.green:homebrew.miltymod/hyper_metabolism",
      "card.technology.green:base/x89_bacterial_weapon" : "card.technology.green:homebrew.miltymod/x89_bacterial_weapon",
      "card.technology.red:base/plasma_scoring" : "card.technology.red:homebrew.miltymod/plasma_scoring",
      "card.technology.red:base/magen_defense_grid" : "card.technology.red:homebrew.miltymod/magen_defense_grid",
      "card.technology.red:base/duranium_armor" : "card.technology.red:homebrew.miltymod/duranium_armor",
      "card.technology.yellow:base/sarween_tools" : "card.technology.yellow:homebrew.miltymod/sarween_tools",
      "card.technology.yellow:base/graviton_laser_system" : "card.technology.yellow:homebrew.miltymod/graviton_laser_system",
      "card.technology.yellow:base/integrated_economy" : "card.technology.yellow:homebrew.miltymod/integrated_economy",
      "card.technology.unit_upgrade:base/war_sun" : "card.technology.unit_upgrade:homebrew.miltymod/war_sun",
      "card.technology.unit_upgrade:base/cruiser_2" : "card.technology.unit_upgrade:homebrew.miltymod/cruiser_2",
      "card.technology.unit_upgrade:base/dreadnought_2" : "card.technology.unit_upgrade:homebrew.miltymod/dreadnought_2",
      "card.technology.unit_upgrade:base/carrier_2" : "card.technology.unit_upgrade:homebrew.miltymod/carrier_2",
      "card.technology.unit_upgrade:base/fighter_2" : "card.technology.unit_upgrade:homebrew.miltymod/fighter_2",
      "card.technology.unit_upgrade:base/infantry_2" : "card.technology.unit_upgrade:homebrew.miltymod/infantry_2",
      "card.technology.unit_upgrade:base/space_dock_2" : "card.technology.unit_upgrade:homebrew.miltymod/space_dock_2",    
      "card.agenda:base/enforced_travel_ban" : "card.agenda:homebrew.miltymod/enforced_travel_ban",
      "card.agenda:base.only/holy_planet_of_ixth" : "card.agenda:homebrew.miltymod/holy_planet_of_ixth",
      "card.agenda:base/ixthian_artifact" : "card.agenda:homebrew.miltymod/ixthian_artifact",
      "card.agenda:base/minister_of_policy" : "card.agenda:homebrew.miltymod/minister_of_policy",
      "card.agenda:base/new_constitution" : "card.agenda:homebrew.miltymod/new_constitution",
      "card.agenda:base/public_execution" : "card.agenda:homebrew.miltymod/public_execution",
      "card.agenda:base/regulated_conscription" : "card.agenda:homebrew.miltymod/regulated_conscription",
      "card.agenda:base.only/research_team_biotic" : "card.agenda:homebrew.miltymod/research_team_biotic",
      "card.agenda:base.only/research_team_cybernetic" : "card.agenda:homebrew.miltymod/research_team_cybernetic",
      "card.agenda:base.only/research_team_propulsion" : "card.agenda:homebrew.miltymod/research_team_propulsion",
      "card.agenda:base.only/research_team_warfare" : "card.agenda:homebrew.miltymod/research_team_warfare",
      "card.agenda:base.only/shard_of_the_throne" : "card.agenda:homebrew.miltymod/shard_of_the_throne",
      "card.agenda:base.only/the_crown_of_emphidia" : "card.agenda:homebrew.miltymod/the_crown_of_emphidia",
      "card.agenda:base.only/the_crown_of_thalnos" : "card.agenda:homebrew.miltymod/the_crown_of_thalnos",
      "card.agenda:base/wormhole_research" : "card.agenda:homebrew.miltymod/wormhole_research",
      "card.objective.public_1:base/diversify_research" : "card.objective.public_1:homebrew/miltymod/diversify_research",
      "card.objective.public_1:base/lead_from_the_front" : "card.objective.public_1:homebrew.miltymod/bestow_a_keleres_fleet",
      "card.objective.public_2:base/master_the_sciences" : "card.objective.public_2:homebrew.miltymod/master_the_sciences",
      "card.objective.public_2:base/galvanize_the_people" : "card.objective.public_2:homebrew.miltymod/establish_imperial_navy",
      "card.objective.secret:base/become_the_gatekeeper" : "card.objective.secret:homebrew.miltymod/become_the_gatekeeper",
      "card.action:base/ancient_burial_sites" : "card.action:homebrew.miltymod/ancient_burial_sites",
      "card.action:base/bribery" : "card.action:homebrew.miltymod/bribery",
      "card.action:base/construction_rider" : "card.action:homebrew.miltymod/construction_rider",
      "card.action:base/cripple_defenses" : "card.action:homebrew.miltymod/cripple_defenses",
      "card.action:base/direct_hit.1" : "card.action:homebrew.miltymod/direct_hit.1",
      "card.action:base/direct_hit.2" : "card.action:homebrew.miltymod/direct_hit.2",
      "card.action:base/direct_hit.3" : "card.action:homebrew.miltymod/direct_hit.3",
      "card.action:base/direct_hit.4" : "card.action:homebrew.miltymod/direct_hit.4",
      "card.action:base/experimental_battlestation" : "card.action:homebrew.miltymod/experimental_battlestation",
      "card.action:base/lost_star_chart" : "card.action:homebrew.miltymod/lost_star_chart",
      "card.action:base/lucky_shot" : "card.action:homebrew.miltymod/lucky_shot",
      "card.action:base/reactor_meltdown" : "card.action:homebrew.miltymod/reactor_meltdown",
      "card.action:base/salvage" : "card.action:homebrew.miltymod/salvage",
      "card.action:base/tactical_bombardment" : "card.action:homebrew.miltymod/tactical_bombardment",
      "card.action:base/unstable_planet" : "card.action:homebrew.miltymod/unstable_planet",
      "card.action:base/upgrade" : "card.action:homebrew.miltymod/upgrade",
    },
    remove: [
      "card.technology.red:codex.ordinian/magen_defense_grid.omega",
      "card.technology.green:codex.ordinian/x89_bacterial_weapon.omega",
      "card.objective.secret:codex.vigil/fight_with_precision.omega",
    ],
    technologies: TECHNOLOGY_DATA,
    unitAttrs: UNIT_ATTRS,
  });

console.log("MILTYMOD ADDING FACTIONS");
world.TI4.homebrew.resetOnTableDecks()
require("./factions/arborec");
require("./factions/creuss");
require("./factions/hacan");
require("./factions/jolnar");
require("./factions/l1z1x");
require("./factions/letnev");
require("./factions/mentak");
require("./factions/muaat");
require("./factions/naalu");
require("./factions/nekro");
require("./factions/norr");
require("./factions/saar");
require("./factions/sol");
require("./factions/winnu");
require("./factions/xxcha");
require("./factions/yin");
require("./factions/yssaril");
