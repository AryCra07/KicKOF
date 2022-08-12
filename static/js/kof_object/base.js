let KOF_OBJECTS = [];

class KOFObject {
    constructor() {
        KOF_OBJECTS.push(this);
        this.timedelta = 0;
        this.has_call_start = false;
    }

    start() { // 初始执行一次

    }

    update() { // 每一帧执行一次

    }

    destroy() { // 删除当前对象
        for (let i in KOF_OBJECTS) {
            if (KOF_OBJECTS[i] == this) {
                KOF_OBJECTS.splice(i, 1);
                break;
            }
        }
    }
}

let last_timestamp;

let KOF_OBJECTS_FRAME = (timestamp) => {
    for (let obj of KOF_OBJECTS) {
        if (!obj.has_call_start) {
            obj.start();
            obj.has_call_start = true;
        } else {
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }

    last_timestamp = timestamp;
    requestAnimationFrame(KOF_OBJECTS_FRAME);
}

requestAnimationFrame(KOF_OBJECTS_FRAME);

export {
    KOFObject
}