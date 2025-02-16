const { world } = require("@tabletop-playground/api");

// Cards to be removed from the base decks, by metadata
const REMOVE = [
  "card.objective.public_1:base/0",
  "card.objective.public_1:base/1",
  "card.objective.public_1:pok/0",
  "card.objective.public_1:pok/1",
  "card.objective.public_2:base/0",
  "card.objective.public_2:base/1",
  "card.objective.public_2:pok/0",
  "card.objective.public_2:pok/1",
]

// Cards to be replaced in the base decks, by metadata
const REPLACE = {
};

// Cards or decks to be added/appended, first value is the metadata string, second value is the GUID, even if they are replaced above, any new content needs to be added here as well
const ADD = {
  "token:omegaphase/prioritytrack": 
    "6F0E6DB14B9BD0E1616529808DAA43A0", // Priority Track
  "card.agenda:omegaphase/0": 
    "E71AFDD6436FE73293414CAA4AC8F5B2", // Voice of the Council
  "card.objective.public_1:omegaphase/0": 
    "546976534401B8502FDA5A964BF8B538", // Omega Objectives
}

const extraStuff = [
  {
    name: "Omega Phase",
    nsids:[
      "token:omegaphase/prioritytrack",
      "card.agenda:omegaphase/0",
    ]
  }
]

// Tell the TI4 mod to update it's lists of objects with the above adjustments
world.TI4.homebrew.inject({
  extraBoxes: extraStuff,
  nsidToTemplateId: ADD,
  remove: REMOVE,
  replace: REPLACE,
});

// Reload changed objects (each kind has it's own function)
world.TI4.homebrew.resetOnTableDecks();
