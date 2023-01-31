const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.bentor": "bentor",
  "faction.full.bentor": "The Bentor Conglomerate",
  "planet.benc": "Benc",
  "planet.hau": "Hau",
  "technology.name.broker_network": "Broker Network",
  "technology.name.merged_replicators": "Merged Replicators",
  "unit.flagship.wayfinder": "Wayfinder",
  "unit.mech.auctioneer": "Auctioneer",
};


const factions = [{
  faction: "bentor",
  abilities: [
    "secret_maps",
    "fortune_seekers",
    "ancient_blueprints",
  ],
  commodities: 2,
  home: 3227,
  leaders: {
    agents: ["coo_mgur"],
    commanders: ["cmo_ranc"],
    heroes: ["ceo_ken_tucc"],
  },
  promissoryNotes: ["encryption_key"],
  promissoryNotes: ["secrets_of_the_weave"],
  icon: "discordant-stars/faction-icons/bentor.jpg",
  source: "discordant_stars",
  startingTech: ["pscyhoarchaeology", "dark_energy_tap", "scanlink_drone_network"],
  startingUnits: {
    carrier: 1,
    cruiser: 2,
    fighter: 3,
    infantry: 4,
    pds: 1,
    space_dock: 1,
  },
  techs: ["broker_network", "merged_replicators"],
  units: ["wayfinder", "auctioneer"],
  packageId: refPackageId,
  unpackExtra: [
    {
      tokenNsid: "token.commodity:homebrew.discordant-stars.3_commodities/bentor",
    },
    {
      tokenNsid: "token.fragment:homebrew.discordant-stars.industrial/bentor",
    },
    {
      tokenNsid: "token.fragment:homebrew.discordant-stars.hazardous/bentor",
    },
    {
      tokenNsid: "token.fragment:homebrew.discordant-stars.cultural/bentor",
    },
    {
      tokenNsid: "token.fragment:homebrew.discordant-stars.unknown/bentor",
    },
    {
      tokenNsid: "token.attachment:homebrew.discordant-stars.encryption_key/bentor",
    },
  ]
}];

 const nsidToTemplateId = {
    "sheet.faction:homebrew.discordant_stars/bentor":
      "6098F2E247A0F3331D482393C3485A7D",
    "tile.system:homebrew.discordant_stars/3227":
      "A82C1EEB46CF7606A20E01862231D69D",
    "token.command:homebrew.discordant_stars/bentor":
      "19C88E534DCD54C9A47717A2E3499473",
    "token.control:homebrew.discordant_stars/bentor":
      "4321ECD84A0F2D580ED2ADBFC631C260",
    "token.commodity:homebrew.discordant-stars.3_commodities/bentor":
      "XXXXXXX",
    "token.fragment:homebrew.discordant-stars.industrial/bentor":
      "XXXXXXX",
    "token.fragment:homebrew.discordant-stars.hazardous/bentor":
      "XXXXXXX",
    "token.fragment:homebrew.discordant-stars.cultural/bentor":
      "XXXXXXX",
    "token.fragment:homebrew.discordant-stars.unknown/bentor":
      "XXXXXXX",
    "token.attachment:homebrew.discordant-stars.encryption_key/bentor":
      "XXXXXXX",
};

const technologies = [{
    localeName: "technology.name.broker_network",
    cardNsid:
      "card.technology.green.bentor:homebrew.discordant_stars/broker_network",
    type: "Green",
    requirements: { Green: 1 },
    source: "homebrew.discordant_stars",
    faction: "bentor",
  }, {
    localeName: "technology.name.merged_replicators",
    cardNsid:
        "card.technology.yellow.bentor:homebrew.discordant_stars/merged_replicators",
    type: "Yellow",
    requirements: { Yellow: 2 },
    source: "homebrew.discordant_stars",
    faction: "bentor",
  },
];

const systems = [
  {
    tile: 3227,
    source: "homebrew.discordant_stars",
    home: true,
    planets: [
      { localeName: "planet.benc", resources: 2, influence: 0 },
      { localeName: "planet.hau", resources: 1, influence: 2 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.wayfinder",
    triggerNsid:
      "card.technology.unit_upgrade.bentor:franken.discordant_stars/wayfinder",
    spaceCombat: { dice: 2, hit: 9 },
    bombardment: { dice: 1, hit: 9 },
    spaceCannon: { dice: 2, hit: 9 },
    antiFighterBarrage: { dice: 2, hit: 9 },
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.auctioneer",
    triggerNsid: "card.leader.mech.bentor:homebrew.discordant_stars/auctioneer",
  },
];

const unitModifiers = [];

console.log("DISCORDANT STARS ADDING BENTOR");
world.TI4.homebrew.inject({
  localeStrings,
  factions,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
