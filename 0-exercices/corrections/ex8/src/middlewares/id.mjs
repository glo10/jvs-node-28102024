export const checkID = (req, res, next) => {
  const id = req.params.id
  if (req.params.id && !/\d+/.test(req.params.id)) {
    res.status(404)
    res.render('error', {
      message: `${id} doit être numérique`
    })
  }
  next()
}