import { set } from '@ember/object';
import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    cancel() {
      this.refresh();
      return true;
    },

    disable(session) {
      if (session.get('mfaEnabled?')) {
        session
          .disableTOTP()
          .then(() => {
            this.get('notify').success('Multi-factor authentication has been disabled.');
          })
          .catch((response) => this.get('notify').error(response.message));
      } else {
        this.get('notify').info('MFA is already disabled.')
      }
      return false;
    },

    enable(session) {
      if (session.get('mfaDisabled?')) {
        session
          .setupTOTP()
          .then((mfaActivationState) => {
            set(this, 'controller.model.mfaActivationState', mfaActivationState);
          })
          .catch((response) => this.get('notify').error(response.message));
      } else {
        this.get('notify').info('MFA is already enabled.')
      }
      return false;
    },

    finalize(session, mfaActivationState) {
      session
        .finalizeTotp(mfaActivationState)
        .then(() => {
          set(this, 'controller.model.mfaActivationState', {});
          this.get('notify').success('Multi-factor authentication is now enabled.')
        })
        .catch((response) => this.get('notify').error(response.message));
      return false;
    },

    verify(session, mfaActivationState) {
      session
        .verifyTotpPasscode(mfaActivationState)
        .catch((response) => this.get('notify').error(response.message));
      return false;
    }
  },

  model() {
    return hash({
      mfaActivationState: {}
    });
  }
});
