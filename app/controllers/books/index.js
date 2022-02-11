import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BooksIndexController extends Controller {
  @service store;

  @action
  removeBook(book, event) {
    event.preventDefault();
    book.destroyRecord();
  }
}
