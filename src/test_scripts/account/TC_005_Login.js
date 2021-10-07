import Login from "../../page_object/account/Login";

describe('Login Function', () => {

    it('should verify email text after inout', () => {

        const LOGIN_ICON_HOME_SCREEN = '~Login'
        $(LOGIN_ICON_HOME_SCREEN).click()

        Login
            .input_email("jacky")
            .input_password("...")
            .click_on_login_btn()
        Login.verify_email_text_displayed("jacky")
        // expect(Login.email_txt_field).toHaveText("jacky", { trim: true })

    });

});