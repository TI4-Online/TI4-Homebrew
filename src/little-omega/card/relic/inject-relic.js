const { world } = require("@tabletop-playground/api");
world.__littleOmegaExplorationLoaded = false;

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
    }
});

if (!world.__littleOmegaFull && !world.__littleOmegaExplorationLoaded) {
    world.TI4.homebrew.resetOnTableDecks();
    world.__littleOmegaExplorationLoaded = true;
}