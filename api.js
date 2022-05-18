const axios = require('axios').default;

const inst = axios.create({
    baseURL: 'http://93.95.97.34/api'
})

inst.interceptors.response.use(
    (res) => res,
    (err) => Promise.reject(err),
)

inst.interceptors.request.use((config) => {
    return {
        ...config,
        data: {
            page: 0,
            limit: 10,
            ...config.data,
        }
    }
})

const api = {
    getTasks() {
        return inst.post('/tasks', {
            filter: {},
            page: 0,
            limit: 10
        })
            .then((res) => {
                console.log(1);
                return res;
            })
            .catch((err) => {

            })
    },
    getAsyncTasks: async () => {
        try {
            const res = await inst.post('/tasks', {
                filter: {},
                page: 0,
                limit: 10
            })
    
            console.log(1);
    
            return res;
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = api;