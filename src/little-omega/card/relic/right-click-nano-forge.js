const ACTION_NAME = "*Fetch attachment token";

class LittleOmegaNanoForgeRightClick extends world.TI4.AbstractRightClickCard {
    static fetchAttachmentToken(card, tokenNsid) {
        const pos = card.getPosition().add([0, 0, 5]);
        const rot = new Rotator(0, 0, 0);

        // Find token.
        let token = undefined;
        for (const obj of world.getAllObjects()) {
            const nsid = world.TI4.ObjectNamespace.getNsid(obj);
            if (nsid !== tokenNsid) {
                continue;
            }
            token = obj;
            break;
        }

        // Spawn if missing.
        if (!token) {
            token = world.TI4.Spawn.spawn(tokenNsid, pos, rot);
        }

        // Remove from container.
        const container = token.getContainer();
        if (container) {
            const above = container.getPosition().add([0, 0, 10]);
            container.take(token, above, false);
        }

        // Move.
        token.setObjectType(ObjectType.Regular);
        token.setPosition(pos, 1);
        token.setRotation(rot);
        
        const cards = world.TI4.CardUtil.gatherCards((nsid) => {
            return nsid === "card.legendary_planet:homebrew.little-omega/nanoforge";
        });
        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            card.setPosition(pos.add([0, 0, 11 + i]));
            card.setRotation(rot);
        }
    }

    constructor() {
        super();
    }

    isRightClickable(card) {
        const nsid = world.TI4.ObjectNamespace.getNsid(card);
        return nsid === "card.relic:homebrew.little-omega/nanoforge";
    }

    getRightClickActionNamesAndTooltips(card) {
        return [{ actionName: ACTION_NAME, tooltip: undefined }];
    }

    onRightClick(card, player, selectedActionName) {
        if (selectedActionName === ACTION_NAME) {
            const tokenNsid = "token.attachment.exploration:pok/nano_forge";
            LittleOmegaNanoForgeRightClick.fetchAttachmentToken(card, tokenNsid);
        }
    }
}

new LittleOmegaNanoForgeRightClick();