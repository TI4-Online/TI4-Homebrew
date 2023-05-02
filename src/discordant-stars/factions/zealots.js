const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.zealots": "Zealots",
  "faction.full.zealots": "The Zealots Of Rhodun",
  "planet.poh": "Poh",
  "planet.orad": "Orad",
  "technology.name.sanctification_field": "Sanctification Field",
  "technology.name.pilgrimage_beacons": "Pilgrimage Beacons",
  "unit.flagship.reckoning": "Reckoning",
  "unit.mech.templar": "Templar",
  "unit_modifier.desc.reckoning":
    "+1 to SPACE COMBAT rolls for each unit upgrade technology the opponent owns.",
  "unit_modifier.desc.templar":
    "+1 to unit GROUND COMBAT rolls for each faction technology the opponent owns.",
};

const factions = [
  {
    faction: "zealots",
    abilities: ["conspirators", "ancient_knowledge"],
    commodities: 3,
    home: 3224,
    leaders: {
      agents: ["priestess_tuh"],
      commanders: ["bishop_ulin"],
      heroes: ["saint_binal"],
    },
    promissoryNotes: ["favor_of_rhodun"],
    icon: "discordant-stars/faction-icons/zealots.png",
    source: "homebrew.discordant_stars",
    startingTech: ["biostims"],
    startingUnits: {
      carrier: 1,
      cruiser: 1,
      fighter: 3,
      infantry: 4,
      destroyer: 1,
      space_dock: 1,
    },
    techs: ["sanctification_field", "pilgrimage_beacons"],
    units: ["reckoning", "templar"],
    packageId: refPackageId,
  },
];

const factionAbilities = [
  {
    name: "Conspirators",
    description:
      "Once per agenda phase, when an agenda is revealed, if you are not the speaker, you may choose to vote after the speaker on that agenda.",
    source: "Rhodun (DS)",
  },
  {
    name: "Ancient Knowledge",
    description:
      "When you use a technology specialty to ignore a prerequisite on a technology card you are researching, you may ignore 1 additional prerequisite of the same color. After you exhaust a planet to use its technology specialty, you may gain 1 commodity.",
    source: "Rhodun (DS)",
  },
];

const nsidToTemplateId = {
  "sheet.faction:homebrew.discordant_stars/zealots":
    "60A4F8964A3FC41C03551797DBE57F92",
  "tile.system:homebrew.discordant_stars/3224":
    "819715212DA746268C281C3B2259FCBE",
  "token.command:homebrew.discordant_stars/zealots":
    "9FF20E2A441141EF3F48B799FF66EB74",
  "token.control:homebrew.discordant_stars/zealots":
    "A202270546BEF2F45CE81AA7240C5780",
};

const technologies = [
  {
    localeName: "technology.name.sanctification_field",
    cardNsid:
      "card.technology.yellow.zealots:homebrew.discordant_stars/sanctification_field",
    type: "Yellow",
    requirements: { Yellow: 3 },
    source: "homebrew.discordant_stars",
    faction: "zealots",
  },
  {
    localeName: "technology.name.pilgrimage_beacons",
    cardNsid:
      "card.technology.blue.zealots:homebrew.discordant_stars/pilgrimage_beacons",
    type: "Blue",
    requirements: { Blue: 2 },
    source: "homebrew.discordant_stars",
    faction: "zealots",
  },
];

const systems = [
  {
    tile: 3224,
    source: "homebrew.discordant_stars",
    home: true,
    packageId: refPackageId,
    img: "discordant-stars/tiles/homeworld/tile_3224.jpg",
    planets: [
      { localeName: "planet.poh", resources: 2, influence: 0 },
      { localeName: "planet.orad", resources: 3, influence: 1 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.reckoning",
    unitAbility: "unit.flagship.reckoning",
    triggerNsid:
      "card.technology.unit_upgrade.zealots:franken.discordant_stars/reckoning",
    spaceCombat: { dice: 2, hit: 7 },
    capacity: 6,
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.templar",
    unitAbility: "unit.mech.templar",
    triggerNsid: "card.leader.mech.zealots:homebrew.discordant_stars/templar",
  },
];

const unitModifiers = [
  {
    // "+1 to SPACE COMBAT rolls for each enemy unit upgrade",
    isCombat: true,
    localeName: "unit.flagship.reckoning",
    localeDescription: "unit_modifier.desc.reckoning",
    triggerUnitAbility: "unit.flagship.reckoning",
    owner: "self",
    priority: "adjust",
    filter: (auxData) => {
      console.log(auxData.rollType);
      return auxData.rollType === "spaceCombat" && auxData.self.has("flagship");
    },
    applyAll: (unitAttrsSet, auxData) => {
      let hitModifier = 0;
      if (auxData.opponent) {
        const opponentPlayerSlot = auxData.opponent.playerSlot;
        const opponentTechnologies =
          world.TI4.Technology.getOwnedPlayerTechnologies(opponentPlayerSlot);
        hitModifier = opponentTechnologies.filter((tech) =>
          tech.cardNsid.startsWith("card.technology.unit_upgrade:")
        ).length;
      }

      unitAttrsSet.get("flagship").raw.spaceCombat.hit -= hitModifier;
    },
  },
  {
    // "+1 to GROUND COMBAT rolls for each enemy faction tech",
    isCombat: true,
    localeName: "unit.mech.templar",
    localeDescription: "unit_modifier.desc.templar",
    triggerUnitAbility: "unit.mech.templar",
    owner: "self",
    priority: "adjust",
    filter: (auxData) => {
      console.log(auxData.rollType);
      return auxData.rollType === "groundCombat" && auxData.self.has("mech");
    },
    applyAll: (unitAttrsSet, auxData) => {
      let hitModifier = 0;
      if (auxData.opponent) {
        if (!auxData.opponent.faction) {
          console.warn(
            "Templar mech modifier: opponents faction could not be determined"
          );
          return;
        }
        const opponentPlayerSlot = auxData.opponent.playerSlot;
        const opponentFaction = auxData.opponent.faction;
        const opponentTechnologies =
          world.TI4.Technology.getOwnedPlayerTechnologies(opponentPlayerSlot);
        opponentTechnologies.forEach((tech) => console.log(tech.faction));
        hitModifier = opponentTechnologies.filter(
          (tech) => opponentFaction === tech.faction
        ).length;
      }

      unitAttrsSet.get("mech").raw.groundCombat.hit -= hitModifier;
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
