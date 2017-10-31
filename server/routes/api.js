const express = require('express');
const axios = require('axios');

const getReposByTopicGh = require('../getReposByTopicGh.js');

const router = express.Router();

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
if (!GITHUB_TOKEN) throw new Error("Supply GitHub token");

/* GET listing. */
router.get('/repos-with-topic/:topic', function(req, res, next) {
  getReposByTopicGh(req.params.topic, GITHUB_TOKEN)
    .then(data => res.json({ data }))
    .catch(() => res.json({ errors: ["Error contacting GitHub API"] }));
});

module.exports = router;
