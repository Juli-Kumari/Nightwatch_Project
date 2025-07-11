describe('Slider movement', ()=>{
    it('Slide', async ()=>{
       
browser.url('https://demoqa.com/slider')
.maximizeWindow()
browser.moveToElement('xpath', "//input[@type='range']", 10, 10)
.mouseButtonDown()
.moveTo(null, 100, 0)
.mouseButtonUp()


    })
})