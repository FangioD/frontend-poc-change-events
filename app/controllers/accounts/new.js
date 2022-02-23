import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class AccountsNewController extends Controller {
    @tracked newName = '';
    @tracked newNickname = '';
    @tracked newPassword = '';
    @tracked newConfirmPassword = '';

    @service store;

    @action
    createAccount(event) {
        event.preventDefault();
        const account = this.store.createRecord('account', {
            name: this.newName,
            nickname: this.newNickname,
            password: this.newPassword,
            passwordConfirmation : this.newConfirmPassword
        });
        account.save().then(function(response){
            console.log(response);
            console.log("Resonse should be printed above");
          });

        this.newName = '';
        this.newNickname = '';
        this.newPassword = '';
        this.newConfrimPassword = '';
    }
}


