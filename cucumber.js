module.exports = {
    default: {
        require: [
            "support/config.js",
            "support/hook.js",
            "step_definitions/**/*.js"
        ],
        paths: ["feature/**/*.feature"]
    }
}