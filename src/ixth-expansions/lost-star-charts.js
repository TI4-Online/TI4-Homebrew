const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "attachment:homebrew.ixth_lost_star_charts.terraforming_initiative/cultural_boom":
    "Cultural Boom",
  "attachment:homebrew.ixth_lost_star_charts.terraforming_initiative/established_trade_routes":
    "Established Trade Routes",
  "attachment:homebrew.ixth_lost_star_charts.terraforming_initiative/galatic_financial_center":
    "Galatic Financial Center",
  "attachment:homebrew.ixth_lost_star_charts.terraforming_initiative/geothermal_equilibrium":
    "Geothermal Equilibrium",
  "attachment:homebrew.ixth_lost_star_charts.terraforming_initiative/industrial_boom":
    "Industrial Boom",
  "attachment:homebrew.ixth_lost_star_charts.terraforming_initiative/interplanetary_hub":
    "Interplanetary Hub",
  "attachment:homebrew.ixth_lost_star_charts.terraforming_initiative/orbital_slingshot":
    "Orbital Slingshot",
  "attachment:homebrew.ixth_lost_star_charts.terraforming_initiative/planetary_archologies":
    "Planetary Archologies",
  "attachment:homebrew.ixth_lost_star_charts.terraforming_initiative/population_growth":
    "Population Growth",
  "attachment:homebrew.ixth_lost_star_charts.terraforming_initiative/self-defense_initiative":
    "Self-Defense Initiative",
  "attachment:homebrew.ixth_lost_star_charts.terraforming_initiative/terraforming_milestone":
    "Terraforming Milestone",
  "planet.alpert": "Alpert",
  "planet.desmond": "Desmond",
  "planet.eko": "Eko",
  "planet.ethan": "Ethan",
  "planet.horace": "Horace",
  "planet.jarrah": "Jarrah",
  "planet.kwon": "kwon",
  "planet.lapidus": "Lapidus",
  "planet.lloyd": "Lloys",
  "planet.locke": "Locke",
  "planet.benthham": "Bentham",
  "planet.windmore": "Windmore",
  "unit_modifier.name.self-defense_initiative": "Self-Defense Initiative",
};

/* nsidToTemplateId mapping
 *
 * This is a mapping between the (more readable) ID of an entity and its corresponding asset created in the TTPG editor
 * The ID can be chosen as desired, but we stick with an convention:
 * <asset-type>.<game-component-type>:<source-type>.<source>/<unique-name>
 * for system tiles an example is shown below with a unique number for system tiles.
 * The basic tiles of the game use the printed number.
 * the GUID can be found in the metadata of the created assets (via ttpg editor).
 */
const lloydTerraformingDeckGuid = "F0BD707740DF3A205984B3A585F5C185";
const lloydTokens = {
  "token.attachment:homebrew.ixth_lost_star_charts/cultural_boom":
    "E0C728D640471316384D3392EEEC17B0",
  "token.attachment:homebrew.ixth_lost_star_charts/established_trade_route":
    "ED12EBF14E6A95F9BCDC22BADE81F6D1",
  "token.attachment:homebrew.ixth_lost_star_charts/galatic_financial_center":
    "0A042A6E46E8C8010DAC72B304890B61",
  "token.attachment:homebrew.ixth_lost_star_charts/geothermal_equilibirum":
    "4680B47E49F02C8A3CCD318F395A230A",
  "token.attachment:homebrew.ixth_lost_star_charts/industrial_boom":
    "083BB63B485DABF6A8345D967F7CA3DD",
  "token.attachment:homebrew.ixth_lost_star_charts/interplanetary_hub":
    "A7E35EAA414203346D515EAB423704E3",
  "token.attachment:homebrew.ixth_lost_star_charts/orbital_slingshot":
    "A14476FD492B395C0A12A09E45D5B94A",
  "token.attachment:homebrew.ixth_lost_star_charts/planetary_archologies":
    "BB273BE846D50F7285F1F6A8F45E949F",
  "token.attachment:homebrew.ixth_lost_star_charts/population_growth":
    "A64EE79F40D722314552669A5BBDFD95",
  "token.attachment:homebrew.ixth_lost_star_charts/self-defense_initiative":
    "FD832139487457AC8AAC2A9E9DA1DBA5",
  "token.attachment:homebrew.ixth_lost_star_charts/terraforming_milestone":
    "32DBB1A4422E5BA38C28A79C783BE3EB",
};

