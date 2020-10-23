constants = require('./constants.js')

const {
    Stacks, Skills, Positions, OfficeLocations, Languages
} = constants

let emp1 = {
    name: "Bob Smith",
    phone: "+39393399393",
    email: "someemail@officename.ee",
    position: Positions.middle,
    isInVacation: false,
    officeLocation: OfficeLocations.Tallinn,
    stack: Stacks.fullstack,
    skillSet: [Skills.android, Skills.angular],
    languages: [Languages.javascript, Languages.matlab],
}


let emp2 = {
    name: "Anna McDonald",
    phone: "+39393399393",
    email: "someemail@officename.ee",
    position: Positions.middle,
    isInVacation: false,
    officeLocation: OfficeLocations.Tallinn,
    stack: Stacks.fullstack,
    skillSet: [Skills.ios, Skills.android, Skills.nodeJs],
    languages: [Languages.javascript, Languages.matlab],
}


let emp3 = {
    name: "Karen Black",
    phone: "+39393399393",
    email: "someemail@officename.ee",
    position: Positions.middle,
    isInVacation: false,
    officeLocation: OfficeLocations.Tartu,
    stack: Stacks.fullstack,
    skillSet: [Skills.reactNative, Skills.ios],
    languages: [Languages.javascript, Languages.matlab],
}


let emp4 = {
    name: "Arina Wallace",
    phone: "+39393399393",
    email: "someemail@officename.ee",
    position: Positions.senior,
    isInVacation: false,
    officeLocation: OfficeLocations.Tallinn,
    stack: Stacks.fullstack,
    skillSet: [Skills.spring, Skills.docker],
    languages: [Languages.javascript, Languages.matlab],
}


let emp5 = {
    name: "Timothy Wallace",
    phone: "+39393399393",
    email: "someemail@officename.ee",
    position: Positions.senior,
    isInVacation: false,
    officeLocation: OfficeLocations.Tallinn,
    stack: Stacks.fullstack,
    skillSet: [Skills.spring, Skills.sequelize],
    languages: [Languages.javascript, Languages.matlab],
}


let emp6 = {
    name: "Rebecca Smith",
    phone: "+39393399393",
    email: "someemail@officename.ee",
    position: Positions.middle,
    isInVacation: true,
    officeLocation: OfficeLocations.Tallinn,
    stack: Stacks.fullstack,
    skillSet: [Skills.spring, Skills.vue],
    languages: [Languages.javascript, Languages.matlab],
}

let emp7 = {
    name: "Lilith Smith",
    phone: "+39393399393",
    email: "someemail@officename.ee",
    position: Positions.junior,
    isInVacation: false,
    officeLocation: OfficeLocations.Narva,
    stack: Stacks.frontend,
    skillSet: [Skills.docker, Skills.sequelize],
    languages: [Languages.javascript, Languages.cpp, Languages.matlab],
}


const employees = [ emp1, emp2, emp3, emp4, emp5, emp6, emp7 ];

module.exports = employees