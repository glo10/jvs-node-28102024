const { fork }  = require('node:child_process')
const { resolve } = require('path')
const worker1 = fork(resolve(__dirname, 'workers', 'worker1.js'))

// Réponse du processus enfant au parent

worker1.on('message', (data) => {
    console.log('Donnée reçu par le processus enfant', data)
})

worker1.on('close', () => {
    console.log('Enfant a fini son travail')
})
// Sous-traitement des tâches à l'enfant au worker1
worker1.send({ task : 'compute', user: { name: 'Glodie'}})
worker1.send({ task : 'find', nb: 1000 })