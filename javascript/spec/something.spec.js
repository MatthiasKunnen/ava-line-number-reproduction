const test = require('ava');

const macro = (t, number) => {
    t.is(number, 5);
}

test('Number must be 5', macro, 4);
