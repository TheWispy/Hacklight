<template>
  <div id="app">
    <div id="title">
      <img id="logo" src="./assets/logo.png">
      <h1>{{ msg }}</h1>
    </div>
    <hacklightlist v-bind:ghData="mockData"></hacklightlist>
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
#logo {
    max-width: 5%;
}

#app {
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
}

#title {
   text-align: center;
   color: #2c3e50;
   margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}
</style>
