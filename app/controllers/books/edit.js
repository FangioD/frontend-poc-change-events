import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { localCopy} from 'tracked-toolbox';
import { tracked } from '@glimmer/tracking';


export default class BooksEditController extends Controller {
    @service store;
    @service router;


    @localCopy('model.title') newTitle;
    @localCopy('model.isbn') newIsbn;
    @localCopy('model.abstract') newAbstract;



    @action
    editBook(event) {
      event.preventDefault();
      console.log(this.model.title);
      var editedTitle = this.newTitle;
      var editedIsbn = this.newIsbn;
      var editedAbstract = this.newAbstract;
      this.store.findRecord('book', this.model.id).then(function(book) {
        book.title = editedTitle;
        book.abstract = editedAbstract;
        book.isbn = editedIsbn;
        book.save();
      });
      this.router.transitionTo('books');
    }



}
