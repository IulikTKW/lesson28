// const func = () => {
//     console.log('pass')
// }

// func()

// ((arg1, arg2) => {
//     console.log('IIFE', arg1 + arg2 )
// })(1, 2)


// for(let i = 0; i < 4; i++) {
//     const btn = document.createElement('button')
//     btn.innerText = `Button ${i}`
//     btn.onclick = function () {
//         console.log(i)
//     }
//     document.body.appendChild(btn)
// }

// const promiseTest = document.getElementById('promiseTest')

// let p = new Promise((resolve, reject) => {
//     let condition = false;

//     if(condition) {
//         resolve({ name: 'Alex'})
//     } else {
//         reject({ message: 'This user doesn\'t exist'})
//     }
// })

// p.then((user) => {
//     promiseTest.innerText = 'Username: ' + user.name
// }).catch((err) => {
//     promiseTest.innerText = err.message
// }).finally(() => {
//     console.log('Will show no metter what')
// })

// const p1 = new Promise((res, rej) => res('p1'))
// const p2 = new Promise((res, rej) => res('p2'))
// const p3 = new Promise((res, rej) => res('p3'))

// Promise.all([
//     p1,
//     p2,
//     p3
// ]).then(mess => console.log(mess)).finally(() => console.log('finaly'))

// Promise.race([
//     p1,
//     p2,
//     p3
// ]).then(mess => console.log(mess)).finally(() => console.log('finaly'))

const userID = 1
// +++++GET+++++++++++++++
// fetch(`https://jsonplaceholder.typicode.com/users/${userID}?`, {
//     method: 'GET'
// })
// .then((res) => res.json())
// .then((data) => console.log(data))
// .catch((err) => console.log(err))

// fetch(`https://jsonplaceholder.typicode.com/users?_limit=3`, {
//     method: 'GET'
// })
// .then((res) => res.json())
// .then((data) => console.log(data))
// .catch((err) => console.log(err))

// ++++++++POST++++++++++++

fetch(`https://jsonplaceholder.typicode.com/users`, {
    method: 'POST',
    body: JSON.stringify({
        name: 'Alex',
        email: 'alex@gmail.com',
        testEtst: 'test'
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
        service: 'Sales service'
    }

})
.then((res) => res.json())
.then((data) => console.log(data))
.catch((err) => console.log(err))


// 1. Practicat, GET, POST
// 2. De afisat pe pagina utilizatorii primiti de la GET