const jarrahTokenGuid = "80688203469E96E074957488799C227B";
const jarrahTokens = {
  "token.commodity:homebrew.ixth_lost_star_charts/lengendary_planet_jarrah":
    jarrahTokenGuid,
};

const kwonTokenGuid = "2D822E6C49C394F11E9815AF1F4A7E5E";
const kwonTokens = {
  "token.commodity:homebrew.ixth_lost_star_charts/lengendary_planet_kwon":
    kwonTokenGuid,
};

const nsidToTemplateId = Object.assign(
  {
    "card.planet:homebrew.ixth_lost_star_charts/0":
      "803F329D455EA6E1323C1982528C7F84",
    "card.legendary_planet:homebrew.ixth_lost_star_charts/legendary_planets":
      "E1DAC6584B3710A9F5A1859D01F71C62",
    "card.terraforming_initiative:homebrew.ixth_lost_star_charts/0":
      lloydTerraformingDeckGuid,
    "card.exploration.frontier:homebrew.ixth_lost_star_charts/star_map_relic_fragment_frontier":
      "1EEE699B4A17781783B7EAA9AD0E8DDE",
    "card.exploration.cultural:homebrew.ixth_lost_star_charts/star_map_relic_fragment_cultural":
      "6C9D4F134FD83323FE4397A5E656634C",
    "card.exploration.hazardous:homebrew.ixth_lost_star_charts/star_map_relic_fragment_hazardous":
      "6DA8FD774AE357B4A584AB93C153C8BD",
    "card.exploration.industrial:homebrew.ixth_lost_star_charts/star_map_relic_fragment_industrial":
      "A1F7F46D4C79E98A9BEF0EABAC518775",
    "tile.system:homebrew.ixth_lost_star_charts/4001":
      "3B52D8FF421EA0EAC360BF869BF7CF1A",
    "tile.system:homebrew.ixth_lost_star_charts/4002":
      "D44278004E670F3FC3754D8D2672AF70",
    "tile.system:homebrew.ixth_lost_star_charts/4003":
      "9AEEFC164607C0E364D6D8AEF91C27C3",
    "tile.system:homebrew.ixth_lost_star_charts/4004":
      "3B0A53874A9EA9EB6F53C2A85473E0CF",
    "tile.system:homebrew.ixth_lost_star_charts/4005":
      "4AD117854EBE81D68C386181A99117E8",
    "tile.system:homebrew.ixth_lost_star_charts/4006":
      "B2A8001940ACD35AB41FF39059601523",
    "tile.system:homebrew.ixth_lost_star_charts/4007":
      "BB83F92A4A1EB7F1B51F1886158349B2",
    "tile.system:homebrew.ixth_lost_star_charts/4008":
      "67778D3446F43491BC2D23A2B5FAF837",
    "tile.system:homebrew.ixth_lost_star_charts/4009":
      "6EE65E904EEEE4C005F5888745C74E6A",
    "tile.system:homebrew.ixth_lost_star_charts/4010":
      "C86FB6634351D7583B6D4E9AABD87A44",
    "tile.system:homebrew.ixth_lost_star_charts/4011":
      "1742E67D455737D08C9629B1EB01DC9F",
    "tile.system:homebrew.ixth_lost_star_charts/4012":
      "B006FD0B4C111E5D94FB1AA071D0373F",
    "tile.system:homebrew.ixth_lost_star_charts/4013":
      "5250432C4925720D12402BA47067102C",
    "tile.system:homebrew.ixth_lost_star_charts/4014":
      "F72EA28546E2426B9BCF449F1C173698",
    "tile.system:homebrew.ixth_lost_star_charts/4015":
      "144B7A254C13368D06CE4DAD3DD99919",
    "tile.system:homebrew.ixth_lost_star_charts/4016":
      "41E4B1AC45F2CA2842856781D69AABA3",
    "pdf.rulebook:homebrew.ixth_lost_star_charts/0":
      "C87C1C3A40818B9AF0AC4AB0DC1B7A51",
  },
  lloydTokens,
  jarrahTokens,
  kwonTokens
);

