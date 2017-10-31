const axios = require('axios');

const GITHUB_API_URI = 'https://api.github.com/graphql';

module.exports = (topic, githubToken) => {
  const query = `
  {
    search(query: "topic:${topic}", type: REPOSITORY, first: 10) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            name
            url
            primaryLanguage {
              name
              color
            }
            owner {
              ... on User {
                login
                avatarUrl
                bio
              }
              ... on Organization {
                login
                avatarUrl
                bio : description
              }
            }
            description
            stargazers {
              totalCount
            }
            forks {
              totalCount
            }
            issues(states:OPEN) {
              totalCount
            }
            projects(first:10) {
              edges {
                node {
                  ... on Project {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }`;

  return axios.post(GITHUB_API_URI,
    {
      query
    }, {
      headers: {
        'Authorization': `Bearer ${githubToken}`
      }
    }
  ).then(ghRes => {
    return ghRes.data.data.search.edges.map(edge => edge.node); // Move directly to each repository, and remove intermediary 'node' key.
  });
};