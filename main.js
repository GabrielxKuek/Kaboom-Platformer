import kaboom from "./libs/kaboom.mjs"
import { uiManager } from "./utils/UIManager.js"
import { load } from "./utils/loader.js"

import { Camera } from "./utils/Camera.js"
import { Player } from "./entities/player.js"


import { Level } from "./utils/Level.js"
import { level1Layout, level1Mappings } from "./content/level1/level1Layout.js"
import { level1Config } from "./content/level1/config.js"

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
        setGravity(level1Config.gravity)

        const level1 = new Level()
        level1.drawBackground("forest-background")
        level1.drawMapLayout(level1Layout, level1Mappings)

        const player = new Player(level1Config.playerStartPosX, level1Config.playerStartPosY, level1Config.playerSpeed, level1Config.jumpForce, level1Config.nbLives, 1, false)
        player.update()

        const camera = new Camera()
        camera.attach(player.gameObj, 0, -200, null, 200)

        level1.drawWaves("water", "wave")
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