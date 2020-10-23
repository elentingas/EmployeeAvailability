constants = require('./constants.js')

const {
    Stacks, Skills, Positions, OfficeLocations, Languages
} = constants

const getAvailableMobileDevelopers = (employees) => {
    let resultList = []

    for (let employee of employees) {
        if (!employee.isInVacation) {
            let haveFoundMobileSkill = false;
            for (let skill of employee.skillSet){
                if (!haveFoundMobileSkill && (skill == Skills.ios || skill == Skills.android || skill == Skills.reactNative)) {
                        resultList.push(employee.name);
                        haveFoundMobileSkill = true;
                    }
            }
        }
    }
    return resultList;
}


const getAvailableWebDevelopers = (employees) => {
    let resultList = []

    for (let employee of employees) {
        if (!employee.isInVacation) {
            let haveFoundWebSkill = false;
            for (let skill of employee.skillSet){
                if (!haveFoundWebSkill && (skill == Skills.angular || skill == Skills.vue || skill == Skills.react)) {
                        resultList.push(employee.name);
                        haveFoundWebSkill = true;
                    }
            }
        }
    }
    return resultList;
}


const getAvailableSeniorDevelopers = (employees) => {
    let resultList = []

    for (let employee of employees) {
        if (!employee.isInVacation && employee.position == Positions.senior) {
            resultList.push(employee.name);
        }
    }
    return resultList;
}


const getBackendDevelopers = (employees) => {
    let resultList = []

    for (let employee of employees) {
        if (employee.stack == Stacks.backend || employee.stack == Stacks.fullstack) {
            resultList.push(employee.name);
        }
    }
    return resultList;
}


const getAvailableDevelopersOfLocation = (employees, location) => {
    let resultList = []

    for (let employee of employees) {
        if (!employee.isInVacation && employee.officeLocation == location) {
            resultList.push(employee.name);
        }
    }
    return resultList;
}


const getAvailableDevelopersForLanguage = (employees, language) => {
    let resultList = []

    for (let employee of employees) {
        if (!employee.isInVacation) {
            let knowsLanguage = false;
            for (let lang of employee.languages){
                if (!knowsLanguage && (lang == language)) {
                        resultList.push(employee.name);
                        haveFoundWebSkill = true;
                    }
            }
        }
    }
    return resultList;
}

module.exports = {
    getAvailableMobileDevelopers,
    getAvailableWebDevelopers,
    getAvailableSeniorDevelopers,
    getAvailableDevelopersOfLocation,
    getAvailableDevelopersForLanguage,
    getBackendDevelopers,
}

