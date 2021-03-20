import test, {Macro} from 'ava';

const macro: Macro<[number]> = (t, number) => {
    t.is(number, 5);
}

test('Number must be 5', macro, 4);
