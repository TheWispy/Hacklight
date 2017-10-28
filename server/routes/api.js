var express = require('express');
var router = express.Router();

/* GET listing. */
router.get('/', function(req, res, next) {
  let exampleGhApiRes = {
    "data": {
      "search": {
        "repositoryCount": 2,
        "edges": [
          {
            "node": {
              "name": "git-chauthor",
              "url": "https://github.com/dannycjones/git-chauthor",
              "primaryLanguage": {
                "name": "JavaScript",
                "color": "#f1e05a"
              },
              "owner": {
                "login": "dannycjones"
              },
              "description": "This is a command line tool that enables you to easily set the author for a project.",
              "stargazers": {
                "totalCount": 2
              },
              "forks": {
                "totalCount": 0
              },
              "issues": {
                "totalCount": 3
              },
              "projects": {
                "edges": [
                  {
                    "node": {
                      "name": "TempProject"
                    }
                  }
                ]
              }
            }
          },
          {
            "node": {
              "name": "Hacklight",
              "url": "https://github.com/TheWispy/Hacklight",
              "primaryLanguage": null,
              "owner": {
                "login": "TheWispy"
              },
              "description": "Github Spotlight",
              "stargazers": {
                "totalCount": 1
              },
              "forks": {
                "totalCount": 0
              },
              "issues": {
                "totalCount": 0
              }
            }
          }
        ]
      }
    }
  };

  // Move direct to each repository, and remove intermediary 'node' key.
  let output = exampleGhApiRes.data.search.edges.map(edge => edge.node);

  res.json(output);
});

module.exports = router;