// System IDs are set in the 4k range and are using their printed ID: i.e. Alpert (14F) is 4014
const systems = [
  {
    tile: 4001,
    source: "homebrew.ixth_lost_star_charts",
    packageId: refPackageId,
    img: "ixth-expansions/lost-star-charts/tiles/Desmond.png",
    planets: [
      {
        localeName: "planet.desmond",
        resources: 0,
        influence: 1,
        trait: ["hazardous"],
        legendary: true,
        legendaryCard:
          "card.legendary_planet:homebrew.ixth_lost_star_charts/legendary_desmond_planet",
      },
    ],
    anomalies: ["supernova"],
  },
  {
    tile: 4002,
    source: "homebrew.ixth_lost_star_charts",
    packageId: refPackageId,
    img: "ixth-expansions/lost-star-charts/tiles/Horace.png",
    planets: [
      {
        localeName: "planet.horace",
        resources: 2,
        influence: 1,
        trait: ["industrial"],
        legendary: true,
        legendaryCard:
          "card.legendary_planet:homebrew.ixth_lost_star_charts/legendary_horace_planet",
      },
    ],
    wormholes: ["beta"],
    anomalies: ["nebula"],
  },
  {
    tile: 4003,
    source: "homebrew.ixth_lost_star_charts",
    packageId: refPackageId,
    img: "ixth-expansions/lost-star-charts/tiles/Eko.png",
    planets: [
      {
        localeName: "planet.eko",
        resources: 1,
        influence: 2,
        trait: ["cultural"],
        legendary: true,
        legendaryCard:
          "card.legendary_planet:homebrew.ixth_lost_star_charts/legendary_eko_planet",
      },
    ],
    wormholes: ["alpha"],
    anomalies: ["gravity rift"],
    offMap: true,
  },
  {
    tile: 4004,
    source: "homebrew.ixth_lost_star_charts",
    packageId: refPackageId,
    img: "ixth-expansions/lost-star-charts/tiles/Locke-Bentham.png",
    planets: [
      {
        localeName: "planet.locke",
        resources: 2,
        influence: 1,
        trait: ["industrial"],
      },
      {
        localeName: "planet.betham",
        resources: 1,
        influence: 2,
        trait: ["hazardous"],
      },
    ],
    wormholes: ["alpha", "beta"],
  },
  {
    tile: 4005,
    source: "homebrew.ixth_lost_star_charts",
    packageId: refPackageId,
    img: "ixth-expansions/lost-star-charts/tiles/Lapidus.png",
    planets: [
      {
        localeName: "planet.lapidus",
        resources: 2,
        influence: 2,
        trait: ["industrial"],
        legendary: true,
        legendaryCard:
          "card.legendary_planet:homebrew.ixth_lost_star_charts/legendary_lapidus_planet",
      },
    ],
    anomalies: ["asteroid field"],
  },
  {
    tile: 4006,
    source: "homebrew.ixth_lost_star_charts",
    packageId: refPackageId,
    img: "ixth-expansions/lost-star-charts/tiles/Wormhole Sink.png",
    wormholes: ["alpha", "beta"],
    anomalies: ["gravity rift"],
  },
  {
    tile: 4007,
    source: "homebrew.ixth_lost_star_charts",
    packageId: refPackageId,
    img: "ixth-expansions/lost-star-charts/tiles/Slow Wormhole.png",
    wormholes: ["beta"],
    anomalies: ["nebula"],
  },
  {
    tile: 4008,
    source: "homebrew.ixth_lost_star_charts",
    packageId: refPackageId,
    img: "ixth-expansions/lost-star-charts/tiles/Trick or Threat.png",
    wormholes: ["gamma"],
    anomalies: ["gravity rift"],
  },
  {
    tile: 4009,
    source: "homebrew.ixth_lost_star_charts",
    packageId: refPackageId,
    img: "ixth-expansions/lost-star-charts/tiles/Jarrah.png",
    planets: [
      {
        localeName: "planet.jarrah",
        resources: 1,
        influence: 1,
        trait: ["hazardous"],
        legendary: true,
        legendaryCard:
          "card.legendary_planet:homebrew.ixth_lost_star_charts/legendary_jarrah_planet",
      },
    ],
  },
  {
    tile: 4010,
    source: "homebrew.ixth_lost_star_charts",
    packageId: refPackageId,
    img: "ixth-expansions/lost-star-charts/tiles/Kwon.png",
    planets: [
      {
        localeName: "planet.kwon",
        resources: 3,
        influence: 3,
        trait: ["cultural"],
        legendary: true,
        legendaryCard:
          "card.legendary_planet:homebrew.ixth_lost_star_charts/legendary_kwon_planet",
      },
    ],
    wormholes: ["alpha", "beta"],
    offMap: true,
  },
  {
    tile: 4011,
    source: "homebrew.ixth_lost_star_charts",
    packageId: refPackageId,
    img: "ixth-expansions/lost-star-charts/tiles/Lloyd.png",
    planets: [
      {
        localeName: "planet.lloyd",
        resources: 0,
        influence: 0,
        trait: ["hazardous"],
        legendary: true,
        legendaryCard:
          "card.legendary_planet:homebrew.ixth_lost_star_charts/legendary_lloyd_planet",
      },
    ],
  },
  {
    tile: 4012,
    source: "homebrew.ixth_lost_star_charts",
    packageId: refPackageId,
    img: "ixth-expansions/lost-star-charts/tiles/Widmore.png",
    planets: [
      {
        localeName: "planet.windmore",
        resources: 3,
        influence: 2,
        trait: ["cultural"],
        legendary: true,
        legendaryCard:
          "card.legendary_planet:homebrew.ixth_lost_star_charts/legendary_windmore_planet",
      },
    ],
  },
  {
    tile: 4013,
    source: "homebrew.ixth_lost_star_charts",
    packageId: refPackageId,
    img: "ixth-expansions/lost-star-charts/tiles/Ethan.png",
    planets: [
      {
        localeName: "planet.ethan",
        resources: 6,
        influence: 0,
        trait: ["hazardous"],
        legendary: true,
        legendaryCard:
          "card.legendary_planet:homebrew.ixth_lost_star_charts/legendary_ethan_planet",
      },
    ],
    wormholes: ["alpha", "beta"],
    offMap: true,
  },
  {
    tile: 4014,
    source: "homebrew.ixth_lost_star_charts",
    packageId: refPackageId,
    img: "ixth-expansions/lost-star-charts/tiles/Alpert.png",
    planets: [
      {
        localeName: "planet.alpert",
        resources: 3,
        influence: 0,
        trait: ["cultural"],
        legendary: true,
        legendaryCard:
          "card.legendary_planet:homebrew.ixth_lost_star_charts/legendary_alpert_planet",
      },
    ],
  },
  {
    tile: 4015,
    source: "homebrew.ixth_lost_star_charts",
    packageId: refPackageId,
    img: "ixth-expansions/lost-star-charts/tiles/Rocky Hole.png",
    anomalies: ["asteroid field", "gravity rift"],
  },
  {
    tile: 4016,
    source: "homebrew.ixth_lost_star_charts",
    packageId: refPackageId,
    img: "ixth-expansions/lost-star-charts/tiles/Nexus Detour.png",
    wormholes: ["alpha", "beta"],
    offMap: true,
  },
];

