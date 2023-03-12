const { world, refPackageId } = require("@tabletop-playground/api");

const factions = [{
  faction: "yssaril",
  abilities: ["stall_tactics", "scheming", "crafty"],
  commodities: 3,
  home: 15,
  leaders: {
      agents: ["ssruu"],
      commanders: ["so_ata"],
      heroes: ["kyver_blade_and_key"],
  },
  promissoryNotes: ["spy_net"],
  icon: "global/factions/yssaril_icon.png",
  source: "base",
  startingTech: ["neural_motivator"],
  startingUnits: {
      carrier: 2,
      cruiser: 1,
      fighter: 2,
      infantry: 5,
      pds: 1,
      space_dock: 1,
  },
  techs: ["mageon_implants", "transparasteel_plating"],
  units: ["ysia_yssrila", "blackshade_infiltrator"],
}];

 const nsidToTemplateId = {
    "sheet.faction:base/yssaril":
      "44DF8B674E48CC6406DBEEB43F476CCF",
};

const replace = {
  "sheet.faction:base/yssaril" : "sheet.faction:homebrew.miltymod/yssaril",
};

const technologies = [];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.ysia_yssrila",
    triggerNsid:
        "card.technology.unit_upgrade.yssaril:homebrew.miltymod/ysia_yssrila",
    spaceCombat: { dice: 2, hit: 5 },
    capacity: 4,
    move: 2,
  },
];

const unitModifiers = [];

world.TI4.homebrew.inject({
  factions,
  nsidToTemplateId,
  technologies,
  unitAttrs,
  unitModifiers,
  replace,
});
