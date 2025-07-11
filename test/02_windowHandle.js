describe('Window handle test', ()=>{
    it('Get & switch to window', async ()=>{
       await browser.url("https://demoqa.com/browser-windows")
        browser.click('#tabButton')
        browser.windowHandles(result =>{
            console.log("all windows: "+ result.value)
        })

        await browser.windowHandles(res =>{
            browser.switchWindow(res.value[1])
            browser.assert.urlEquals('https://demoqa.com/sample')
            browser.assert.textEquals('#sampleHeading', "This is a sample page")
            browser.switchToWindow(res.value[0])
            browser.assert.urlContains('browser-windows')
        })
     


    })
})