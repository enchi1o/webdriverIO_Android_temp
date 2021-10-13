import LoginFlow from "../../test_flows/account/Loginflow"

describe('Login Function', () => {

    it('should check email text field', () => {

        const LOGIN_ICON_HOME_SCREEN = '~Login'
        $(LOGIN_ICON_HOME_SCREEN).click()

        let email = "teo"
        let password = "..."

        let loginflow = new LoginFlow()

        loginflow.login_with_credentials(email, password)
        loginflow.verify_email_text_field(email)

    });
});