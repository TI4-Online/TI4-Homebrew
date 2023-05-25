const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.bentor": "Bentor",
  "faction.full.bentor": "The Bentor Conglomerate",
  "planet.benc": "Benc",
  "planet.hau": "Hau",
  "technology.name.broker_network": "Broker Network",
  "technology.name.merged_replicators": "Merged Replicators",
  "unit.flagship.wayfinder": "Wayfinder",
  "unit.mech.auctioneer": "Auctioneer",
  "unit_modifier.desc.wayfinder":
    "+1 to the result of this ship's combat and ability rolls for each Fragment token on your faction sheet",
  "attachment:homebrew.discordant_stars.encryption_key/bentor":
    "Encryption Key",
};

const factions = [
  {
    faction: "bentor",
    abilities: ["secret_maps", "fortune_seekers", "ancient_blueprints"],
    commodities: 2,
    home: 3227,
    leaders: {
      agents: ["coo_mgur"],
      commanders: ["cmo_ranc"],
      heroes: ["ceo_ken_tucc"],
    },
    promissoryNotes: ["encryption_key"],
    icon: "discordant-stars/faction-icons/bentor.png",
    source: "homebrew.discordant_stars",
    startingTechChoice: "bentor",
    startingTechChoices: [
      "psychoarchaeology",
      "dark_energy_tap",
      "scanlink_drone_network",
    ],
    startingTech: [],
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
        tokenNsid:
          "token.commodity:homebrew.discordant_stars.plus_1_commodities/bentor",
      },
      {
        tokenNsid: "token.fragment:homebrew.discordant_stars.industrial/bentor",
      },
      {
        tokenNsid: "token.fragment:homebrew.discordant_stars.hazardous/bentor",
      },
      {
        tokenNsid: "token.fragment:homebrew.discordant_stars.cultural/bentor",
      },
      {
        tokenNsid: "token.fragment:homebrew.discordant_stars.unknown/bentor",
      },
      {
        tokenNsid:
          "token.attachment:homebrew.discordant_stars.encryption_key/bentor",
      },
    ],
  },
];

const factionAbilities = [
  {
    name: "Secret Maps",
    description:
      "At the end of your tactical actions, you may explore 1 planet in the active system that is or contains 1 of your units with PRODUCTION that you did not explore during that tactical action.",
    source: "Bentor (DS)",
  },
  {
    name: "Fortune Seekers",
    description:
      "After you explore a planet or frontier token, you may gain 1 commodity.",
    source: "Bentor (DS)",
  },
  {
    name: "Ancient Blueprints",
    description:
      "The first time you gain a cultural, hazardous, industrial, or unknown relic fragment, place the corresponding “Fragment” token on your faction sheet.",
    source: "Bentor (DS)",
  },
];

const factionUndraftable = [
  {
    name: "bentor industrial token",
    nsid: "token.fragment:homebrew.discordant_stars.industrial/bentor",
    count: 1,
    triggerAbility: "Ancient Blueprints",
  },
  {
    name: "bnetor hazardous token",
    nsid: "token.fragment:homebrew.discordant_stars.hazardous/bentor",
    count: 1,
    triggerAbility: "Ancient Blueprints",
  },
  {
    name: "bnetor cultural token",
    nsid: "token.fragment:homebrew.discordant_stars.cultural/bentor",
    count: 1,
    triggerAbility: "Ancient Blueprints",
  },
  {
    name: "bnetor unknown token",
    nsid: "token.fragment:homebrew.discordant_stars.unknown/bentor",
    count: 1,
    triggerAbility: "Ancient Blueprints",
  },
];

const nsidToTemplateId = {
  "sheet.faction:homebrew.discordant_stars/bentor":
    "6098F2E247A0F3331D482393C3485A7D",
  "tile.system:homebrew.discordant_stars/3227":
    "A82C1EEB46CF7606A20E01862231D69D",
  "token.command:homebrew.discordant_stars/bentor":
    "19C88E534DCD54C9A47717A2E3499473",
  "token.control:homebrew.discordant_stars/bentor":
    "4321ECD84A0F2D580ED2ADBFC631C260",
  "token.commodity:homebrew.discordant_stars.plus_1_commodities/bentor":
    "D2AC3F394BB428EB57900B9751788209",
  "token.fragment:homebrew.discordant_stars.industrial/bentor":
    "50B21D3947AAC18D8C75B3963C4995A6",
  "token.fragment:homebrew.discordant_stars.hazardous/bentor":
    "9F050E634895FDD06C70FFA13F3C391D",
  "token.fragment:homebrew.discordant_stars.cultural/bentor":
    "C56C5DF14BCE7358E263808959B7AA91",
  "token.fragment:homebrew.discordant_stars.unknown/bentor":
    "0CC3F8464EE917F7E3791997936A38B0",
  "token.attachment:homebrew.discordant_stars.encryption_key/bentor":
    "A1DD2E5046E8FB770C6511857B10FF23",
};

