import { gameGravity, SpriteTag } from './lib/common'

const groundHeight = -400
cc.Class({
    extends: cc.Component,

    properties: {
    },
    onLoad: function () {

        cc.director.getPhysicsManager().enabled = true;

        cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit |
            cc.PhysicsManager.DrawBits.e_pairBit |
            cc.PhysicsManager.DrawBits.e_centerOfMassBit |
            cc.PhysicsManager.DrawBits.e_jointBit |
            cc.PhysicsManager.DrawBits.e_shapeBit;

        cc.director.getPhysicsManager().gravity = cc.p(0, gameGravity);


    }
});
