const HONE_ICON = '~Home'
const FORM_ICON = '~Forms'
const LOGIN_ICON = '~Login'
const WEBVIEW_ICON = '~Webview'
const SWIPE_ICON = '~Swipe'

class NavBar {

    wait_until_screen_displayed() {
        $(HONE_ICON).waitForDisplayed()
    }

    get home_icon() {
        return $(HONE_ICON)
    }

    get form_icon() {
        return $(FORM_ICON)
    }

    get login_icon() {
        return $(LOGIN_ICON)
    }

    get webview_icon() {
        return $(WEBVIEW_ICON)
    }

    get swipe_icon() {
        return $(SWIPE_ICON)
    }
}
export default new NavBar()