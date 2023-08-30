const { refObject, refPackageId, world } = require("@tabletop-playground/api");

/**
 * Register homebrew for player selection.
 *
 * Entries contain:
 * - name : homebrew name displayed to players.
 * - description : what is the homebrew?
 * - packageId : set to refPackageId.
 * - options : list of checkboxes with injection scripts (see below).
 *
 * - option.id : short (<8 chars), unique string for internal use.
 * - option.name : option name displayed to players.
 * - option.injectd : script path relative to src, e.g. "garbozia/garbozia-inject.js"
 */
const ENTRIES = [];

/* copy/paste template:

ENTRIES.push({
  name: "",
  authors: "",
  description: "",
  packageId: refPackageId,
  options: [
    {
      id: "",
      name: "",
      inject: "",
    },
  ],
});

*/

// --------------------------------------------------------

ENTRIES.push({
  name: "Absol",
  authors: "Absol",
  description: "Absol's homebrew replacements.",
  packageId: refPackageId,
  options: [
    {
      id: "ab-ag",
      name: "Absol's Agendas",
      inject: "absol/absols-agendas.js",
    },
    {
      id: "ab-rc",
      name: "Absol's Relics",
      inject: "absol/absols-relics.js",
    },
  ],
});

// --------------------------------------------------------

ENTRIES.push({
  name: "Action Deck 2",
  authors: "Will",
  description:
    "84 new, unique, singleton cards to combine with the 36 '4-of' cards in the primary deck. It's largely a compilation of my favorite homebrew cards from all over the community (with some tweaks here and there). I tried to keep a similar composition of card types to the primary deck. Experience all new mechanics and lore (with a few jokes thrown in).",
  packageId: refPackageId,
  options: [
    {
      id: "acd2",
      name: "Full deck",
      inject: "action-deck-2/inject-replace.js",
    },
  ],
});

// --------------------------------------------------------

ENTRIES.push({
  name: "Discordant Stars",
  authors: "Tactic Blue led, many more",
  description: "34 new factions, as well as 24 new system tiles.",
  packageId: refPackageId,
  options: [
    {
      id: "ds-fact",
      name: "Factions",
      inject: "discordant-stars/factions-all.js",
    },
    {
      id: "ds-plus",
      name: "Extra systems",
      inject: "discordant-stars/inject-plus.js",
    },
  ],
});

// --------------------------------------------------------

if (!refObject.__homebrewLoaded) {
  refObject.__homebrewLoaded = true;

  console.log("--------------------------------");
  console.log("running TI4-Homebrew/REGISTRY.js");
  console.log("--------------------------------");
  for (const entry of ENTRIES) {
    world.TI4.homebrew.register(entry);
  }
} else {
  console.log("redundant TI4-Homebrew/REGISTRY.js");
}
