const express = require('express');
const router = express.Router();

const axios = require('axios');
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
if (!GITHUB_TOKEN) throw new Error("Supply GitHub token");

/* GET listing. */
router.get('/', function(req, res, next) {  
  const query = `{
    search(query: "topic:hacksheffield", type: REPOSITORY, first: 10) {
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
  
  axios.post('https://api.github.com/graphql', { query }, { headers: {'Authorization': `Bearer ${GITHUB_TOKEN}`}}).then(ghRes => {
    let jsonOutput = {
      data: ghRes.data.data.search.edges.map(edge => edge.node) // Move direct to each repository, and remove intermediary 'node' key.
    };

    res.json(jsonOutput);
  }).catch(() => {
    res.json({
      errors: [{
        title: "Error attempting to contact GitHub API"
      }]
    })
  });
});

module.exports = router;
