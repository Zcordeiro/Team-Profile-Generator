const Employee = require("./employee");


class Inten extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school;
    }



getSchool() {
    return this.school;
}

getRole() {
    return "Inten";
}

}

module.exports = Inten;