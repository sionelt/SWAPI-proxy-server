const request = require('../services/request.service')

module.exports = {
  async getAll() {
    try {
      const perPage = 10
      const totalPlanets = 61
      const totalPages = Math.ceil(totalPlanets / perPage)
      
      const planetPromises = [...Array(totalPages).keys()].map(page => request.get(`/planets/?page=${page + 1}`))

      const planetResponses = await Promise.all(planetPromises)

      const combinedPlanets = planetResponses.reduce((list, { data }) => list.concat(data.results), [])

      const residentPromises = combinedPlanets.map(({ residents }) => Promise.all(residents.map(url => request({ url }))))

      const residentResponses = await Promise.all(residentPromises)

      return combinedPlanets.map((planet, index) => {
        planet.residents = residentResponses[index].map(({ data }) => data.name)

        return planet
      })
    } catch (error) {
      throw error
    }
  },
}
// 5, 68, 81
