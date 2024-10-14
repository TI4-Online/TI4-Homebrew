const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.celdauri": "Celdauri",
  "faction.full.celdauri": "The Celdauri Trade Company",
  "planet.louk": "Louk",
  "planet.auldane": "Auldane",
  "technology.name.emergency_mobilization": "Emergency Mobilization Protocols",
  "unit.flagship.supremacy": "Supremacy",
  "unit.mech.minuteman": "Minuteman",
  "unit.space_dock.trade_port": "Trade Port",
  "unit.space_dock.trade_port_2": "Trade Port 2",
  "unit_modifier.name.projection_of_power": "Projection of Power",
  "unit_modifier.desc.projection_of_power":
    "NOT YET IMPLEMENTED!!! At the start of space combat in a system that is adjacent to or contains 1 or more of your space docks, choose up to 1 ship that gains ANTI-FIGHTER-BARRAGE 6(x2) until the end of that combat",
};

const factions = [
  {
    faction: "celdauri",
    abilities: ["projection_of_power", "industrialists"],
    commodities: 4,
    home: 3219,
    leaders: {
      agents: ["george_nobin"],
      commanders: ["henry_storcher"],
      heroes: ["titus_flavius"],
    },
    promissoryNotes: ["trade_alliance"],
    packageId: refPackageId,
    icon: "discordant-stars/faction-icons/celdauri.png",
    source: "homebrew.discordant_stars",
    startingTechChoice: "celdauri",
    startingTechChoices: [
      "antimass_deflectors",
      "sarween_tools",
      "plasma_scoring",
    ],
    startingTech: [],
    startingUnits: {
      carrier: 2,
      destroyer: 1,
      fighter: 4,
      infantry: 3,
      pds: 1,
      space_dock: 1,
    },
    techs: ["emergency_mobilization"],
    units: ["supremacy", "trade_port", "trade_port_2", "minuteman"],
    unpackExtra: [
      {
        tokenNsid: "token.unit:homebrew.discordant_stars.space_dock/celdauri",
      },
    ],
  },
];

const factionAbilities = [
  {
    name: "Projection of Power",
    description:
      "At the start of a space combat in a system that is adjacent to or contains 1 or more of your space docks, choose up to 1 ship in that system to gain ANTI-FIGHTER BARRAGE 6(x2) until the end of that combat.",
    source: "Celdauri (DS)",
  },
  {
    name: "Industrialists",
    description:
      "During setup, place the Celdauri space dock token in your reinforcements, the Celdauri space dock token is a fourth space dock unit.",
    source: "Celdauri (DS)",
  },
];

const factionUndraftable = [
  {
    name: "Celdauri space dowck token",
    nsid: "token.unit:homebrew.discordant_stars.space_dock/celdauri",
    count: 1,
    triggerAbility: "Industrialists",
  },
];

const nsidToTemplateId = {
  "sheet.faction:homebrew.discordant_stars/celdauri":
    "2F90A98E43DF2887FF05DDBB89D11120",
  "tile.system:homebrew.discordant_stars/3219":
    "FFA2046A9E2C4400935E2C3404D2B68C",
  "token.command:homebrew.discordant_stars/celdauri":
    "18B1EF7B473F6FAE935263B53793C660",
  "token.control:homebrew.discordant_stars/celdauri":
    "69D5464546CEC2095C626EAD65B738B6",
  "token.unit:homebrew.discordant_stars.space_dock/celdauri":
    "9FDC78FC4F42320D12E43FABE28ACFF5",
};

const technologies = [
  {
    localeName: "technology.name.emergency_mobilization",
    cardNsid:
      "card.technology.red.celdauri:homebrew.discordant_stars/emergency_mobilization",
    type: "Red",
    requirements: { Red: 2 },
    source: "homebrew.discordant_stars",
    faction: "celdauri",
  },
  {
    localeName: "unit.space_dock.trade_port_2",
    cardNsid:
      "card.technology.unit_upgrade.celdauri:homebrew.discordant_stars/trade_port_2",
    type: "unitUpgrade",
    requirements: { Yellow: 2 },
    abbrev: " TP II",
    faction: "celdauri",
    unitPosition: 11,
  },
];

const systems = [
  {
    tile: 3219,
    source: "homebrew.discordant_stars",
    home: true,
    packageId: refPackageId,
    img: "discordant-stars/ui/tiles/tile_3219.png",
    planets: [
      { localeName: "planet.louk", resources: 2, influence: 1 },
      { localeName: "planet.auldane", resources: 1, influence: 3 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.supremacy",
    triggerNsid:
      "card.technology.unit_upgrade.celdauri:franken.discordant_stars/supremacy",
    spaceCombat: { dice: 2, hit: 7 },
    capacity: 6,
  },
  {
    unit: "space_dock",
    upgradeLevel: 1,
    localeName: "unit.space_dock.trade_port",
    triggerNsid:
      "card.technology.unit_upgrade.celdauri:franken.discordant_stars/trade_port",
    antiFighterBarrage: { dice: 2, hit: 6 },
  },
  {
    unit: "space_dock",
    upgradeLevel: 2,
    localeName: "unit.space_dock.trade_port_2",
    triggerNsid:
      "card.technology.unit_upgrade.celdauri:homebrew.discordant_stars/trade_port_2",
    antiFighterBarrage: { dice: 2, hit: 6 },
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.minuteman",
    triggerNsid:
      "card.leader.mech.celdauri:homebrew.discordant_stars/minuteman",
  },
];

function isSpaceDockPresent() {
  // TODO: implement
  return true;
}

const unitModifiers = [
  {
    // "At the start of a space combat choose 1 ship to gain AFB 6(x2)",
    localeName: "unit_modifier.name.projection_of_power",
    localeDescription: "unit_modifier.desc.projection_of_power",
    owner: "self",
    priority: "adjust",
    triggerIf: (auxData) => {
      return (
        //getProjectionOfPowerStatus() && // projection of power is active (aka chosen ship still alive)
        //auxData.self.faction.name === "celdauri" &&
        auxData.rollType === "antiFighterBarrage" &&
        isSpaceDockPresent(auxData.hex) // only in hexes in or adjacent to space dock
      );
    },
    applyAll: (unitAttrsSet, auxData) => {
      // TODO: combat: implement
    },
  },
];

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
