<template>
  <span class="tag">
      {{ titel }}
  </span>
</template>

<script>
import gql from 'graphql-tag'
import homeQuery from '~/apollo/queries/home'

export default {
  props: ['titel'],
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
.tag {
  background: rgba(255,255,255,.1);
  border-radius: 100px;
  padding: 14px 24px;
  font-size: 16px;
  font-family: "Circular", sans-serif;
  color: white;
  margin: 0 16px 16px 0;
}
</style>