import kaboom from "./libs/kaboom.mjs";
import { uiManager } from "./utils/uiManager.js";
import { load } from "./utils/loader.js";

kaboom({
    width: 1280,
    height: 720,
    letterbox: true
})

load.fonts();
load.sounds();
load.assets();

const scenes = {
    menu: () => {
        uiManager.displayMainMenu();
    },

    controls: () => {
        uiManager.displayControlsMenu();
    },

    // levels
    1: () => {

    },

    2: () => {

    },

    3: () => {

    },
    
    //game over
    gameover: () => {

    },

    end: () => {

    }
}

for (const key in scenes) {
    scene(key, scenes[key]);
}

go("menu");