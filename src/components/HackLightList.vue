<template>
    <div class="hacklight-wrapper-outer">
      <div v-if="items.length !== 0" class="hacklight-wrapper-inner">
        <carousel :perPage=1 :navigationEnabled=false :autoplay=true :loop=true :autoplayTimeout=6000>
          <slide v-for="item in items" :key="item.name">
            <hacklightcard class="hackcard" :ghRepo="item">
            </hacklightcard>
          </slide>
        </carousel>
      </div>
    </div>
</template>

<script>
import HackLightCard from './HackLightCard.vue'
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'hacklightlist',
  props: ['ghData'],
  data () {
    return {
      items: []
    }
  },
  components: {
    hacklightcard: HackLightCard,
    carousel: Carousel,
    slide: Slide
  },
  mounted () {
    this.items = this.ghData
  }
}
</script>

<style>
.hackcard {
    width: 80%;
    margin: auto;
}

.hacklight-wrapper-outer {
    width: 80%;
    text-align: center;
    margin: auto;
}

.hacklight-wrapper-inner {
    width: 100%;
    display: inline-block;
}
</style>
