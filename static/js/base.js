import { gameMap } from '/static/js/game_map/base.js'
import { Kyo } from '/static/js/player/kyo.js';

class KOF {
    constructor(id) {
        this.$kof = $('#' + id);

        this.game_map = new gameMap(this);
        this.players = [
            new Kyo(this, {
                id: 0,
                x: 100,
                y: 0,
                width: 100,
                height: 200,
                color: 'blue',
            }),
            new Kyo(this, {
                id: 1,
                x: 1000,
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