const { world, refPackageId } = require("@tabletop-playground/api");
world.__littleOmegaExplorationLoaded = false;

const ATTACHMENTS = [
    {
        localeName: "token.attachment.dmz",
        cardNsid: "card.exploration.cultural:homebrew.little-omega/demilitarized_zone",
        tokenNsid: "token.attachment.exploration:pok/dmz",
        faceUp: {
            image: "global/tokens/pok/exploration/exploration_dmz_c.png",
        },
    },
    {
        localeName: "token.exploration.ion_storm",
        cardNsid: "card.exploration.frontier:homebrew.little-omega/ion_storm",
        tokenNsid: "token.exploration:pok/ion_storm"
    },
    {
        localeName: "token.exploration.mirage",
        cardNsid: "card.exploration.frontier:homebrew.little-omega/mirage",
        tokenNsid: "token.exploration:pok/mirage",
        extraCardNsids: [
            "card.planet:pok/mirage",
            "card.legendary_planet:pok/mirage_flight_academy"
        ]
    },
    {
        localeName: "token.wormhole.gamma",
        cardNsid: "card.exploration.cultural:homebrew.little-omega/gamma_wormhole",
        tokenNsid: "token.wormhole.exploration:pok/gamma",
        spawn: true
    },
    {
        localeName: "token.wormhole.gamma",
        cardNsid: "card.exploration.frontier:homebrew.little-omega/gamma_relay",
        tokenNsid: "token.wormhole.exploration:pok/gamma",
        spawn: true
    },
    {
        packageId: refPackageId,
        localeName: "token.attachment.tomb_of_emphidia",
        cardNsid: "card.exploration.cultural:homebrew.little-omega/tomb_of_emphidia",
        tokenNsid: "token.attachment.exploration:homebrew.little-omega/tomb_of_emphidia",
        faceUp: {
            influence: 1,
            image: "little-omega/card/exploration/cultural/exploration_tomb_small.png",
        },
        extraCardNsids: [
            "card.legendary_planet:homebrew.little-omega/tomb_of_emphidia"
        ]
    }
];

world.TI4.homebrew.inject({
    nsidToTemplateId:
    {
        "card.exploration.cultural:homebrew.little-omega/0": "42F130ABD66A407BA8719DFEA66B6225",
        "card.exploration.frontier:homebrew.little-omega/0": "78F635145D1B438BAB701F92F8B0A0BB",
        "card.exploration.hazardous:homebrew.little-omega/0": "0408D64FE6D54E53A30B2690CCCC9B8E",
        "card.legendary_planet:homebrew.little-omega/tomb-of-emphidia": "7041945996E94C8D89158FB7706FAE5C",
        "token.attachment.exploration:homebrew.little-omega/tomb_of_emphidia": "F9DCB1DCC87C4453950EEACE997DEC9F"
    },
    replace:
    {
        "card.exploration.cultural:pok/demilitarized_zone": "card.exploration.cultural:homebrew.little-omega/demilitarized_zone",
        "card.exploration.cultural:pok/freelancers.1": "card.exploration.cultural:homebrew.little-omega/freelancers.1",
        "card.exploration.cultural:pok/freelancers.2": "card.exploration.cultural:homebrew.little-omega/freelancers.2",
        "card.exploration.cultural:pok/freelancers.3": "card.exploration.cultural:homebrew.little-omega/freelancers.3",
        "card.exploration.cultural:pok/gamma_wormhole": "card.exploration.cultural:homebrew.little-omega/gamma_wormhole",
        "card.exploration.cultural:pok/mercenary_outfit.1": "card.exploration.cultural:homebrew.little-omega/mercenary_outfit.1",
        "card.exploration.cultural:pok/mercenary_outfit.2": "card.exploration.cultural:homebrew.little-omega/mercenary_outfit.2",
        "card.exploration.cultural:pok/mercenary_outfit.3": "card.exploration.cultural:homebrew.little-omega/mercenary_outfit.3",
        "card.exploration.cultural:pok/tomb_of_emphidia": "card.exploration.cultural:homebrew.little-omega/tomb_of_emphidia",
        "card.exploration.hazardous:pok/expedition.1": "card.exploration.hazardous:homebrew.little-omega/expedition.1",
        "card.exploration.hazardous:pok/expedition.2": "card.exploration.hazardous:homebrew.little-omega/expedition.2",
        "card.exploration.hazardous:pok/expedition.3": "card.exploration.hazardous:homebrew.little-omega/expedition.3",
        "card.exploration.frontier:pok/gamma_relay": "card.exploration.frontier:homebrew.little-omega/gamma_relay",
        "card.exploration.frontier:pok/ion_storm": "card.exploration.frontier:homebrew.little-omega/ion_storm",
        "card.exploration.frontier:pok/mirage": "card.exploration.frontier:homebrew.little-omega/mirage"
    },
    attachments: ATTACHMENTS
});

if (!world.__littleOmegaFull && !world.__littleOmegaExplorationLoaded) {
    world.TI4.homebrew.resetOnTableDecks();
    world.__littleOmegaExplorationLoaded = true;
}