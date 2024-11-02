const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.vaylerian": "Vaylerian",
  "faction.full.vaylerian": "The Vaylerian Scourge",
  "planet.vaylar": "vaylar",
  "technology.name.scavenger_exos": "Scavenger Exos",
  "unit.cruiser.raider": "Raider",
  "unit.cruiser.raider_2": "Raider 2",
  "unit.flagship.lost_cause": "Lost Cause",
  "unit.mech.eclipse": "Eclipse",
  "unit_modifier.name.dyln_harthuul": "Dyln Harthuul",
  "unit_modifier.desc.dyln_harthuul":
    "+1 to the move value of each of your ships and the result of each of your ships’ combat rolls",
  "unit_modifier.name.yvin_korduul": "Yvin Korduul",
  "unit_modifier.desc.yvin_korduul":
    "+1 movement and +1 to SPACE COMBAT rolls during this activation",
};

const factions = [
  {
    faction: "vaylerian",
    abilities: ["cargo raiders", "scour", "raze"],
    commodities: 2,
    home: 3216,
    leaders: {
      agents: ["yvin_korduul"],
      commanders: ["pyndil_gonsuul"],
      heroes: ["dyln_harthuul"],
    },
    promissoryNotes: ["clans_favor"],
    icon: "discordant-stars/faction-icons/vaylerian.png",
    source: "homebrew.discordant_stars",
    startingTech: ["neural_motivator", "dark_energy_tap"],
    startingUnits: {
      carrier: 1,
      cruiser: 1,
      destroyer: 1,
      fighter: 3,
      infantry: 3,
      pds: 1,
      space_dock: 1,
    },
    techs: ["scavenger_exos"],
    units: ["lost_cause", "raider", "raider_2", "eclipse"],
    packageId: refPackageId,
  },
];

const factionAbilities = [
  {
    name: "Cargo Raiders",
    description:
      "During the first round of a space combat, you may prevent your opponent from declaring a retreat unless they spend 1 trade good.",
    source: "Vaylerian (DS)",
  },
  {
    name: "Scour",
    description:
      "Once per tactical action, after you gain control of a planet, you may discard 1 action card to ready that planet.",
    source: "Vaylerian (DS)",
  },
  {
    name: "Raze",
    description:
      "After 1 or more of another player's structures are destroyed on a planet that contains your units, you may replenish your commodities.",
    source: "Vaylerian (DS)",
  },
];

const nsidToTemplateId = {
  "sheet.faction:homebrew.discordant_stars/vaylerian":
    "643982334DDC9455D5AC7DBF7A0F1C4D",
  "tile.system:homebrew.discordant_stars/3216":
    "072DCEE6DDAB44E3BA26706A31EE0E45",
  "token.command:homebrew.discordant_stars/vaylerian":
    "68BCD71440443EEB3520649096F77592",
  "token.control:homebrew.discordant_stars/vaylerian":
    "24491709479ABDAC9F73BF804E6C8B5D",
};

const technologies = [
  {
    localeName: "technology.name.scavenger_exos",
    cardNsid:
      "card.technology.red.vaylerian:homebrew.discordant_stars/scavenger_exos",
    type: "Red",
    requirements: { Red: 1 },
    source: "homebrew.discordant_stars",
    faction: "vaylerian",
  },
  {
    localeName: "unit.cruiser.raider_2",
    cardNsid:
      "card.technology.unit_upgrade.vaylerian:homebrew.discordant_stars/raider_2",
    type: "unitUpgrade",
    requirements: { Red: 1, Yellow: 1, Green: 1 },
    abbrev: " XX II",
    faction: "vaylerian",
    unitPosition: 1,
  },
];

const systems = [
  {
    tile: 3216,
    source: "homebrew.discordant_stars",
    home: true,
    packageId: refPackageId,
    img: "discordant-stars/ui/tiles/tile_3216.png",
    planets: [{ localeName: "planet.vaylar", resources: 3, influence: 2 }],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.lost_cause",
    unitAbility: "unit.flagship.lost_cause",
    triggerNsid:
      "card.technology.unit_upgrade.vaylerian:franken.discordant_stars/lost_cause",
    spaceCombat: { dice: 2, hit: 7 },
    move: 2,
  },
  {
    unit: "cruiser",
    upgradeLevel: 1,
    localeName: "unit.cruiser.raider",
    triggerNsid:
      "card.technology.unit_upgrade.vaylerian:franken.discordant_stars/raider",
    capacity: 1,
  },
  {
    unit: "cruiser",
    upgradeLevel: 2,
    localeName: "unit.cruiser.raider_2",
    triggerNsid:
      "card.technology.unit_upgrade.vaylerian:homebrew.discordant_stars/raider_2",
    spaceCombat: { dice: 1, hit: 6 },
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.eclipse",
    triggerNsid: "card.leader.mech.vaylerian:homebrew.discordant_stars/eclipse",
  },
];

const unitModifiers = [
  {
    // "+1 movement and +1 to ships combat rolls,
    isCombat: true,
    localeName: "unit_modifier.name.yvin_korduul",
    localeDescription: "unit_modifier.desc.yvin_korduul",
    toggleActive: true,
    owner: "self",
    priority: "adjust",
    triggerNsids: [
      "card.leader.agent.vaylerian:homebrew.discordant_stars/yvin_korduul",
    ],
    filter: (auxData) => {
      return auxData.rollType === "spaceCombat";
    },
    applyEach: (unitAttrs, auxData) => {
      if (unitAttrs.raw.ship && unitAttrs.raw.spaceCombat) {
        unitAttrs.raw.spaceCombat.hit -= 1;
      }
      // TODO: combat: test
    },
  },
];

world.TI4.homebrew.inject({
  localeStrings,
  factions,
  factionAbilities,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
