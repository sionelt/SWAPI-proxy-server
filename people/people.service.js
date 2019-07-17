const request = require('../services/request.service')
const helpers = require('./people.helpers')

module.exports = {
  async getAll(sortBy) {
    try {
      const perPage = 10
      const totalPeople = 87
      const totalPages = Math.ceil(totalPeople / perPage)
      const requestPromises = [...Array(totalPages).keys()].map(page => request.get(`/people/?page=${page + 1}`))

      const responses = await Promise.all(requestPromises)

      const combinedPeople = responses.reduce((list, { data }) => list.concat(data.results), [])

      return sortBy ? helpers.sortPeople(combinedPeople, sortBy) : combinedPeople
    } catch (error) {
      throw error
    }
  },
}
