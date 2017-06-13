//Author --Shobha Vajravelu

Homepage = function() {

    Homepage.prototype.getHeader = function () {
        return element(by.xpath('//*[@id="menu_main"]//a[text()="Products & Services"]')).getText();
    };
    Homepage.prototype.clickHeader = function () {
        element(by.xpath('//*[@id="menu_main"]//a[text()="Products & Services"]')).click();
    };

    Homepage.prototype.getMenuitem = function () {
        return element(by.xpath('//*[@id="menu_main"]//a[text()="isentia.mediaportal"]')).getText();
    };

    Homepage.prototype.clickMenuitem = function () {
        return element(by.xpath('//*[@id="menu_main"]//li/a[text()="isentia.mediaportal"]')).click();
    };

}
module.exports = new Homepage();