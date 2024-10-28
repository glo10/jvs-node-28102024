// Avant
// export default class User {
//     login() {
//         console.log('login')
//     }

//     subscribe() {
//         console.log('subscribe')
//     }

//     delete() {
//         console.log('delete')
//     }
// }
// Après
export function login() {
    console.log('login')
}

function subscribe() {
    console.log('subscribe')
}

export function erase() {
    console.log('delete')
}