import Camera from "./Camera"

cc.Class({
    extends: cc.Component,
    properties: {
        far: {
            default: 1,
            type: cc.Float
        },
        camera: {
            default: null,
            type: Camera
        },
        maxY: {
            default: -180
        },
        minY: {
            default: -250
        },
        maxDistance: {
            default: 1200
        },
        minDistance: {
            default: 900
        },
        floatSprites: {
            visible: true,
            default: [],
            type: [cc.Sprite]
        }
    },

    // use this for initialization
    onLoad: function () {
        for (let i = 0; i < this.floatSprites.length; i++) {
            this.initSprite(this.floatSprites[i])
        }
    },

    initSprite(sprite) {
        sprite.originPosition = sprite.node.position.clone()
    },
    // called every frame, uncomment this function to activate update callback
    update: function () {
        const c = this.camera.node.convertToWorldSpaceAR(this.camera.cameraAt)
        // cc.log(rel)
        const me = this.node.convertToWorldSpaceAR(this.node.position)

        // const pInNode = this.node.convertToNodeSpace(rel)
        const rel = me.sub(c)

        this.floatSprites.forEach(sprite => {
            sprite.node.x = sprite.originPosition.x + rel.x / this.far

            if (this.parentBox) {
                const nodeBox = sprite.node.getBoundingBoxToWorld()

                if (!this.parentBox.intersects(nodeBox)) {
                    cc.log('a box on contain in parent')
                    cc.log('parent', this.parentBox)
                    cc.log('spite', nodeBox)

                    const xOfNode = this.floatSprites.map(floatSprite => floatSprite.node.position.x)
                    const x = Math.round(Math.max(...xOfNode))
                    sprite.node.position = cc.p(
                        x + this.randomBetween(this.minDistance, this.maxDistance),
                        this.randomBetween(this.minY, this.maxY)
                    )
                    cc.log(sprite.node.position)
                    this.initSprite(sprite)
                }
            }
        })
        this.floatSprites.sort((s1, s2) => s1.node.x - s2.node.x)


        const n = this.floatSprites.length
        if (n > 0) {
            const leftMostSprite = this.floatSprites[0]
            const rightMostSprite = this.floatSprites[n - 1]
            const parentBox = this.node.getBoundingBoxToWorld()

            const box = leftMostSprite.node.getBoundingBoxToWorld()

            if (!parentBox.intersects(box)) {
                cc.log('out bound dectived')
            }
        }
    },
    randomBetween(start, stop) {
        return start + (stop - start) * cc.random0To1()
    }
});
