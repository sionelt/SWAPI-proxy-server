const PeopleService = require('./people.service')

module.exports = route => {
  route.get('/people', async (req, res, next) => {
    const { sortBy } = req.query
    
    try {
      const people = await PeopleService.getAll(sortBy)

      res.json({
        success: true,
        people
      })
    } catch (error) {
      next(error)
    }
  })
}
