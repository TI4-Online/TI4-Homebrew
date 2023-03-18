const { refObject, world, Color, Button } = require("@tabletop-playground/api");

new world.TI4.AbstractStrategyCard(refObject)
    .setColor(new Color(0.054, 0.45, 0.188))
    .setBodyWidgetFactory((playerDesk, strategyCardObj) => {
        const playerSlot = playerDesk.playerSlot;
        const playerName = world.TI4.getNameByPlayerSlot(playerSlot);
        const msgColor = playerDesk.color;

        const localeStrings = {
            "strategy_card.construction.message.primary_2dock": "{playerName} uses the primary ability of Construction (2 Space Docks).",
            "strategy_card.construction.button.primary_2dock" : "Primary (2 Space Docks)",
        };

        world.TI4.homebrew.inject({
            localeStrings,
        })

        const onPrimary1Dock1PdsClicked = (button, player) => {
            world.TI4.Broadcast.chatAll(
                world.TI4.locale(
                    "strategy_card.construction.message.primary_1dock_1pds",
                    {
                        playerName,
                    }
                ),
                msgColor
            );
        };
        const primary1Dock1PdsButton = new Button()
            .setFontSize(world.TI4.AbstractStrategyCard.FONT_SIZE_BODY)
            .setText(
                world.TI4.locale("strategy_card.construction.button.primary_1dock_1pds")
            );
        primary1Dock1PdsButton.onClicked.add(onPrimary1Dock1PdsClicked);

        const onPrimary2PdsClicked = (button, player) => {
            world.TI4.Broadcast.chatAll(
                world.TI4.locale("strategy_card.construction.message.primary_2pds", {
                    playerName,
                }),
                msgColor
            );
        };
        const primary2PdsButton = new Button()
            .setFontSize(world.TI4.AbstractStrategyCard.FONT_SIZE_BODY)
            .setText(world.TI4.locale("strategy_card.construction.button.primary_2pds"));
        primary2PdsButton.onClicked.add(onPrimary2PdsClicked);

        const onPrimary2DockClicked = (button, player) => {
            world.TI4.Broadcast.chatAll(
                world.TI4.locale("strategy_card.construction.message.primary_2dock", {
                    playerName,
                }),
                msgColor
            );
        };
        const primary2DockButton = new Button()
            .setFontSize(world.TI4.AbstractStrategyCard.FONT_SIZE_BODY)
            .setText(world.TI4.locale("strategy_card.construction.button.primary_2dock"));
        primary2DockButton.onClicked.add(onPrimary2DockClicked);

        const onSecondary1DockClicked = (button, player) => {
            world.TI4.Broadcast.chatAll(
                world.TI4.locale("strategy_card.construction.message.secondary_1dock", {
                    playerName,
                }),
                msgColor
            );
        };
        const secondary1DockButton = new Button()
            .setFontSize(world.TI4.AbstractStrategyCard.FONT_SIZE_BODY)
            .setText(
                world.TI4.locale("strategy_card.construction.button.secondary_1dock")
            );
        secondary1DockButton.onClicked.add(onSecondary1DockClicked);

        const onSecondary1PdsClicked = (button, player) => {
            world.TI4.Broadcast.chatAll(
                world.TI4.locale("strategy_card.construction.message.secondary_1pds", {
                    playerName,
                }),
                msgColor
            );
        };
        const secondary1PdsButton = new Button()
            .setFontSize(world.TI4.AbstractStrategyCard.FONT_SIZE_BODY)
            .setText(
                world.TI4.locale("strategy_card.construction.button.secondary_1pds")
            );
        secondary1PdsButton.onClicked.add(onSecondary1PdsClicked);

        return [
            primary1Dock1PdsButton,
            primary2DockButton,
            primary2PdsButton,
            secondary1DockButton,
            secondary1PdsButton,
        ];
    })
    .addAutomatorButton(
        world.TI4.locale("strategy_card.automator.base.spend_strategy_token"),
        (playerDesk, player) => {
            world.TI4.CommandToken.spendStrategyToken(playerDesk.playerSlot, player);
        }
    );
