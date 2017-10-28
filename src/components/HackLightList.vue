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
    margin: 5px 5px 5px 5px;
    padding: 5px 5px 5px 5px;
}
</style>
