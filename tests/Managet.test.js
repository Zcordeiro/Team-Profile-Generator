const { number } = require('yargs');
const Manager = require('../lib/Manager');

const managerSmpl = new Manager ('Test', 4 , 'test@email.com', 'Manager', 109)

describe('Manager', () => {
    it('Has a name', () =>{
        expect(managerSmpl.name).toEqual(expect.any(String));
        expect(managerSmpl.name.length).toBeGreaterThan(2);
    });

    it('Has a numerical number as the ID', () => {
        expect(managerSmpl.id).toEqual(expect.any(Number));
    });

    it('Has an email id', () =>{
        expect(managerSmpl.email).toEqual(expect.stringContaining('@'));
    });

})
