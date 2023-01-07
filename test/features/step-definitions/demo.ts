import { Given, When, Then } from "@cucumber/cucumber";
import chai from "chai"

Given(/^Google page is opened$/, async function() {
    await browser.url("https://www.google.com")
})

When(/^Search with (.*)$/, async function(searchItem) {
    await (await $('.gLFyf')).setValue(searchItem)
    await browser.keys("Enter")
})

Then(/^Click on the first search result$/, async function() {
    await (await $(`<h3>`)).click()
})

Then(/^URL should match (.*)$/, async function(ExpectedURL) {
    let actualURL = await browser.getUrl()
    // expect(ExpectedURL).toEqual(actualURL)
    chai.expect(actualURL).to.equal(ExpectedURL)
})