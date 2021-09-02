describe('Learning WebdriverIO API', () => {

    it('learn getValue API', () => {

        const FORM_IOCN_HOME_SCREEN = '~Forms'
        const INPUT_TXT = '~text-input'
        const INPUT_TXT_DISPLAYED = '~input-text-result'
        // 0.Click on Login icon from home screen
        $(FORM_IOCN_HOME_SCREEN).click();

        // 1. Try to input some values in text field
        $(INPUT_TXT).setValue('abc');

        // 2. Get the value from the field [you have typed]
        let displayed_text = $(INPUT_TXT_DISPLAYED).getText()

        // 3. Print out that value
        console.log('Inpyt Text: ', displayed_text);

        browser.pause(3000);
    });
});