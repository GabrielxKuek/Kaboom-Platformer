export const load = {
    fonts: () => {
        loadFont("Round", "../assets/Round9x13.ttf")
    },
    assets: () => {
        // controls prompts
        loadSprite("up", "./assets/Arrow_Up_Key_Dark.png")
        loadSprite("down", "./assets/Arrow_Down_Key_Dark.png")
        loadSprite("left", "./assets/Arrow_Left_Key_Dark.png")
        loadSprite("right", "./assets/Arrow_Right_Key_Dark.png")
        loadSprite("space", "./assets/Space_Key_Dark.png")

        loadSprite("forest-background", "./assets/Forest_Background_0.png")
        loadSprite("logo", "./assets/Logo.png")

        // vv name, path, which part of image corresponds to which tile
        loadSprite("grass-tileset", "./assets/Grass_Tileset.png", {
            sliceX: 3,
            sliceY: 4,
            anims: {
                tl: 0,
                tm: 1,
                tr: 2,
                ml: 3,
                mm: 4,
                mr: 5,
                "ml-2": 6,
                "mm-2": 7,
                "mr-2": 8
            }
        })

        loadSprite("grass-oneway-tileset", "./assets/Grass_Oneway.png", {
            sliceX: 3,
            sliceY: 4,
            anims: {
              tl: 0,
              tm: 1,
              tr: 2,
              ml: 3,
              mm: 4,
              mr: 5,
              "ml-2": 6,
              "mm-2": 7,
              "mr-2": 8,
            },
        })
        
        loadSprite("bridge", "./assets/Bridge.png")
        loadSprite("coin", "./assets/Coin.png")


        loadSprite("water", "./assets/Water.png", {
            sliceX: 8,
            sliceY: 1,
            anims: {
                wave: {
                    from: 0,
                    to: 7,
                    speed: 16,
                    loop: true,
                }
            },
        })

        loadSprite("player", "./assets/Player.png", {
            sliceX: 4,
            sliceY: 6,
            anims: {
              idle: {
                from: 0,
                to: 3,
                loop: true,
              },
              run: {
                from: 4,
                to: 7,
                loop: true,
              },
              "jump-up": 8,
              "jump-down": 9,
            },
          })

    },
    sounds: () => {
        // main menu && controls screen
        loadSound("confirm-ui", "./sounds/confirm-ui.wav")

        // game stuff
        loadSound("jump", "./sounds/jump.wav")
        loadSound("hit", "./sounds/hit.wav")

    }
}