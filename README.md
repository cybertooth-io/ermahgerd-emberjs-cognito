# README - ermahgerd-emberjs-cognito

This Ember application talks to a Rails API server over at 
[https://github.com/cybertooth-io/ermahgerd-rails-api-cognito](https://github.com/cybertooth-io/ermahgerd-rails-api-cognito).

## Development - Getting Started

You need the following:

* [Git](https://git-scm.com/)
* [Yarn](https://yarnpkg.com/en/)
* [Node.js](https://nodejs.org/) - consider using [NVM](https://github.com/creationix/nvm)
* [Ember CLI](https://ember-cli.com/) - make sure to install the CLI `yarn global ember-cli`
* [Google Chrome](https://google.com/chrome/) - unit tests run through testem require Chrome


### First Time Setting Up

1. `git clone git@github.com:cybertooth-io/ermahgerd-emberjs-cognito.git` - to download the code
1. `cd ermahgerd-emberjs-cognito` - to get into the checked out code
1. `yarn` or `yarn install` - will install all javascript libraries

### Running The Server

`ember s --proxy=http://localhost:3000` - runs the server and proxies all Ember Data 
requests to `http://locahost:3000` (that's a Rails API server).  Find your app 
at [http://localhost:4200](http://localhost:4200).

While your Ember server is running, feel free to check out the tests by 
visiting [http://localhost:4200/tests](http://localhost:4200/tests).

### Testing

Ember comes with linters and qunit testing.

`ember t` - will run the tests once in your console

`ember t -s` - will run the tests in a new Chrome window and watch for changes

`ember t -s --filter='role'` - will run tests only tests with the word _role_ in their path

### Linting

* `yarn run lint:hbs`
* `yarn run lint:js`
* `yarn run lint:js -- --fix` 

### Development Workflow

#### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

_...More Coming soon_

## Deployment

### Configuration Notes

#### Addons

Please use this section to mention the addons that we've been installing that way if we do an upgrade
and need to bring them all back we can!

```bash
# SASS for stylesheets; make sure to renamed app/styles/app.css -> app/styles/app.scss
ember install ember-cli-sass
# Bootstrap 4 support; bring it all in looks like bootstrap@^4.1.0 comes in, should be bootstrap@~4.1.0 
ember install ember-cli-bootstrap-4
# For importing libraries (replaces ember-browserify); needed for: `import Auth from '@aws-amplify/Auth'
ember install ember-auto-import
# For authentication
yarn add @aws-amplify/core -D
yarn add @aws-amplify/auth -D
# Encouraged to stop using this, but I actually love this helper
ember install ember-route-action-helper

```

#### `config/environment.js`

1. `ember-simple-auth-token` is configured in here.  Needs to match the token & cookie authentication paths in your API server.

### Building

`ember b` - builds for your development environment

`ember build --environment production` - builds for production minifying and shrinking

_...More Coming soon_

## Contributing

Team members, create a branch and pull request.

General Public: Fork and create pull request.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

# AWS Cognito & AWS Amplify Auth

1. Create an Ember Service that will read from the environment settings to configure the Cognito User Pool.
See 
