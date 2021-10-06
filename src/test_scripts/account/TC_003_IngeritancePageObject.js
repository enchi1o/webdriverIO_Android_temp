import LoginPage from '../../page_object/account/Login'
describe('Account Function', () => {

    it('should use inherited PO succesfully', () => {

        const LOGIN_ICON_HOME_SCREEN = '~Login'
        $(LOGIN_ICON_HOME_SCREEN).click()

        LoginPage.wait_still_screen_displayed()
        LoginPage.email_txt_field.setValue('test')
        LoginPage.password_txt_field.setValue('...')
        LoginPage.login_btn.click();
    });
});