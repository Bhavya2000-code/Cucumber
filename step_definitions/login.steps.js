const {Given, When, Then} = require('@cucumber/cucumber');
const LoginPage = require('../pages/LoginPage');

Given('user launch the application', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.openApplication();
});

When('user enter the username and password', async function () {
  await this.loginPage.login(process.env.USERNAME, process.env.PASSWORD);
});

When('click the login button', async function () {
  await this.loginPage.clickButton();
});

Then('User enter into dashboard', async function () {
  // Write code here that turns the phrase above into concrete actions
});