const Engineer  = require('../lib/engineer');

const engineerSmpl = new Engineer ('Test', 2 , 'test@email.com', 'Engineer', 'Zcordeiro')

describe('Engineer', () => {
    it('has a name', () =>{
        expect(engineerSmpl.name).toEqual(expect.any(String));
        expect(engineerSmpl.name.length).toBeGreaterThan(2);
    });

    it('Has a numerical number as the ID', () => {
        expect(engineerSmpl.id).toEqual(expect.any(Number));
    });

    it('has an email id', () =>{
        expect(engineerSmpl.email).toEqual(expect.stringContaining('@'));
    });

})