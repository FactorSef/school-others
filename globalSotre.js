const api = require('./api');

class Store {
    tasks = [];
    users = [];
    selectedUser = null;
    selectedTask = null;

    constructor() {
        makeAutoObservable(this)
    }

    async fetchTasks({ filter, page, limit }) {
        this.tasks = await api.tasks({ filter, page, limit })
    }

    async selectTask(id) {
        this.selectTask = await api.task(id)
    }
}

module.exports = new Store();