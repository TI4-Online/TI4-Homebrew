const { world, refPackageId } = require("@tabletop-playground/api");
//const unitModifiers = require("./unit-modifiers.data");

const localeStrings = {
  "attachment:homebrew.discordant_stars.arcane_shield_emitter":
    "Arcane Shield Emitter",
  "attachment:homebrew.discordant_stars.council_preserve": "Council Preserve",
  "attachment:homebrew.discordant_stars.orbital_foundries": "Orbital Foundries",
  "planet.silence": "Silence",
  "planet.echo": "Echo",
  "planet.tarrock": "Tarrock",
  "planet.prism": "Prism",
  "planet.troac": "Troac",
  "planet.eitr_v": "Eitr V",
  "planet.vioss": "Vioss",
  "planet.fakrenn": "Fakrenn",
  "planet.san-vit": "San-Vit",
  "planet.lodran": "Lodran",
  "planet.dorvok": "Dorvok",
  "planet.derbrae": "Derbrae",
  "planet.rysaa": "Rysaa",
  "planet.moln": "Moln",
  "planet.salin": "Salin",
  "planet.gwiyun": "Gwiyun",
  "planet.inan": "Inan",
  "planet.swog": "Swog",
  "planet.detic": "Detic",
  "planet.lliot": "Lliot",
  "planet.larred": "Larred",
  "planet.qaak": "Qaak",
  "planet.nairb": "Nairb",
  "planet.mandle": "Mandle",
  "planet.sierpen": "Sierpen",
  "planet.regnem": "Regnem",
  "planet.domna": "Domna",
};

const unitModifiers = [
  {
    // "+1 to all COMBAT rolls",
    isCombat: true,
    localeName: "unit_modifier.name.morale_boost",
    localeDescription: "unit_modifier.desc.morale_boost",
    owner: "self",
    priority: "adjust",
    triggerNsid: "card.action:homebrew.discordant_stars/morale_boost.5",
    filter: (auxData) => {
      return (
        auxData.rollType === "spaceCombat" ||
        auxData.rollType === "groundCombat"
      );
    },
    applyEach: (unitAttrs, auxData) => {
      if (unitAttrs.raw.spaceCombat) {
        unitAttrs.raw.spaceCombat.hit -= 1;
      }
      if (unitAttrs.raw.groundCombat) {
        unitAttrs.raw.groundCombat.hit -= 1;
      }
    },
  },
];

