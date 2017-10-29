<template>
  <div id="app">
    <div id="hacklight-head">
      <img id="hacklight-logo" src="./assets/logo.png">
      <h1>{{ msg }}</h1>
      </div>
      <hacklightlist :ghData="mockData.data"></hacklightlist>
    </div>
</template>

<script>
import HackLightList from './components/HackLightList.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'HackLight Demo',
      mockData: require('./test/mock_gh_project_results.json')
    }
  },
  components: {
    hacklightlist: HackLightList
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
}

#hacklight-head h1, h2 {
  font-weight: normal;
}
</style>
