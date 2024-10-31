const checkId = (req, res, next) => {
    const id = req.params.id
    if(/[0-9]+/.test(id)) {
        next()
    } else {
        res.status(404).json({ error : `${id} n'est pas un entier`})
    }
}

module.exports = {
    checkId
}