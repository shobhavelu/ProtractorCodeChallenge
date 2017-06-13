//Author --Shobha Vajravelu

Mediapage = function() {

    var countModule=element.all(by.xpath('//*[@id="product"]//div[@class="well well-lg"]//strong'));

    Mediapage.prototype.readMediaheader = function () {
        return element(by.xpath('//*[@id="product"]//h2[text()="isentia.mediaportal"]')).getText();
    };

    Mediapage.prototype.readModuleheader = function () {
        return element(by.xpath('//*[@id="product"]//h1[2]/strong')).getText();
    };

    Mediapage.prototype.noOfmodules = function () {
        return countModule.count();
    };

    Mediapage.prototype.readAllmodule = function (index) {
        return countModule.getText().then(function (text) {
            return text[index];
        })
    }
}
module.exports = new Mediapage();