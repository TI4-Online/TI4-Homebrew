const { world } = require("@tabletop-playground/api");
const UNIT_MODIFIERS = require("./unit-modifiers.data");
require("./right-click-nano-forge");
world.__littleOmegaExplorationLoaded = false;

const OTHER_SCORABLE = ["card.relic:homebrew.little-omega/the_crown_of_emphidia"];

const ATTACHMENTS = [
    {
        localeName: "token.attachment.nano_forge",
        cardNsid: "card.relic:homebrew.little-omega/nanoforge",
        tokenNsid: "token.attachment.exploration:pok/nano_forge",
        faceUp: {
            resources: 2,
            influence: 2,
            legendary: true,
            image: "global/tokens/pok/exploration/exploration_2-2-legend_c.png",
        }
    }
];

world.TI4.homebrew.inject({
    nsidToTemplateId:
    {
        "card.relic:homebrew.little-omega/0": "5255AE3699D947629B44367D4BFBF034",
        "card.legendary_planet:homebrew.little-omega/nanoforge": "1ADE5FA8CC074D3E988A356166B28F70"
    },
    replace:
    {
                "card.relic:pok/the_crown_of_emphidia": "card.relic:homebrew.little-omega/the_crown_of_emphidia",
                "card.relic:codex.affinity/nanoforge": "card.relic:homebrew.little-omega/nanoforge",
                "card.relic:pok/the_crown_of_thalnos": "card.relic:homebrew.little-omega/the_crown_of_thalnos"
    },
    unitModifiers: UNIT_MODIFIERS,
    otherScorable: OTHER_SCORABLE,
    attachments: ATTACHMENTS
});

if (!world.__littleOmegaFull && !world.__littleOmegaExplorationLoaded) {
    world.TI4.homebrew.resetOnTableDecks();
    world.__littleOmegaExplorationLoaded = true;
}