const attachments = [
  {
    packageId: refPackageId,
    localeName:
      "attachment:homebrew.ixth_lost_star_charts.terraforming_initiative/cultural_boom",
    cardNsid:
      "card.terraforming_initiative:homebrew.ixth_lost_star_charts/cultural_boom",
    tokenNsid: "token.attachment:homebrew.ixth_lost_star_charts/cultural_boom",
    faceUp: {
      influence: 2,
      traits: ["cultural"],
      image: "ixth-expansions/lost-star-charts/tokens/cultural_boom.png",
    },
  },
  {
    packageId: refPackageId,
    localeName:
      "attachment:homebrew.ixth_lost_star_charts.terraforming_initiative/established_trade_routes",
    cardNsid:
      "card.terraforming_initiative:homebrew.ixth_lost_star_charts/established_trade_routes",
    tokenNsid:
      "token.attachment:homebrew.ixth_lost_star_charts/established_trade_routes",
    faceUp: {
      image:
        "ixth-expansions/lost-star-charts/tokens/established_trade_routes.png",
    },
  },
  {
    packageId: refPackageId,
    localeName:
      "attachment:homebrew.ixth_lost_star_charts.terraforming_initiative/galatic_financial_center",
    cardNsid:
      "card.terraforming_initiative:homebrew.ixth_lost_star_charts/galatic_financial_center",
    tokenNsid:
      "token.attachment:homebrew.ixth_lost_star_charts/galatic_financial_center",
    faceUp: {
      image:
        "ixth-expansions/lost-star-charts/tokens/galatic_financial_center.png",
    },
  },
  {
    packageId: refPackageId,
    localeName:
      "attachment:homebrew.ixth_lost_star_charts.terraforming_initiative/geothermal_equilibrium",
    cardNsid:
      "card.terraforming_initiative:homebrew.ixth_lost_star_charts/geothermal_equilibrium",
    tokenNsid:
      "token.attachment:homebrew.ixth_lost_star_charts/geothermal_equilibrium",
    faceUp: {
      resources: 1,
      image:
        "ixth-expansions/lost-star-charts/tokens/geothermal_equilibrium.png",
    },
  },
  {
    packageId: refPackageId,
    localeName:
      "attachment:homebrew.ixth_lost_star_charts.terraforming_initiative/industrial_boom",
    cardNsid:
      "card.terraforming_initiative:homebrew.ixth_lost_star_charts/industrial_boom",
    tokenNsid:
      "token.attachment:homebrew.ixth_lost_star_charts/industrial_boom",
    faceUp: {
      resources: 2,
      traits: ["industrial"],
      image: "ixth-expansions/lost-star-charts/tokens/industrial_boom.png",
    },
  },
  {
    packageId: refPackageId,
    localeName:
      "attachment:homebrew.ixth_lost_star_charts.terraforming_initiative/interplanetary_hub",
    cardNsid:
      "card.terraforming_initiative:homebrew.ixth_lost_star_charts/interplanetary_hub",
    tokenNsid:
      "token.attachment:homebrew.ixth_lost_star_charts/interplanetary_hub",
    faceUp: {
      image: "ixth-expansions/lost-star-charts/tokens/interplanetary_hub.png",
    },
  },
  {
    packageId: refPackageId,
    localeName:
      "attachment:homebrew.ixth_lost_star_charts.terraforming_initiative/orbital_slingshot",
    cardNsid:
      "card.terraforming_initiative:homebrew.ixth_lost_star_charts/orbital_slingshot",
    tokenNsid:
      "token.attachment:homebrew.ixth_lost_star_charts/orbital_slingshot",
    faceUp: {
      image: "ixth-expansions/lost-star-charts/tokens/orbital_slingshot.png",
    },
  },
  {
    packageId: refPackageId,
    localeName:
      "attachment:homebrew.ixth_lost_star_charts.terraforming_initiative/planetary_archologies",
    cardNsid:
      "card.terraforming_initiative:homebrew.ixth_lost_star_charts/planetary_archologies",
    tokenNsid:
      "token.attachment:homebrew.ixth_lost_star_charts/planetary_archologies",
    faceUp: {
      influence: 1,
      image:
        "ixth-expansions/lost-star-charts/tokens/planetary_archologies.png",
    },
  },
  {
    packageId: refPackageId,
    localeName:
      "attachment:homebrew.ixth_lost_star_charts.terraforming_initiative/population_growth",
    cardNsid:
      "card.terraforming_initiative:homebrew.ixth_lost_star_charts/population_growth",
    tokenNsid:
      "token.attachment:homebrew.ixth_lost_star_charts/population_growth",
    faceUp: {
      influence: 1,
      resources: 1,
      image: "ixth-expansions/lost-star-charts/tokens/population_growth.png",
    },
  },
  {
    packageId: refPackageId,
    localeName:
      "attachment:homebrew.ixth_lost_star_charts.terraforming_initiative/self-defense_initiative",
    cardNsid:
      "card.terraforming_initiative:homebrew.ixth_lost_star_charts/elf-defense_initiative",
    tokenNsid:
      "token.attachment:homebrew.ixth_lost_star_charts/self-defense_initiative",
    faceUp: {
      image:
        "ixth-expansions/lost-star-charts/tokens/self-defense_initiative.png",
    },
  },
  {
    packageId: refPackageId,
    localeName:
      "attachment:homebrew.ixth_lost_star_charts.terraforming_initiative/terraforming_milestone",
    cardNsid:
      "card.terraforming_initiative:homebrew.ixth_lost_star_charts/terraforming_milestone",
    tokenNsid:
      "token.attachment:homebrew.ixth_lost_star_charts/terraforming_milestone",
    faceUp: {
      influence: 2,
      resources: 2,
      image:
        "ixth-expansions/lost-star-charts/tokens/terraforming_milestone.png",
    },
  },
];

