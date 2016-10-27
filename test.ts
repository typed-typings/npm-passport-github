/// <reference path="bundle.d.ts" />

import GitHubStrategy = require('passport-github');

new GitHubStrategy({
    clientID: 'abc',
    clientSecret: '123',
    callbackURL: 'http://127.0.0.1:3000/auth/github/callback'
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, {});
  }
);
