<template>
    <div class="hackcard">
        <div>
          <h3>{{ ghRepo.name }}</h3>
          <h3>{{ ghRepo.owner.login }}</h3>
          <h3 v-if="ghRepo.primaryLanguage" v-bind:style="{ 'background-color': ghRepo.primaryLanguage.color}">{{ ghRepo.primaryLanguage.name }}</h3>
        </div>
        <div>
          {{ ghRepo.description }}
        </div>
        <ul>
          <li>{{ ghRepo.stargazers.totalCount }}</li>
          <li>{{ ghRepo.forks.totalCount }}</li>
          <li>{{ ghRepo.issues.totalCount }}</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'hacklightlist',
  props: ['ghRepo']
}
</script>
