const { world } = require("@tabletop-playground/api");

const factions = [
  {
    faction: "jolnar",
    abilities: ["fragile", "brilliant", "analytical"],
    commodities: 4,
    home: 12,
    leaders: {
      agents: ["doctor_sucaban"],
      commanders: ["ta_zern"],
      heroes: ["rin_the_masters_legacy"],
    },
    promissoryNotes: ["research_agreement"],
    icon: "global/factions/jolnar_icon.png",
    source: "base",
    startingTech: [
      "antimass_deflectors",
      "neural_motivator",
      "sarween_tools",
      "plasma_scoring",
    ],
    startingUnits: {
      carrier: 1,
      dreadnought: 1,
      fighter: 2,
      infantry: 2,
      pds: 2,
      space_dock: 1,
    },
    techs: ["spacial_conduit_cylinder", "eres_siphons"],
    units: ["jns_hylarim", "shield_paling"],
  },
];

const nsidToTemplateId = {
  "sheet.faction:base/jolnar": "6C60E3989D1A40678FF3FEA70C139EDC",
};

const replace = {
  "card.technology.yellow.jolnar:base/eres_siphons":
    "card.technology.yellow.jolnar:homebrew.little-omega/eres_siphons",
  "card.technology.blue.jolnar:base/spacial_conduit_cylinder":
    "card.technology.blue.jolnar:homebrew.little-omega/spacial_conduit_cylinder",
};

const technologies = [
  {
    localeName: "technology.name.e_res_siphons",
    cardNsid:
      "card.technology.yellow.jolnar:homebrew.little-omega/eres_siphons",
    type: "Yellow",
    requirements: { Yellow: 2 },
    source: "homebrew.little-omega",
    faction: "jolnar",
  },
  {
    localeName: "technology.name.spacial_conduit_cylinder",
    cardNsid:
      "card.technology.blue.jolnar:homebrew.little-omega/spacial_conduit_cylinder",
    type: "Blue",
    requirements: { Blue: 2 },
    source: "homebrew.little-omega",
    faction: "jolnar",
  },
];

const adjacencyModifiers = [
  (hex) => {
    // Spacial Conduit Cylinder
    const nsid =
      "card.technology.blue.jolnar:homebrew.little-omega/spacial_conduit_cylinder";
    let spacialConduitCylinderObject;
    for (const obj of world.getAllObjects()) {
      if (nsid === world.TI4.ObjectNamespace.getNsid(obj)) {
        spacialConduitCylinderObject = obj;
        break;
      }
    }

    const checkIsDiscardPile = false;
    const allowFaceDown = false;
    if (
      !spacialConduitCylinderObject ||
      !world.TI4.CardUtil.isLooseCard(
        spacialConduitCylinderObject,
        checkIsDiscardPile,
        allowFaceDown
      ) ||
      (world.TI4.UnitModifier.isToggleActiveObject(
        spacialConduitCylinderObject
      ) &&
        !world.TI4.ActiveIdle.isActive(spacialConduitCylinderObject))
    ) {
      return [];
    }

    let owningPlayerSlot = spacialConduitCylinderObject.getOwningPlayerSlot();
    if (owningPlayerSlot < 0) {
      const playerDesk = world.TI4.getClosestPlayerDesk(
        spacialConduitCylinderObject.getPosition()
      );
      owningPlayerSlot = playerDesk.playerSlot;
    }

    const unitPlastic = world.TI4.UnitPlastic.getAll();
    const hasStructure = unitPlastic.some((unit) => {
      return (
        unit.hex === hex &&
        unit.owningPlayerSlot === owningPlayerSlot &&
        (unit.unit === "pds" || unit.unit === "space_dock")
      );
    });
    if (!hasStructure) {
      return [];
    }

    const adjacenctHexes = [];
    for (const systemObject of world.TI4.getAllSystemTileObjects()) {
      const thisHex = world.TI4.Hex.fromPosition(systemObject.getPosition());
      const currentHasStructure = unitPlastic.some((unit) => {
        return (
          unit.hex === thisHex &&
          unit.owningPlayerSlot === owningPlayerSlot &&
          (unit.unit === "pds" || unit.unit === "space_dock")
        );
      });
      if (currentHasStructure) {
        adjacenctHexes.push(thisHex);
      }
    }
    return adjacenctHexes;
  },
];

const unitModifiers = [
  {
    // all systems containing your structures are adjacent
    isCombat: true,
    localeName: "unit_modifier.name.spacial_conduit_cylinder",
    localeDescription: "unit_modifier.desc.spacial_conduit_cylinder",
    owner: "self",
    priority: "choose",
    triggerNsid:
      "card.technology.blue.jolnar:homebrew.little-omega/spacial_conduit_cylinder",
    toggleActive: true,
    filter: (auxData) => {
      return auxData.rollType === "spaceCannon";
    },
  },
];

world.TI4.homebrew.inject({
  factions,
  nsidToTemplateId,
  technologies,
  replace,
  adjacencyModifiers,
  unitModifiers,
});
