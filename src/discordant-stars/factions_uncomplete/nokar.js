const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.nokar": "FACT",
  "faction.full.nokar": "FACTION",
  "planet.zarr": "Zarr",
  "planet.nokk": "Nokk",
  "technology.name.local_contracts": "Local Contracts",
  "unit.flagship.annah_regia": "Annah Regia",
  "unit.mech.freelance_outfit": "Freelance Outfit",
};


const factions = [{
  faction: "nokar",
  abilities: [
    "hired_guns",
    "private_fleet",
    "desperados",
  ],
  commodities: 4,
  home: 3228,
  leaders: {
    agents: ["sal_sparrow"],
    commanders: ["jack_hallard"],
    heroes: ["starsails"],
  },
  promissoryNotes: ["nokar_navigator"],
  //icon: "discordant-stars/faction-icons/nokar.png",
  source: "discordant_stars",
  startingTech: ["pscyhoarchaeology", "dark_energy_tap", "ai_development_algorithm"],
  startingUnits: {
    carrier: 2,
    destroyer: 1,
    fighter: 2,
    infantry: 4,
    pds: 1,
    space_dock: 1,
  },
  techs: ["local_contracts"],
  units: ["annah_regia", "sabre", "sabre_2", "freelance_outfit"],
  packageId: refPackageId,
  unpackExtra: [
    {
      tokenNsid: "token.attachment:homebrew.discordant-stars.destroyer/nokar",
      tokenCount: 4,
    },
  ],
}];

 const nsidToTemplateId = {
    "sheet.faction:homebrew.discordant_stars/nokar":
      "XXXXXXX",
    "tile.system:homebrew.discordant_stars/3228":
      "XXXXXXX",
    "token.command:homebrew.discordant_stars/nokar":
      "XXXXXXX",
    "token.control:homebrew.discordant_stars/nokar":
      "XXXXXXX",
   "token.attachment:homebrew.discordant-stars.destroyer/nokar":
       "XXXXXXX",
};

const technologies = [{
    localeName: "technology.name.local_contracts",
    cardNsid:
      "card.technology.COLOR.nokar:homebrew.discordant_stars/local_contracts",
    type: "Red",
    requirements: { Red: 2 },
    source: "homebrew.discordant_stars",
    faction: "nokar",
  }, {
    localeName: "unit.UNITID",
    cardNsid: "card.technology.unit_upgrade.nokar:homebrew.discordant_stars/UNITID",
    type: "unitUpgrade",
    requirements: { Yellow: 2 },
    abbrev: " XX II",
    faction: "nokar",
    unitPosition: 0,
  },
];

const systems = [
  {
    tile: 3228,
    source: "homebrew.discordant_stars",
    home: true,
    planets: [
      { localeName: "planet.zarr", resources: 2, influence: 1 },
      { localeName: "planet.nokk", resources: 1, influence: 1 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.annah_regia",
    triggerNsid:
      "card.technology.unit_upgrade.nokar:franken.discordant_stars/annah_regia",
    spaceCombat: { dice: 2, hit: 9 },
    capacity: 6,
  },
  {
    unit: "destroyer",
    upgradeLevel: 1,
    localeName: "unit.destroyer.sabre",
    triggerNsid: "card.technology.unit_upgrade.nokar:franken.discordant_stars/sabre",
    spaceCombat: { dice: 1, hit: 8 },
  },
  {
    unit: "destroyer",
    upgradeLevel: 2,
    localeName: "unit.destroyer.sabre_2",
    triggerNsid: "card.technology.unit_upgrade.nokar:homebrew.discordant_stars/sabre_2",
    spaceCombat: { dice: 1, hit: 7 },
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.freelance_outfit",
    triggerNsid: "card.leader.mech.nokar:homebrew.discordant_stars/freelance_outfit",
  },
];

const unitModifiers = [];

console.log("DISCORDANT STARS ADDING NOKAR");
world.TI4.homebrew.inject({
  localeStrings,
  factions,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
