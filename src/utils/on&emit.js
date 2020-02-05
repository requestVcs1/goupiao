class Event {
    constructor() {
        this.arr = {};
    }
    on(type, fn) {
        // 实现该方法逻辑
        //判断是否有这一类
        if (!this.arr[type]) {
            //没有 创建 添加
            this.arr[type] = [];
        }
        //有 直接添加
        this.arr[type].push(fn);
    }
    emit(type) {
        // 实现该方法逻辑
        //判断是否有这一类
        if (this.arr[type]) {
            //对应类执行
            this.arr[type].forEach(item => {
                item();
            });
        } else {
            // 没有
            return '没有此订阅';
        }
    }
}
export default new Event();
