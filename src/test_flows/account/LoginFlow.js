import LoginPage from '../../page-objects/account/Login'
import NavBar from '../../page-objects/commom/NavBar'
import LoginMessagePopup from '../../page-objects/account/LoginMessagePopup'

class LoginFlow {


    login_with_credentials(email, password) {
        NavBar.login_icon.click()
        LoginPage.email_txt_field.setValue(email)
        LoginPage.password_txt_field.setValue(password)
        LoginPage.click_on_login_btn()

        return this;
    }

    verify_login_successfully() {

        const expected_msg_title = "Success"
        const expected_msg_content = "You are logged in!"

        expect(LoginMessagePopup.msg_title).toHaveText(expected_msg_title)
        expect(LoginMessagePopup.msg_content).toHaveText(expected_msg_content)
        LoginMessagePopup.accept_btn.click()
    }


}
export default new LoginFlow()