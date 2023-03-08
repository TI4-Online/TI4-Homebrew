module.exports = [
    // Unit upgrades.
{
    unit: "cruiser",
    upgradeLevel: 2,
    localeName: "unit.cruiser_2",
    triggerNsid: "card.technology.unit_upgrade:homebrew.miltymod/cruiser_2",
    spaceCombat: { hit: 6, extraHitsOn: { count: 1, value: 9 }},
    move: 3,
    capacity: 1,
},
// {
//     unit: "dreadnought",
//     upgradeLevel: 2,
//     localeName: "unit.dreadnought_2",
//     triggerNsid: "card.technology.unit_upgrade:homebrew.miltymod/dreadnought_2",
//     move: 2,
//     spaceCombat: {hit: 4},
//     bombardment: 4,
// },
// {
//     unit: "space_dock",
//     upgradeLevel: 2,
//     localeName: "unit.space_dock_2",
//     triggerNsid: "card.technology.unit_upgrade:homebrew.miltymod/space_dock_2",
//     production: -5,
// },
// {
//     unit: "war_sun",
//     upgradeLevel: 2,
//     localeName: "unit.war_sun",
//     triggerNsid: "card.technology.unit_upgrade:homebrew.miltymod/war_sun",
//     disablePlanetaryShield: true,
//     sustainDamage: true,
//     bombardment: { dice: 3, hit: 3 },
//     cost: 12,
//     spaceCombat: { dice: 3, hit: 3 },
//     move: 2,
//     capacity: 6,
// },

// // Non-flagship faction units.
// {
//     unit: "carrier",
//     upgradeLevel: 1,
//     localeName: "unit.carrier.advanced_carrier",
//     triggerNsid:
//         "card.technology.unit_upgrade.sol:homebrew.miltymod/advanced_carrier",
//     capacity: 6,
// },
// {
//     unit: "carrier",
//     upgradeLevel: 2,
//     localeName: "unit.carrier.advanced_carrier_2",
//     triggerNsid: "card.technology.unit_upgrade.sol:homebrew.miltymod/advanced_carrier_2",
//     sustainDamage: true,
//     move: 2,
//     capacity: 8,
// },
// {
//     unit: "dreadnought",
//     upgradeLevel: 1,
//     localeName: "unit.dreadnought.exotrireme",
//     triggerNsid:
//         "card.technology.unit_upgrade.norr:homebrew.miltymod/exotrireme",
//     bombardment: { dice: 2, hit: 4 },
// },
// {
//     unit: "dreadnought",
//     upgradeLevel: 2,
//     localeName: "unit.dreadnought.exotrireme_2",
//     triggerNsid: "card.technology.unit_upgrade.norr:homebrew.miltymod/exotrireme_2",
//     spaceCombat: { hit: 4 },
//     bombardment: { dice: 2, hit: 3 },
//     move: 2,
// },
// {
//     unit: "space_dock",
//     upgradeLevel: 1,
//     localeName: "unit.space_dock.floating_factory",
//     triggerNsid:
//         "card.technology.unit_upgrade.saar:homebrew.miltymod/floating_factory",
//     production: 4,
//     move: 1,
//     capacity: 4,
// },
// {
//     unit: "space_dock",
//     upgradeLevel: 2,
//     localeName: "unit.space_dock.floating_factory_2",
//     triggerNsid:
//         "card.technology.unit_upgrade.saar:homebrew.miltymod/floating_factory_2",
//     production: 7,
//     move: 2,
//     capacity: 6,
// },
// {
//     unit: "fighter",
//     upgradeLevel: 1,
//     localeName: "unit.fighter.hybrid_crystal_fighter",
//     triggerNsid:
//         "card.technology.unit_upgrade.naalu:homebrew.miltymod/hybrid_crystal_fighter",
//     spaceCombat: { hit: 8 },
// },
// {
//     unit: "fighter",
//     upgradeLevel: 2,
//     localeName: "unit.fighter.hybrid_crystal_fighter_2",
//     triggerNsid:
//         "card.technology.unit_upgrade.naalu:homebrew.miltymod/hybrid_crystal_fighter_2",
//     spaceCombat: { hit: 7 },
//     move: 2,
// },
// {
//     unit: "infantry",
//     upgradeLevel: 1,
//     localeName: "unit.infantry.letani_warrior",
//     triggerNsid:
//         "card.technology.unit_upgrade.arborec:homebrew.miltymod/letani_warrior",
//     production: 1,
// },
// {
//     unit: "infantry",
//     upgradeLevel: 2,
//     localeName: "unit.infantry.letani_warrior_2",
//     triggerNsid:
//         "card.technology.unit_upgrade.arborec:homebrew.miltymod/letani_warrior_2",
//     production: 2,
//     groundCombat: { hit: 7 },
// },
// {
//     unit: "infantry",
//     upgradeLevel: 1,
//     localeName: "unit.infantry.spec_ops",
//     triggerNsid: "card.technology.unit_upgrade.sol:homebrew.miltymod/spec_ops",
//     groundCombat: { hit: 7 },
// },
// {
//     unit: "infantry",
//     upgradeLevel: 2,
//     localeName: "unit.infantry.spec_ops_2",
//     triggerNsid: "card.technology.unit_upgrade.sol:homebrew.miltymod/spec_ops_2",
//     groundCombat: { hit: 6 },
// },
// {
//     unit: "dreadnought",
//     upgradeLevel: 1,
//     localeName: "unit.dreadnought.super_dreadnought",
//     triggerNsid:
//         "card.technology.unit_upgrade.l1z1x:homebrew.miltymod/superdreadnought",
//     capacity: 2,
// },
// {
//     unit: "dreadnought",
//     upgradeLevel: 2,
//     localeName: "unit.dreadnought.super_dreadnought_2",
//     triggerNsid:
//         "card.technology.unit_upgrade.l1z1x:homebrew.miltymod/superdreadnought_2",
//     bombardment: { dice: 1, hit: 3 },
//     spaceCombat: { hit: 3 },
//     move: 2,
//     capacity: 2,
// },
// {
//     unit: "flagship",
//     upgradeLevel: 1,
//     localeName: "unit.flagship.salai_sai_corian",
//     triggerNsid:
//         "card.technology.unit_upgrade.winnu:homebrew.miltymod/salai_sai_corian",
//     spaceCombat: { dice: 1, hit: 7 },
//     unitAbility: "unit.flagship.salai_sai_corian",
// },
// {
//     unit: "flagship",
//     upgradeLevel: 1,
//     localeName: "unit.flagship.ysia_yssrila",
//     triggerNsid:
//         "card.technology.unit_upgrade.yssaril:homebrew.miltymod/ysia_yssrila",
//     spaceCombat: { dice: 2, hit: 5 },
//     capacity: 4,
//     move: 2,
// },
// {
//     unit: "flagship",
//     upgradeLevel: 1,
//     localeName: "unit.flagship.duha_menaimon",
//     triggerNsid:
//         "card.technology.unit_upgrade.arborec:homebrew.miltymod/duha_menaimon",
//     spaceCombat: { dice: 2, hit: 7 },
//     capacity: 5,
//     production: 5,
// },
// {
//     unit: "flagship",
//     upgradeLevel: 1,
//     localeName: "unit.flagship.hil_colish",
//     triggerNsid:
//         "card.technology.unit_upgrade.creuss:homebrew.miltymod/hil_colish",
//     spaceCombat: { dice: 2, hit: 7 },
// }
]