<template>
    <div id="wrapper">
      <div id="head">
        <h3 id="name">{{ ghRepo.name }}</h3>
        <h3 id="owner">{{ ghRepo.owner.login }}</h3>
        <h3 id="language" v-if="ghRepo.primaryLanguage" v-bind:style="{ 'background-color': ghRepo.primaryLanguage.color}">{{ ghRepo.primaryLanguage.name }}</h3>
      </div>
      <div>
        <p>{{ ghRepo.description }}</p>
      </div>
      <ul>
        <li>Stars: {{ ghRepo.stargazers.totalCount }}</li>
        <li>Forks: {{ ghRepo.forks.totalCount }}</li>
        <li>Open Issues:{{ ghRepo.issues.totalCount }}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'hacklightlist',
  props: ['ghRepo']
}
</script>

<style>
#wrapper{
  border-left-style: solid;
  border-left-width: 5px;
  border-left-color: black;
  padding: 5px;
}
#name, #owner, #language{
  display: inline;
}
#owner{
  color: '#606060'
}
#language{
  float: right;
}
ul li{
  list-style-type: none;
  display: inline;
}
#head{
  color: #202020
}
p{
  font-size: 0.9em
}
</style>
