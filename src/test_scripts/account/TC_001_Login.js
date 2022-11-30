import { VALID_CREDS } from '../../test_data/account/TC_001_Login'
import LoginFlow from '../../test_flows/account/LoginFlow';


describe('Account Function', () => {

    it('should login successfully', () => {

        const { email, password } = VALID_CREDS

        LoginFlow
            .login_with_credentials(email, password)
            .verify_login_successfully()
    });
});