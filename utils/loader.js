export const load = {
    fonts: () => {
        loadFont("Round", "./assets/Round9x13.ttf");
    },

    assets: () => {
        // control menu
        loadSprite("up", "./assets/Arrow_Up_Key_Dark.png");
        loadSprite("down", "./assets/Arrow_Down_Key_Dark.png");
        loadSprite("left", "./assets/Arrow_Left_Key_Dark.png");
        loadSprite("right", "./assets/Arrow_Right_Key_Dark.png");
        loadSprite("space", "./assets/Space_Key_Dark.png");

        // main menu
        loadSprite("forest-background", "./assets/Forest_Background_0.png");
        loadSprite("logo", "./assets/Logo.png");
        loadSprite("grass-tileset", "./assets/Grass_Tileset.png", {
            sliceX: 3,
            sliceY: 4,
            anims: {
                tm: 1,
                tr: 2,
                ml: 3,
                mm: 4,
                mr: 5,
                bl: 6,
                bm: 7,
                br: 8,
            }
        });
        loadSprite("grass-oneway-tileset", "./assets/Grass_Oneway.png", {
            sliceX: 3,
            sliceY: 4,
            anims: {
                tm: 1,
                tr: 2,
                ml: 3,
                mm: 4,
                mr: 5,
                bl: 6,
                bm: 7,
                br: 8,
            }
        });
    },

    sounds: () => {
        loadSound("confirm-ui", "./sounds/confirm-ui.wav")
    }
}