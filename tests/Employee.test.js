const Employee  = require('../lib/employee');

const employeeSmpl = new Employee ('Test', 1 , 'test@email.com', 'Employee', 'Zcordeiro')

describe('Employee', () => {
    it('has a name', () =>{
        expect(employeeSmpl.name).toEqual(expect.any(String));
        expect(employeeSmpl.name.length).toBeGreaterThan(2);
    });

    it('Has a numerical number as the ID', () => {
        expect(employeeSmpl.id).toEqual(expect.any(Number));
    });

    it('has an email id', () =>{
        expect(employeeSmpl.email).toEqual(expect.stringContaining('@'));
    });

})