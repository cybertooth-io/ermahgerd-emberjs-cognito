export function initialize(application) {
  application.inject('controller', 'session', 'service:session');
}

export default {
  initialize
};
