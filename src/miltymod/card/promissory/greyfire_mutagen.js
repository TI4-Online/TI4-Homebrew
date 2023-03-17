const { Player, Vector, world } = require("@tabletop-playground/api");
const assert = require("../../../wrapper/assert-wrapper");

const DELETE_DIE_AFTER_N_SECONDS = 10;

class Greyfire_Mutagen {
    static isGreyfire_MutagenActive() {
        const greyfire_MutagenNsid = "card.promissory:homebrew.miltymod/greyfire_mutagen";
        const checkIsDiscardPile = true;
        const allowFaceDown = false;
        for (const obj of world.getAllObjects()) {
            if (!world.TI4.CardUtil.isLooseCard(obj, checkIsDiscardPile, allowFaceDown)) {
                continue;
            }
            const nsid = world.TI4.ObjectNameSpace.getNsid(obj);
            if (nsid === greyfire_MutagenNsid) {
                console.log("Greyfire Mutagen: isGreyfire_MutagenActive true");
                return true;
            }
        }
        return false;
    }

    static greyfire_mutagen(systemTileObj, planet, player) {
        assert(typeof systemTileObj === "object");
        assert(typeof planet === "object");
        assert(player instanceof Player);
        const localeStrings = {
            "greyfire_mutagen.roll_name": "Greyfire Mutagen",
            "greyfire_mutagen.message": "Greyfire Mutagen on “{planetName}” with {infantryCount} infantry", //, {mechsCount} mechs, and {helTitanCount} Hel-Titans",
            "desc.card.action.greyfire_mutagen": "Place this card face-up anywhere on the table, then use the system tile menu to select Greyfire Mutagen",
            "ui.message.roll.greyfire_mutagen": "{playerName} rolled for Greyfire Mutagen: Infantry: {infantryHits}"// | Mechs: {mechHits} | Hel-Titans: {helTitanHits}",
        };

        world.TI4.homebrew.inject({localeStrings})

        // Get infantry on planet.
        const pos = systemTileObj.getPosition();
        const hex = world.TI4.Hex.fromPosition(pos);
        const unitsInSystem = world.TI4.UnitPlastic.getAll();
        const infantryInSystem = unitsInSystem.filter((unit) => {
            return unit.hex === hex && unit.unit === "infantry";
        });
        world.TI4.UnitPlastic.assignPlanets(infantryInSystem);
        let infantryCount = 0;
        for (const infantry of infantryInSystem) {
            if (infantry.planet === planet) {
                infantryCount += infantry.count;
            }
        }

        const playerSlot = player.getSlot();
        const playerName = world.TI4.getNameByPlayerSlot(playerSlot);
        const playerDesk = world.TI4.getPlayerDeskByPlayerSlot(playerSlot);
        const color = playerDesk.chatColor;

        const planetName = planet.getNameStr();
        const msg = world.TI4.locale("greyfire_mutagen.message", {planetName, infantryCount});
        world.TI4.lib.Broadcast.chatAll(msg, color);

        if (infantryCount === 0) {
            return;
        }

        const rollValue = 8;
        const dice = [];
        for (let i = 0; i < infantryCount; i++) {
            const r = i * 1.5;
            const phi = (Math.PI * 2 * i) / (infantryCount);
            let pos = new Vector(Math.cos(phi) * r, Math.sin(phi) * r, 0);
            pos = playerDesk.localPositionToWorld(pos).add([0, 0, 5]);
            const die = new world.TI4.SimpleDieBuilder()
                .setDeleteAfterSeconds(DELETE_DIE_AFTER_N_SECONDS)
                .setHitValue(rollValue)
                .setSpawnPosition(pos)
                .build(player);
            dice.push(die);
        }
        world.TI4.RollGroup.roll(dice, (dice) => {
            const diceMessages = [];
            let infantryHits = 0;
            for (const die of dice) {
                diceMessages.push(die.getValueStr());
                infantryHits += die.countHits();
            }

            const unitMessage = [
                world.TI4.locale("greyfire_mutagen.roll_name"),
                " [",
                world.TI4.locale("ui.message.roll.hit"),
                ":",
                rollValue,
                "]: ",
                "Infantry: ",
                diceMessages.join(", "),
            ].join("");

            const rolled = world.TI4.locale("ui.message.player_rolled", {
                playerName,
                report: unitMessage,
            });
            const landed = world.TI4.locale("ui.message.roll.greyfire_mutagen", {
                playerName,
                infantryHits: infantryHits,
            });
            const message = rolled + "\n" + landed;
            world.TI4.lib.Broadcast.chatAll(message, color);
        });
    }

    constructor() {}
}

module.exports = { Greyfire_Mutagen };
