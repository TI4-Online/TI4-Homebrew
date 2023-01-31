const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.lizho": "Li-Zho",
  "faction.full.lizho": "The Li-Zho Dynasty",
  "planet.kyr": "Kyr",
  "planet.pax": "Pax",
  "planet.vess": "Vess",
  "technology.name.wraith_engine": "Wraith Engine",
  "unit.flagship.silence_of_stars": "Silence of Stars",
  "unit.mech.oro-zhin_elite": "Oro-Zhin Elite",
};


const factions = [{
  faction: "lizho",
  abilities: [
      "cunning",
      "subterfuge",
  ],
  commodities: 3,
  home: 3203,
  leaders: {
      agents: ["vasra_ivo"],
      commanders: ["dume_tathu"],
      heroes: ["khazrin_lizho"],
  },
  promissoryNotes: ["trusted_counselor"],
  icon: "discordant-stars/faction-icons/lizho.jpg",
  source: "homebrew.discordant_stars",
  startingTech: ["psychoarchaeology", "antimass_deflectors"],
  startingUnits: {
      carrier: 2,
      destroyer: 1,
      fighter: 3,
      infantry: 4,
      pds: 1,
      space_dock: 1,
  },
  techs: ["wraith_engine"],
  units: [
      "silence_of_stars",
      "heavy_bomber",
      "heavy_bomber_2",
      "orozhin_elite",
  ],
  unpackExtra: [
      {
        // This is a deck of cards.
        tokenNsid: "card.lizho:homebrew.discordant_stars/0",
      },
  ],
  packageId: refPackageId,
}];

 const nsidToTemplateId = {
    "sheet.faction:homebrew.discordant_stars/lizho":
      "F101B69947B1CF5A2D038F8C111E261F",
    "tile.system:homebrew.discordant_stars/3203":
      "21373514204A409F8A834E1FDCC19A3C",
    "token.command:homebrew.discordant_stars/lizho":
      "FF9BEF37481DD4AE050D189D54F810F6",
    "token.control:homebrew.discordant_stars/lizho":
      "1A9664A347AF140D90EA29B3ECEEBA00",
    "card.lizho:homebrew.discordant_stars/0":
      "4171B8E74DDA24EEF67EA1B7E3CBB132",
};

const technologies = [{
    localeName: "technology.name.wraith_engine",
    cardNsid:
      "card.technology.blue.lizho:homebrew.discordant_stars/wraith_engine",
    type: "Blue",
    requirements: { Blue: 2 },
    source: "homebrew.discordant_stars",
    faction: "lizho",
  },
  {
    localeName: "unit.heavy_bomber_2",
    cardNsid: "card.technology.unit_upgrade.lizho:homebrew.discordant_stars/heavy_bomber_2",
    type: "unitUpgrade",
    requirements: { Blue: 1, Green: 1 },
    abbrev: " HB II",
    faction: "lizho",
    unitPosition: 0,
  },
];

const systems = [
  {
    tile: 3203,
    source: "homebrew.discordant_stars",
    home: true,
    planets: [
      { localeName: "planet.kyr", resources: 2, influence: 0 },
      { localeName: "planet.pax", resources: 1, influence: 2 },
      { localeName: "planet.vess", resources: 0, influence: 1 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.silence_of_stars",
    triggerNsid:
      "card.technology.unit_upgrade.lizho:franken.discordant_stars/silence_of_stars",
    spaceCombat: { dice: 2, hit: 5 },
    capacity: 6,
  },
  {
    unit: "fighter",
    upgradeLevel: 1,
    localeName: "unit.fighter.heavy_bomber",
    triggerNsid: "card.technology.unit_upgrade.lizho:franken.discordant_stars/heavy_bomber",
    bombardment: { dice: 1, hit: 9 },
  },
  {
    unit: "fighter",
    upgradeLevel: 2,
    localeName: "unit.fighter.heavy_bomber_2",
    triggerNsid: "card.technology.unit_upgrade.lizho:homebrew.discordant_stars/heavy_bomber_2",
    bombardment: { dice: 1, hit: 8 },
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.orozhin_elite",
    triggerNsid: "card.leader.mech.lizho:homebrew.discordant_stars/orozhin_elite",
  },
];

const unitModifiers = [];

console.log("DISCORDANT STARS ADDING LIZHO");
world.TI4.homebrew.inject({
  localeStrings,
  factions,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
