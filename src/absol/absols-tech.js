const { world } = require("@tabletop-playground/api");

// grep -r ../TI4-TTPG/prebuild -e "card.technology." | grep -v -e  homebrew -e franken | sed -e 's/.*id": "//' | grep "card\.technology\.[a-z0-9_]*:" | sed -e 's/",//' | tr ':' ' ' | tr '/' ' ' | awk '{print "#" $1 ":" $2 "/" $3 "#: #" $1 ":homebrew.absol/" $3 "#," }' | sort | tr '#' '"'
const REPLACE = {
  // Core tech
  "card.technology.blue:base/antimass_deflectors":
    "card.technology.blue:homebrew.absol/antimass_deflectors",
  "card.technology.blue:base/fleet_logistics":
    "card.technology.blue:homebrew.absol/fleet_logistics",
  "card.technology.blue:base/gravity_drive":
    "card.technology.blue:homebrew.absol/gravity_drive",
  "card.technology.blue:base/lightwave_deflector":
    "card.technology.blue:homebrew.absol/lightwave_deflector",
  "card.technology.blue:pok/dark_energy_tap":
    "card.technology.blue:homebrew.absol/dark_energy_tap",
  "card.technology.blue:pok/sling_relay":
    "card.technology.blue:homebrew.absol/sling_relay",
  "card.technology.green:base/dacxive_animators":
    "card.technology.green:homebrew.absol/dacxive_animators",
  "card.technology.green:base/hyper_metabolism":
    "card.technology.green:homebrew.absol/hyper_metabolism",
  "card.technology.green:base/neural_motivator":
    "card.technology.green:homebrew.absol/neural_motivator",
  "card.technology.green:base/x89_bacterial_weapon":
    "card.technology.green:homebrew.absol/x89_bacterial_weapon",
  "card.technology.green:codex.ordinian/x89_bacterial_weapon.omega":
    "card.technology.green:homebrew.absol/x89_bacterial_weapon",
  "card.technology.green:pok/biostims":
    "card.technology.green:homebrew.absol/biostims",
  "card.technology.green:pok/psychoarchaeology":
    "card.technology.green:homebrew.absol/psychoarchaeology",
  "card.technology.red:base/assault_cannon":
    "card.technology.red:homebrew.absol/assault_cannon",
  "card.technology.red:base/duranium_armor":
    "card.technology.red:homebrew.absol/duranium_armor",
  "card.technology.red:base/magen_defense_grid":
    "card.technology.red:homebrew.absol/magen_defense_grid",
  "card.technology.red:base/plasma_scoring":
    "card.technology.red:homebrew.absol/plasma_scoring",
  "card.technology.red:codex.ordinian/magen_defense_grid.omega":
    "card.technology.red:homebrew.absol/magen_defense_grid",
  "card.technology.red:pok/ai_development_algorithm":
    "card.technology.red:homebrew.absol/ai_development_algorithm",
  "card.technology.red:pok/self_assembly_routines":
    "card.technology.red:homebrew.absol/self_assembly_routines",
  "card.technology.unit_upgrade:base/carrier_2":
    "card.technology.unit_upgrade:homebrew.absol/carrier_2",
  "card.technology.unit_upgrade:base/cruiser_2":
    "card.technology.unit_upgrade:homebrew.absol/cruiser_2",
  "card.technology.unit_upgrade:base/destroyer_2":
    "card.technology.unit_upgrade:homebrew.absol/destroyer_2",
  "card.technology.unit_upgrade:base/dreadnought_2":
    "card.technology.unit_upgrade:homebrew.absol/dreadnought_2",
  "card.technology.unit_upgrade:base/fighter_2":
    "card.technology.unit_upgrade:homebrew.absol/fighter_2",
  "card.technology.unit_upgrade:base/infantry_2":
    "card.technology.unit_upgrade:homebrew.absol/infantry_2",
  "card.technology.unit_upgrade:base/pds_2":
    "card.technology.unit_upgrade:homebrew.absol/pds_2",
  "card.technology.unit_upgrade:base/space_dock_2":
    "card.technology.unit_upgrade:homebrew.absol/space_dock_2",
  "card.technology.unit_upgrade:base/war_sun":
    "card.technology.unit_upgrade:homebrew.absol/war_sun",
  "card.technology.yellow:base/graviton_laser_system":
    "card.technology.yellow:homebrew.absol/graviton_laser_system",
  "card.technology.yellow:base/integrated_economy":
    "card.technology.yellow:homebrew.absol/integrated_economy",
  "card.technology.yellow:base/sarween_tools":
    "card.technology.yellow:homebrew.absol/sarween_tools",
  "card.technology.yellow:base/transit_diodes":
    "card.technology.yellow:homebrew.absol/transit_diodes",
  "card.technology.yellow:pok/predictive_intelligence":
    "card.technology.yellow:homebrew.absol/predictive_intelligence",
  "card.technology.yellow:pok/scanlink_drone_network":
    "card.technology.yellow:homebrew.absol/scanlink_drone_network",

  // Faction tech
  "card.technology.blue.creuss:base/wormhole_generator":
    "card.technology.blue.creuss:homebrew.absol/wormhole_generator",
  "card.technology.blue.creuss:codex.ordinian/wormhole_generator.omega":
    "card.technology.blue.creuss:homebrew.absol/wormhole_generator",
  "card.technology.blue.empyrean:pok/aetherstream":
    "card.technology.blue.empyrean:homebrew.absol/aetherstream",
  "card.technology.blue.jolnar:base/spacial_conduit_cylinder":
    "card.technology.blue.jolnar:homebrew.absol/spacial_conduit_cylinder",
  "card.technology.blue.saar:base/chaos_mapping":
    "card.technology.blue.saar:homebrew.absol/chaos_mapping",
  "card.technology.blue.winnu:base/lazax_gate_folding":
    "card.technology.blue.winnu:homebrew.absol/lazax_gate_folding",
  "card.technology.green.arborec:base/bioplasmosis":
    "card.technology.green.arborec:homebrew.absol/bioplasmosis",
  "card.technology.green.empyrean:pok/voidwatch":
    "card.technology.green.empyrean:homebrew.absol/voidwatch",
  "card.technology.green.hacan:base/production_biomes":
    "card.technology.green.hacan:homebrew.absol/production_biomes",
  "card.technology.green.mahact:pok/genetic_recombination":
    "card.technology.green.mahact:homebrew.absol/genetic_recombination",
  "card.technology.green.naalu:base/neuroglaive":
    "card.technology.green.naalu:homebrew.absol/neuroglaive",
  "card.technology.green.naazrokha:pok/prefab_arcologies":
    "card.technology.green.naazrokha:homebrew.absol/prefab_arcologies",
  "card.technology.green.xxcha:base/instinct_training":
    "card.technology.green.xxcha:homebrew.absol/instinct_training",
  "card.technology.green.yin:base/yin_spinner":
    "card.technology.green.yin:homebrew.absol/yin_spinner",
  "card.technology.green.yin:codex.ordinian/yin_spinner.omega":
    "card.technology.green.yin:homebrew.absol/yin_spinner.omega",
  "card.technology.green.yssaril:base/mageon_implants":
    "card.technology.green.yssaril:homebrew.absol/mageon_implants",
  "card.technology.green.yssaril:base/transparasteel_plating":
    "card.technology.green.yssaril:homebrew.absol/transparasteel_plating",
  "card.technology.red.creuss:base/dimensional_splicer":
    "card.technology.red.creuss:homebrew.absol/dimensional_splicer",
  "card.technology.red.letnev:base/noneuclidean_shielding":
    "card.technology.red.letnev:homebrew.absol/noneuclidean_shielding",
  "card.technology.red.muaat:codex.ordinian/magmus_reactor.omega":
    "card.technology.red.muaat:homebrew.absol/magmus_reactor.omega",
  "card.technology.red.naazrokha:pok/supercharge":
    "card.technology.red.naazrokha:homebrew.absol/supercharge",
  "card.technology.red.norr:base/valkyrie_particle_weave":
    "card.technology.red.norr:homebrew.absol/valkyrie_particle_weave",
  "card.technology.red.vuilraith:pok/vortex":
    "card.technology.red.vuilraith:homebrew.absol/vortex",
  "card.technology.unit_upgrade.arborec:base/letani_warrior_2":
    "card.technology.unit_upgrade.arborec:homebrew.absol/letani_warrior_2",
  "card.technology.unit_upgrade.argent:pok/strike_wing_alpha_2":
    "card.technology.unit_upgrade.argent:homebrew.absol/strike_wing_alpha_2",
  "card.technology.unit_upgrade.l1z1x:base/superdreadnought_2":
    "card.technology.unit_upgrade.l1z1x:homebrew.absol/superdreadnought_2",
  "card.technology.unit_upgrade.mahact:pok/crimson_legionnaire_2":
    "card.technology.unit_upgrade.mahact:homebrew.absol/crimson_legionnaire_2",
  "card.technology.unit_upgrade.muaat:base/prototype_war_sun_2":
    "card.technology.unit_upgrade.muaat:homebrew.absol/prototype_war_sun_2",
  "card.technology.unit_upgrade.naalu:base/hybrid_crystal_fighter_2":
    "card.technology.unit_upgrade.naalu:homebrew.absol/hybrid_crystal_fighter_2",
  "card.technology.unit_upgrade.nekro:codex.ordinian/redacted":
    "card.technology.unit_upgrade.nekro:homebrew.absol/redacted",
  "card.technology.unit_upgrade.nomad:pok/memoria_2":
    "card.technology.unit_upgrade.nomad:homebrew.absol/memoria_2",
  "card.technology.unit_upgrade.norr:base/exotrireme_2":
    "card.technology.unit_upgrade.norr:homebrew.absol/exotrireme_2",
  "card.technology.unit_upgrade.saar:base/floating_factory_2":
    "card.technology.unit_upgrade.saar:homebrew.absol/floating_factory_2",
  "card.technology.unit_upgrade.sol:base/advanced_carrier_2":
    "card.technology.unit_upgrade.sol:homebrew.absol/advanced_carrier_2",
  "card.technology.unit_upgrade.sol:base/spec_ops_2":
    "card.technology.unit_upgrade.sol:homebrew.absol/spec_ops_2",
  "card.technology.unit_upgrade.ul:pok/heltitan_2":
    "card.technology.unit_upgrade.ul:homebrew.absol/heltitan_2",
  "card.technology.unit_upgrade.ul:pok/saturn_engine_2":
    "card.technology.unit_upgrade.ul:homebrew.absol/saturn_engine_2",
  "card.technology.unit_upgrade.vuilraith:pok/dimensional_tear_2":
    "card.technology.unit_upgrade.vuilraith:homebrew.absol/dimensional_tear_2",
  "card.technology.unknown.nekro:base/valefar_assimilator_x":
    "card.technology.unknown.nekro:homebrew.absol/valefar_assimilator_x",
  "card.technology.unknown.nekro:base/valefar_assimilator_y":
    "card.technology.unknown.nekro:homebrew.absol/valefar_assimilator_y",
  "card.technology.yellow.argent:pok/aerie_hololattice":
    "card.technology.yellow.argent:homebrew.absol/aerie_hololattice",
  "card.technology.yellow.hacan:base/quantum_datahub_node":
    "card.technology.yellow.hacan:homebrew.absol/quantum_datahub_node",
  "card.technology.yellow.jolnar:base/eres_siphons":
    "card.technology.yellow.jolnar:homebrew.absol/eres_siphons",
  "card.technology.yellow.keleres:codex.vigil/agency_supply_network":
    "card.technology.yellow.keleres:homebrew.absol/agency_supply_network",
  "card.technology.yellow.keleres:codex.vigil/iihq_modernization":
    "card.technology.yellow.keleres:homebrew.absol/iihq_modernization",
  "card.technology.yellow.l1z1x:base/inheritance_systems":
    "card.technology.yellow.l1z1x:homebrew.absol/inheritance_systems",
  "card.technology.yellow.letnev:base/l4_disruptors":
    "card.technology.yellow.letnev:homebrew.absol/l4_disruptors",
  "card.technology.yellow.mentak:base/mirror_computing":
    "card.technology.yellow.mentak:homebrew.absol/mirror_computing",
  "card.technology.yellow.mentak:base/salvage_operations":
    "card.technology.yellow.mentak:homebrew.absol/salvage_operations",
  "card.technology.yellow.nekro:codex.ordinian/exception_no_id":
    "card.technology.yellow.nekro:homebrew.absol/exception_no_id",
  "card.technology.yellow.nomad:pok/temporal_command_suite":
    "card.technology.yellow.nomad:homebrew.absol/temporal_command_suite",
  "card.technology.yellow.winnu:base/hegemonic_trade_policy":
    "card.technology.yellow.winnu:homebrew.absol/hegemonic_trade_policy",
  "card.technology.yellow.xxcha:base/nullification_field":
    "card.technology.yellow.xxcha:homebrew.absol/nullification_field",
  "card.technology.yellow.yin:base/impulse_core":
    "card.technology.yellow.yin:homebrew.absol/impulse_core",
};

