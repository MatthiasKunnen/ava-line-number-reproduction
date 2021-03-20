# Usage of macro loses track of the test's line number

The repository show what happens when using a macro in plain JavaScript and TypeScript. 

## Proposal
On invocation of `test`, record the line number and include it in the report.

```
Number must be 5

typescript/spec/something.spec.ts:4 // <-- make this number the line number of the test

3: const macro: Macro<[number]> = (t, number) => {
4:     t.is(number, 5);                           
5: }

Difference:

- 4
+ 5

› macro (typescript/spec/something.spec.ts:4:7)
```
