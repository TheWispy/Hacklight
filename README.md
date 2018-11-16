# HackLight

> Git Repository Spotlight 

This project is the fruit of a 24 hour hackathon in Nottingham - thanks for taking a look around!

The project uses Express.JS and Vue.JS to create a small component to display repository information. At this time, the backend is hardcoded to use GitHub via their GraphQL API.

## Demo

See below for a gif!

![](https://i.imgur.com/PsOtyQs.gif)

Alternatively, here's how to get up and running quickly.

### Demo on your machine

1. [Grab a GitHub access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/).
2. Clone the repository & run the following - swapping out for your GitHub token.

``` bash
# install dependencies
npm install

# generate the components & run the demo server - swap out for your token!
GITHUB_TOKEN=123321MYGITHUBTOKENSHOULDBERIGHTHERE567765 npm start
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
