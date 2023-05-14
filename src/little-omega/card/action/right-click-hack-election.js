const ACTION_NAME = "*Change voting order";

/**
 *    Hack Election
 *    After an agenda is revealed: 
 *    During this agenda, voting begins with the player to your left and continues clockwise.
 */
class HackElection extends world.TI4.AbstractRightClickCard {
    
    constructor() {
        super();
    }

    isRightClickable(card) {
        const nsid = world.TI4.ObjectNamespace.getNsid(card);
        return nsid === "card.action:homebrew.little-omega/hack_election";
    }

    getRightClickActionNamesAndTooltips(card) {
        return [{ actionName: ACTION_NAME, tooltip: undefined }];
    }
    
    onRightClick(card, player, selectedActionName) {
        if (selectedActionName === ACTION_NAME) {
            console.log("Hack Election used");
            world.TI4.turns.setTurnOrder(HackElection.getNewVotingOrder(player));
        }
    }
    
    static getNewVotingOrder(player) {
        const first = player.getSlot().index + 1;
        let result = [];
        const playerDesks = world.TI4.getAllPlayerDesks();
        for (let i = 0; i < playerDesks.length; i++) {
            let index = first + i;
            while (index < 0) {
                index += playerDesks.length;
            }
            index = index % playerDesks.length;
            result.push(playerDesks[index]);
        }

        // If "Zeal" (Argent) is in game, they always vote first.
        // Allow more than one, preserving order.
        const zealDesks = [];
        const nonZealDesks = [];
        for (const playerDesk of result) {
            const playerSlot = playerDesk.playerSlot;
            const faction = world.TI4.getFactionByPlayerSlot(playerSlot);
            if (!faction) {
                nonZealDesks.push(playerDesk);
                continue;
            }
            let hasZeal = false;
            for (const ability of faction.raw.abilities) {
                if (ability === "zeal") {
                    hasZeal = true;
                    break;
                }
            }
            if (hasZeal) {
                zealDesks.push(playerDesk);
            } else {
                nonZealDesks.push(playerDesk);
            }
        }
        result = [];
        result.push(...zealDesks);
        result.push(...nonZealDesks);

        return result;
    }
}

new HackElection();