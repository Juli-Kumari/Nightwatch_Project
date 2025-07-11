const { assert } = require("console")

describe('Test 01', ()=>{
    it('Click on Dropdown value', ()=>{
        browser.url("https://the-internet.herokuapp.com/dropdown")
        browser.element('css selector', "#dropdown").click()
        browser.element('css selector', "#dropdown option[value='1']").click()
        browser.assert.textEquals("#dropdown option[selected='selected']", 'Option 1')
    })
})