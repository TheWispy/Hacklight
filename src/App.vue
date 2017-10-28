<template>
  <div id="app">
    <div id="title">
      <img id="logo" src="./assets/logo.png">
      <h1>{{ msg }}</h1>
    </div>
    <!-- <hacklightlist v-bind:ghData="mockData"></hacklightlist> -->
    <div class="myCarousel">
    <agile>
      <div class="slide" v-for="repo in repos" v-bind:key="repo.name">
        <hacklight-card class="hackcard" :ghRepo="repo"></hacklight-card>
      </div>
    </agile>
    </div>
  </div>
</template>

<script>
import HackLightCard from './HackLightCard.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'HackLight Demo',
      repos: require('./test/mock_gh_project_results.json').data
    }
  },
  components: {
    'hacklight-card': HackLightCard
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

.myCarousel {
  width: 280px;
  height: 140px;
  background: cyan;
}

h1, h2 {
  font-weight: normal;
}

.agile {
  &__arrow {
            border: none;
            bottom: -10px;
            margin: 0;
            padding: 0;
            position: absolute;
            transition-duration: .3s;
            &[disabled] {
                cursor: default;
                opacity: .4;
            }
            &:hover {
                svg {
                    fill: #333;
                }
            }
            &--prev {
                left: 0;
            }
            &--next {
                right: 0;
            }
            svg {
                fill: #888;
                height: 24px;
                transition-duration: .3s;
            }
        }
        
        &__dots {
            align-items: center;
            display: flex;
            justify-content: center;
            list-style: none;
            margin: 20px 0;
            padding: 0;
            text-align: center;
            white-space: nowrap;
        }
        &__dot {
            margin: 0 10px;
            button {
                background-color: #eee;
                border: none;
                border-radius: 50%;
                cursor: pointer;
                display: block;
                height: 10px;
                font-size: 0;
                line-height: 0;
                margin: 0;
                transition-duration: .3s;
                width: 10px;
            }
            &--current,
            &:hover {
                button {
                    background-color: #888;
                }
            }
        }
}
</style>
