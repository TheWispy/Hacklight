<template>
  <div id="app">
    <div id="hacklight-head">
      <img id="hacklight-logo" src="./assets/logo.png">
      <h1>{{ msg }}</h1>
      <input type="text" v-model="topic" />
    </div>
    <hacklightlist v-if="ghData.length !== 0" :ghData="ghData"></hacklightlist>
  </div>
</template>

<script>
import HackLightList from './components/HackLightList.vue'
import _ from 'lodash'
import NProgress from 'nprogress'

export default {
  name: 'app',
  data () {
    return {
      msg: 'HackLight Demo',
      ghData: [],
      topic: 'HackNotts2017',
      loading: true
    }
  },
  components: {
    hacklightlist: HackLightList
  },
  created () {
    this.getReposWithTopic(this.topic).then(data => {
      this.ghData = data;
    }).catch(() => {
      this.ghData = require('./test/mock_gh_project_results.json').data;
      this.loading = false;
    });
  },
  watch: {
    topic: _.debounce(function() {
      this.loading = true;
      this.getReposWithTopic(this.topic).then(data => {
        this.ghData = data;
        this.loading = false;
      }).catch(console.error);
    }, 1000),
    ghData: function() { console.log(`ghData changed! ${this.ghData}`) },
    loading: function() {
      if (this.loading) {
        console.log("Loading!");
        NProgress.start();
      } else {
        console.log("Loaded!");
        NProgress.done();
      }
    }
  },
  methods: {
    getReposWithTopic(topic) {
      console.log("Running getReposWithTopic!");
      return this.$http.get(`/api/repos-with-topic/${this.topic}`).then(response => {
        console.log(response.body.data);
        return response.body.data;
      });
    }
  }
}
</script>

<style lang="scss">
#hacklight-logo {
    max-width: 5%;
}

#app {
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
}

#hacklight-head {
   text-align: center;
   color: #2c3e50;
   margin-top: 60px;
   margin-bottom: 40px;
}

#hacklight-head h1, h2 {
  font-weight: normal;
}
</style>
