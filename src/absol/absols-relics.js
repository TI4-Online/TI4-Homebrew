const { world } = require("@tabletop-playground/api");

const REMOVE = [
  "card.relic:pok/dominus_orb",
  "card.relic:pok/maw_of_worlds",
  "card.relic:pok/scepter_of_emelpar",
  "card.relic:pok/shard_of_the_throne",
  "card.relic:pok/stellar_converter",
  "card.relic:pok/the_codex",
  "card.relic:pok/the_crown_of_emphidia",
  "card.relic:pok/the_crown_of_thalnos",
  "card.relic:pok/the_obsidian",
  "card.relic:pok/the_prophets_tears",
];

world.TI4.homebrew.inject({
  nsidToTemplateId: {
    "card.relic:homebrew.absol.relic/0": "A5BD5FD14408926324A657A93F08184B",
    "card.legendary_planet:homebrew.absols_relics/0":
      "DC73935E44BD71C84B90E9A374A850C0",
  },
  remove: REMOVE,
});

world.TI4.homebrew.resetOnTableDecks();
