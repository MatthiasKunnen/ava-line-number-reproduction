import test from 'ava';

import {macro} from '../helper/macro';

test('Number must be 5', macro, 4);
