const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.zelian": "Zelian",
  "faction.full.zelian": "The Zelian Purifier",
  "planet.zelian": "Zelian",
  "planet.gen": "Gen",
  "technology.name.shard_volley": "Shard Volley",
  "unit.flagship.world_cracker": "World Cracker",
  "unit.infantry.impactor": "Impactor",
  "unit.infantry.impactor_2": "Impactor 2",
  "unit.mech.collider": "Collider",
  "unit_modifier.desc.world_cracker":
    "+1 die for each asteroid field adjacent to this unit",
  "unit_modifier.name.zelian_b": "Zelian B",
  "unit_modifier.desc.zelian_b":
    "Dreadnoughts and War Suns without ANTI-FIGHTER BARRAGE gain ANTI-FIGHTER BARRAGE 5",
};

const factions = [
  {
    faction: "zelian",
    abilities: ["obsessive_designs", "biophobic", "paranoia"],
    commodities: 3,
    home: 3215,
    leaders: {
      agents: ["zelian_a"],
      commanders: ["zelian_b"],
      heroes: ["zelian_r"],
    },
    promissoryNotes: ["hyperkinetic_ordinance"],
    icon: "discordant-stars/faction-icons/zelian.png",
    source: "homebrew.discordant_stars",
    startingTech: ["antimass_deflectors", "ai_development_algorithm"],
    startingUnits: {
      dreadnought: 1,
      carrier: 1,
      destroyer: 1,
      fighter: 1,
      infantry: 5,
      space_dock: 1,
      pds: 1,
    },
    techs: ["shard_volley"],
    units: ["world_cracker", "impactor", "impactor_2", "collider"],
    unpackExtra: [
      {
        tokenNsid: "tile.system:homebrew.discordant_stars/3300",
      },
    ],
    packageId: refPackageId,
  },
];

const factionAbilities = [
  {
    name: "Obsessive Designs",
    description:
      "During the action phase, after you research a unit upgrade technology, you may use the PRODUCTION ability of 1 of your space docks in your home system to produce units of that type, reducing the combined cost of the produced units by 2.",
    source: "Zelian (DS)",
  },
  {
    name: "Biophobic",
    description:
      "During the agenda phase, the number of votes you cast is instead equal to the number of planets you exhaust to cast votes.",
    source: "Zelian (DS)",
  },
  {
    name: "Paranoia",
    description:
      "Game effects other than your command tokens cannot prevent you from activating, or moving ships into, your home system.",
    source: "Zelian (DS)",
  },
];

const factionUndraftable = [
  {
    name: "Zelian asteroid tile",
    nsid: "tile.system:homebrew.discordant_stars/3300",
    count: 1,
    triggerNsid: "card.leader.hero.zelian:homebrew.discordant_stars/zelian_r",
  },
];

const nsidToTemplateId = {
  "sheet.faction:homebrew.discordant_stars/zelian":
    "B9A41EE64A7B15AE07DC3BBA470789EB",
  "tile.system:homebrew.discordant_stars/3215":
    "0D10F9991C184DBA89140C252A343BD3",
  "token.command:homebrew.discordant_stars/zelian":
    "65B38E384BE799411C63FB844FBE9CB8",
  "token.control:homebrew.discordant_stars/zelian":
    "ABAF21054A0DE613B202F5BFDF01A960",
  "tile.system:homebrew.discordant_stars/3300":
    "CEFA50AF45066D2881E4589960E438A4",
};

const technologies = [
  {
    localeName: "technology.name.shard_volley",
    cardNsid:
      "card.technology.red.zelian:homebrew.discordant_stars/shard_volley",
    type: "Red",
    requirements: { Red: 1 },
    source: "homebrew.discordant_stars",
    faction: "zelian",
  },
  {
    localeName: "unit.infantry.impactor_2",
    cardNsid:
      "card.technology.unit_upgrade.zelian:homebrew.discordant_stars/impactor_2",
    type: "unitUpgrade",
    requirements: { Green: 2 },
    abbrev: " IM II",
    faction: "zelian",
    unitPosition: 10,
  },
];

