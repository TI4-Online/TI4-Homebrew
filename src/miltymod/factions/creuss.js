const { world, refPackageId } = require("@tabletop-playground/api");

const factions = [{
  faction: "creuss",
  abilities: ["quantum_entanglement", "slipstream", "creuss_gate"],
  commodities: 4,
  home: 51,
  homeSurrogate: 17,
  leaders: {
      agents: ["emissary_taivra"],
      commanders: ["sai_seravus"],
      heroes: ["riftwalker_meian"],
  },
  promissoryNotes: ["creuss_iff"],
  icon: "global/factions/creuss_icon.png",
  source: "base",
  startingTech: ["gravity_drive"],
  startingUnits: {
      carrier: 1,
      destroyer: 2,
      fighter: 2,
      infantry: 4,
      pds: 1,
      space_dock: 1,
  },
  techs: ["wormhole_generator", "dimensional_splicer"],
  units: ["hil_colish", "icarus_drive"],
  unpackExtra: [
      {
          tokenNsid: "token.wormhole.creuss:base/alpha",
      },
      {
          tokenNsid: "token.wormhole.creuss:base/beta",
      },
      {
          tokenNsid: "token.wormhole.creuss:pok/gamma",
      },
  ],
},];

 const nsidToTemplateId = {
    "sheet.faction:base/creuss":
      "49DC8FBC488456FEF7A420B0E87CEEFA",
};

const replace = {
  "card.technology.blue.creuss:codex.ordinian/wormhole_research.omega" : "card.technology.blue.creuss:homebrew.miltymod/wormhole_generator",
  "card.technology.blue.creuss:base/wormhole_generator" : "card.technology.blue.creuss:homebrew.miltymod/wormhole_generator",
  "card.promissory.creuss:base/creuss_iff" : "card.promissory.creuss:homebrew.miltymod/creuss_iff",
};

const technologies = [{
    localeName: "technology.name.wormhole_generator",
    cardNsid:
        "card.technology.blue.creuss:homebrew.miltymod/wormhole_generator",
    type: "Blue",
    requirements: { Blue: 1 },
    source: "homebrew.miltymod",
    faction: "creuss"
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.hil_colish",
    triggerNsid:
        "card.technology.unit_upgrade.creuss:homebrew.miltymod/hil_colish",
    spaceCombat: { dice: 2, hit: 7 },
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