/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "getSelfDefenseInitiativeTokenHex" }] */
function getSelfDefenseInitiativeTokenHex() {
  const selfDefenseTokens = world.getAllObjects().filter((obj) => {
    const nsid = world.TI4.ObjectNamespace.getNsid(obj);
    return (
      nsid ===
      "token.attachment:homebrew.ixth_lost_star_charts/self-defense_initiative"
    );
  });

  if (selfDefenseTokens.length !== 1) {
    throw new Error("Only one self-defense Token should be present");
  }

  return world.TI4.Hex.fromPosition(selfDefenseTokens[0].getPosition());
}

const unitModifiers = [
  {
    // "SPACE CANNON 6(x2)",
    isCombat: true,
    localeName: "unit_modifier.name.self-defense_initiative",
    localeDescription: "unit_modifier.desc.self-defense_initiative",
    owner: "self",
    priority: "mutate",
    triggerNsid:
      "card.terraforming_initiative:homebrew.ixth_lost_star_charts/self-defense_initiative",
    filter: (auxData) => {
      if (auxData.rollType !== "spaceCannon") {
        return false;
      }

      // Only applies to lloyd system with attached self-defense initiative and for its owner
      return auxData.activeSystem && auxData.activeSystem.tile === 4011;
    },
    applyAll: (unitAttrsSet, auxData) => {
      unitAttrsSet.addSpecialUnit(
        new world.TI4.UnitAttrs({
          unit: "self-defense_initiative",
          localeName: "unit_modifier.name.self-defense_initiative",
          spaceCannon: { hit: 6, dice: 2 },
        })
      );
      auxData.self.overrideCount("self-defense_initiative", 1);
    },
  },
];

