const { world } = require("@tabletop-playground/api");

world.TI4.homebrew.inject({
    nsidToTemplateId:
    {
        "card.promissory:homebrew.little-omega/0": "FDF93E9FC74746DC82EBA6DD87DA1BEB"
    },
    replace:
    {
        "card.promissory.blue:base/political_secret": "card.promissory.blue:homebrew.little-omega/political_secret",
        "card.promissory.brown:base/political_secret": "card.promissory.brown:homebrew.little-omega/political_secret",
        "card.promissory.red:base/political_secret": "card.promissory.red:homebrew.little-omega/political_secret",
        "card.promissory.white:base/political_secret": "card.promissory.white:homebrew.little-omega/political_secret",
        "card.promissory.yellow:base/political_secret": "card.promissory.yellow:homebrew.little-omega/political_secret",
        "card.promissory.green:base/political_secret": "card.promissory.green:homebrew.little-omega/political_secret",
        "card.promissory.purple:base/political_secret": "card.promissory.purple:homebrew.little-omega/political_secret",
        "card.promissory.orange:base/political_secret": "card.promissory.orange:homebrew.little-omega/political_secret",
        "card.promissory.pink:base/political_secret": "card.promissory.pink:homebrew.little-omega/political_secret"
    }
});

world.TI4.homebrew.resetGenericPromissoryNotes();