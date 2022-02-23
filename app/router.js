import EmberRouter from '@ember/routing/router';
import config from 'frontend-poc-change-events/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('books', function () {
    this.route('show');
    this.route('edit', {path: '/edit/:book_id'});
    this.route('new');
  });
  this.route('accounts', function() {
    this.route('new');
  });
});
