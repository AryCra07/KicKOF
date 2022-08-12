import { KOFObject } from '/static/js/kof_object/base.js';

class Player extends KOFObject {
    constructor(root, info) {
        super();

        this.root = root;
        this.id = info.id;
        this.x = info.x;
        this.y = info.y;
        this.width = info.width;
        this.height = info.height;
        this.color = info.color;

        this.direction = 1; // 人物方向，1为右，-1为左

        this.vx = 0; // 玩家水平速度
        this.vy = 0; // 玩家竖直速度

        this.speedx = 550; // 运动水平速率
        this.speedy = -2300; // 跳起的初始速率

        this.gravity = 100; // 模拟重力

        // this.ctx = canvas.getContext('2d');
        this.ctx = this.root.game_map.ctx;
        this.pressed_keys = this.root.game_map.controller.pressed_keys;

        this.status = 3; // 0:原地不动 1:移动状态 3:跳跃 4:攻击 5:被打 6:死亡
    }

    start() {

    }

    update_control() {
        let w, a, s, d, space;
        if (this.id === 0) {
            w = this.pressed_keys.has('w');
            a = this.pressed_keys.has('a');
            s = this.pressed_keys.has('s');
            d = this.pressed_keys.has('d');
            space = this.pressed_keys.has(' ');
        } else {
            w = this.pressed_keys.has('ArrowUp');
            a = this.pressed_keys.has('ArrowLeft');
            s = this.pressed_keys.has('ArrowDown');
            d = this.pressed_keys.has('ArrowRight');
            space = this.pressed_keys.has('Enter');
        }

        if (this.status === 0 || this.status === 1) {
            if (w) {
                if (d) {
                    this.vx = this.speedx;
                } else if (a) {
                    this.vx = -this.speedx;
                } else {
                    this.vx = 0;
                }
                this.vy = this.speedy;
                this.status = 3;
            } else if (d) {
                this.vx = this.speedx;

                this.status = 1;
            } else if (a) {
                this.vx = -this.speedx;
                this.status = 1;
            } else {
                this.status = 0;
                this.vx = 0;
            }
        }
    }

    update_move() {
        this.vy += this.gravity;

        this.x += this.vx * this.timedelta / 1000;
        this.y += this.vy * this.timedelta / 1000;

        if (this.y > 450) {
            this.y = 450;
            this.vy = 0;
            this.status = 0;
        }

        if (this.x < 0) {
            this.x = 0;
        } else if (this.x + this.width > this.root.game_map.$canvas.width()) {
            this.x = this.root.game_map.$canvas.width() - this.width;
        }
    }

    update() {
        this.update_control();
        this.update_move();

        this.render();
    }

    render() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

export {
    Player
}