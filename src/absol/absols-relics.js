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

const UNIT_MODIFIERS = [
  {
    toggleActive: true,
    isCombat: true,
    localeName: "Tyrant's Lament",
    localeDescription: "Relic ship",
    owner: "self",
    priority: "mutate",
    triggerNsid: "card.relic:homebrew.absol/tyrants_lament",
    filter: (auxData) => {
      // To use a unit, check if it is in the active system.
      // For now, lean on toggleActive.
      return true;
    },
    applyAll: (unitAttrsSet, auxData) => {
      unitAttrsSet.addSpecialUnit(
        new world.TI4.UnitAttrs({
          unit: "tyrants_lament",
          localeName: "Tyrant's Lament",
          antiFighterBarrage: { hit: 5, dice: 3 },
          spaceCannon: { hit: 5, dice: 3 },
          spaceCombat: { hit: 5, dice: 3 },
          sustainDamage: true,
          move: 2,
        })
      );
      auxData.self.overrideCount("tyrants_lament", 1);
    },
  },
];

world.TI4.homebrew.inject({
  nsidToTemplateId: {
    "card.relic:homebrew.absol/0": "E61C39795F4E24CAF12FF3AA8DA3A162",
    "card.legendary_planet:homebrew.absol/0":
      "39906ADBA348C433E32923B6EB0D5069",
  },
  remove: REMOVE,
  unitModifiers: UNIT_MODIFIERS,
});

world.TI4.homebrew.resetOnTableDecks();
