import {Macro} from 'ava';

export const macro: Macro<[number]> = (t, number) => {
    t.is(number, 5);
}
