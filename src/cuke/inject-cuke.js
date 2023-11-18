const { world, refPackageId } = require("@tabletop-playground/api");

const nsidToTemplateId = {
  "tile.system:homebrew.cuke/9281": "C0C760795140C28BC948EE8D533558CE",
};

const systems = [
  {
    tile: 9281,
    source: "homebrew.cuke",
    home: false,
    packageId: refPackageId,
    img: "cuke/cukefield.jpg",
    anomalies: ["asteroid field"],
  },
];

world.TI4.homebrew.inject({
  nsidToTemplateId,
  systems,
});

world.TI4.homebrew.resetSystemTilesBox();
