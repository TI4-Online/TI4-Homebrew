const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.kortali": "Kortali",
  "faction.full.kortali": "The Kortali Tribunal",
  "planet.ogdun": "ogdun",
  "planet.brthkul": "brthkul",
  "technology.name.tempest_drive": "Tempest Drive",
  "technology.name.deliverance_engine": "Deliverance Engine",
  "unit.flagship.magistrate": "Magistrate",
  "unit.mech.ruthless": "Ruthless",
};


const factions = [{
  faction: "kortali",
  abilities: [
      "fervor",
      "ruthless",
  ],
  commodities: 3,
  home: 3204,
  leaders: {
      agents: ["queen_lucreia"],
      commanders: ["queen_lorena"],
      heroes: ["queen_nadalia"],
  },
  promissoryNotes: ["blessing_of_the_queens"],
  //icon: "discordant-stars/faction-icons/kortali.png",
  source: "homebrew.discordant_stars",
  startingTech: ["psychoarchaeology", "plasma_scoring"],
  startingUnits: {
      carrier: 2,
      cruiser: 1,
      fighter: 2,
      infantry: 4,
      pds: 1,
      space_dock: 1,
  },
  techs: ["tempest_drive", "deliverance_engine"],
  units: [
      "magistrate",
      "justicar",
  ],
  packageId: refPackageId,
}];

 const nsidToTemplateId = {
    "sheet.faction:homebrew.discordant_stars/kortali":
      "D0DDF6FE4BB58FDB68A083823F8D2505",
    "tile.system:homebrew.discordant_stars/3204":
      "9AFB10D005A240F7B09FE5D30CA9FBA0",
    "token.command:homebrew.discordant_stars/kortali":
      "AFBE737E4A57A8D05DFD6D81D72AC6B7",
    "token.control:homebrew.discordant_stars/kortali":
      "C82737C4447694336529CCAF3DCDCE48",
};

const technologies = [{
  localeName: "technology.name.tempest_drive",
  cardNsid:
    "card.technology.green.kortali:homebrew.discordant_stars/tempest_drive",
  type: "Green",
  requirements: { Green: 2 },
  source: "homebrew.discordant_stars",
  faction: "kortali",
},{
  localeName: "technology.name.deliverance_engine",
  cardNsid:
    "card.technology.red.kortali:homebrew.discordant_stars/deliverance_engine",
  type: "Red",
  requirements: { Red: 2 },
  source: "homebrew.discordant_stars",
  faction: "kortali",
},
];

const systems = [
  {
    tile: 3204,
    source: "homebrew.discordant_stars",
    home: true,
    planets: [
      { localeName: "planet.ogdun", resources: 2, influence: 0 },
      { localeName: "planet.brthkul", resources: 1, influence: 3 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.magistrate",
    triggerNsid:
      "card.technology.unit_upgrade.kortali:franken.discordant_stars/magistrate",
    spaceCombat: { dice: 2, hit: 5 },
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.justicar",
    triggerNsid: "card.leader.mech.kortali:homebrew.discordant_stars/justicar",
  },
];

const unitModifiers = [];

console.log("DISCORDANT STARS ADDING KORTALI");
world.TI4.homebrew.inject({
  localeStrings,
  factions,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
