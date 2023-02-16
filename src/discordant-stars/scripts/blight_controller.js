const { refObject, UIElement, Button, Text, VerticalBox } = require('@tabletop-playground/api');
const { getBlightStatus, setBlightStatus, toggleBlightStatus } = require("./blight_status");

function getButtonText() {
    return getBlightStatus() ? "Yes" : "No";
}

let ui = new UIElement();
ui.position = new Vector(3, 0, 2);

let box = new VerticalBox();
box.addChild(new Text().setText("Blight: First Round?"));

let button = new Button()
    .setText(getButtonText());
button.onClicked.add(() => {
    toggleBlightStatus();
    button.setText(getButtonText());
});
box.addChild(button);

ui.widget = box;
refObject.addUI(ui);

globalEvents.TI4.onTurnChanged.add(
    () => {
        debugger;
        setBlightStatus(true);
        button.setText(getButtonText());
    }
);