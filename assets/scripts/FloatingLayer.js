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
        this.spriteFrames = this.atlas.getSpriteFrames()


        for (let i = 0; i < 4; i++) {
            const node = new cc.Node
            const sprite = node.addComponent(cc.Sprite)
            this.node.addChild(node)
            node.setPosition(-620, 0)
            this.floatSprites.push(sprite)

            this.initSprite(sprite)
        }
    },

    initSprite(sprite) {
        const randY = this.minY + cc.random0To1() * (this.maxY - this.minY)
        const distanceX = this.minDistance + cc.random0To1() * (this.maxDistance - this.minDistance)

        const i = Math.floor(Math.random() * this.spriteFrames.length)
        const frame = this.spriteFrames[i]
        cc.log(this.floatSprites.map(s => s.node.x))
        const maxX = Math.max(...this.floatSprites.map(s => s.node.x))
        cc.log(cc.p(maxX + distanceX, randY))
        sprite.spriteFrame = frame
        sprite.node.setPosition(cc.p(maxX + distanceX, randY))
        sprite.originPosition = cc.p(maxX + distanceX, randY)
    },
    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        const c = this.camera.node.convertToWorldSpaceAR(this.camera.cameraAt)
        // cc.log(rel)
        const me = this.node.convertToWorldSpaceAR(this.node.position)

        // const pInNode = this.node.convertToNodeSpace(rel)
        const rel = me.sub(c)

        this.floatSprites.forEach(s => {
            s.node.x = s.originPosition.x + rel.x / this.far
        })

    },
});
