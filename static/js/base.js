import { gameMap } from '/static/js/game_map/base.js'
import { Player } from '/static/js/player/base.js';

class KOF {
    constructor(id) {
        this.$kof = $('#' + id);
        // console.log(this.$kof);

        this.game_map = new gameMap(this);
        this.players = [
            new Player(this, {
                id: 0,
                x: 200,
                y: 0,
                width: 100,
                height: 200,
                color: 'blue',
            }),
            new Player(this, {
                id: 1,
                x: 800,
                y: 0,
                width: 100,
                height: 200,
                color: 'red',
            })
        ]
    }
}

export {
    KOF
}