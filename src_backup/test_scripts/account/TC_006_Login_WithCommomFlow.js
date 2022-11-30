import LoginFlow from "../../test_flows/account/Loginflow"
import testData from "../../test_data/account/TC_006_Login_WithCommomFlow"

describe('Login Function', () => {

    it('should check email text field', () => {

        const LOGIN_ICON_HOME_SCREEN = '~Login'
        $(LOGIN_ICON_HOME_SCREEN).click()

        const { INVALID_CREDS } = testData.loginData
        const { email, password } = INVALID_CREDS


        LoginFlow.login_with_credentials(email, password)
        LoginFlow.verify_email_text_field(email)

    });
});