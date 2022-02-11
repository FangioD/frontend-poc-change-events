import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BooksIndexRoute extends Route {
  @service store;

  model() {
    /*debugger
        return [{
            title: "Moby Dick"
        },{
            title: "Book 2"
        }];
        */

    return this.store.findAll('book');
  }
}
