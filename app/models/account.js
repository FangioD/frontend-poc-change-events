import Model, { attr } from '@ember-data/model';

export default class AccountModel extends Model {
  @attr() name;
  @attr() nickname;
  @attr() password;
  @attr() passwordConfirmation;
}
