# jup-on-chain-idl

```bash
$ yarn install
$ npx ts-node index.ts

```

Error:

```
/jup-on-chain-idl/node_modules/camelcase/index.js:52
        return input.replace(SEPARATORS_AND_IDENTIFIER, (_, identifier) => toUpperCase(identifier))
              ^
RangeError: Maximum call stack size exceeded
    at String.replace (<anonymous>)
    at postProcess (/jup-on-chain-idl/node_modules/camelcase/index.js:52:15)
    at camelCase (/jup-on-chain-idl/node_modules/camelcase/index.js:108:9)
    at /jup-on-chain-idl/node_modules/@coral-xyz/anchor/src/coder/borsh/idl.ts:134:31
    at Array.map (<anonymous>)
    at Function.typeDefLayout (/jup-on-chain-idl/node_modules/@coral-xyz/anchor/src/coder/borsh/idl.ts:133:44)
    at Function.fieldLayout (/jup-on-chain-idl/node_modules/@coral-xyz/anchor/src/coder/borsh/idl.ts:102:27)
    at /jup-on-chain-idl/node_modules/@coral-xyz/anchor/src/coder/borsh/idl.ts:150:29
    at Array.map (<anonymous>)
    at /jup-on-chain-idl/node_modules/@coral-xyz/anchor/src/coder/borsh/idl.ts:138:45
```