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
      awsAmplifyAuth: {
        config: {
          // Amazon Cognito Region
          region: 'ca-central-1',
          // Amazon Cognito User Pool ID
          userPoolId: 'ca-central-1_ocRK2nsIR',
          // Amazon Cognito Web Client ID (26-char alphanumeric string)
          userPoolWebClientId: '5ht2oa80l95idve05t3q5ir10u',
        }
      },
      'ember-simple-auth-aws-amplify': {
        /**
         * AWS Cognito's REFRESH tokens expire after 30 days by default.  This is configurable in your AWS Cognito
         * pools through the CLI or AWS Web Console.
         *
         * If you change your refresh token expiry you can let your app know about this.
         *
         * Currently we do not use this information for anything.
         */
        refreshTokenExpiryInDays: 30
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
