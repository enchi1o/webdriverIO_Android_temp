describe('Learning WebdriverIO API', () => {

    it('should input username and password OK', () => {

        const LOGIN_ICON_HOME_SCREEN = '~Login'
        const EMAIL_TXT_FIELD = '~input-email'
        const PASSWORD_TXT_FIELD = '~input-password'
        const LOGIN_BTN = '~button-LOGIN'

        // 1. Click on Login on Home Screen
        $(LOGIN_ICON_HOME_SCREEN).click()

        // 2. Fill email text field
        $(EMAIL_TXT_FIELD).setValue('a@a.com')

        // 3. Fill password text field
        $(PASSWORD_TXT_FIELD).setValue('12345678')

        // 4. click on Login btn
        $(LOGIN_BTN).click()

    });
});