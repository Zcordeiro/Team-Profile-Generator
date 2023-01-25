const Employee  = require('../lib/employee');

const employeeSmpl = new Employee ('Test', 1 , 'test@email.com', 'Employee', 'Zcordeiro')

describe('Employee', () => {
    it('Has a name', () =>{
        expect(employeeSmpl.name).toEqual(expect.any(String));
        expect(employeeSmpl.name.length).toBeGreaterThan(2);
    });

    it('Has a numerical value as the ID', () => {
        expect(employeeSmpl.id).toEqual(expect.any(Number));
    });

    it('Has the correct character in email', () =>{
        expect(employeeSmpl.email).toEqual(expect.stringContaining('@'));
    });

})