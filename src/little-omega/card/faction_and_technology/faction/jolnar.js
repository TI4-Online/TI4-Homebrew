const { world } = require("@tabletop-playground/api");

const factions = [{
  faction: "jolnar",
  abilities: ["fragile", "brilliant", "analytical"],
  commodities: 4,
  home: 12,
  leaders: {
      agents: ["doctor_sucaban"],
      commanders: ["ta_zern"],
      heroes: ["rin_the_masters_legacy"],
  },
  promissoryNotes: ["research_agreement"],
  icon: "global/factions/jolnar_icon.png",
  source: "base",
  startingTech: [
      "antimass_deflectors",
      "neural_motivator",
      "sarween_tools",
      "plasma_scoring",
  ],
  startingUnits: {
      carrier: 1,
      dreadnought: 1,
      fighter: 1,
      infantry: 2,
      pds: 2,
      space_dock: 1,
  },
  techs: ["spacial_conduit_cylinder", "eres_siphons"],
  units: ["jns_hylarim", "shield_paling"],
}];

 const nsidToTemplateId = {
    "sheet.faction:base/jolnar": "6C60E3989D1A40678FF3FEA70C139EDC",
};

const replace = {
  "card.technology.yellow.jolnar:base/eres_siphons" : "card.technology.yellow.jolnar:homebrew.little-omega/eres_siphons",
  "card.technology.blue.jolnar:base/spacial_conduit_cylinder" : "card.technology.blue.jolnar:homebrew.little-omega/spacial_conduit_cylinder",
};

const technologies = [
  {
    localeName: "technology.name.eres_siphons",
    cardNsid: "card.technology.yellow.jolnar:homebrew.little-omega/eres_siphons",
    type: "Yellow",
    requirements: { Yellow: 2 },
    source: "homebrew.little-omega",
    faction: "jolnar"
  },
  {
    localeName: "technology.name.spacial_conduit_cylinder",
    cardNsid: "card.technology.yellow.jolnar:homebrew.little-omega/spacial_conduit_cylinder",
    type: "Blue",
    requirements: { Blue: 2 },
    source: "homebrew.little-omega",
    faction: "jolnar"
  },
];

const unitAttrs = [];

const unitModifiers = [];

world.TI4.homebrew.inject({
  factions,
  nsidToTemplateId,
  technologies,
  unitAttrs,
  unitModifiers,
  replace,
});
