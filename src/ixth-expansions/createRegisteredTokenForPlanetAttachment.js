require("./lost-star-charts"); // to ensure injected attachments

const { refObject, world } = require("@tabletop-playground/api");

world.TI4.AbstractPlanetAttachment.delayedCreateForKnownAttachmentToken(
  refObject
);
