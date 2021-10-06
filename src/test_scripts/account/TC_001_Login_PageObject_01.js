import LoginPage from '../../page_object/account/Login'

describe('Account Function', () => {

    it('should raise an error for wrong credentials', () => {

        // 1. Click on Login Icon from Home Page

        const LOGIN_ICON_HOME_SCREEN = '~Login'
        $(LOGIN_ICON_HOME_SCREEN).click()

        // 2. Use Login Page Object to intract with elements

        LoginPage.email_txt_field.setValue("test")
        LoginPage.password_txt_field.setValue("test")
        LoginPage.login_btn.click()

        browser.pause(2000)
    });
});