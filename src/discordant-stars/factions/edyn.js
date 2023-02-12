const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.edyn": "Edyn",
  "faction.full.edyn": "The Edyn Mandate",
  "planet.edyn": "Edyn",
  "planet.ekko": "Ekko",
  "planet.okke": "Okke",
  "technology.name.unity_algorithm": "unity_algorithm",
  "technology.name.encrypted_trade_hub": "encrypted_trade_hub",
  "unit.flagship.kaliburn": "Kaliburn",
  "unit.mech.runebearer": "runebearer",
  "unit_modifier.desc.kaliburn": "+1 to all COMBAT rolls for each law in game",
};


const factions = [{
  faction: "edyn",
  abilities: [
    "enlightenment",
    "grace",
    "royal_decree",
  ],
  commodities: 3,
  home: 3235,
  leaders: {
    agents: ["allant"],
    commanders: ["kadryn"],
    heroes: ["midir"],
  },
  promissoryNotes: ["edyn_diplomatic_support"],
  icon: "discordant-stars/faction-icons/edyn.png",
  source: "homebrew.discordant_stars",
  startingTech: ["psychoarchaeology", "dark_energy_tap", "scanlink_drone_network", "ai_development_algorithm"],
  startingUnits: {
    carrier: 1,
    destroyer: 2,
    fighter: 3,
    infantry: 3,
    pds: 1,
    space_dock: 1,
  },
  techs: ["unity_algorithm", "encrypted_trade_hub"],
  units: ["kaliburn", "runebearer"],
  packageId: refPackageId,
}];

 const nsidToTemplateId = {
    "sheet.faction:homebrew.discordant_stars/edyn":
      "AA54CD4F4C77171C2CCE0DA3B5690049",
    "tile.system:homebrew.discordant_stars/3235":
      "A6D5845C4AEB1F0729B7BBB1F2EE1AF3",
    "token.command:homebrew.discordant_stars/edyn":
      "6F815DD54DC0C07307F5B6AAA053139B",
    "token.control:homebrew.discordant_stars/edyn":
      "503464A847FB262835C7ACBC3EC40ADF",
};

const technologies = [{
  localeName: "technology.name.unity_algorithm",
  cardNsid:
      "card.technology.green.edyn:homebrew.discordant_stars/unity_algorithm",
  type: "Green",
  requirements: { Green: 3 },
  source: "homebrew.discordant_stars",
  faction: "cheiran",
}, {
  localeName: "technology.name.encrypted_trade_hub",
  cardNsid:
      "card.technology.yellow.edyn:homebrew.discordant_stars/encrypted_trade_hub",
  type: "Yellow",
  requirements: { Yellow: 2 },
  source: "homebrew.discordant_stars",
  faction: "cheiran",
},];

const systems = [
  {
    tile: 3235,
    source: "homebrew.discordant_stars",
    home: true,
    packageId: refPackageId,
    img: "discordant-stars/tiles/homeworld/tile_3235.jpg",
    planets: [
      { localeName: "planet.edyn", resources: 3, influence: 3 },
      { localeName: "planet.ekko", resources: 0, influence: 1 },
      { localeName: "planet.okke", resources: 0, influence: 1 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.kaliburn",
    triggerNsid:
      "card.technology.unit_upgrade.edyn:franken.discordant_stars/kaliburn",
    unitAbility: "unit.flagship.kaliburn",
    spaceCombat: { dice: 2, hit: 7 },
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.runebearer",
    triggerNsid: "card.leader.mech.edyn:homebrew.discordant_stars/runebearer",
  },
];

const unitModifiers = [
  {  // +1 to all COMBAT rolls for each law in game
    isCombat: true,
    localeName: "unit.flagship.klaiburn",
    localeDescription: "unit_modifier.desc.kaliburn",
    owner: "self",
    priority: "adjust",
    triggerUnitAbility: "unit.flagship.kaliburn",
    filter: (auxData) => {
      return (
        auxData.rollType === "spaceCombat"
      );
    },
    applyAll: (unitAttrsSet, auxData) => {
      /*const lawCount = world.getAllObjects().filter(obj => {
        const nsid = ObjectNamespace.getNsid(obj); return nsid.startsWith("card.agenda:") && obj.isFaceUp && obj.isFaceUp();
      }).length;
      //TODO check that no single discarded law / other cards are counted
      unitAttrsSet.get("flagship").raw.spaceCombat.hit -= lawCount;*/
    },
  },];

console.log("DISCORDANT STARS ADDING EDYN");
world.TI4.homebrew.inject({
  localeStrings,
  factions,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
