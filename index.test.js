service = require('./index.js')
employees = require('./employees.js')
constants = require('./constants.js')

const {
    Stacks, Skills, Positions, OfficeLocations, Languages
} = constants

const {
  getAvailableMobileDevelopers,
  getAvailableWebDevelopers,
  getAvailableSeniorDevelopers,
  getAvailableDevelopersOfLocation,
  getAvailableDevelopersForLanguage,
  getBackendDevelopers,
 } = service

test('getAvailableMobileDevelopers works correctly', async () => {
  const result = getAvailableMobileDevelopers(employees)

  expect(result).toEqual(
    [ "Bob Smith", "Anna McDonald", "Karen Black" ]
  )
});


test('getAvailableWebDevelopers works correctly', async () => {
  const result = getAvailableWebDevelopers(employees)

  
  expect(result).toEqual(
    [ "Bob Smith" ]
  )
});


test('getAvailableSeniorDevelopers works correctly', async () => {
  const result = getAvailableSeniorDevelopers(employees)

  expect(result).toEqual(
    [ "Arina Wallace", "Timothy Wallace" ]
  )
});



test('getAvailableDevelopersOfLocation works correctly', async () => {
  const result = getAvailableDevelopersOfLocation(employees, OfficeLocations.Tartu)

  expect(result).toEqual(
    [ "Karen Black" ]
  )
});



test('getAvailableDevelopersForLanguage works correctly', async () => {
  const result = getAvailableDevelopersForLanguage(employees, Languages.cpp)

  expect(result).toEqual(
    [ "Lilith Smith" ]
  )
});



test('getBackendDevelopers works correctly', async () => {
  const result = getBackendDevelopers(employees)

  let names = [ ...employees.map(e => e.name) ]
  names.pop()
  expect(result).toEqual(
    names
  )
});


