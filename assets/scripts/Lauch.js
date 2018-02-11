import ProgressBar from "./ProgressBar"

cc.Class({
    extends: cc.Component,
    properties: {
        startButton: {
            displayName: 'start_button',
            default: null,
            type: cc.Button
        },
        titleBar: {
            default: null,
            type: cc.Node
        },
        loader: {
            type: cc.Node,
            default: null
        },
        progressBar: {
            type: ProgressBar,
            default: null
        },
        backgroudMusic:{
            url: cc.AudioClip,
            default: null
        }
        
    },

    // use this for initialization
    onLoad: function () {

        cc.audioEngine.playMusic(this.backgroudMusic)

        cc.loader.onProgress = (loaded, total) => {
            const percentage = Math.round(loaded / total)
            this.progressBar.setPercentage(percentage)
        }

        cc.director.preloadScene('game', () => {
            setTimeout(() => {
                this.startButton.node.active = true
                this.titleBar.active = true

                this.loader.active = false
            }, 100)
        })
    },

    startGame() {
        cc.director.loadScene('game')
    }
});
