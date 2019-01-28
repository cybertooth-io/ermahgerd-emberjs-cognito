'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'ermahgerd-emberjs-cognito',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    'ember-simple-auth': {
      routeAfterAuthentication: 'protected',
      routeIfAlreadyAuthenticated: 'protected'
    },

    APP: {
      'ember-simple-auth-aws-amplify': {
        awsAmplifyAuth: {
          config: {
            // https://aws-amplify.github.io/docs/js/authentication#switching-authentication-flow-type (USER_SRP_AUTH is default)
            authenticationFlowType: 'USER_SRP_AUTH',
            // Amazon Cognito Region
            region: 'ca-central-1',
            // Amazon Cognito User Pool ID
            userPoolId: 'ca-central-1_gVEm5uxH5',
            // Amazon Cognito Web Client ID (26-char alphanumeric string) -> `App integration - App client settings`
            userPoolWebClientId: '20fb6agrojrv318os33svrhe9u',
          }
        },

        headerAuthorization: 'Authorization',

        headerIdentification: 'Identification',

        totpIssuerName: 'Ermahgerd',
      }
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
