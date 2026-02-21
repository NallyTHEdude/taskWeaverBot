import { AuthorizationCode } from 'simple-oauth2';
import {
  OAUTH_GOOGLE_CLIENT_ID, OAUTH_GOOGLE_CLIENT_SECRET,
  OAUTH_GITHUB_CLIENT_ID, OAUTH_GITHUB_CLIENT_SECRET,
  OAUTH_MICROSOFT_CLIENT_ID, OAUTH_MICROSOFT_CLIENT_SECRET
} from '../config/index.js';

// google cliend and auth config
const googleClient = {
  client: {
    id: OAUTH_GOOGLE_CLIENT_ID,
    secret: OAUTH_GOOGLE_CLIENT_SECRET
  },
  auth: {
    tokenHost: 'https://oauth2.googleapis.com', 
    authorizeHost: 'https://accounts.google.com', 
    authorizePath: '/o/oauth2/v2/auth',
    tokenPath: '/token'
  }
};
const googleOAuthClient = new AuthorizationCode(googleClient);

// github client and auth config
const githubClient = {
  client: {
    id: OAUTH_GITHUB_CLIENT_ID,
    secret: OAUTH_GITHUB_CLIENT_SECRET
  },
  auth: {
    tokenHost: 'https://github.com',
    authorizePath: '/login/oauth/authorize',
    tokenPath: '/login/oauth/access_token'
  }
};
const githubOAuthClient = new AuthorizationCode(githubClient);

// microsoft client and auth config
const miscrosoftClient = {
  client: {
    id: OAUTH_MICROSOFT_CLIENT_ID,
    secret: OAUTH_MICROSOFT_CLIENT_SECRET
  },
  auth: {
    tokenHost: 'https://login.microsoftonline.com',
    authorizePath: '/common/oauth2/v2.0/authorize',
    tokenPath: '/common/oauth2/v2.0/token'
  }
};
const microsoftOAuthClient = new AuthorizationCode(miscrosoftClient);

export {
    googleOAuthClient,
    githubOAuthClient,
    microsoftOAuthClient
} 