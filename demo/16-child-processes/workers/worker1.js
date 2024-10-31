process.on('message', (data) => {
    console.log('data received from parent', data)
    if(data.task === 'compute') {
        // Pour simuler un traitement et avoir au moins 3s avant de répondre au parent
        setTimeout(() => {
            // Le processus enfant travail
            process.send({ result: `J'ai bien travaillé pour toi ${data.user.name}`})
        }, 3000)
    } else if(data.task === 'find') {
        setTimeout(() => {
            // Le processus enfant travail
            process.send({ result: `J'ai trouvé ça .... à partir du nombre ${data.nb}`})
            // fermeture du processus enfant
            process.exit(1)
        }, 4500)
    }
})