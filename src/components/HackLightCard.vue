<template>
    <div class="hackcard">
      <a :href="ghRepo.url">
        <div v-if="ghRepo.primaryLanguage" class="hackcard-head" v-bind:style="{ 'background-color': ghRepo.primaryLanguage.color}">
          <h3>{{ ghRepo.name }}</h3>
        </div>
        <div class="hackcard-head" v-else style="background-color: black; color: white">
          <h3>{{ ghRepo.name }}</h3>
        </div>
      </a>

      <div class="hackcard-repo">
        <div class="hackcard-repo-description">
          <p>{{ ghRepo.description }}</p>
        </div>
        <div class="hackcard-repo-stats">
          <ul>
            <li>
              <a :href="ghRepo.url + '/stargazers'">
                ⭐️ {{ ghRepo.stargazers.totalCount }}
              </a>
            </li>
            <li>
              <a :href="ghRepo.url + '/network'">
                🌵 {{ ghRepo.forks.totalCount }}
              </a>
            </li>
            <li>
              <a :href="ghRepo.url + '/issues'">
                ❗️ {{ ghRepo.issues.totalCount }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div v-if="ghRepo.owner" class="hackcard-owner-wrapper">
        <div class="hackcard-owner">
          <div class="hackcard-owner-avatar">
            <img class="avatar" v-bind:src="ghRepo.owner.avatarUrl"/>
          </div>
          <div class="hackcard-owner-bio">
            <h1>{{ghRepo.owner.login}}</h1>
            <p>{{ghRepo.owner.bio}}</p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'hacklightlist',
  props: ['ghRepo'],
  mounted () {
    console.log(this.ghRepo)
  }
}
</script>

<style>
div {
  box-sizing: border-box;
}

a {
  color: inherit;
  text-decoration: inherit;
}

.hackcard-head {
  color: #202020;
  border-radius: 5px 5px 0 0;
  padding: 0;
  margin: 0;
}

.hackcard-head > h3 {
  padding: 1em 0;
  margin: 0;
}

.hackcard-repo {
  border-width: 1px 1px 0px 1px;
  border-color:#BBBBBB;
  border-style:solid;
  padding: 1em 0;
}

.hackcard-repo-description {
}

.hackcard-repo-description > p {
  padding: 0;
  margin: 0;
}

.hackcard-owner-wrapper {
  border: 1px solid #BBBBBB;
  border-radius: 0 0 5px 5px;
  padding: 1em 0;
}

.hackcard-owner {
  width: 100%;
  height: 5em;
  display: flex;
  flex-direction: row;
}

.hackcard-owner-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 20%;
}

.hackcard-owner-avatar > img {
  max-width: 100%;
  max-height: 100%;
}


.hackcard-owner-bio {
  flex: 1 80%;
  text-align: left;
  padding: 0;
  margin: ;
}

.hackcard-owner-bio h1 {
  margin: 0;
  padding: 0;
  font-size: 1em;
}

.hackcard-repo-stats ul {
  padding: 0;
  margin: .5em 0 0 0;
  font-size: 1em;
}

.hackcard-repo-stats ul li {
  padding: 0;
  margin: 0 1em;
  list-style-type: none;
  display: inline;
}

.hackcard-owner-bio  p {
  padding: 0;
  margin: 0;
  font-size: 0.9em;
}

</style>
