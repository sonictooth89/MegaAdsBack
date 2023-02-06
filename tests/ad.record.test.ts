import { AdRecord } from "../records/ad.record"

test('Can build AdRecord', () => {
    const ad = new AdRecord({
        name: 'Test Name',
        description: 'blah',
        url: 'https://megak.pl',
        price: 0,
        lat: 9,
        lon: 9,
    });

    expect(ad.name).toBe('Test Name');
    expect(ad.description).toBe('blah')
});

test('Validates invalid price', () => {
    expect(() => new AdRecord({
            name: 'Test Name',
            description: 'blah',
            url: 'https://megak.pl',
            price: -3,
            lat: 9,
            lon: 9,
    })).toThrow('Cena nie moze byc mniejsza niz 0 lub wieksza niz 9 999 999.')
})

//TODO - Check all the validation