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

/** setup instructions:
 
Every player should subscribe to both the TI4-TTPG and TI4-Homebrew mods.  If a player has not, they will be prompted to subscribe/download (which may take a while).

- Load the TI4-TTPG mod
- Right click the table and select "Object Library".
- Click "Add packages" in the lower left, select "TI4 Homebrew" then click "Add selected package" at the bottom.
- Click outside the window to close it.

Now the "Load homebrew..." button on the setup panel lets you add homebrew items.

For example, click "Absol's" at left, then "Absol's Relics".  Later when you click "Start game" it will replace the relic deck with Absol's and add the new legendary planet card to that deck.

 */

/* copy/paste template:

// --------------------------------------------------------
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
// --------------------------------------------------------

*/

// --------------------------------------------------------

ENTRIES.push({
  name: "Absol's",
  authors: "Absol",
  description: "Absol's homebrew replacements.",
  packageId: refPackageId,
  options: [
    {
      id: "ab-ag",
      name: "Absol's Agendas",
      description: "Replaces the Agenda deck, Political Secret cards",
      inject: "absol/absols-agendas.js",
    },
    {
      id: "ab-rc",
      name: "Absol's Relics",
      description:
        "Replaces the Relic deck, adds a few items to the Homebrew box",
      inject: "absol/absols-relics.js",
    },
    {
      id: "ab-tc",
      name: "Absol's Tech",
      description: "Replaces technology decks (including faction tech)",
      inject: "absol/absols-tech.js",
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
  name: "Cuke",
  authors: "Andcat",
  description: "Cucumber anomaly",
  packageId: refPackageId,
  options: [
    {
      id: "cuke",
      name: "Cuke",
      inject: "cuke/inject-cuke.js",
    },
  ],
});

// --------------------------------------------------------

ENTRIES.push({
  name: "Discordant Stars",
  authors: "Tactic Blue led, many more",
  description: "Fan expansion",
  packageId: refPackageId,
  options: [
    {
      id: "ds-fact",
      name: "Factions",
      inject: "discordant-stars/factions-all.js",
      description: "- 34 factions",
    },
    {
      id: "ds-plus",
      name: "Bonus content (systems, etc)",
      inject: "discordant-stars/inject-plus.js",
      description: [
        "- 24 system tiles",
        "- 16 exploration cards",
        "- 7 relics",
        "- 40 action cards",
      ].join("\n"),
    },
  ],
});

// --------------------------------------------------------

ENTRIES.push({
  name: "Fallen Empires",
  authors: "Cacotopos",
  description:
    "This mini-expansion continues the 'presence' after a player leaves the game.",
  packageId: refPackageId,
  options: [
    {
      id: "fal-emp",
      name: "Fallen Empires",
      inject: "fallen-empires/inject.js",
    },
  ],
});

// --------------------------------------------------------

ENTRIES.push({
  name: "Garbozia",
  authors: "unfulvio?",
  description: "New system",
  packageId: refPackageId,
  options: [
    {
      id: "garbz",
      name: "Add system",
      inject: "garbozia/garbozia-inject.js",
    },
  ],
});

// --------------------------------------------------------

// TODO
ENTRIES.push({
  name: "Ixth Expansion",
  authors: "Unfulvio",
  description: "",
  packageId: refPackageId,
  options: [
    {
      id: "ixth",
      name: "",
      inject: "",
    },
  ],
});

// --------------------------------------------------------

ENTRIES.push({
  name: "King in Yellow",
  authors: "Colin",
  description:
    "Faction: defensive early game, strong board control in the mid and late game to give that sense of impending doom. Strategy card abilities let the other players block them via tempo and timing.",
  packageId: refPackageId,
  options: [
    {
      id: "kiy",
      name: "King in Yellow",
      inject: "king-in-yellow/inject.js",
    },
  ],
});

// --------------------------------------------------------

ENTRIES.push({
  name: "Little Omega",
  authors: "Will",
  description:
    "Overhaul to various components of the game:\n" +
    [
      "- Action Cards",
      "- Agendas",
      "- Promissory Notes",
      "- Exploration and Relics",
      "- Public and Secret Objectives",
      "- Factions and Technologies",
    ].join("\n"),
  packageId: refPackageId,
  options: [
    {
      id: "lit-omg",
      name: "Little Omega",
      inject: "little-omega/inject-full.js",
    },
  ],
});

// --------------------------------------------------------

ENTRIES.push({
  name: "Milty Mod",
  authors: "Milty",
  description:
    "MiltyMod is an attempt to tweak some components to be more balanced and useful (and clean up some rules) while sticking relatively close to the original designs.",
  packageId: refPackageId,
  options: [
    {
      id: "mil-mod",
      name: "Milty Mod",
      inject: "miltymod/factions-all.js",
    },
  ],
});

// --------------------------------------------------------

ENTRIES.push({
  name: "Pax-Legitima",
  authors: "GeneralPith",
  description:
    "Pax Legitima expands and overhauls the agenda phase to reduce randomness and increase the number of interesting choices available to players.",
  packageId: refPackageId,
  options: [
    {
      id: "pax-leg",
      name: "Pax-Legitima",
      inject: "pax-legitima/inject.js",
    },
  ],
});

// --------------------------------------------------------

ENTRIES.push({
  name: "Red Tape",
  authors: "",
  description:
    "A near-direct port of the Age of Empire optional ruleset from TI3, this mode reveals ever objective card at the start of the game, allowing both new and veteran players the equal opportunity of knowing all scoring possibilities that lie ahead.",
  packageId: refPackageId,
  options: [
    {
      id: "red-tap",
      name: "Red tape",
      inject: "red-tape/inject.js",
    },
  ],
});

// --------------------------------------------------------

ENTRIES.push({
  name: "SCPT Lazax",
  authors: "SCPT Homebrew Hub",
  description: "",
  packageId: refPackageId,
  options: [
    {
      id: "scpt-lzx",
      name: "Lazax",
      inject: "scpt/lazax/inject-lazax.js",
    },
  ],
});

// --------------------------------------------------------

ENTRIES.push({
  name: "Skunee",
  authors: "Skunee",
  description: "",
  packageId: refPackageId,
  options: [
    {
      id: "sk-lnrt",
      name: "Lunartiks faction",
      inject: "skunee/inject.js",
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
