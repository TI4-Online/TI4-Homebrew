const { world } = require("@tabletop-playground/api");

world.TI4.homebrew.inject({
  nsidToTemplateId: {
    "card.fallen_empires.rules:homebrew.fallen_empires/0":
      "88B019589A426906C42C28A4315DDE2E",
    "card.fallen_empires.calamities:homebrew.fallen_empires/0":
      "140C844D3C42DC6534C337A8B5DD07F4",
    "pdf:homebrew.fallen_empires/manual": "0E5D4A550741C40EC77D9D81DA47CA07",
  },
  extraBoxes: [
    {
      name: "Fallen Empires",
      nsids: [
        "card.fallen_empires.rules:homebrew.fallen_empires/0",
        "card.fallen_empires.calamities:homebrew.fallen_empires/0",
        "pdf:homebrew.fallen_empires/manual",
      ],
    },
  ],
});
