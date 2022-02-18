import Service from '@ember/service';
import fetch from 'fetch';

export default class RegistrationService extends Service {

    post_account(name, nickname, password, password_confirm){
        return 'New Account Created';
    }

    patch_current_account_password(old_password, new_password, new_password_confirm){
        return 'Password changed';
    }

    delete_current_account(){
        return 'Account Deleted';
    }

    update_account(id){
        return 'Account Updated';
    }

    delete_account(id){
        return 'Account Deleted';
    }
}
