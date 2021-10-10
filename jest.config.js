module.exports = {
    transform: {
        '^.+\\.test\\.ts$': 'ts-jest'
    },
    testRegex: "\\.test\\.(ts|js)$",
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json"
    ],
    globals: {
        "ts-jest": {
            'diagnostics': true
        }
    },
    // test 에서 import .. from ".." 사용하기 위해 필요
    preset: 'ts-jest'
};