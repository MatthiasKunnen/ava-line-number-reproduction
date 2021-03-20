const test = require('ava');

const {macro} = require('../helper/macro');

test('Number must be 5', macro, 4);
