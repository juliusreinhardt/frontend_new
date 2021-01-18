<template>
<main class="transition">
    <section class="container">
    <h1>Contact</h1>
    <p>The contact page</p>
    </section>
    <PageTransition />
</main>
</template>

<script>
import gql from 'graphql-tag'
import homeQuery from '~/apollo/queries/home'
import gsap from 'gsap'
import PageTransition from '~/components/PageTransition'

export default {
  data() {
    return {
      api_url: process.env.strapiBaseUri
    }
  },
  apollo: {
    home: {
      prefetch: true,
      query: homeQuery
    }
  },
}
</script>

<style lang="scss">

</style>
