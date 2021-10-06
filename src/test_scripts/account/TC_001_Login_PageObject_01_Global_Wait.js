import LoginPage from '../../page_object/account/LoginWithGlobalWait'

describe('Account Function', () => {

    it('should raise an error for wrong credentials', () => {

        // 1. Click on Login Icon from Home Page

        const LOGIN_ICON_HOME_SCREEN = '~Login'
        $(LOGIN_ICON_HOME_SCREEN).click()

        // 2. Use Login Page Object to intract with elements
        LoginPage.wait_still_screen_displayed()
        LoginPage.email_txt_field.setValue("teo")
        LoginPage.password_txt_field.setValue("123")
        LoginPage.login_btn.click()

        browser.pause(2000)
    });
});