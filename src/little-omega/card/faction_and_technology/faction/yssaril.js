const { world } = require("@tabletop-playground/api");

const factions = [    
{
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
        carrier: 1,
        cruiser: 2,
        fighter: 3,
        infantry: 5,
        space_dock: 1
    },
    techs: ["mageon_implants", "transparasteel_plating"],
    units: ["ysia_yssrila", "blackshade_infiltrator"],
}];

 const nsidToTemplateId = {
    "sheet.faction:base/yssaril": "A3603BB2137E49DD836BCAA5BCED2CA2",
};

const replace = {
  "card.technology.blue.yssaril:base/transparasteel_plating" : "card.technology.blue.yssaril:homebrew.little-omega/transparasteel_plating",
  "card.promissory.yssaril:base/spy_net" : "card.promissory.yssaril:homebrew.little-omega/spy_net"
};

const technologies = [{
    localeName: "technology.name.transparasteel_plating",
    cardNsid:
        "card.technology.blue.yssaril:homebrew.little-omega/transparasteel_plating",
    type: "Blue",
    requirements: { Blue : 1 },
    source: "homebrew.little-omega",
    faction: "yssaril"
  }
];

world.TI4.homebrew.inject({
  factions,
  nsidToTemplateId,
  technologies,
  replace,
});
