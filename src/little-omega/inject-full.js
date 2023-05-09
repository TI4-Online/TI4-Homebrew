world.__littleOmegaLoadingFull = true
require("./card/action/inject-action");
require("./card/agenda/inject-agenda");
require("./card/objective/inject-objective");
require("./card/promissory/inject-promissory");
world.TI4.homebrew.resetOnTableDecks();
world.TI4.homebrew.resetGenericPromissoryNotes();