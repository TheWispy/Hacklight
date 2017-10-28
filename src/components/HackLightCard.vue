<template>
    <div id="wrapper">
      <div class="headbar">
        <h3 id="name" v-bind:style="{ 'background-color': ghRepo.primaryLanguage.color}">{{ ghRepo.name }}</h3>
      </div>
      <div class="descrip">
        <p>{{ ghRepo.description }}</p>
      </div>
      <div class="bottom">
        <img class="avatar" v-bind:src="ghRepo.owner.avatarURL"/>
        <p>{{ghRepo.owner.login}}</p>
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
#wrapper div{
  flex-direction: vertical;
}
#wrapper ul{
  padding: 0;
  font-size: 0.7rem;
}
#name, #owner, #language{
  display: inline;
}
#owner{
  color: '#606060'
}
#language{
  float: right;
  border-width: 10px 0 0 0;
  border-style: solid;
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
.avatar{
  float: right;
  height: 6rem;
}
</style>
