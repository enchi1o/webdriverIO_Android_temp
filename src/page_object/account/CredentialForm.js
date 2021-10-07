import Login from "./Login"

const EMAIL_TXT_FIELD = '~input-email'
const PASSWORD_TXT_FIELD = '~input-password'

class CrendentialForm {

    wait_still_screen_displayed() {
        $(EMAIL_TXT_FIELD).waitForDisplayed()
    }

    get email_txt_field() {
        return $(EMAIL_TXT_FIELD)
    }

    get password_txt_field() {
        return $(PASSWORD_TXT_FIELD)
    }

    input_email(email) {
        $(EMAIL_TXT_FIELD).setValue(email)
        return this
    }

    input_password(password) {
        $(PASSWORD_TXT_FIELD).setValue(password)
        return this
    }

    verify_email_text_displayed(value) {
        expect(Login.email_txt_field).toHaveText(value, { trim: true })
        return this
    }

}
export default CrendentialForm