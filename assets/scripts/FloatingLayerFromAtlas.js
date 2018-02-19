import FloatLayer from "./FloatingLayer"

cc.Class({
    extends: FloatLayer,

    properties: {
        atlas: {
            default: null,
            type: cc.SpriteAtlas,
        },
        itemCount: {
            default: 1,
            type: cc.Integer,
        },
    },

    // use this for initialization
    onLoad: function () {
        this.spriteFrames = this.atlas.getSpriteFrames()

        const defaultX = -620

        for (let i = 0; i < 3; i++) {
            const node = new cc.Node()
            const sprite = node.addComponent(cc.Sprite)
            sprite.spriteFrame = this.spriteFrames[0]
            this.node.addChild(node)
            let x = defaultX
            if (this.floatNodes.length > 0) {
                x = Math.max(...this.floatNodes.map(floatNode => floatNode.position.x))
            }

            node.position = cc.p(
                x + this.randomBetween(this.minDistance, this.maxDistance),
                this.randomBetween(this.minY, this.maxY)
            )
            this.initNode(node)
            this.floatNodes.push(node)
        }
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
