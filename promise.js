function TestPromise(a, b) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const sum = a + b;
            if (sum > 0) {
                resolve(sum);
            } else {
                reject(sum);
            }
        });
    });

    return promise;
}

TestPromise(100, 200)
    .then((result) => {
        console.log('without promise', result)
        return new Promise((_resolve, reject) => {
            setTimeout(() => {
                console.log('in promise', result + 100)
                reject(result + 100)
            }, 1000);
        })
        

        // throw new Error(123)
        return result
    })
    .catch((result) => {
        console.log('err!!!!!!', result);

        return 0;
    })
    .then((res) => {
        console.log('new res', res)
        
        // throw new Error('lkjhgfdfghjk')
        return res + 1000
    })
    .catch((err) => {
        console.log(err.message)
        // Данная ячейка цепочки ничего не возврщает
    })
    .then((res) => {
        // Если catch не возвращает то res = undefinded
        // Если у нас нет ошибок и не
        // попадаем в catch то получаем
        // значение предыдущего then
        console.log(res)
    })
