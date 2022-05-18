const store = require('./store');

function render() {
    store.fetchTasks()
        .then(() => {
            console.log(3)
            return store.fetchTasks()
                .then(() => {
                    console.log(4)

                })
        })
        .then(() => {
            console.log(5)
        })

    // async/await
    async function fetch() {
        // Первый запрос
        await store.fetchAsyncTask2()
        console.log(3)
        // Второй запрос
        await store.fetchAsyncTask()
        console.log(4)
        // Третий запрос
        await store.fetchTasks()
        console.log(5)
    }

    fetch();
}

render();