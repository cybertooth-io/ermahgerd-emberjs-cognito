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
    this.route('change-password');
  });
  this.route('login');
  this.route('sign-up');
  this.route('protected-error');
  this.route('application-error');
  this.route('forgot-password');
  this.route('reset-password');
});

export default Router;
