const path = require('path');

// These are the default settings that will be used if you don't override them in your config
module.exports = {
  security: {
    defaultRoles: ['user'],
    maxFailedLogins: 4,
    lockoutTime: 300,
    sessionLife: 86400,
    tokenLife: 86400,
    loginOnRegistration: false,
    loginOnPasswordReset: false,
    disabledRoutes: [
      'validate-username',
      'validate-email',
      'session',
      'forgot-username'
    ]
  },
  local: {
    usernameField: 'username',
    passwordField: 'password',
    emailUsername: true,
    emailLogin: true
    /** // todo: activate like this!
    requireEmailConfirm: true,
    sendConfirmEmail: true,
    requirePasswordOnEmailChange: false,
    sendPasswordChangedEmail: true,
    usernameLogin: false,
    uuidLogin: false,
    emailLogin: true,
    emailUsername: true
    */
  },
  session: {
    adapter: 'memory',
    file: {
      sessionsRoot: '.sessions'
    }
  },
  dbServer: {
    protocol: 'http://',
    host: 'localhost:5984',
    designDocDir: path.join(__dirname, '/designDocs'),
    userDB: 'sl_users',
    // CouchDB's _users database. Each session generates the user a unique login and password. This is not used with Cloudant.
    couchAuthDB: '_users'
  },
  emails: {
    confirmEmail: {
      subject: 'Please confirm your email',
      template: path.join(__dirname, '../../templates/email/confirm-email.ejs'),
      format: 'text'
    },
    forgotPassword: {
      subject: 'Your password reset link',
      template: path.join(
        __dirname,
        '../../templates/email/forgot-password.ejs'
      ),
      format: 'text'
    },
    modifiedPassword: {
      subject: 'Your password has been modified',
      template: path.join(
        __dirname,
        '../../templates/email/modified-password.ejs'
      ),
      format: 'text'
    },
    signupExistingEmail: {
      subject: 'You already have registered with us',
      template: path.join(
        __dirname,
        '../../templates/email/signup-email-exists.ejs'
      ),
      format: 'text'
    },
    forgotUsername: {
      subject: 'Your username request',
      template: path.join(
        __dirname,
        '../../templates/email/forgot-username.ejs'
      ),
      format: 'text'
    }
  }
};
