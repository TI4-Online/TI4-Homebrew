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
    isCombat: true,
    localeName: "Tyrant's Lament",
    localeDescription: "Relic ship",
    owner: "self",
    priority: "mutate",
    triggerNsids: [
      "card.other:homebrew.absol/tyrants_lament",
      "card.relic:homebrew.absol/tyrants_lament",
    ],
    filter: (auxData) => {
      // Check if unit is in active system.
      const skipContained = true;
      for (const obj of world.getAllObjects(skipContained)) {
        const nsid = world.TI4.ObjectNamespace.getNsid(obj);
        if (nsid !== "unit:homebrew.absol/tyrants_lament") {
          continue;
        }
        const pos = obj.getPosition();
        const hex = world.TI4.Hex.fromPosition(pos);
        return hex === auxData.hex;
      }
      return false;
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
  extraBoxes: [
    {
      name: "Absol's Relics (extras)",
      nsids: [
        "card.other:homebrew.absol/0",
        "unit:homebrew.absol/plenary_orbital",
        "unit:homebrew.absol/tyrants_lament",
      ],
    },
  ],
  localeStrings: {
    "unit.tyrants_lament": "Tyrant's Lament",
    "unit.plenary_orbital": "Plenary Orbital",
  },
  nsidToTemplateId: {
    //"card.relic:homebrew.absol/0": "E61C39795F4E24CAF12FF3AA8DA3A162",
    //"card.legendary_planet:homebrew.absol/0": "39906ADBA348C433E32923B6EB0D5069",
    "card.relic:homebrew.absol/0": "2D9829F6044C94754D5DAFB3920915D6", // "big" version with art
    "card.other:homebrew.absol/0": "142A0577AC44E5E7DFA87BA1C411FF2E",
    "unit:homebrew.absol/plenary_orbital": "09E1190A33447ECAFF273B85EAB95EE9",
    "unit:homebrew.absol/tyrants_lament": "83561BB78E49283707FA0C9CF8B08C49",
  },
  remove: REMOVE,
  unitModifiers: UNIT_MODIFIERS,
});

world.TI4.homebrew.resetOnTableDecks();
