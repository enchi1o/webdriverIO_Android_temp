describe('Learning WebdriverIO API', () => {

    it('addValue API', () => {

        const LOGIN_ICON_HOME_SCREEN = '~Login'
        const EMAIL_TXT_FIELD = '~input-email'

        // 1. Click on Login on Home Screen
        $(LOGIN_ICON_HOME_SCREEN).click()

        // 2. Fill email text field by using addValue
        let email_txt_elem = $(EMAIL_TXT_FIELD)
        $(EMAIL_TXT_FIELD).addValue('a@');
        $(EMAIL_TXT_FIELD).addValue('.com');

        // 3. Demostrate about setValue
        $(EMAIL_TXT_FIELD).setValue('new@a.com');

        $(EMAIL_TXT_FIELD).clearValue();

        browser.pause(3000);
    });
});