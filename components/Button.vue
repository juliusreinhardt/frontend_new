<template>
  <button class="button" :class="theme">
      <NuxtLink :to="link" class="fc-white">{{ titel }}</NuxtLink>
  </button>
</template>

<script>
import gql from 'graphql-tag'
import homeQuery from '~/apollo/queries/home'

export default {
  props: ['titel', 'link', 'theme'],
  data() {
    return {
      show: false
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.button {
  background: transparent;
  border: 2px solid rgba(0,0,0,.3);
  border-radius: 100px;
  padding: 14px 24px;
  font-size: 16px;
  font-family: "Circular", sans-serif;
}

.white {
  border: 2px solid rgba(255,255,255,.3);
  a {
    color: white;
  }
}
</style>