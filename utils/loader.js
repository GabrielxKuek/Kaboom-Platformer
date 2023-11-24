export const load = {
    fonts: () => {
        loadFont("Round", "./assets/Round9x13.ttf");
    },

    assets: () => {
        loadSprite("up", "./assets/Arrow_Up_Key_Dark.png");
        loadSprite("down", "./assets/Arrow_Down_Key_Dark.png");
        loadSprite("left", "./assets/Arrow_Left_Key_Dark.png");
        loadSprite("right", "./assets/Arrow_Right_Key_Dark.png");
        loadSprite("space", "./assets/Space_Key_Dark.png");

        loadSprite("forest-background", "./assets/Forest_Background_0.png");
        loadSprite("logo", "./assets/Logo.png");
    },

    sounds: () => {
        loadSound("confirm-ui", "./sounds/confirm-ui.wav")
    }
}