import OAuth2Strategy = require('passport-oauth2');

/**
 * The GitHub authentication strategy authenticates requests by delegating to
 * GitHub using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `cb`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Examples:
 *
 *     passport.use(new GitHubStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/github/callback',
 *         userAgent: 'myapp.com'
 *       },
 *       function(accessToken, refreshToken, profile, cb) {
 *         User.findOrCreate(..., function (err, user) {
 *           cb(err, user);
 *         });
 *       }
 *     ));
 */
declare class GitHubStrategy extends OAuth2Strategy<GitHubStrategy.Profile> {
  name: 'github';

  constructor (options: GitHubStrategy.Options, verify: OAuth2Strategy.VerifyFunction<GitHubStrategy.Profile>);
}

declare namespace GitHubStrategy {
  export interface Options extends OAuth2Strategy.OAuth2Options {
    userAgent?: string;
  }

  export interface Profile {
    provider: 'github';
    _raw: string;
    _json: any;
    id: string;
    displayName: string;
    username: string;
    profileUrl: string;
    emails: Array<{ primary?: boolean, verified?: boolean, value: string }>;
    photos?: Array<{ value: string }>;
  }
}

export = GitHubStrategy;
