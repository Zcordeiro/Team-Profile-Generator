const Intern = require('../lib/intern');

const internSmpl = new Intern ('Test', 3 , 'test@email.com', 'Intern', 'UCF')

describe('Intern', () => {
    it('Has a name', () =>{
        expect(internSmpl.name).toEqual(expect.any(String));
        expect(internSmpl.name.length).toBeGreaterThan(2);
    });

    it('Has a numerical value as the ID', () => {
        expect(internSmpl.id).toEqual(expect.any(Number));
    });

    it('Has the correct character in email', () =>{
        expect(internSmpl.email).toEqual(expect.stringContaining('@'));
    });


})