const peopleRoutes = require('./people/people.routes')
const planetRoutees = require('./planets/planets.routes')

module.exports = (Router) => {
  const route = Router()

  peopleRoutes(route)
  planetRoutees(route)

  return route
}
