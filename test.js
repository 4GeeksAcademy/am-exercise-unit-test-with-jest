// importar la función sum del archivo app.js
const { fromEuroToDollar } = require('./app.js');
const { fromDollarToYen } = require('./app.js');
const { fromYenToPound } = require('./app.js');

// comienza tu primera prueba
test('3 DOLARES SON 2.5 EUROS', () => {
    let total = fromEuroToDollar(3);

    expect(total).toBe(3/1.2);
});

test('3 DOLARES SON 319.75 YEN', () => {
    let total = fromDollarToYen(3);

    expect(total).toBe((3/1.2)*127.9);
});

test('3 DOLARES SON 2 POUND', () => {
    let total = fromYenToPound(3);

    expect(total).toBe((3/1.2)*0.8);
});