const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.mykomentori": "Myko-Mentori",
  "faction.full.mykomentori": "The Myko-Mentori",
  "planet.shihalaum": "Shi-Halaum",
  "technology.name.psychoactive_armaments": "Psychoactive Armaments",
  "unit.flagship.psyclobea_qarnyx": "Psyclobea Garnyx",
  "unit.mech.amandia_pholdis": "Amandia Pholdis",
};


const factions = [{
  faction: "mykomentori",
  abilities: [
    "prescient_memories",
    "divination",
    "necrophage",
  ],
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
      tokenNsid: "dice:homebrew.discordant-stars.omen/mykomentori",
      tokenCount: 4,
    },
    {
      tokenNsid: "token.commodity:homebrew.discordant-stars.commodity_2/mykomentori",
    },
    {
      tokenNsid: "token.commodity:homebrew.discordant-stars.commodity_3/mykomentori",
    },
    {
      tokenNsid: "token.commodity:homebrew.discordant-stars.commodity_4/mykomentori",
    },
    {
      tokenNsid: "tile.system:homebrew.discordant-stars.mykomentori/nova_seed",
    },
  ],
  packageId: refPackageId,
}];

 const nsidToTemplateId = {
    "sheet.faction:homebrew.discordant_stars/mykomentori":
      "917CCCCD46E79B95814A5F8E78552AA4",
    "tile.system:homebrew.discordant_stars/3211":
      "330FC1258CCF4E51A7D641FC4218049F",
    "token.command:homebrew.discordant_stars/mykomentori":
      "XXXXXXX",
    "token.control:homebrew.discordant_stars/mykomentori":
      "XXXXXXX",
   "dice:homebrew.discordant-stars.omen/mykomentori":
       "XXXXXXX",
   "token.commodity:homebrew.discordant-stars.commodity_2/mykomentori":
       "XXXXXXX",
   "token.commodity:homebrew.discordant-stars.commodity_3/mykomentori":
       "XXXXXXX",
   "token.commodity:homebrew.discordant-stars.commodity_4/mykomentori":
       "XXXXXXX",
   "tile.system:homebrew.discordant-stars.mykomentori/nova_seed":
       "XXXXXXX",
};

const technologies = [{
    localeName: "technology.name.psychoactive_armaments",
    cardNsid:
      "card.technology.green.mykomentori:homebrew.discordant_stars/psychoactive_armaments",
    type: "Green",
    requirements: { Green: 2 },
    source: "homebrew.discordant_stars",
    faction: "mykomentori",
  }, {
    localeName: "unit.mycelium_ring_2",
    cardNsid: "card.technology.unit_upgrade.mykomentori:homebrew.discordant_stars/mycelium_ring_2",
    type: "unitUpgrade",
    requirements: { Yellow: 2 },
    abbrev: " MR II",
    faction: "mykomentori",
    unitPosition: 0,
  },
];

const systems = [
  {
    tile: 3211,
    source: "homebrew.discordant_stars",
    home: true,
    planets: [
        { localeName: "planet.shihalaum", resources: 4, influence: 0 },
    ],
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
    triggerNsid: "card.technology.unit_upgrade.mykomentori:franken.discordant_stars/mycelium_ring",
  },
  {
    unit: "space_dock",
    upgradeLevel: 2,
    localeName: "unit.space_dock.mycelium_ring_2",
    triggerNsid: "card.technology.unit_upgrade.mykomentori:homebrew.discordant_stars/mycelium_ring_2",
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.amandia_pholdis",
    triggerNsid: "card.leader.mech.mykomentori:homebrew.discordant_stars/amandia_pholdis",
  },
];

const unitModifiers = [];

console.log("DISCORDANT STARS ADDING FACTION");
world.TI4.homebrew.inject({
  localeStrings,
  factions,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
