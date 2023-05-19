const { world } = require("@tabletop-playground/api");
require("./right-click-intrigue");
const UNIT_MODIFIERS = require("./unit-modifiers.data");
const LOCALE_STRINGS = require("./locale-strings.data");
const REPLACE = require("./replace.data");

var remove = [];
var numberOfCards = Object.keys(REPLACE).length;
for (let i = 0; i < numberOfCards / 2; i++) {
    let originalActionCards = Object.keys(REPLACE);
    let randomOriginalActionCard = originalActionCards[originalActionCards.length * Math.random() << 0];
    let homebrewToRemove = REPLACE[randomOriginalActionCard];
    remove.push(homebrewToRemove);
    delete REPLACE[randomOriginalActionCard];
}

world.TI4.homebrew.inject({
    nsidToTemplateId:
    {
        "card.action:homebrew.action_deck_2/0": "934D6DF9DCB340AD826E2416C7C78580"
    },
    remove,
    replace: REPLACE,
    unitModifiers: UNIT_MODIFIERS,
    localeStrings: LOCALE_STRINGS
  });

world.TI4.homebrew.resetOnTableDecks()