const extraBoxes = [
  {
    name: "Lost Star Charts",
    nsids: [
      "pdf.rulebook:homebrew.ixth_lost_star_charts/0",

      // Lloyd tokens
      "token.attachment:homebrew.ixth_lost_star_charts/cultural_boom",
      "token.attachment:homebrew.ixth_lost_star_charts/established_trade_route",
      "token.attachment:homebrew.ixth_lost_star_charts/galatic_financial_center",
      "token.attachment:homebrew.ixth_lost_star_charts/geothermal_equilibirum",
      "token.attachment:homebrew.ixth_lost_star_charts/industrial_boom",
      "token.attachment:homebrew.ixth_lost_star_charts/interplanetary_hub",
      "token.attachment:homebrew.ixth_lost_star_charts/orbital_slingshot",
      "token.attachment:homebrew.ixth_lost_star_charts/planetary_archologies",
      "token.attachment:homebrew.ixth_lost_star_charts/population_growth",
      "token.attachment:homebrew.ixth_lost_star_charts/self-defense_initiative",
      "token.attachment:homebrew.ixth_lost_star_charts/terraforming_milestone",

      // Lloyd deck.
      "card.terraforming_initiative:homebrew.ixth_lost_star_charts/0",

      // Jarrah token.
      "token.commodity:homebrew.ixth_lost_star_charts/lengendary_planet_jarrah",

      // Kwon token.
      "token.commodity:homebrew.ixth_lost_star_charts/lengendary_planet_kwon",
    ],
  },
];

// TODO: BIOCRYSTAL MELANGE commodity adjustment
// TODO: INTERSTELLAR GATE commodity adjustment

try {
  console.log("HOMEBREW ADDING LOST STAR CHARTS");

  world.TI4.homebrew.inject({
    attachments,
    extraBoxes,
    localeStrings,
    nsidToTemplateId,
    systems,
    remove: [
      "card.exploration.frontier:pok/unknown_relic_fragment.1",
      "card.exploration.frontier:pok/unknown_relic_fragment.2",
      "card.exploration.frontier:pok/unknown_relic_fragment.3",
    ],
    unitModifiers,
  });

  world.TI4.homebrew.resetOnTableDecks();
  world.TI4.homebrew.resetSystemTilesBox();
} catch (error) {
  console.error(error);
}
