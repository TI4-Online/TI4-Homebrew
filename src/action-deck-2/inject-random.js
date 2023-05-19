const { world } = require("@tabletop-playground/api");
require("./right-click-intrigue");
const UNIT_MODIFIERS = require("./unit-modifiers.data");
const LOCALE_STRINGS = require("./locale-strings.data");
const REPLACE = require("./replace.data");

var remove = [];
var randomNumberOfCards = Math.floor(Math.random() * Object.keys(REPLACE).length + 1);
for (let i = 0; i < randomNumberOfCards; i++) {
    let originalActionCards = Object.keys(REPLACE);
    let randomOriginalActionCard = originalActionCards[Math.random() * originalActionCards.length << 0];
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