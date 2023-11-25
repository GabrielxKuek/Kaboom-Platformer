import kaboom from "./libs/kaboom.mjs";
import { uiManager } from "./utils/uiManager.js";
import { load } from "./utils/loader.js";
import { Level } from "./utils/Level.js";
import { level1Layout, level1Mappings } from "./content/level1/level1Layout.js";

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
        const level1 = new Level();
        level1.drawBackground("forest-background");
        level1.drawMapLayout(level1Layout, level1Mappings);
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