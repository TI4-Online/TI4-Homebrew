const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
    "attachment:homebrew.ixth_lost_star_charts.terraforming_initiatives/cultural_boom":
        "Cultural Boom",
    "planet.first": "THE First",
    "planet.second": "THE Second",
    "planet.third": "THE Third",
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
    "card.planet:homebrew.ixth_lost_star_charts/0": // FIXME: the ID has to be added in the editor
        "<THE CARD STACK GUID>", // FIXME: the GUID will be part of the assets once it was added
    "tile.system:homebrew.ixth_lost_star_charts/3400": // FIXME: the ID has to be added in the editor
        "<THE TILE GUID>", // FIXME: the GUID will be part of the assets once it was added
};

// Systems starting with 4000 (since they have to be unique and 4k is not yet taken
// for system and planet schema see https://github.com/TI4-Online/TI4-TTPG/blob/main/src/lib/system/system.schema.js
const systems = [
    { // FIXME: add real system(s)
        tile: 4000,
        source: "homebrew.ixth_lost_star_charts",
        home: true,
        packageId: refPackageId,
        img: "ixth-expansions/lost-star-charts/tiles/tile_4000.jpg",
        anomalies: [],
        planets: [
            {
                localeName: "planet.fist",
                resources: 2,
                influence: 1,
            },
            {
                localeName: "planet.second",
                resources: 1,
                influence: 3
            },
            {
                localeName: "planet.third",
                resources: 1,
                influence: 3
            },
        ],
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


console.log("HOMEBREW ADDING LOST STAR CHARTS");
