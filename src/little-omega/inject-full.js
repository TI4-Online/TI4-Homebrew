world.__littleOmegaFull = true;

require("./card/action/inject-action");
require("./card/agenda/inject-agenda");
require("./card/objective/inject-objective");
require("./card/promissory/inject-promissory");
require("./card/exploration/inject-exploration");
require("./card/relic/inject-relic");

if (!world.__littleOmegaFullLoaded) {
    world.TI4.homebrew.resetOnTableDecks();
    world.TI4.homebrew.resetGenericPromissoryNotes();
    world.__littleOmegaFullLoaded = true;
}