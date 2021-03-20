const dir = 'typescript/spec';

export default {
    environmentVariables: {
        TS_NODE_PROJECT: `${dir}/tsconfig.json`,
    },
    extensions: [
        'ts',
    ],
    files: [
        `${dir}/**/*.spec.ts`,
    ],
    require: [
        'ts-node/register',
    ],
};
