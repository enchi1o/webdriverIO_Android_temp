import CrendentialForm from "./CredentialForm"

const LOGIN_BTN = '~button-LOGIN'

class Login extends CrendentialForm {

    wait_still_screen_displayed() {
        $(LOGIN_BTN).waitForDisplayed()
    }

    click_on_login_btn() {
        $(LOGIN_BTN).click()
    }
}

export default new Login()