const technologies = [
  {
    localeName: "technology.name.broker_network",
    cardNsid:
      "card.technology.green.bentor:homebrew.discordant_stars/broker_network",
    type: "Green",
    requirements: { Green: 1 },
    source: "homebrew.discordant_stars",
    faction: "bentor",
  },
  {
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
    packageId: refPackageId,
    img: "discordant-stars/tiles/homeworld/tile_3227.jpg",
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
    unitAbility: "unit.flagship.wayfinder",
    triggerNsid:
      "card.technology.unit_upgrade.bentor:franken.discordant_stars/wayfinder",
    spaceCombat: { dice: 2, hit: 9 },
    bombardment: { dice: 1, hit: 9 },
    spaceCannon: { dice: 1, hit: 9 },
    antiFighterBarrage: { dice: 2, hit: 9 },
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.auctioneer",
    triggerNsid: "card.leader.mech.bentor:homebrew.discordant_stars/auctioneer",
  },
];

function getHitBonusOfToken(token, sheet) {
  const tokenPos = token.getPosition();
  const relativeTokenPos = sheet.worldPositionToLocal(tokenPos);
  const size = sheet.getSize();
  const inX = size.x / 2 > Math.abs(relativeTokenPos.x);
  const inY = size.y / 2 > Math.abs(relativeTokenPos.y);
  const inZ = 0.1 > Math.abs(relativeTokenPos.z); // directly above / below

  return inX && inY && inZ ? 1 : 0;
}

function countToHitBonus() {
  const tokenNsids = [
    "token.fragment:homebrew.discordant_stars.industrial/bentor",
    "token.fragment:homebrew.discordant_stars.hazardous/bentor",
    "token.fragment:homebrew.discordant_stars.cultural/bentor",
    "token.fragment:homebrew.discordant_stars.unknown/bentor",
  ];
  let factionSheet;
  let tokens = [];
  let bonus = 0;

  for (const obj of world.getAllObjects()) {
    if (obj.getContainer()) {
      continue; // inside a container
    }

    const nsid = world.TI4.ObjectNamespace.getNsid(obj);

    if (nsid === "sheet.faction:homebrew.discordant_stars/bentor") {
      factionSheet = obj;
    }

    if (tokenNsids.includes(nsid)) {
      tokens.push(obj);
    }
  }

  if (!factionSheet) {
    return bonus;
  }

  return tokens
    .map((token) => getHitBonusOfToken(token, factionSheet))
    .reduce((bonus, sum) => bonus + sum, 0);
}

const unitModifiers = [
  {
    // "+1 to SPACE COMBAT rolls for each fragment token",
    isCombat: true,
    localeName: "unit.flagship.wayfinder",
    localeDescription: "unit_modifier.desc.wayfinder",
    triggerUnitAbility: "unit.flagship.wayfinder",
    owner: "self",
    priority: "adjust",
    triggerIf: (auxData) => {
      return auxData.rollType === "spaceCombat" && auxData.self.has("flagship");
    },
    applyAll: (unitAttrsSet) => {
      const bonus = countToHitBonus();
      [
        "spaceCombat",
        "bombardment",
        "antiFighterBarrage",
        "spaceCannon",
      ].forEach((attr) => {
        const value = unitAttrsSet.get("flagship").raw[attr];
        if (value !== undefined) {
          unitAttrsSet.get("flagship").raw[attr].hit -= bonus;
        }
      });
    },
  },
];

const attachments = [
  {
    packageId: refPackageId,
    localeName: "attachment:homebrew.discordant_stars.encryption_key/bentor",
    cardNsid: "card.promissory.bentor:homebrew.discordant_stars/encryption_key",
    tokenNsid:
      "token.attachment:homebrew.discordant_stars.encryption_key/bentor",
    faceUp: {
      tech: ["blue", "green", "red", "yellow"],
      image: "discordant-stars/extras/bentor_encryption_key.png",
    },
  },
];

world.TI4.homebrew.inject({
  attachments,
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
