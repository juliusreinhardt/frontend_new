<template>
    <section class="wrapper cta bc-third">
        <h2 class="fs-xl ff-a">We help you to re-evaluate your digital potential to achieve greater results.</h2>
        <p>Corporatelevel companies trust us to refresh and improve their brands online. Start-ups – to launch and set a visual tone.</p>
        <Button titel="Get in Touch With us" link="/contact" theme="" />
    </section>
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
    about: {
      prefetch: true,
      query: homeQuery
    }
  },
  mounted: function() {
  },
  methods: {

  }
}
</script>

<style lang="scss">
</style>
