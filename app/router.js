import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('protected', function () {
    this.route('configuration', function () {
      this.route('roles', function () {
      });
    });
  });
  this.route('login');
  this.route('sign-up');
  this.route('protected-error');
});

export default Router;
