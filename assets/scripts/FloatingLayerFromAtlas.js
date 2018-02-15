import FloatLayer from "./FloatingLayer"


cc.Class({
    extends: FloatLayer,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        atlas: {
            default: null,
            type: cc.SpriteAtlas
        },
        itemCount: {
            default: 1,
            type: cc.Integer
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

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
