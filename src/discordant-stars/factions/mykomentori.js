const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.mykomentori": "Myko-Mentori",
  "faction.full.mykomentori": "The Myko-Mentori",
  "planet.shihalaum": "Shi-Halaum",
  "technology.name.psychoactive_armaments": "Psychoactive Armaments",
  "unit.flagship.psyclobea_qarnyx": "Psyclobea Garnyx",
  "unit.mech.amandia_pholdis": "Amandia Pholdis",
  "unit.space_dock.mycelium_ring": "Mycelium Ring",
  "unit.space_dock.mycelium_ring_2": "Mycelium Ring 2",
};

const factions = [
  {
    faction: "mykomentori",
    abilities: ["prescient_memories", "divination", "necrophage"],
    commodities: 1,
    home: 3211,
    leaders: {
      agents: ["lactarius_indigo"],
      commanders: ["amanita_muscaria"],
      heroes: ["coprinus_comatus"],
    },
    promissoryNotes: ["gift_of_insight"],
    icon: "discordant-stars/faction-icons/mykomentori.png",
    source: "homebrew.discordant_stars",
    startingTech: ["predictive_intelligence"],
    startingUnits: {
      carrier: 2,
      cruiser: 1,
      fighter: 1,
      infantry: 6,
      space_dock: 1,
    },
    techs: ["psychoactive_armaments"],
    units: [
      "psyclobea_qarnyx",
      "mycelium_ring",
      "mycelium_ring_2",
      "amandia_pholdis",
    ],
    unpackExtra: [
      {
        tokenNsid: "tile.system:homebrew.discordant_stars/3301",
      },
      {
        tokenNsid:
          "token.commodity:homebrew.discordant_stars.commodity_2/mykomentori",
      },
      {
        tokenNsid:
          "token.commodity:homebrew.discordant_stars.commodity_3/mykomentori",
      },
      {
        tokenNsid:
          "token.commodity:homebrew.discordant_stars.commodity_4/mykomentori",
      },
      {
        tokenNsid: "dice:homebrew.discordant_stars.omen/mykomentori",
        tokenCount: 4,
      },
    ],
    packageId: refPackageId,
  },
];

const factionAbilities = [
  {
    name: "Prescient Memories",
    description:
      "At the start of the strategy phase, take and roll each of the 4 “Omen” dice, place these dice near your faction sheet. You have 4 Omen Dice.",
    source: "Myko-Mentori (DS)",
  },
  {
    name: "Divination",
    description:
      "Before you would roll a die, you may instead return 1 Omen die near your faction sheet to your reinforcements to resolve that roll as if it had the result of that die.",
    source: "Myko-Mentori (DS)",
    mergeAbility: "Prescient Memories",
  },
  {
    name: "Necrophage",
    description:
      "Apply +1 to your commodity value for each space dock you control. After the first round of combat, gain 1 commodity or convert 1 of your commodities to a trade good.",
    source: "Myko-Mentori (DS)",
  },
];

const factionUndraftable = [
  {
    name: "Myko-Mentori omen dice",
    nsid: "dice:homebrew.discordant_stars.omen/mykomentori",
    count: 4,
    triggerAbility: "Prescient Memories",
  },
  {
    name: "Myko-Mentori bonus commodities token",
    nsid: "token.commodity:homebrew.discordant_stars.commodity_2/mykomentori",
    count: 1,
    triggerAbility: "Necrophage",
  },
  {
    name: "Myko-Mentori bonus commodities token",
    nsid: "token.commodity:homebrew.discordant_stars.commodity_3/mykomentori",
    count: 1,
    triggerAbility: "Necrophage",
  },
  {
    name: "Myko-Mentori bonus commodities token",
    nsid: "token.commodity:homebrew.discordant_stars.commodity_4/mykomentori",
    count: 1,
    triggerAbility: "Necrophage",
  },
];

const nsidToTemplateId = {
  "sheet.faction:homebrew.discordant_stars/mykomentori":
    "917CCCCD46E79B95814A5F8E78552AA4",
  "tile.system:homebrew.discordant_stars/3211":
    "330FC1258CCF4E51A7D641FC4218049F",
  "token.command:homebrew.discordant_stars/mykomentori":
    "A5812829410458551D8EFDAA822B72C5",
  "token.control:homebrew.discordant_stars/mykomentori":
    "14D5EDF64A2C018BF1FEF584CADEA72F",
  "dice:homebrew.discordant_stars.omen/mykomentori":
    "D7E5BBBF42888E06B8AF68ADC93E407F",
  "token.commodity:homebrew.discordant_stars.commodity_2/mykomentori":
    "A1AD4B654EE21C93581D82BAA8909478",
  "token.commodity:homebrew.discordant_stars.commodity_3/mykomentori":
    "9F714B1B4455E646DB91698184DD1491",
  "token.commodity:homebrew.discordant_stars.commodity_4/mykomentori":
    "A652D5D8498EA752206C73AEC583A8B2",
  "tile.system:homebrew.discordant_stars/3301":
    "CFB133FD79F5450AAEED1281FCB25D26",
};

const technologies = [
  {
    localeName: "technology.name.psychoactive_armaments",
    cardNsid:
      "card.technology.green.mykomentori:homebrew.discordant_stars/psychoactive_armaments",
    type: "Green",
    requirements: { Green: 2 },
    source: "homebrew.discordant_stars",
    faction: "mykomentori",
  },
  {
    localeName: "unit.space_dock.mycelium_ring_2",
    cardNsid:
      "card.technology.unit_upgrade.mykomentori:homebrew.discordant_stars/mycelium_ring_2",
    type: "unitUpgrade",
    requirements: { Yellow: 2 },
    abbrev: " MR II",
    faction: "mykomentori",
    unitPosition: 11,
  },
];

const systems = [
  {
    tile: 3211,
    source: "homebrew.discordant_stars",
    home: true,
    packageId: refPackageId,
    img: "discordant-stars/ui/tiles/tile_3211.png",
    planets: [{ localeName: "planet.shihalaum", resources: 4, influence: 0 }],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.psyclobea_qarnyx",
    triggerNsid:
      "card.technology.unit_upgrade.mykomentori:franken.discordant_stars/psyclobea_qarnyx",
    spaceCombat: { dice: 2, hit: 7 },
  },
  {
    unit: "space_dock",
    upgradeLevel: 1,
    localeName: "unit.space_dock.mycelium_ring",
    triggerNsid:
      "card.technology.unit_upgrade.mykomentori:franken.discordant_stars/mycelium_ring",
    planetaryShield: true,
  },
  {
    unit: "space_dock",
    upgradeLevel: 2,
    localeName: "unit.space_dock.mycelium_ring_2",
    triggerNsid:
      "card.technology.unit_upgrade.mykomentori:homebrew.discordant_stars/mycelium_ring_2",
    planetaryShield: true,
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.amandia_pholdis",
    triggerNsid:
      "card.leader.mech.mykomentori:homebrew.discordant_stars/amandia_pholdis",
  },
];

const unitModifiers = [];

// TODO: combat: implement dice replacements (not rolling but taking the die result)

world.TI4.homebrew.inject({
  localeStrings,
  factions,
  factionAbilities,
  factionUndraftable,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
