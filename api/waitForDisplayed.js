describe('Learning API', () => {

    it('', () => {
        const FORM_ICON_HOME_SCREEN = '~Forms'
        const LOGIN_ICON = '~Login'
        const SWITCH_BTN = '~switch'

        // 0. go to the forms field
        $(LOGIN_ICON).click()

        // Wait somtime - 4 sconds -> Try manually click on the Form screen


        // 1. Toggle the Switch button
        $(SWITCH_BTN).waitForDisplayed({ timeout: 6000 })
        $(SWITCH_BTN).click()

        // 2. Wait a little to see result
        browser.pause(3000);
    });
});