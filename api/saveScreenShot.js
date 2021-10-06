describe('Learning API', () => {

    it('should take screenshot', () => {

        const FORM_ICON_HOME_SCREEN = '~Forms'
        const SWITCH_BTN = '~switch'

        // 0. go to the forms field
        $(FORM_ICON_HOME_SCREEN).click()

        // 1. Take a picture
        browser.saveScreenshot("./screenshot/API_Learning_saveScreensht.png");

        // 2. Take a picture Switch button
        $(SWITCH_BTN).saveScreenshot("./screenshot/SwitchButton.png");
    });
});