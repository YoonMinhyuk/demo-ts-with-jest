module.exports = {
    transform: {
        '^.+\\.test\\.ts$': 'ts-jest'
    },
    testRegex: "\\.test\\.(ts|js)$",
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "json"
    ],
    globals: {
        "ts-jest": {
            "diagnostics": true
        }
    }
};