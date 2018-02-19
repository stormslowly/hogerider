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
        floatNodes: {
            visible: true,
            default: [],
            type: [cc.Node]
        }
    },

    // use this for initialization
    onLoad: function () {
        for (let i = 0; i < this.floatNodes.length; i++) {
            this.initNode(this.floatNodes[i])
            cc.log(this.floatNodes[i])
        }
    },

    initNode(node) {
        node.originPosition = node.position.clone()
    },
    // called every frame, uncomment this function to activate update callback
    update: function () {
        const c = this.camera.node.convertToWorldSpaceAR(this.camera.cameraAt)

        const me = this.node.convertToWorldSpaceAR(this.node.position)
        const rel = me.sub(c)

        this.floatNodes.forEach(node => {
            node.x = node.originPosition.x + rel.x / this.far
        })
        this.floatNodes.sort((s1, s2) => s1.x - s2.x)

        const n = this.floatNodes.length
        if (n > 0) {
            const leftMostSprite = this.floatNodes[0]
            const rightMostSprite = this.floatNodes[n - 1]

            const contentWidth = leftMostSprite.getContentSize().width
            const viewWidth = this.node.getContentSize().width

            if (leftMostSprite.x < -0.5 * (viewWidth + contentWidth)) {
                const x = rightMostSprite.originPosition.x
                leftMostSprite.setPosition(cc.p(
                    x + this.randomBetween(this.minDistance, this.maxDistance),
                    this.randomBetween(this.minY, this.maxY)
                ))
                this.initNode(leftMostSprite)
            }
        }
    },
    randomBetween(start, stop) {
        return start + (stop - start) * cc.random0To1()
    }
});
