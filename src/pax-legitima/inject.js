const { world } = require("@tabletop-playground/api");

world.TI4.homebrew.inject({
  nsidToTemplateId: {
    "card.agenda.bureaucratic:homebrew.pax_legitima/0":
      "2CB372BBB1498C6490C3FA8DD67B56E9",
    "card.agenda.clandestine:homebrew.pax_legitima/0":
      "B0C9373A504358A5EAEAD7A771D2E5C7",
    "card.agenda.faction:homebrew.pax_legitima/0":
      "315CBD79E344754B36E347964EC1DC65",
    "card.agenda.generic:homebrew.pax_legitima/0":
      "342707CF4845788F2EE808AE1133868F",
    "card.agenda.mercantile:homebrew.pax_legitima/0":
      "1CE0D726E74F4FDB76BFF9BDD66241DA",
    "card.agenda.militant:homebrew.pax_legitima/0":
      "3210A52A644FDDE5D02971B3F08976E3",
    "card.agenda.scholarly:homebrew.pax_legitima/0":
      "1511BFA05E40CFB2F5124B904F999C16",
    "card.relic:homebrew.pax_legitima/nullspace_wayfinder":
      "97C385743445623024DAF7B16BB67C2D",
    "card.action:homebrew.pax_legitima/impeachment":
      "9CE2BC602A4FA10A36B8D9B4E9ADEE45",
    "card.objective.secret:homebrew.pax_legitima/collect_favors":
      "5B9545920746F07164C1D4A58D1C1586",
    "card.objective.secret:homebrew.pax_legitima/dicate_policy":
      "129E0504BF4F6ED4B0E52484B316E2C5",
    "card.relic:homebrew.pax_legitima/the_vox_principium":
      "13DDD5AEE344405D4E9C229BF0CA1073",
    "pdf:homebrew.pax_legitima/manual": "AC2A8BA048467ABAC9190786194CB93D",
    "tile.system:homebrew.pax_legitima/1999":
      "34F51770914B1102D00524BFD7F967E8",
  },
  extraBoxes: [
    {
      name: "Pax Legitima",
      nsids: ["pdf:homebrew.pax_legitima/manual"],
    },
  ],
});

world.TI4.homebrew.resetOnTableDecks();
world.TI4.homebrew.resetSystemTilesBox();
