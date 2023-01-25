const Engineer  = require('../lib/engineer');

const engineerSmpl = new Engineer ('Test', 2 , 'test@email.com', 'Engineer', 'Zcordeiro')

describe('Engineer', () => {
    it('Has a name', () =>{
        expect(engineerSmpl.name).toEqual(expect.any(String));
        expect(engineerSmpl.name.length).toBeGreaterThan(2);
    });

    it('Has a numerical value as the ID', () => {
        expect(engineerSmpl.id).toEqual(expect.any(Number));
    });

    it('Has the correct character in email', () =>{
        expect(engineerSmpl.email).toEqual(expect.stringContaining('@'));
    });

})