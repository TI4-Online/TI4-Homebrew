const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.kjalengard": "Kjalengard",
  "faction.full.kjalengard": "Berserks of Kjalengard",
  "planet.kjalengard": "Kjalengard",
  "planet.hulgade": "Hulgade",
  "technology.name.zhrgar_stimulants": "Zhrgar Stimulants",
  "unit.flagship.hulgades_hammer": "Hulgades Hammer",
  "unit.mech.skald": "Skald",
};


const factions = [{
  faction: "kjalengard",
  abilities: [
    "heroic_tales",
    "for_glory",
    "military_engineers",
  ],
  commodities: 3,
  home: 3226,
  leaders: {
    agents: ["merkismathr_asvand"],
    commanders: ["sdallari_tvungovot"],
    heroes: ["ygegnad_the_thunder"],
  },
  promissoryNotes: ["vassalage"],
  icon: "discordant-stars/faction-icons/kjalengard.png",
  source: "homebrew.discordant_stars",
  startingTech: [],
  startingUnits: {
    carrier: 2,
    destroyer: 1,
    fighter: 4,
    infantry: 4,
    pds: 1,
    space_dock: 1,
  },
  techs: ["zhrgar_stimulants"],
  units: ["hulgades_hammer", "star_dragon", "star_dragon_2", "skald"],
  packageId: refPackageId,
  unpackExtra: [{
    tokenNsid: "token.system:homebrew.discordant-stars.glory/kjalengard",
    tokenCount: 3,
  }],
}];


 const nsidToTemplateId = {
    "sheet.faction:homebrew.discordant_stars/kjalengard":
      "9E91315D42F16A77008BF0863B45A0AA",
    "tile.system:homebrew.discordant_stars/3226":
      "41FB56AE483B4411F63FA5A28123AFDB",
    "token.command:homebrew.discordant_stars/kjalengard":
      "9B7F8D3A49A762F7A7065D9D3D766B62",
    "token.control:homebrew.discordant_stars/kjalengard":
      "3FEC3FA14142C148EE230B8702888604",
    "token.system:homebrew.discordant-stars.glory/kjalengard":
      "A41107CD42ACCEED19FED989804E18E0",
};

const technologies = [{
    localeName: "technology.name.zhrgar_stimulants",
    cardNsid:
      "card.technology.green.kjalengard:homebrew.discordant_stars/zhrgar_stimulants",
    type: "Green",
    requirements: { Green: 1 },
    source: "homebrew.discordant_stars",
    faction: "kjalengard",
  }, {
    localeName: "unit.star_dragon_2",
    cardNsid: "card.technology.unit_upgrade.kjalengard:homebrew.discordant_stars/star_dragon_2",
    type: "unitUpgrade",
    requirements: { Blue: 2 },
    abbrev: " SD II",
    faction: "kjalengard",
    unitPosition: 0,
  },
];

const systems = [
  {
    tile: 3226,
    source: "homebrew.discordant_stars",
    home: true,
    planets: [
      { localeName: "planet.kjalengard", resources: 3, influence: 2 },
      { localeName: "planet.hulgade", resources: 1, influence: 0 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.hulgades_hammer",
    triggerNsid:
      "card.technology.unit_upgrade.kjalengard:franken.discordant_stars/hulgades_hammer",
    spaceCombat: { dice: 2, hit: 7 },
    capacity: 6,
  },
  {
    unit: "carrier",
    upgradeLevel: 1,
    localeName: "unit.carrier.star_dragon",
    triggerNsid: "card.technology.unit_upgrade.kjalengard:franken.discordant_stars/star_dragon",
    spaceCombat: { dice: 1, hit: 8 },
  },
  {
    unit: "carrier",
    upgradeLevel: 2,
    localeName: "unit.carrier.star_dragon_2",
    triggerNsid: "card.technology.unit_upgrade.kjalengard:homebrew.discordant_stars/star_dragon_2",
    spaceCombat: { dice: 1, hit: 7 },
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.skald",
    triggerNsid: "card.leader.mech.kjalengard:homebrew.discordant_stars/skald",
  },
];

const unitModifiers = [];

console.log("DISCORDANT STARS ADDING KJALENGRAD");
world.TI4.homebrew.inject({
  localeStrings,
  factions,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
