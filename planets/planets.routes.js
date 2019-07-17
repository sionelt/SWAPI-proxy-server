const PlanetsService = require('./planets.service')

module.exports = route => {
  route.get('/planets', async (req, res, next) => {
    try {
      const planets = await PlanetsService.getAll()

      res.json({
        success: true,
        planets
      })
    } catch (error) {
      next(error)
    }
  })
}
