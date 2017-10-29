<template>
    <div class="wrapper">
      <hacklightcard class="hackcard" :ghRepo="repo" v-for="repo in ghData.data">
      </hacklightcard>
    </div>
</template>
<script>
import HackLightCard from './HackLightCard.vue'

export default {
  name: 'hacklightlist',
  props: ['ghData'],
  components: {
    hacklightcard: HackLightCard
  }
}
</script>

<style>
.hackcard {
    width: 80%;
    margin: 0 5% 10px 5%;
}
</style>
