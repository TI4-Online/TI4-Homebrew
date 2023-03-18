const { world } = require("@tabletop-playground/api");

const localeStrings = {
    "unit_modifier.name.tekklar_legion" : "Tekklar Legion",
    "unit_modifier.desc.tekklar_legion" : "At the start of a ground combat: Apply +1 to the result of each of your unit's combat rolls during this combat."
  }

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

const unitModifiers = [
    {
        // "+1 to GROUND COMBAT rolls for attacker, -1 to Sardakk if opponent owns",
        isCombat: true,
        localeName: "unit_modifier.name.tekklar_legion",
        localeDescription: "unit_modifier.desc.tekklar_legion",
        owner: "any",
        priority: "adjust",
        triggerNsid: "card.promissory.norr:homebrew.miltymod/tekklar_legion",
        filter: (auxData) => {
            return auxData.rollType === "groundCombat";
        },
        applyEach: (unitAttrs, auxData) => {
          if (unitAttrs.raw.spaceCombat) {
              unitAttrs.raw.spaceCombat.hit -= 1;
          }
        },
    },
];

world.TI4.homebrew.inject({
  localeStrings,
  factions,
  nsidToTemplateId,
  technologies,
  unitAttrs,
  unitModifiers,
  replace,
});
