const {Builder, Capabilities, By} = require('selenium-webdriver');

require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

const {addMovie} = require('./functions');
const {deleteMovie} = require('./functions');
const {crossOutMovie} = require('./functions');

beforeEach(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html');
})

afterAll(async () => {
    await driver.quit();
})

test('Add a movie', async () => {
    await addMovie(driver);

    await driver.sleep(5000);
})


test('Crossout a movie', async () => {
    await crossOutMovie(driver);

    await driver.sleep(5000);
})

test('Delete a movie', async () => {
    await deleteMovie(driver);

    await driver.sleep(5000);
})

