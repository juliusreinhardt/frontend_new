<template>
  <main class="transition">
      <!-- Member -->
        <section class="bc-black wrapper team">
          <h2 class="ff-a fs-xxl pt-m">MezzoMezzo is a creative studio for digital branding & experiences.</h2>
          <p>MezzoMezzo is a collective whos passion is to inspire and design unique digital brandings & experiences for  our customers, their brands — and of course — their needs.</p>
          <div class="member__wrapper pt-xl" >
            <Member v-for="(member, key) in home.member" :key="key" :url="member.url.url" :name="member.name" :beschreibung="member.beschreibung" />
          </div>
        </section>

        <!-- FAQ -->
        <section class="bc-beige wrapper faq">
          <div class="faq__header">
            <h2>
              FAQ
            </h2>
          </div>

          <div class="faq__body py-m">
            <div class="faq__body__list">
              <div class="faq__body__list__item" v-for="(faq, key) in home.faq" :key="key">
                <Accordion class="accordion__faq" :titel="faq.frage" :beschreibung="faq.text"/>
              </div>
            </div>
          </div>
        </section>
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
