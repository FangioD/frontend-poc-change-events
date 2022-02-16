import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BooksEditRoute extends Route {
    @service store

    model({ book_id }) {
        return this.store.findRecord("book", book_id);
    }

    resetController(controller, isExiting, transition) {
        if (isExiting && transition.targetName !== 'error') {
            controller.set('newTitle', controller.model.title);
            controller.set('newIsbn', controller.model.isbn);
            controller.set('newAbstract', controller.model.abstract);
        }
    }
}
