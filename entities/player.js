export class Player {
    isRespawning = false

    constructor(posX, posY, speed, jumpForce, nbLives, currentLevelScene, isInTerminalScene) {
        this.isInTerminalScene = isInTerminalScene
        this.currentLevelScene = currentLevelScene
        this.initialX = posX
        this.initialY = posY
        this.makePlayer(posX, posY)
        this.setPlayerControls()
        this.speed = speed
        this.jumpForce = jumpForce
        this.lives = nbLives
        this.previousHeight = this.gameObj.pos.y
    }

    makePlayer(x, y) {
        this.initialX = x
        this.initialY = y
        this.gameObj = add([
            sprite("player", { anim: "idle" }),
            area({ shape: new Rect(vec2(0, 3), 8, 8) }),
            anchor("center"),
            pos(x, y),
            scale(4),
            body(),
            "player",
        ])
    }

    setPlayerControls() {
        onKeyDown("left", () => {
            if (this.gameObj.curAnim() !== "run") 
                this.gameObj.play("run")

            this.gameObj.flipX = true

            if (!this.isRespawning)
                this.gameObj.move(-this.speed, 0)
        })

        onKeyDown("right", () => {
            if (this.gameObj.curAnim() !== "run") 
                this.gameObj.play("run")

            this.gameObj.flipX = false
            
            if (!this.isRespawning)
                this.gameObj.move(this.speed, 0)
        })

        onKeyDown("space", () => {
            // this.gameObj.jump(this.jumpForce) -> kirby jump mechanic xD
            if (this.gameObj.isGrounded()) {
                this.gameObj.jump(this.jumpForce)
                play("jump")
            }
        })

        onKeyRelease(() => {
            if ( isKeyReleased("right") || isKeyReleased("left") ) {
                this.gameObj.play("idle")
            }
        })

    }

    respawnPlayer() {
        if (this.lives > 0) {
            this.gameObj.pos = vec2(this.initialX, this.initialY)
            this.isRespawning = true
            setTimeout(() => this.isRespawning = false, 500)
        }
        
    }

    update() {
        onUpdate(() => {
            if (this.gameObj.pos.y > 1000) {
                play("hit", { speed: 1.5 })
                this.respawnPlayer()
            }
        })
    }
}