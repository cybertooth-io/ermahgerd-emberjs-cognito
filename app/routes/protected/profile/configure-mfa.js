import { action } from '@ember-decorators/object';
import { set } from '@ember/object';
import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default class ConfigureMfa extends Route {
  @action
  cancel() {
    this.refresh();
    return true;
  }

  @action
  disable(session) {
    if (session.get('mfaEnabled?')) {
      session
        .disableTOTP()
        .then(() => {
          this.notify.success('Multi-factor authentication has been disabled.');
        })
        .catch((response) => this.notify.error(response.message));
    } else {
      this.notify.info('MFA is already disabled.')
    }
    return false;
  }

  @action
  enable(session) {
    if (session.get('mfaDisabled?')) {
      session
        .setupTOTP()
        .then((mfaActivationState) => {
          set(this, 'controller.model.mfaActivationState', mfaActivationState);
        })
        .catch((response) => this.notify.error(response.message));
    } else {
      this.notify.info('MFA is already enabled.')
    }
    return false;
  }

  @action
  verify(session, mfaActivationState) {
    session
      .verifyTotpPasscode(mfaActivationState)
      .then(() => {
        set(this, 'controller.model.mfaActivationState', {});
        this.notify.success('Multi-factor authentication is now enabled.')
      })
      .catch((response) => this.notify.error(response.message));
    return false;
  }

  model() {
    return hash({
      mfaActivationState: {}
    });
  }
}
