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
    margin: 0 5% 5px 5%;
    background-color: #B0B0B0;
    border: 1px solid #808080;
    border-radius: 10px;
}
</style>
