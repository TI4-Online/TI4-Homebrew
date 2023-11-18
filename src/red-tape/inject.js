const { world } = require("@tabletop-playground/api");

world.TI4.homebrew.inject({
  nsidToTemplateId: {
    "pdf:homebrew.red_tape/manual": "A743CFB5F04A1C0F7280C5B70D174A44",
    "tile.strategy:homebrew.red_tape/diplomacy":
      "BF52E9A6454156091B879288F3E34B62",
    "tile.strategy:homebrew.red_tape/imperial":
      "C40868D5ED4743F0AD213EA0569A29A2",
  },
  extraBoxes: [
    {
      name: "Red Tape",
      nsids: [
        "pdf:homebrew.red_tape/manual",
        "tile.strategy:homebrew.red_tape/diplomacy",
        "tile.strategy:homebrew.red_tape/imperial",
      ],
    },
  ],
});
