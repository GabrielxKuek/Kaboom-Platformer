import kaboom from "./libs/kaboom.mjs"
import { uiManager } from "./utils/UIManager.js"
import { load } from "./utils/loader.js"

kaboom({
    width: 1280,
    height: 720,
    letterbox: true
})

load.fonts()
load.assets()
load.sounds()

const scenes = {
    menu: () => {
        // add takes in array of components to create game objects - ref to kaboom website
        uiManager.displayMainMenu()
    },

    controls: () => {
        uiManager.displayControlsMenu()
    },

    1: () => {

    },

    2: () => {

    },

    3: () => {

    },

    gameover: () => {

    },

    end: () => {

    }
}

// creating scenes
for (const key in scenes) {
    // name of scene, function callback
    scene(key, scenes[key])
}

go("menu");