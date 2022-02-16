import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class BooksNewController extends Controller {
  @tracked newTitle = '';
  @tracked newAbstract = '';
  @tracked newIsbn = '';

  @service store;

  @action
  createBook(event) {
    event.preventDefault();
    const book = this.store.createRecord('book', {
      title: this.newTitle,
      isbn: this.newIsbn,
      abstract: this.newAbstract,
    });
    book.save();
    console.log(book);
    this.newTitle = '';
    this.newAbstract= '';
    this.newIsbn = '';
  }
}
