class BasePage {
    constructor(page){
        this.page=page;
    }
    async navigateTo(url){
        await this.page.goto(url);
    }
    async enterText(locator,text){
        await locator.fill(text);
    }
    async click(locator){
        await locator.click();
    }
}
module.exports=BasePage;