function cloneUnitModifier(nsid) {
  const parsed = world.TI4.ObjectNamespace.parseNsid(nsid);
  const modifier = world.TI4.UnitModifier.getNsidUnitModifier(nsid);
  if (!modifier) {
    throw new Error(`missing "${nsid}"`);
  }
  const clone = {};
  for (const [k, v] of Object.entries(modifier.raw)) {
    clone[k] = v; // shallow copy
  }
  clone.triggerNsid = `${parsed.type}:homebrew.absol/${parsed.name}`;
  return clone;
}
function cloneUnitUpgarde(nsid) {
  const parsed = world.TI4.ObjectNamespace.parseNsid(nsid);
  const upgrade = world.TI4.UnitAttrs.getNsidNameUnitUpgrade(parsed.name);
  if (!upgrade) {
    throw new Error(`missing "${nsid}"`);
  }
  const clone = {};
  for (const [k, v] of Object.entries(upgrade.raw)) {
    clone[k] = v; // shallow copy
  }
  clone.triggerNsid = `${parsed.type}:homebrew.absol/${parsed.name}`;
  return clone;
}

const UNIT_ATTRS = [
  cloneUnitUpgarde("card.technology.unit_upgrade:base/carrier_2"),
  cloneUnitUpgarde("card.technology.unit_upgrade:base/cruiser_2"),
  cloneUnitUpgarde("card.technology.unit_upgrade:base/destroyer_2"),
  cloneUnitUpgarde("card.technology.unit_upgrade:base/dreadnought_2"),
  cloneUnitUpgarde("card.technology.unit_upgrade:base/infantry_2"),
  cloneUnitUpgarde("card.technology.unit_upgrade:base/pds_2"),
  cloneUnitUpgarde("card.technology.unit_upgrade:base/space_dock_2"),
  cloneUnitUpgarde("card.technology.unit_upgrade:base/war_sun"),
  cloneUnitUpgarde("card.technology.unit_upgrade.sol:base/advanced_carrier_2"),
  cloneUnitUpgarde("card.technology.unit_upgrade.norr:base/exotrireme_2"),
  cloneUnitUpgarde("card.technology.unit_upgrade.saar:base/floating_factory_2"),
  cloneUnitUpgarde(
    "card.technology.unit_upgrade.naalu:base/hybrid_crystal_fighter_2"
  ),
  cloneUnitUpgarde(
    "card.technology.unit_upgrade.arborec:base/letani_warrior_2"
  ),
  cloneUnitUpgarde(
    "card.technology.unit_upgrade.muaat:base/prototype_war_sun_2"
  ),
  cloneUnitUpgarde("card.technology.unit_upgrade.sol:base/spec_ops_2"),
  cloneUnitUpgarde(
    "card.technology.unit_upgrade.l1z1x:base/superdreadnought_2"
  ),
  cloneUnitUpgarde(
    "card.technology.unit_upgrade.argent:pok/strike_wing_alpha_2"
  ),
  cloneUnitUpgarde(
    "card.technology.unit_upgrade.mahact:pok/crimson_legionnaire_2"
  ),
  cloneUnitUpgarde("card.technology.unit_upgrade.ul:pok/saturn_engine_2"),
  cloneUnitUpgarde("card.technology.unit_upgrade.ul:pok/heltitan_2"),
  cloneUnitUpgarde(
    "card.technology.unit_upgrade.vuilraith:pok/dimensional_tear_2"
  ),
];

const UNIT_MODIFIERS = [
  cloneUnitModifier("card.technology.red:base/plasma_scoring"),
  cloneUnitModifier("card.technology.blue:base/antimass_deflectors"),
  cloneUnitModifier("card.technology.red.naazrokha:pok/supercharge"),
];

world.TI4.homebrew.inject({
  nsidToTemplateId: {
    "card.technology:homebrew.absol/0": "B47AB553504067A4F9E489A4029F48BC",
    "card.technology:homebrew.absol/1": "FA0F2849CE4648984B247F949F1DCB38",
  },
  replace: REPLACE,
  unitAttrs: UNIT_ATTRS,
  unitModifiers: UNIT_MODIFIERS,
});
world.TI4.homebrew.resetOnTableDecks();
