const api = require('./api');

class Store {
    tasks = [];

    fetchTasks() {
        return api.getTasks()
            .then(({ data }) => {
                this.tasks = data;
                console.log(2)
            })
    }

    fetchAsyncTask() {
        return api.getAsyncTasks()
            .then(() => {
                this.tasks = data;
                console.log(2)
            })
    }

    async fetchAsyncTask2() {
        this.tasks = await api.getAsyncTasks()
        console.log(2);
    }
}

module.exports = new Store();