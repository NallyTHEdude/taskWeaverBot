export const IntegrationProvidersEnum = {
    GOOGLE: 'google',
    MICROSOFT: 'microsoft',
    GITHUB: 'github',
    JIRA: 'jira',
    SLACK: 'slack',
};
export const AvailableIntegrationProviders = Object.values(
    IntegrationProvidersEnum,
);

export const GithubEventTypesEnum = {
    PUSH: 'push',
    ISSUES: 'issues',
    PULL_REQUEST: 'pull_request',
    COMMIT: 'commit',
};
export const AvailableGithubEventTypes = Object.values(GithubEventTypesEnum);
