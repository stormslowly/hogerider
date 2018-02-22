module.exports = {
    "extends": "airbnb-base",
    rules: {
        quotes: 0,
        semi: 0,
        indent: ["error", 4],
        "object-shorthand": 0,
        "func-names": 0,
        "comma-dangle": [0, {
            "arrays": "never",
            "objects": "never",
            "imports": "never",
            "exports": "never",
            "functions": "ignore",
        }],
        "no-plusplus": 0,
        "prefer-destructuring": 0,
        "no-param-reassign": 0,
        "arrow-parens": 0,
        "no-mixed-operators": 0,
        "import/prefer-default-export": 0,
        "no-bitwise": 0
    },
    globals: {
        cc: true,
        cp: true
    }

};