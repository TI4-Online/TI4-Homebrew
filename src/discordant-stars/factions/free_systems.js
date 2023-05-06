const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.free_systems": "Free Systems",
  "faction.full.free_systems": "The Free Systems Compact",
  "planet.cyrra": "Cyrra",
  "planet.kroll": "Kroll",
  "planet.idyn": "Idyn",
  "technology.name.envoy_network": "Envoy Network",
  "technology.name.covert_strike_teams": "Covert Strike Teams",
  "unit.flagship.vox": "Vox",
  "unit.mech.liberator": "Liberator",
  "unit_modifier.desc.vox":
    "When this unit makes a combat roll, it rolls 1 additional die for each planet in this system of any single trait.",
  "attachment:homebrew.discordant_stars.count_otto_pmay/free_systems":
    "Heart of Rebellion",
};

const factions = [
  {
    faction: "free_systems",
    abilities: ["rally_to_the_cause", "diplomats", "free_people"],
    commodities: 3,
    home: 3202,
    leaders: {
      agents: ["cordo_haved"],
      commanders: ["president_cyhn"],
      heroes: ["count_otto_pmay"],
    },
    promissoryNotes: [],
    icon: "discordant-stars/faction-icons/freesystems.png",
    source: "homebrew.discordant_stars",
    startingTech: ["psychoarchaeology"],
    startingUnits: {
      carrier: 1,
      cruiser: 2,
      fighter: 2,
      infantry: 4,
      pds: 1,
      space_dock: 1,
    },
    techs: ["envoy_network", "covert_strike_teams"],
    units: ["vox", "liberator"],
    unpackExtra: [
      {
        tokenNsid:
          "token.attachment:homebrew.discordant_stars.heart_of_rebellion/free_systems",
      },
    ],
    packageId: refPackageId,
  },
];

const factionAbilities = [
  {
    name: "Rally to the Cause",
    description:
      "Once per action, after you produce 1 or more ships in your home system, you may produce up to 2 ships in a system that contains a cultural, hazardous, or industrial planet and does not contain a legendary planet or another player's units.",
    source: "Free Systems (DS)",
  },
  {
    name: "Diplomats",
    description:
      "Once per action, you may exhaust 1 uncontrolled planet’s planet card that is on the game board to spend its resources or influence.",
    source: "Free Systems (DS)",
  },
  {
    name: "Free People",
    description:
      "During setup, for each non-home planet other than Mecatol Rex on the game board, place that planet’s planet card face up on the game board.",
    source: "Free Systems (DS)",
    mergeAbility: "Diplomats",
  },
];

const factionUndraftable = [
  {
    name: "Free Systems hero token",
    nsid: "token.attachment:homebrew.discordant_stars.heart_of_rebellion/free_systems",
    count: 1,
    triggerNsid:
      "card.leader.hero.free_systems:homebrew.discordant_stars/count_otto_pmay",
  },
];

const nsidToTemplateId = {
  "sheet.faction:homebrew.discordant_stars/free_systems":
    "9B6DD5614B3AAB4C0BBCEFA2A4F0C374",
  "tile.system:homebrew.discordant_stars/3202":
    "71C6CF8E8326420B9B72B5BD0329A173",
  "token.command:homebrew.discordant_stars/free_systems":
    "A9D618B64928CDF02005CEA2BC0957D6",
  "token.control:homebrew.discordant_stars/free_systems":
    "A00D67E441875C12E94B10BFEB1E6E8C",
  "token.attachment:homebrew.discordant_stars.heart_of_rebellion/free_systems":
    "9BDEE4FE4945F8A595C896B6E6843292",
};

const technologies = [
  {
    localeName: "technology.name.envoy_network",
    cardNsid:
      "card.technology.green.free_systems:homebrew.discordant_stars/envoy_network",
    type: "Green",
    requirements: { Green: 1 },
    source: "homebrew.discordant_stars",
    faction: "free_systems",
  },
  {
    localeName: "technology.name.covert_strike_teams",
    cardNsid:
      "card.technology.yellow.free_systems:homebrew.discordant_stars/covert_strike_teams",
    type: "Yellow",
    requirements: { Yellow: 2 },
    source: "homebrew.discordant_stars",
    faction: "covert_strike_teams",
  },
];

const systems = [
  {
    tile: 3202,
    source: "homebrew.discordant_stars",
    home: true,
    packageId: refPackageId,
    img: "discordant-stars/tiles/homeworld/tile_3202.jpg",
    planets: [
      { localeName: "planet.idyn", resources: 1, influence: 0 },
      { localeName: "planet.kroll", resources: 1, influence: 1 },
      { localeName: "planet.cyrra", resources: 0, influence: 1 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.vox",
    triggerNsid:
      "card.technology.unit_upgrade.free_systems:franken.discordant_stars/vox",
    unitAbility: "unit.flagship.vox",
    spaceCombat: { dice: 2, hit: 7 },
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.liberator",
    triggerNsid:
      "card.leader.mech.free_systems:homebrew.discordant_stars/liberator",
  },
];

const unitModifiers = [
  {
    // +1 dice to all COMBAT rolls for #planets of any trait in the system
    isCombat: true,
    localeName: "unit.flagship.vox",
    localeDescription: "unit_modifier.desc.vox",
    owner: "self",
    priority: "adjust",
    triggerUnitAbility: "unit.flagship.vox",
    filter: (auxData) => {
      return auxData.rollType === "spaceCombat" && auxData.self.has("flagship");
    },
    applyAll: (unitAttrsSet, auxData) => {
      let traitCount = {
        cultural: 0,
        hazardous: 0,
        industrial: 0,
      };
      auxData.activeSystem.planets.forEach(function (planet) {
        planet.traits.forEach((trait) => {
          traitCount[trait] += 1;
        });
      });

      const additionalDice = Math.max(
        traitCount["cultural"],
        traitCount["hazardous"],
        traitCount["industrial"]
      );
      unitAttrsSet.get("flagship").raw.spaceCombat.dice += additionalDice;
    },
    // TODO: combat: (RM/button) covert strike teams - Ambush did it with a button, but there is no registration API yet
  },
];

const attachments = [
  {
    packageId: refPackageId,
    localeName:
      "attachment:homebrew.discordant_stars.count_otto_pmay/free_systems",
    cardNsid:
      "card.leader.hero.free_systems:homebrew.discordant_stars/count_otto_pmay",
    tokenNsid: "token.unit:homebrew.discordant_stars.space_dock/free_systems",
    faceUp: {
      image:
        "discordant-stars/tokens/faction/free_systems_rebellion_token_back.png",
    },
  },
];

world.TI4.homebrew.inject({
  localeStrings,
  attachments,
  factions,
  factionAbilities,
  factionUndraftable,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
