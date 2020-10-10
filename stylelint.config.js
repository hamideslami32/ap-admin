module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-scss'
    ],
    // add your custom config here
    // https://stylelint.io/user-guide/configuration
    rules: {
        'at-rule-no-unknown': true,
        'indentation': 4,
    // 'scss/at-rule-no-unknown': true
    }
}
