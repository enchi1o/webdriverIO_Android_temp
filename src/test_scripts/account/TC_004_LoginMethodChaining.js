import LoginPage from "../../page_object/account/LoginWithMethodChaining"

describe('Learn Page Object', () => {

    it('should use method chaining successfully', () => {

        const LOGIN_ICON_HOME_SCREEN = '~Login'
        $(LOGIN_ICON_HOME_SCREEN).click()

        LoginPage
            .wait_screen_displayed()
            .input_email('jacky')
            .input_password('123')
            .click_on_login_button()
            .get_dashboard_name()
    });
});