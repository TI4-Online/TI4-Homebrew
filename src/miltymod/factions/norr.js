const { world, refPackageId } = require("@tabletop-playground/api");

const factions = [{
    faction: "norr",
    abilities: ["unrelenting"],
    commodities: 3,
    home: 13,
    leaders: {
        agents: ["tro"],
        commanders: ["ghom_sekkus"],
        heroes: ["shval_harbinger"],
    },
    promissoryNotes: ["tekklar_legion"],
    icon: "global/factions/norr_icon.png",
    source: "base",
    startingTech: [],
    startingUnits: {
        carrier: 2,
        cruiser: 1,
        fighter: 2,
        infantry: 5,
        pds: 1,
        space_dock: 1,
    },
    techs: ["valkyrie_particle_weave"],
    units: [
        "cmorran_norr",
        "exotrireme",
        "exotrireme_2",
        "valkyrie_exoskeleton",
    ],
}];

 const nsidToTemplateId = {
    "sheet.faction:base/norr":
      "2349A49C457BA86F732148AD4F95C922",
};

const replace = {
  "card.technology.red.norr:base/valkyrie_particle_weave" : "card.technology.red.norr:homebrew.miltymod/valkyrie_particle_weave",
  "card.technology.unit_upgrade.norr:base/exotrireme_2" : "card.technology.unit_upgrade.norr:homebrew.miltymod/exotrireme_2",
  "card.promissory.norr:base/tekklar_legion" : "card.promissory.norr:homebrew.miltymod/tekklar_legion",
  "sheet.faction:base/norr" : "sheet.faction:homebrew.miltymod/norr",
};

const technologies = [{
    localeName: "technology.name.valkyrie_particle_weave",
    cardNsid:
        "card.technology.red.norr:homebrew.miltymod/valkyrie_particle_weave",
    type: "Red",
    requirements: { Red: 1 },
    source: "homebrew.miltymod",
    faction: "norr"
  },
];

const unitAttrs = [
    {
        unit: "dreadnought",
        upgradeLevel: 1,
        localeName: "unit.dreadnought.exotrireme",
        triggerNsid:
            "card.technology.unit_upgrade.norr:homebrew.miltymod/exotrireme",
        bombardment: { dice: 2, hit: 4 },
    },
    {
        unit: "dreadnought",
        upgradeLevel: 2,
        localeName: "unit.dreadnought.exotrireme_2",
        triggerNsid: "card.technology.unit_upgrade.norr:homebrew.miltymod/exotrireme_2",
        spaceCombat: { hit: 4 },
        bombardment: { dice: 2, hit: 3 },
        move: 2,
    },];

const unitModifiers = [];

world.TI4.homebrew.inject({
  factions,
  nsidToTemplateId,
  technologies,
  unitAttrs,
  unitModifiers,
  replace,
});
