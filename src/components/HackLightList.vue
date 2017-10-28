<template>
    <div class="wrapper">
      This is where our component goes :^)
      <div class="hackcard" v-for="repo in ghData.data">
          <div>
            <h3>{{ repo.name }}</h3>
            <h3> - {{ repo.owner.login }}</h3>
            <h3>{{ repo.primaryLanguage}}</h3>
          </div>
          <div>
            {{ repo.description }}
          </div>
          <ul>
            <li>{{ repo.stargazers.totalCount }}</li>
            <li>{{ repo.forks.totalCount }}</li>
            <li>{{ repo.issues.totalCount }}</li>
          </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'hacklightlist',
  props: ['ghData']
}
</script>

<style>
.hackcard {
    background-color: #69DCA4;
    margin: 5px 5px 5px 5px;
    padding: 5px 5px 5px 5px;
}
</style>
