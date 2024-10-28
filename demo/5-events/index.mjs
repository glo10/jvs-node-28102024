import { EventEmitter } from 'node:events'

const app = new EventEmitter()

// Rappel notation flechée
/**
 * "() =>" remplace le mot clé "function"
 * La même chose avec le mot clé function
 *  function hello(user) {}
 * */
const hello = (user) => {
    console.log(`Hello ${user.firstname} ${user.lastname}`)
}
// Ecoute d'un événement
app.on('app:start', (u) => {
    hello(u)
})

// Emission de l'événement app:start
setTimeout(() => {
    app.emit(
        'app:start', 
        { firstname: 'Glodie', lastname: 'Tshimini'}
    )
}, 5000)

console.log('App running')