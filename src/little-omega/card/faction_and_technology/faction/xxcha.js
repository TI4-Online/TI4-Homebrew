const { world } = require("@tabletop-playground/api");

const factions = [
  {
    faction: "xxcha",
    abilities: ["peace_accords", "quash"],
    commodities: 4,
    home: 14,
    leaders: {
      agents: ["ggrocuto_rinn"],
      commanders: ["elder_qanoj"],
      heroes: ["xxekir_grom"],
    },
    promissoryNotes: ["political_favor"],
    icon: "global/factions/xxcha_icon.png",
    source: "base",
    startingTech: ["graviton_laser_system"],
    startingUnits: {
      carrier: 1,
      cruiser: 2,
      fighter: 3,
      infantry: 4,
      pds: 1,
      space_dock: 1,
    },
    techs: ["instinct_training", "nullification_field"],
    units: ["loncara_ssodu", "indomitus"],
  },
];

const nsidToTemplateId = {
  "sheet.faction:base/xxcha": "39E83B1BCC064F24B08B599AA524851A",
};

const replace = {
  "card.technology.green.xxcha:base/instinct_training":
    "card.technology.green.xxcha:homebrew.little-omega/instinct_training",
  "card.technology.yellow.xxcha:base/nullification_field":
    "card.technology.red.xxcha:homebrew.little-omega/nullification_field",
  "card.promissory.xxcha:base/political_favor":
    "card.promissory.xxcha:homebrew.little-omega/political_favor",
  "card.leader.agent.xxcha:pok/ggrocuto_rinn":
    "card.leader.agent.xxcha:homebrew.little-omega/ggrocuto_rinn",
  "card.leader.hero.xxcha:pok/xxekir_grom":
    "card.leader.hero.xxcha:homebrew.little-omega/xxekir_grom",
  "card.leader.hero.xxcha:codex.vigil/xxekir_grom.omega":
    "card.leader.hero.xxcha:homebrew.little-omega/xxekir_grom",
};

const technologies = [
  {
    localeName: "technology.name.instinct_training",
    cardNsid:
      "card.technology.green.xxcha:homebrew.little-omega/instinct_training",
    type: "Green",
    requirements: { Green: 1 },
    source: "homebrew.little-omega",
    faction: "xxcha",
  },
  {
    localeName: "technology.name.nullification_field",
    cardNsid:
      "card.technology.green.xxcha:homebrew.little-omega/nullification_field",
    type: "Red",
    requirements: { Red: 2 },
    source: "homebrew.little-omega",
    faction: "xxcha",
  },
];

const voteCountModifiers = [
  (playerDesk, currentVoteCount) => {
    const nsid = "card.leader.hero.xxcha:homebrew.little-omega/xxekir_grom";
    const checkIsDiscardPile = false;
    const allowFaceDown = false;
    for (const obj of world.getAllObjects()) {
      if (obj.getContainer()) {
        continue;
      }
      if (
        !world.TI4.CardUtil.isLooseCard(obj, checkIsDiscardPile, allowFaceDown)
      ) {
        continue;
      }
      const thisNsid = world.TI4.ObjectNamespace.getNsid(obj);
      if (thisNsid === nsid) {
        const pos = obj.getPosition();
        const closestDesk = world.TI4.getClosestPlayerDesk(pos);
        if (playerDesk !== closestDesk) {
          return 0;
        }
      }
    }

    let bonus = 0;
    for (const obj of world.getAllObjects()) {
      if (obj.getContainer()) {
        continue;
      }
      if (
        !world.TI4.CardUtil.isLooseCard(obj, checkIsDiscardPile, allowFaceDown)
      ) {
        continue;
      }
      const planet = world.TI4.getPlanetByCard(obj);
      if (!planet) {
        continue;
      }

      const pos = obj.getPosition();
      const closestDesk = world.TI4.getClosestPlayerDesk(pos);
      if (closestDesk !== playerDesk) {
        continue;
      }

      bonus += planet.raw.resources;
    }
    return bonus;
  },
];

world.TI4.homebrew.inject({
  factions,
  nsidToTemplateId,
  technologies,
  replace,
  voteCountModifiers,
});