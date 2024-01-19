export class Camera {
    attachedObj = null
    
    attach(gameObj, offsetX = 0, offsetY = 0, fixedX = null, fixedY = null) {
        this.attachedObj = gameObj

        // fixedX is defined, fixedY not defined, use onUpdate
        if (fixedX && !fixedY) {
            ontimeupdate(() => {
                camPos(fixedX, this.attachedObj.pos.y + offsetY)
            })

            return
        }

        // fixedX not defined, fixedY defined, use onUpdate
        if (!fixedX && fixedY) {
            ontimeupdate(() => {
                camPos(this.attachedObj.pos.x + offsetX, fixedY)
            })

            return
        }

        // if fixed are both defined
        if (fixedX && fixedY) {
            ontimeupdate(() => {
                camPos(fixedX, fixedY)
            })

            return
        }

        onUpdate(() => {
            camPos(this.attachedObj.pos.x + offsetX, this.attachedObj.pos.Y + offsetY)
        })

    }
}