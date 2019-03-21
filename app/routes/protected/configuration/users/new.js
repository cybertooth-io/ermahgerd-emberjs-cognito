import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default class New extends Route {
  model() {
    return hash({
      roles: this.store.query('role', { sort: 'name' })
    })
  }
}