const systems = [
  {
    tile: 3215,
    source: "homebrew.discordant_stars",
    home: true,
    packageId: refPackageId,
    img: "discordant-stars/ui/tiles/tile_3215.png",
    anomalies: ["asteroid field"],
    planets: [
      { localeName: "planet.gen", resources: 2, influence: 0 },
      { localeName: "planet.zelian", resources: 3, influence: 3 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.world_cracker",
    unitAbility: "unit.flagship.world_cracker",
    triggerNsid:
      "card.technology.unit_upgrade.zelian:franken.discordant_stars/world_cracker",
    spaceCombat: { dice: 1, hit: 5 },
    antiFighterBarrage: { dice: 1, hit: 5 },
    bombardment: { dice: 1, hit: 5 },
  },
  {
    unit: "infantry",
    upgradeLevel: 1,
    localeName: "unit.infantry.impactor",
    triggerNsid:
      "card.technology.unit_upgrade.zelian:franken.discordant_stars/impactor",
    bombardment: { dice: 1, hit: 9 },
  },
  {
    unit: "infantry",
    upgradeLevel: 2,
    localeName: "unit.infantry.impactor_2",
    triggerNsid:
      "card.technology.unit_upgrade.zelian:homebrew.discordant_stars/impactor_2",
    bombardment: { dice: 1, hit: 8 },
    groundCombat: { hit: 7 },
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.collider",
    triggerNsid: "card.leader.mech.zelian:homebrew.discordant_stars/collider",
  },
];

const unitModifiers = [
  {
    // "space combat and abilities roll 1 additional die for each adjacent asteroid field",
    isCombat: true,
    localeName: "unit.flagship.world_cracker",
    localeDescription: "unit_modifier.desc.world_cracker",
    owner: "self",
    priority: "adjust",
    triggerUnitAbility: "unit.flagship.world_cracker",
    filter: (auxData) => {
      return auxData.self.has("flagship");
    },
    applyAll: (unitAttrsSet, auxData) => {
      const adjacentTileNsids = world.TI4.Adjacency.getAdjacent(auxData.hex)
        .map((hex) => world.TI4.Hex.toPosition(hex))
        .map((pos) => world.TI4.getSystemTileObjectByPosition(pos))
        .filter((tile) => tile) // filter non-existing tiles (positions outside of the game setup)
        .map((tile) => world.TI4.ObjectNamespace.getNsid(tile));

      const adjacentSystems = world.TI4.getAllSystems().filter((system) =>
        adjacentTileNsids.includes(system.tileNsid)
      );

      const asteroidFields = adjacentSystems.filter((system) => {
        return system.anomalies.includes("asteroid field");
      });

      unitAttrsSet.get("flagship").raw.antiFighterBarrage.dice +=
        asteroidFields.length;
      unitAttrsSet.get("flagship").raw.bombardment.dice +=
        asteroidFields.length;
      unitAttrsSet.get("flagship").raw.spaceCombat.dice +=
        asteroidFields.length;
    },
  },
  {
    // "Dreadnoughts and War Suns without ANTI-FIGHTER BARRAGE gain ANTI-FIGHTER BARRAGE 5",
    isCombat: true,
    localeName: "unit_modifier.name.zelian_b",
    localeDescription: "unit_modifier.desc.zelian_b",
    owner: "self",
    priority: "adjust",
    triggerNsids: [
      "card.leader.commander.zelian:homebrew.discordant_stars/zelian_b",
      //"card.alliance:homebrew/zelian_b",
    ],
    filter: (auxData) => {
      return auxData.rollType === "antiFighterBarrage";
    },
    applyAll: (unitAttrsSet, auxData) => {
      if (
        unitAttrsSet.get("dreadnought") &&
        !unitAttrsSet.get("dreadnought").raw.antiFighterBarrage
      ) {
        unitAttrsSet.get("dreadnought").raw.antiFighterBarrage = {
          dice: 1,
          hit: 5,
        };
      }
      if (
        unitAttrsSet.get("war_sun") &&
        !unitAttrsSet.get("war_sun").raw.antiFighterBarrage
      ) {
        unitAttrsSet.get("war_sun").raw.antiFighterBarrage = {
          dice: 1,
          hit: 5,
        };
      }
    },
  },
];

// TODO: implement biophobic voting count

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
