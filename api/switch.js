describe('Learning API', () => {

    it('Toggle switch button', () => {

        const FORM_ICON_HOME_SCREEN = '~Forms'
        const SWITCH_BTN = '~switch'
        // 0. go to the forms field
        $(FORM_ICON_HOME_SCREEN).click()

        // 1. Toggle the Switch button
        $(SWITCH_BTN).click()

        // 2. Wait a little to see reult
        browser.pause(3000);
    });
});