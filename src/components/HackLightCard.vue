<template>
    <div class="wrapper">
      <div v-if="ghRepo.primaryLanguage" class="headbar" v-bind:style="{ 'background-color': ghRepo.primaryLanguage.color}">
        <h3 id="name" >{{ ghRepo.name }}</h3>
      </div>
      <div class="headbar" v-else style="background-color: black; color: white">
        <h3 id="name" >{{ ghRepo.name }}</h3>
      </div>
      <div class="descrip">
        <p>{{ ghRepo.description }}</p>
      </div>
      <div class="bottom">
        <div>
          <img class="avatar" v-bind:src="ghRepo.owner.avatarURL"/>
        </div>
        <div>    
        </div>
        <div>
          <h4>{{ghRepo.owner.login}}</h4>
          <p>Public bio is very interesting. I like to make things</p>
          <ul>
            <li>⭐️- {{ ghRepo.stargazers.totalCount }}</li>
            <li>🌵- {{ ghRepo.forks.totalCount }}</li>
            <li>❗️ -{{ ghRepo.issues.totalCount }}</li>
          </ul>
        </div>
      </div>
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
}
#wrapper div{
  display: flex;
  flex-direction: vertical;
}
.bottom ul{
  padding: 0;
  font-size: 0.7rem;
}
ul li{
  list-style-type: none;
  display: inline;
}
.headbar {
  color: #202020;
  border-radius: 5px 5px 0 0;
  padding: 3px 10px 3px 10px;
}
#name{
  -webkit-margin-before: 5px;
  -webkit-margin-after: 5px;
}
p{
  font-size: 0.9em;
}
.descrip{
  padding: 3px 10px 3px 10px;
  border-width: 1px 1px 0px 1px;
  border-color:#BBBBBB;
  border-style:solid;
}
.bottom{
  padding: 5px;
  border: 1px solid #BBBBBB;
  border-radius: 0 0 5px 5px;
  display: flex;
  flex-direction: row;
}
.avatar{
  display: block;
  padding: 5px;
  float: left;
  height: 6rem;
}
</style>
