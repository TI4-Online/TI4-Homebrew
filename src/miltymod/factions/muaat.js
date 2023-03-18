const { world } = require("@tabletop-playground/api");

const factions = [{
  faction: "muaat",
  abilities: ["star_forge", "gashlai_physiology"],
  commodities: 4,
  home: 4,
  leaders: {
      agents: ["umbat"],
      commanders: ["magmus"],
      heroes: ["adjudicator_baal"],
  },
  promissoryNotes: ["fires_of_the_gashlai"],
  icon: "global/factions/muaat_icon.png",
  source: "base",
  startingTech: ["plasma_scoring"],
  startingUnits: {
      fighter: 2,
      destroyer: 1,
      infantry: 4,
      space_dock: 1,
      war_sun: 1,
  },
  techs: ["magmus_reactor"],
  units: [
      "the_inferno",
      "prototype_war_sun",
      "prototype_war_sun_2",
      "ember_colossus",
  ],
  unpackExtra: [
      {
          tokenNsid: "tile.system:pok/81",
      },
  ],
}];

 const nsidToTemplateId = {
    "sheet.faction:base/muaat":
      "094C15D74F580BF0AFD1EB99C00B0889",
};

const replace = {
  "card.technology.red.muaat:base/magmus_reactor" : "card.technology.red.muaat:homebrew.miltymod/magmus_reactor",
  "card.technology.red.muaat:codex.ordinian/magmus_reactor.omega" : "card.technology.red.muaat:homebrew.miltymod/magmus_reactor",
  "card.technology.unit_upgrade.muaat:base/prototype_war_sun_2" : "card.technology.unit_upgrade.muaat:homebrew.miltymod/prototype_war_sun_2"
};

const technologies = [{
    localeName: "technology.name.magmus_reactor",
    cardNsid:
        "card.technology.red.muaat:homebrew.miltymod/magmus_reactor",
    type: "Red",
    requirements: { Red : 2  },
    source: "homebrew.miltymod",
    faction: "muaat"
  },
];

const unitAttrs = [
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
