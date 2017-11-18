const axios = require('axios');
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

module.exports = ghToken => topic => {
  if (!ghToken) throw new Error('Supply GitHub token');
  if (!topic) throw new Error('Supply Project Topic');

  const query = `{
    search(query: "topic:${topic}", type: REPOSITORY, first: 10) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            name
            url
            primaryLanguage{
              name
              color
            }
            owner{
              ... on User{
                login
              	avatarUrl
              	bio
              }
              ... on Organization{
                login
              	avatarUrl
                bio : description
              }
            }
            description
            stargazers{
              totalCount
            }
            forks{
              totalCount
            }
            issues(states:OPEN){
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

  const data = { query };
  const config = { headers: {'Authorization': `Bearer ${GITHUB_TOKEN}`}};
  
  return axios.post('https://api.github.com/graphql', data, config).then(ghRes => {
    return ghRes.data.data.search.edges.map(edge => edge.node) // Move direct to each repository, and remove intermediary 'node' key.
  });
};
