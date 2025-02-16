//This is just a copy of the base TI public objective mat script, with unwrapped assert/api definitions.

const assert = (test, message) => {
    if (!test) {
        //console.log(new Error().stack);
        throw new Error(message ? message : "assertion failed");
    }
    return test;
};

assert.equal = (a, b) => {
    if (a !== b) {
        throw new Error(`assert.equal got "${a}" expected "${b}"`);
    }
};

const {
    Card,
    GameObject,
    globalEvents,
    refObject,
    world,
}= require("@tabletop-playground/api");

const DEAL_OBJECTIVES_ON_GAME_SETUP = false;

// place cards on game setup
class PublicObjectMat {
    constructor(gameObject) {
        assert(gameObject instanceof GameObject);

        this._obj = gameObject;

        if (DEAL_OBJECTIVES_ON_GAME_SETUP) {
            globalEvents.TI4.onGameSetup.add((config, player) => {
                this.layoutCards();
            });
        }
    }

    layoutCards() {
        const snapPoints = this._obj.getAllSnapPoints();
        const snappedObjects = [];
        const openPoints = [];
        for (const snapPoint of snapPoints) {
            const obj = snapPoint.getSnappedObject();
            if (obj) {
                snappedObjects.push(obj);
            } else {
                openPoints.push(snapPoint);
            }
        }

        // Abort if anything looks amiss.
        if (snappedObjects.length !== 1) {
            console.log("PublicObjectiveMat.layoutCards: not one object");
            return;
        }
        const deck = snappedObjects[0];
        if (!(deck instanceof Card)) {
            console.log("PublicObjectiveMat.layoutCards: not Card");
            return;
        }
        if (deck.getStackSize() < openPoints.length) {
            console.log("PublicObjectiveMat.layoutCards: too few cards");
            return;
        }

        deck.shuffle();

        for (const snapPoint of openPoints) {
            const card = deck.takeCards(1);
            const pos = snapPoint.getGlobalPosition().add([0, 0, 5]);
            const rot = this._obj.getRotation().compose([0, 90, 0]);
            card.setPosition(pos, 1);
            card.setRotation(rot, 1);
        }
    }
}

refObject.onCreated.add((obj) => {
    new PublicObjectMat(obj);
});

if (world.getExecutionReason() === "ScriptReload") {
    new PublicObjectMat(refObject);
}