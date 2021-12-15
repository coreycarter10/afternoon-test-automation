const {By} = require('selenium-webdriver');

const addMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Back to the Future');

    await driver.findElement(By.xpath('//button')).click();

    const movie = await driver.findElement(By.xpath('//li'));

    const displayed = movie.isDisplayed();

    expect(displayed).toBeTruthy();
}

const deleteMovie = async (driver) => {
    const movie = 'Back to the Future';

    await driver.findElement(By.css('input')).sendKeys(movie);

    await driver.findElement(By.css('button')).click();

    const deleteBtn = await driver.findElement(By.xpath('//li/button'));

    deleteBtn.click();

    const message = await driver.findElement(By.css('aside')).getText();

    expect(message).toEqual(`${movie} deleted!`);
}

const crossOutMovie = async (driver) => {
    const movie = 'Back to the Future';

    await driver.findElement(By.css('input')).sendKeys(movie);

    await driver.findElement(By.css('button')).click();
    await driver.findElement(By.css('span')).click();

    const checked = await driver.findElement(By.className('checked'));
    const displayed = checked.isDisplayed();

    expect(displayed).toBeTruthy();
}

module.exports = {
    addMovie,
    deleteMovie,
    crossOutMovie
}