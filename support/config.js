require('dotenv').config();
const { setWorldConstructor, setDefaultTimeout } = require("@cucumber/cucumber");

setDefaultTimeout(60 * 1000);

class CustomWorld {
    constructor() {
        this.browser = null;
        this.context = null;
        this.page = null;
    }
}

setWorldConstructor(CustomWorld)