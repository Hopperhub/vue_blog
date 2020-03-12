export class EventBus {
    constructor() {
        this.cb = {}
    }
    $on(name, fn) {
        this.cb[name] = this.cb[name] || [];
        this.cb[name].push(fn);
    }
    $emit(name, args) {
        if (this.cb[name]) this.cb[name].forEach(fn => fn(args));
    }
}
