var homepage = require('../pageobjects/home.page.js');
var mediapage = require('../pageobjects/media.page.js');
var dataurl = require('../testdata/url.json');
var expectedmodules=['Connect' ,'News and Analytics' ,'Social' ];
describe('iSentia', function() {

    beforeEach(function () {
        browser.ignoreSynchronization = true;
    });

    it('validate if website is launched', function() {
        browser.driver.get(dataurl.homeurl);
        expect(browser.driver.getTitle()).toEqual('Media Monitoring & Analysis Tools & Services +Social Australia | Isentia');
    });
    it('validate if homepage is loaded and header is displayed', function() {
       expect('PRODUCTS & SERVICES').toEqual(homepage.getHeader());
    });

    it('validate if required menuitem is displayed ', function() {
        homepage.clickHeader();
        expect('isentia.mediaportal').toEqual(homepage.getMenuitem());
    });

    it('validate when clicked on menu item mediaportal is displayed', function() {
        homepage.clickMenuitem();
        expect('isentia.mediaportal').toEqual(mediapage.readMediaheader());
    });

    it('validate if module header is displayed ', function() {
        expect('Mediaportal’s 3 Modules work together for a complete media intelligence software solution').toEqual(mediapage.readModuleheader());
    });

    it('validate if number of modules is three ', function() {
        expect(3).toEqual(mediapage.noOfmodules());
    });
    
    it('validate if all the three modules are displayed with text',function () {
        for(var i=0;i<3;i++) {
           expect(mediapage.readAllmodule(i)).toBe(expectedmodules[i]);
        }
    })
});