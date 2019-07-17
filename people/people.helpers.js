const sortPeople = (people, sortBy) => {
  return [...people].sort((personA, personB) => {
    const stripCommas = str => str.replace(/,/g, '')

    const personASortValue = isNaN(stripCommas(personA[sortBy])) ? personA[sortBy] : parseFloat(stripCommas(personA[sortBy]))
    const personBSortValue = isNaN(stripCommas(personB[sortBy])) ? personB[sortBy] : parseFloat(stripCommas(personB[sortBy]))

    if ((personASortValue === 'unknown' && personBSortValue !== 'unknown')) {
      return 1
    }

    if (personASortValue === personBSortValue) {
      return 0
    }

    return personASortValue > personBSortValue ? 1 : -1
  })
}

module.exports = {
  sortPeople,
}
