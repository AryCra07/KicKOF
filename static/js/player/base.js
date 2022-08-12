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

        this.vx = 0;
        this.vy = 0;

        this.speedx = 0; // 水平速度
        this.speedy = 1000; // 跳起的初始速度

        this.gravity = 50; // 模拟重力

        this.ctx = canvas.getContext('2d');
        this.status = 3; // 0:原地不动 1:前进 2:后退 3:跳跃 4:攻击 5:被打 6:死亡
    }

    start() {

    }

    move() {
        this.vy += this.gravity;

        this.x += this.vx * this.timedelta / 1000;
        this.y += this.vy * this.timedelta / 1000;

        if (this.y > 450) {
            this.y = 450;
            this.vy = 0;
        }
    }

    update() {
        this.move();
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