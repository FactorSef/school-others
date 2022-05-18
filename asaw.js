const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const sum = 100;
        if (sum > 0) {
            resolve(sum);
        } else {
            reject(sum);
        }
    });
});

async function foo() {
    let res = await bar();
    console.log(res);
}

async function bar() {
    return 200;
}

foo()
    .then((res) => {
        console.log('new', res)
    })
    .catch((res = undefined) => {

    })