world.TI4.homebrew.inject({
  nsidToTemplateId: {
    "card.action:homebrew.discordant_stars.action/0":
      "9FEA923642A7BC0D7093ACA986B6164A",
    "card.exploration.cultural:homebrew.discordant_stars.exploration/0":
      "B1A7D9CC46671B10658745BA9580D030",
    "card.exploration.frontier:homebrew.discordant_stars.exploration/0":
      "3C70A03F407AF958D8486F992B0EAE8B",
    "card.exploration.hazardous:homebrew.discordant_stars.exploration/0":
      "BA20C8D8490486144B4A99B526742C10",
    "card.exploration.industrial:homebrew.discordant_stars.exploration/0":
      "AF84D07241EEED1C6D27D1AE0872A52A",
    "card.legendary_planet:homebrew.discordant_stars/0":
      "3D9625C44B359939E1AD9995AABF8389",
    "card.planet:homebrew/8": "B8E0ECFF4D1D42AC510634AF2B56049A",
    "card.relic:homebrew.discordant_stars.relic/0":
      "F6CF8B0C4DCCAE1075F444953F3FFD8F",
    "token.attachment.exploration:homebrew.discordant_stars/arcane_shield_emitter":
      "429EDA1C4F443B9D8C7DCBAF8601BD65",
    "token.attachment.exploration:homebrew.discordant_stars/council_preserve":
      "324FA3EF4F3C2A4FB8FFD8B7D5ED88CD",
    "token.attachment.exploration:homebrew.discordant_stars/orbital_foundries":
      "D70BA21941A07EB145ECF085AF6FB86F",
    "tile.system:homebrew.discordant_stars/4237":
      "096459304673A968D6D31484B82FDDB4",
    "tile.system:homebrew.discordant_stars/4238":
      "13AAE9E34BDFF26E3F6B3BA72DA278AB",
    "tile.system:homebrew.discordant_stars/4239":
      "768520554B2B1349676E94BA2544EC9F",
    "tile.system:homebrew.discordant_stars/4240":
      "2D1EE9D248B8A2357181B78F90B12442",
    "tile.system:homebrew.discordant_stars/4241":
      "1FF42D1345A2A25D77005A9DCD810D67",
    "tile.system:homebrew.discordant_stars/4242":
      "EDE51E6740C44105C1606FA8C6EBFEEA",
    "tile.system:homebrew.discordant_stars/4243":
      "7C3E6ADB46B7FD5E80D7BC8A04043DF9",
    "tile.system:homebrew.discordant_stars/4244":
      "F54E30204F5022AEBBBE2E84FB25F695",
    "tile.system:homebrew.discordant_stars/4245":
      "ED53CB964ABC597E344DC48FBFC77691",
    "tile.system:homebrew.discordant_stars/4246":
      "A8EB6E234CD5C716CF5E6EA8E680A8C2",
    "tile.system:homebrew.discordant_stars/4247":
      "54079E2243D0434AF624C48296E2F1F5",
    "tile.system:homebrew.discordant_stars/4248":
      "F5FE4C2D4200397AC5EE23B1D5BD74F8",
    "tile.system:homebrew.discordant_stars/4249":
      "15690E7F499B96E5C452C88D397257B8",
    "tile.system:homebrew.discordant_stars/4250":
      "C3AE1D684280E69B4A09EF90BC761C04",
    "tile.system:homebrew.discordant_stars/4251":
      "557271FA4A57A82CE54C619E120F089B",
    "tile.system:homebrew.discordant_stars/4252":
      "8F46E1E64CBC8ECB92B139AF4D9DA194",
    "tile.system:homebrew.discordant_stars/4253":
      "019BB4D7453FA7F55D4E54BC82AAE84F",
    "tile.system:homebrew.discordant_stars/4254":
      "2C2CAAEA4DE5735D30079689B77D00F5",
    "tile.system:homebrew.discordant_stars/4255":
      "9C34C2004E2A17FB1F819EAC761E233F",
    "tile.system:homebrew.discordant_stars/4256":
      "B5C5F5574449E7F53274C4B7B2A5A79D",
    "tile.system:homebrew.discordant_stars/4257":
      "D4342AB8410ED172FDB8BABA01A0FA61",
    "tile.system:homebrew.discordant_stars/4258":
      "1621B1994BBEA2C7A387248DFA5279A1",
    "tile.system:homebrew.discordant_stars/4259":
      "C50802E1430BCD5D44ED83A91D5F43B9",
    "tile.system:homebrew.discordant_stars/4260":
      "58C41A6F4CA9961427C16B995A58D0E2",
  },

  systems: [
    {
      tile: 4237,
      source: "homebrew.discordant_stars",
      packageId: refPackageId,
      img: "discordant-stars/ui/tiles/tile_4237.png",
      planets: [
        {
          localeName: "planet.silence",
          resources: 2,
          influence: 2,
          trait: ["industrial"],
          legendary: true,
          legendaryCard:
            "card.legendary_planet:homebrew.discordant_stars/legendary_silence_planet",
        },
      ],
    },
    {
      tile: 4238,
      source: "homebrew.discordant_stars",
      packageId: refPackageId,
      img: "discordant-stars/ui/tiles/tile_4238.png",
      planets: [
        {
          localeName: "planet.echo",
          resources: 1,
          influence: 2,
          trait: ["hazardous"],
          legendary: true,
          legendaryCard:
            "card.legendary_planet:homebrew.discordant_stars/legendary_echo_planet",
        },
      ],
    },
    {
      tile: 4239,
      source: "homebrew.discordant_stars",
      packageId: refPackageId,
      img: "discordant-stars/ui/tiles/tile_4239.png",
      planets: [
        {
          localeName: "planet.tarrock",
          resources: 3,
          influence: 0,
          trait: ["industrial"],
          legendary: true,
          legendaryCard:
            "card.legendary_planet:homebrew.discordant_stars/legendary_tarrock_planet",
        },
      ],
    },
    {
      tile: 4240,
      source: "homebrew.discordant_stars",
      packageId: refPackageId,
      img: "discordant-stars/ui/tiles/tile_4240.png",
      planets: [
        {
          localeName: "planet.prism",
          resources: 0,
          influence: 3,
          trait: ["industrial"],
          legendary: true,
          legendaryCard:
            "card.legendary_planet:homebrew.discordant_stars/legendary_prism_planet",
        },
      ],
    },
    {
      tile: 4241,
      source: "homebrew.discordant_stars",
      packageId: refPackageId,
      img: "discordant-stars/ui/tiles/tile_4241.png",
      planets: [
        {
          localeName: "planet.troac",
          resources: 0,
          influence: 4,
          trait: ["cultural"],
        },
      ],
    },
    {
      tile: 4242,
      source: "homebrew.discordant_stars",
      packageId: refPackageId,
      img: "discordant-stars/ui/tiles/tile_4242.png",
      planets: [
        {
          localeName: "planet.eitr_v",
          resources: 4,
          influence: 0,
          trait: ["hazardous"],
        },
      ],
    },
    {
      tile: 4243,
      source: "homebrew.discordant_stars",
      packageId: refPackageId,
      img: "discordant-stars/ui/tiles/tile_4243.png",
      planets: [
        {
          localeName: "planet.vioss",
          resources: 3,
          influence: 3,
          trait: ["cultural"],
        },
      ],
    },
    {
      tile: 4244,
      source: "homebrew.discordant_stars",
      packageId: refPackageId,
      img: "discordant-stars/ui/tiles/tile_4244.png",
      planets: [
        {
          localeName: "planet.fakrenn",
          resources: 2,
          influence: 2,
          trait: ["hazardous"],
        },
      ],
      wormholes: ["beta"],
    },
    {
      tile: 4245,
      source: "homebrew.discordant_stars",
      packageId: refPackageId,
      img: "discordant-stars/ui/tiles/tile_4245.png",
      planets: [
        {
          localeName: "planet.san-vit",
          resources: 3,
          influence: 1,
          trait: ["cultural"],
        },
        {
          localeName: "planet.lodran",
          resources: 0,
          influence: 2,
          trait: ["hazardous"],
        },
      ],
    },
    {
      tile: 4246,
      source: "homebrew.discordant_stars",
      packageId: refPackageId,
      img: "discordant-stars/ui/tiles/tile_4246.png",
      planets: [
        {
          localeName: "planet.dorvok",
          resources: 1,
          influence: 2,
          trait: ["industrial"],
          tech: ["red"],
        },
        {
          localeName: "planet.derbrae",
          resources: 2,
          influence: 3,
          trait: ["cultural"],
        },
      ],
    },
    {
      tile: 4247,
      source: "homebrew.discordant_stars",
      packageId: refPackageId,
      img: "discordant-stars/ui/tiles/tile_4247.png",
      planets: [
        {
          localeName: "planet.rysaa",
          resources: 1,
          influence: 2,
          trait: ["industrial"],
          tech: ["blue"],
        },
        {
          localeName: "planet.moln",
          resources: 2,
          influence: 0,
          trait: ["hazardous"],
          tech: ["green"],
        },
      ],
    },
    {
      tile: 4248,
      source: "homebrew.discordant_stars",
      packageId: refPackageId,
      img: "discordant-stars/ui/tiles/tile_4248.png",
      planets: [
        {
          localeName: "planet.salin",
          resources: 1,
          influence: 2,
          trait: ["hazardous"],
        },
        {
          localeName: "planet.gwiyun",
          resources: 2,
          influence: 2,
          trait: ["hazardous"],
        },
      ],
    },
    {
      tile: 4249,
      source: "homebrew.discordant_stars",
      packageId: refPackageId,
      img: "discordant-stars/ui/tiles/tile_4249.png",
      planets: [
        {
          localeName: "planet.inan",
          resources: 1,
          influence: 2,
          trait: ["industrial"],
        },
        {
          localeName: "planet.swog",
          resources: 1,
          influence: 0,
          trait: ["industrial"],
        },
      ],
    },
    {
      tile: 4250,
      source: "homebrew.discordant_stars",
      packageId: refPackageId,
      img: "discordant-stars/ui/tiles/tile_4250.png",
      planets: [
        {
          localeName: "planet.detic",
          resources: 3,
          influence: 2,
          trait: ["cultural"],
        },
        {
          localeName: "planet.lliot",
          resources: 0,
          influence: 1,
          trait: ["cultural"],
        },
      ],
    },
    {
      tile: 4251,
      source: "homebrew.discordant_stars",
      packageId: refPackageId,
      img: "discordant-stars/ui/tiles/tile_4251.png",
      planets: [
        {
          localeName: "planet.larred",
          resources: 1,
          influence: 1,
          trait: ["industrial"],
        },
        {
          localeName: "planet.qaak",
          resources: 1,
          influence: 1,
          trait: ["cultural"],
        },
        {
          localeName: "planet.nairb",
          resources: 1,
          influence: 1,
          trait: ["hazardous"],
        },
      ],
    },
    {
      tile: 4252,
      source: "homebrew.discordant_stars",
      packageId: refPackageId,
      img: "discordant-stars/ui/tiles/tile_4252.png",
      planets: [
        {
          localeName: "planet.mandle",
          resources: 1,
          influence: 1,
          trait: ["industrial"],
        },
        {
          localeName: "planet.sierpen",
          resources: 2,
          influence: 0,
          trait: ["cultural"],
        },
        {
          localeName: "planet.regnem",
          resources: 0,
          influence: 2,
          trait: ["hazardous"],
        },
      ],
    },
    {
      tile: 4253,
      source: "homebrew.discordant_stars",
      packageId: refPackageId,
      img: "discordant-stars/ui/tiles/tile_4253.png",
      planets: [
        {
          localeName: "planet.domna",
          resources: 2,
          influence: 1,
          trait: ["hazardous"],
          legendary: true,
          legendaryCard:
            "card.legendary_planet:homebrew.discordant_stars/legendary_domna_planet",
        },
      ],
      anomalies: ["nebula"],
    },
    {
      tile: 4254,
      source: "homebrew.discordant_stars",
      packageId: refPackageId,
      img: "discordant-stars/ui/tiles/tile_4254.png",
    },
    {
      tile: 4255,
      source: "homebrew.discordant_stars",
      packageId: refPackageId,
      img: "discordant-stars/ui/tiles/tile_4255.png",
    },
    {
      tile: 4256,
      source: "homebrew.discordant_stars",
      packageId: refPackageId,
      img: "discordant-stars/ui/tiles/tile_4256.png",
      wormholes: ["beta"],
      anomalies: ["nebula"],
    },
    {
      tile: 4257,
      source: "homebrew.discordant_stars",
      packageId: refPackageId,
      img: "discordant-stars/ui/tiles/tile_4257.png",
      anomalies: ["asteroid field", "nebula"],
    },
    {
      tile: 4258,
      source: "homebrew.discordant_stars",
      packageId: refPackageId,
      img: "discordant-stars/ui/tiles/tile_4258.png",
      anomalies: ["gravity rift", "asteroid field"],
    },
    {
      tile: 4259,
      source: "homebrew.discordant_stars",
      packageId: refPackageId,
      img: "discordant-stars/ui/tiles/tile_4259.png",
      wormholes: ["gamma"],
      anomalies: ["gravity rift"],
    },
    {
      tile: 4260,
      source: "homebrew.discordant_stars",
      packageId: refPackageId,
      img: "discordant-stars/ui/tiles/tile_4260.png",
      wormholes: ["alpha", "beta"],
      anomalies: ["supernova"],
    },
  ],

  attachments: [
    {
      packageId: refPackageId,
      localeName: "attachment:homebrew.discordant_stars.arcane_shield_emitter",
      cardNsid:
        "card.exploration.hazardous:homebrew.discordant_stars/arcane_shield_emitter",
      tokenNsid:
        "token.attachment.exploration:homebrew.discordant_stars/arcane_shield_emitter",
      faceUp: {
        image:
          "discordant-stars/tokens/exploration/ArcaneShieldEmitterToken.png",
      },
    },
    {
      packageId: refPackageId,
      localeName: "attachment:homebrew.discordant_stars.council_preserve",
      cardNsid:
        "card.exploration.cultural:homebrew.discordant_stars/council_preserve",
      tokenNsid:
        "token.attachment.exploration:homebrew.discordant_stars/council_preserve",
      faceUp: {
        //somehow increase votes without influence?
        influence: 3,
        image: "discordant-stars/tokens/exploration/CouncilPreserveToken.png",
      },
    },
    {
      packageId: refPackageId,
      localeName: "attachment:homebrew.discordant_stars.orbital_foundries",
      cardNsid:
        "card.exploration.industrial:homebrew.discordant_stars/orbital_foundries",
      tokenNsid:
        "token.attachment.exploration:homebrew.discordant_stars/orbital_foundries",
      faceUp: {
        image: "discordant-stars/tokens/exploration/OrbitalFoundriesToken.png",
      },
    },
  ],

  localeStrings,
  unitModifiers,
});

if (!world.__DSPlusPlusLoaded) {
  world.TI4.homebrew.resetOnTableDecks();
  world.TI4.homebrew.resetSystemTilesBox();
  console.log("HOMEBREW ADDING DISCORDANT STARS PLUS PLUS");
  world.__DSPlusPlusLoaded = true;
}
