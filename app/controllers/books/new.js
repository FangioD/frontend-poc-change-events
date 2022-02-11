import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class BooksNewController extends Controller {
  @tracked newTitle = '';
  @service store;

  @action
  createBook(event) {
    event.preventDefault();
    const book = this.store.createRecord('book', {
      title: this.newTitle,
      isbn: '',
      abstract: '',
    });
    book.save();
    this.newTitle = '';
  }
}
