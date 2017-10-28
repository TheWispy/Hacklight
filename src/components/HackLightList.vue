<template>
    <div class="hacklightlist">
      This is where our component goes :^)
      <ul>
        <li v-for="repo in ghData.data">
          {{ repo.name }}
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'hacklightlist',
  props: ['ghData']
}
</script>

<style>
.hacklightlist {
    background-color: #69DCA4;
}
</style>
