# Usage of macro loses track of the test's line number

The repository show what happens when using a macro in plain JavaScript and TypeScript. 

## Proposal
On invocation of `test`, record the line number and include it in the report.

```

Number must be 5

Difference:

- 4
+ 5

› macro (typescript/helper/macro.ts:4:7)
```
