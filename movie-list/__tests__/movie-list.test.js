const {Builder, Capabilities, By}  = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movie-list/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('add a movie', async () => {
    const searchTerm = 'Tenet'
    const inputField = await driver.findElement(By.xpath('//input'))
    await inputField.sendKeys('Tenet')
    await driver.sleep(3000)
    const movieButton = await driver.findElement(By.css('button'))
    await movieButton.click()
    await driver.sleep(3000)

    const theResult = await driver.findElement(By.xpath('//li/span')).getText()

    expect(theResult).toBe(searchTerm)
    await driver.sleep(3000)
}) 