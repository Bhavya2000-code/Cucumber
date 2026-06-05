const BasePage = require("./BasePage");
class LoginPage extends BasePage{
    constructor(page){
        super(page);
        this.usernameInput=page.locator("#user-name");
        this.passwordInput=page.locator("#password");
        this.loginButton=page.locator("#login-button");
    }

    async openApplication(){
        await this.navigateTo(process.env.BASE_URL);
        await this.page.waitForSelector('#user-name', { timeout: 10000 });
}
    async login(username,password){
        await this.enterText(this.usernameInput,username);
        await this.enterText(this.passwordInput,password);
    }
    async clickButton(){
        await this.click(this.loginButton);
    }

}
module.exports=LoginPage;