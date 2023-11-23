export const load = {
    fonts: () => {
        loadFont("Round", "./assets/Round9x13.ttf");
    },

    assets: () => {
        loadSprite("forest-background", "./assets/Forest_Background_0.png");
        loadSprite("logo", "./assets/Logo.png");
    },

    sounds: () => {
        loadSound("confirm-ui", "./sounds/confirm-ui.wav")
    }
}