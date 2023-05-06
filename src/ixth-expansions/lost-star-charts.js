const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
    "attachment:homebrew.ixth_lost_star_charts.terraforming_initiatives/cultural_boom":
        "Cultural Boom",
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
var nsidToTemplateId = {
    "card.planet:homebrew.ixth_lost_star_charts/0":
        "803F329D455EA6E1323C1982528C7F84",
    "card.legendary_planet:homebrew.ixth_lost_star_charts/legendary_planets":
        "E1DAC6584B3710A9F5A1859D01F71C62",
    "card.terraforming_initiative:homebrew.ixth_lost_star_charts/0":
        "F0BD707740DF3A205984B3A585F5C185",
    "card.exploration.cultural:homebrew.ixth_lost_star_charts/star_map_relic_fragment_cultural":
        "6C9D4F134FD83323FE4397A5E656634C",
    "card.exploration.cultural:homebrew.ixth_lost_star_charts/star_map_relic_fragment_hazardous":
        "6DA8FD774AE357B4A584AB93C153C8BD",
    "card.exploration.cultural:homebrew.ixth_lost_star_charts/star_map_relic_fragment_industrial":
        "A1F7F46D4C79E98A9BEF0EABAC518775",
    "tile.system:homebrew.ixth_lost_star_charts/3401":
        "3B52D8FF421EA0EAC360BF869BF7CF1A",
    "tile.system:homebrew.ixth_lost_star_charts/3402":
        "D44278004E670F3FC3754D8D2672AF70",
    "tile.system:homebrew.ixth_lost_star_charts/3403":
        "9AEEFC164607C0E364D6D8AEF91C27C3",
    "tile.system:homebrew.ixth_lost_star_charts/3404":
        "3B0A53874A9EA9EB6F53C2A85473E0CF",
    "tile.system:homebrew.ixth_lost_star_charts/3405":
        "4AD117854EBE81D68C386181A99117E8",
    "tile.system:homebrew.ixth_lost_star_charts/3406":
        "B2A8001940ACD35AB41FF39059601523",
    "tile.system:homebrew.ixth_lost_star_charts/3407":
        "BB83F92A4A1EB7F1B51F1886158349B2",
    "tile.system:homebrew.ixth_lost_star_charts/3408":
        "67778D3446F43491BC2D23A2B5FAF837",
    "tile.system:homebrew.ixth_lost_star_charts/3409":
        "6EE65E904EEEE4C005F5888745C74E6A",
    "tile.system:homebrew.ixth_lost_star_charts/3410":
        "C86FB6634351D7583B6D4E9AABD87A44",
    "tile.system:homebrew.ixth_lost_star_charts/3411":
        "1742E67D455737D08C9629B1EB01DC9F",
    "tile.system:homebrew.ixth_lost_star_charts/3412":
        "B006FD0B4C111E5D94FB1AA071D0373F",
    "tile.system:homebrew.ixth_lost_star_charts/3413":
        "5250432C4925720D12402BA47067102C",
    "tile.system:homebrew.ixth_lost_star_charts/3414":
        "F72EA28546E2426B9BCF449F1C173698",
    "tile.system:homebrew.ixth_lost_star_charts/3415":
        "144B7A254C13368D06CE4DAD3DD99919",
    "tile.system:homebrew.ixth_lost_star_charts/3416":
        "41E4B1AC45F2CA2842856781D69AABA3",
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
    "token.commodity:homebrew.ixth_lost_star_charts/lengendary_planet_jarrah":
        "80688203469E96E074957488799C227B",
    "token.commodity:homebrew.ixth_lost_star_charts/lengendary_planet_kwon":
        "2D822E6C49C394F11E9815AF1F4A7E5E",
};

