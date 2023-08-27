require("../inject-plus"); // to ensure injected attachments

const { refObject, world } = require("@tabletop-playground/api");

console.log("XXX " + refObject);
if (refObject) {
  world.TI4.AbstractPlanetAttachment.delayedCreateForKnownAttachmentToken(
    refObject
  );
}
