cc.Class({
    extends: cc.Component,

    properties: {
        bar: {
            default: null,
            type: cc.Node
        },
        fullWidth: {
            default: 800
        }
    },

    // use this for initialization
    onLoad: function () {

    },

    setPercentage(p) {
        cc.log(p)
        this.bar.scaleX = Math.min(p,1) 
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