// System IDs are set in the 4k range and are using their printed ID: i.e. Alpert (14F) is 4014
const systems = [
    {
        tile: 4001,
        source: "homebrew.ixth_lost_star_charts",
        packageId: refPackageId,
        img: "ixth-expansions/lost-star-charts/tiles/tile_4001.jpg",
        planets: [
            {
                localeName: "planet.desmond",
                resources: 0,
                influence: 1,
                trait: ["hazardous"],
                legendary: true,
                legendaryCard: "card.ghoti:homebrew.ixth_lost_star_charts/legendary_desmond_planet",
            },
        ],
        anomalies: ["supernova"],
    },
    {
        tile: 4002,
        source: "homebrew.ixth_lost_star_charts",
        packageId: refPackageId,
        img: "ixth-expansions/lost-star-charts/tiles/tile_4002.jpg",
        planets: [
            {
                localeName: "planet.horace",
                resources: 2,
                influence: 1,
                trait: ["industrial"],
                legendary: true,
                legendaryCard: "card.ghoti:homebrew.ixth_lost_star_charts/legendary_horace_planet",
            },
        ],
        wormholes: ["beta"],
        anomalies: ["nebula"],
    },
    {
        tile: 4003,
        source: "homebrew.ixth_lost_star_charts",
        packageId: refPackageId,
        img: "ixth-expansions/lost-star-charts/tiles/tile_4003.jpg",
        planets: [
            {
                localeName: "planet.eko",
                resources: 1,
                influence: 2,
                trait: ["cultural"],
                legendary: true,
                legendaryCard: "card.ghoti:homebrew.ixth_lost_star_charts/legendary_eko_planet",
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
        img: "ixth-expansions/lost-star-charts/tiles/tile_4004.jpg",
        planets: [
            {
                localeName: "planet.locke",
                resources: 2,
                influence: 1,
                trait: ["industrial"],
            }, {
                localeName: "planet.betham",
                resource: 1,
                influence: 2,
                trait: ["hazardous"],
            }
        ],
        wormholes: ["alpha", "beta"],
    },
    {
        tile: 4005,
        source: "homebrew.ixth_lost_star_charts",
        packageId: refPackageId,
        img: "ixth-expansions/lost-star-charts/tiles/tile_4005.jpg",
        planets: [
            {
                localeName: "planet.lapidus",
                resources: 2,
                influence: 2,
                trait: ["industrial"],
                legendary: true,
                legendaryCard: "card.ghoti:homebrew.ixth_lost_star_charts/legendary_lapidus_planet",
            },
        ],
        anomalies: ["asteroid field"],
    },
    {
        tile: 4006,
        source: "homebrew.ixth_lost_star_charts",
        packageId: refPackageId,
        img: "ixth-expansions/lost-star-charts/tiles/tile_4006.jpg",
        wormholes: ["alpha", "beta"],
        anomalies: ["gravity rift"],
    },
    {
        tile: 4007,
        source: "homebrew.ixth_lost_star_charts",
        packageId: refPackageId,
        img: "ixth-expansions/lost-star-charts/tiles/tile_4007.jpg",
        wormholes: ["beta"],
        anomalies: ["nebula"],
    },
    {
        tile: 4008,
        source: "homebrew.ixth_lost_star_charts",
        packageId: refPackageId,
        img: "ixth-expansions/lost-star-charts/tiles/tile_4008.jpg",
        wormholes: ["gamma"],
        anomalies: ["gravity rift"],
    },
    {
        tile: 4009,
        source: "homebrew.ixth_lost_star_charts",
        packageId: refPackageId,
        img: "ixth-expansions/lost-star-charts/tiles/tile_4009.jpg",
        planets: [
            {
                localeName: "planet.jarrah",
                resources: 0,
                influence: 0,
                trait: ["hazardous"],
                legendary: true,
                legendaryCard: "card.ghoti:homebrew.ixth_lost_star_charts/legendary_jarrah_planet",
            },
        ],
    },
    {
        tile: 4010,
        source: "homebrew.ixth_lost_star_charts",
        packageId: refPackageId,
        img: "ixth-expansions/lost-star-charts/tiles/tile_4010.jpg",
        planets: [
            {
                localeName: "planet.kwon",
                resources: 3,
                influence: 3,
                trait: ["cultural"],
                legendary: true,
                legendaryCard: "card.ghoti:homebrew.ixth_lost_star_charts/legendary_kwon_planet",
            },
        ],
        wormholes: ["alpha", "beta"],
        offMap: true,
    },
    {
        tile: 4011,
        source: "homebrew.ixth_lost_star_charts",
        packageId: refPackageId,
        img: "ixth-expansions/lost-star-charts/tiles/tile_4011.jpg",
        planets: [
            {
                localeName: "planet.lloyd",
                resources: 0,
                influence: 0,
                trait: ["hazardous"],
                legendary: true,
                legendaryCard: "card.ghoti:homebrew.ixth_lost_star_charts/legendary_lloyd_planet",
            },
        ],
    },
    {
        tile: 4012,
        source: "homebrew.ixth_lost_star_charts",
        packageId: refPackageId,
        img: "ixth-expansions/lost-star-charts/tiles/tile_4012.jpg",
        planets: [
            {
                localeName: "planet.windmore",
                resources: 3,
                influence: 2,
                trait: ["cultural"],
                legendary: true,
                legendaryCard: "card.ghoti:homebrew.ixth_lost_star_charts/legendary_windmore_planet",
            },
        ],
    },
    {
        tile: 4013,
        source: "homebrew.ixth_lost_star_charts",
        packageId: refPackageId,
        img: "ixth-expansions/lost-star-charts/tiles/tile_4013.jpg",
        planets: [
            {
                localeName: "planet.ethan",
                resources: 6,
                influence: 0,
                trait: ["hazardous"],
                legendary: true,
                legendaryCard: "card.ghoti:homebrew.ixth_lost_star_charts/legendary_ethan_planet",
            },
        ],
        wormholes: ["alpha", "beta"],
        offMap: true,
    },
    {
        tile: 4014,
        source: "homebrew.ixth_lost_star_charts",
        packageId: refPackageId,
        img: "ixth-expansions/lost-star-charts/tiles/tile_4014.jpg",
        planets: [
            {
                localeName: "planet.alpert",
                resources: 3,
                influence: 0,
                trait: ["cultural"],
                legendary: true,
                legendaryCard: "card.ghoti:homebrew.ixth_lost_star_charts/legendary_alpert_planet",
            },
        ],
    },
    {
        tile: 4015,
        source: "homebrew.ixth_lost_star_charts",
        packageId: refPackageId,
        img: "ixth-expansions/lost-star-charts/tiles/tile_4015.jpg",
        anomalies: ["asteroid field", "gravity rift"],
    },
    {
        tile: 4016,
        source: "homebrew.ixth_lost_star_charts",
        packageId: refPackageId,
        img: "ixth-expansions/lost-star-charts/tiles/tile_4016.jpg",
        wormholes: ["alpha", "beta"],
        offMap: true,
    },
];

const attachments = [
    {
        packageId: refPackageId,
        localeName: "attachment:homebrew.ixth_lost_star_charts.terraforming_initiatives/cultural_boom",
        cardNsid: "card.terraforming_initiatives:homebrew.discordant_stars/cultural_boom", // FIXME: add card
        tokenNsid:
            "token.attachment:homebrew.ixth_lost_star_charts.terraforming_initiatives/cultural_boom", // FIXME: add token
        faceUp: {
            influence: 2,
            traits: ["cultural"],
            image: "discordant-stars/extras/bentor_encryption_key.png",
        },
    },
];

// TODO: explain how to add exploration cards
// TODO: BIOCRYSTAL MELANGE
// TODO: INTERSTELLAR GATE

world.TI4.homebrew.inject(
    attachments,
    localeStrings,
    nsidToTemplateId,
    systems,
);

// rebuild decks with injected cards
world.TI4.homebrew.resetOnTableDecks();

console.log("HOMEBREW ADDING LOST STAR CHARTS");
