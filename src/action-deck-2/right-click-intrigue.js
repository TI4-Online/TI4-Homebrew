const ACTION_NAME = "*Draw bottom and top 2 agendas";
const AGENDA_COUNT = "2";

/**
 *    Intrigue
 *    After an agenda is revealed:
 *    Look at the bottom 2 cards of the agenda deck. Place each card on the top or bottom of the deck in any order. Then, if you did not place either card on top of the deck, draw 1 action card.
 */
class IntrigueRightClickCard extends world.TI4.AbstractRightClickCard {
    
    constructor() {
        super();
    }

    isRightClickable(card) {
        const nsid = world.TI4.ObjectNamespace.getNsid(card);
        return nsid === "card.action:homebrew.action_deck_2/intrigue";
    }

    getRightClickActionNamesAndTooltips(card) {
        return [{ actionName: ACTION_NAME, tooltip: undefined }];
    }
    
    onRightClick(card, player, selectedActionName) {
        if (selectedActionName !== ACTION_NAME) {
            return;
        }
        const deck = world.TI4.DealDiscard.getDeckWithReshuffle("card.agenda", AGENDA_COUNT);
        const fromFront = true; // from the bottom
        const offset = 0;
        const keep = false; // removes from the deck
        let agendasBottom = deck.takeCards(AGENDA_COUNT, fromFront, offset, keep);
        world.TI4.CardUtil.moveCardsToCardHolder(agendasBottom, player.getSlot());
        let agendasTop = deck.takeCards(AGENDA_COUNT, !fromFront, offset, keep);
        world.TI4.CardUtil.moveCardsToCardHolder(agendasTop, player.getSlot());
    }
}

new IntrigueRightClickCard();