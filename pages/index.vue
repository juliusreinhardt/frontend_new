<template>
<main class="transition">
        <!-- Hero -->
        <section class="hero">
          <div class="">
            <div class="fc-white hero__text wrapper">
              <h1 id="herotitle" class="ff-a fs-xl">{{ home.herotitle }}</h1>
              <p>{{ home.herosubtitle }}</p>
            </div>
            <div class="hero__image">
              <img :src="home.heroimage.url" alt="">
            </div>
          </div>
        </section>

        <!-- Services -->
        <section class="bc-third wrapper services">
          <div class="services__header">
            <h2>
              Was wir machen
            </h2>
          </div>

          <div class="services__body pt-m">
            <div class="services__body__list">
              <div class="services__body__list__item" v-for="(leistung, key) in home.leistungen" :key="key">
                <Accordion class="accordion__service" :titel="leistung.titel" :beschreibung="leistung.beschreibung"/>
              </div>
            </div>
            <div class="services__body__image ani-img-wrapper">
              <img class="ani-img" id="service-image" :src="home.leistungenimage.url"/>
            </div>
          </div>
        </section>

        <!-- Projects -->
        <section id="projekte" class="bc-white wrapper projekte">
          <div class="projekte__wrapper" >
              <div class="projekte__item" v-for="(projekt, key) in home.projekte" :key="key">
                <img :src="projekt.url" />
              </div>
          </div>
          <div class="clients pt-l">
            <div v-for="(client, key) in home.clients" :key="key">
              <img :src="client.url" alt="">
            </div>
          </div>
        </section>

        <!-- Workflow -->
        <section class="workflow bc-black">
          <div class="workflow__text p-l center">
            <h2 class="ff-a fs-xl">We take a holistic approach to create digital branding & experiences.</h2>
            <p>Corporatelevel companies trust us to refresh and improve their brands online. Start-ups – to launch and set a visual tone.</p>
            <Button titel="Check out the MezzoMezzo way" link="#" theme="white"/>
          </div>
          <div class="workflow__image">
            <div class="grain"></div>
            <div class="dot"></div>
          </div>
        </section>

      </main>
</template>

<script>
import gql from 'graphql-tag'
import homeQuery from '~/apollo/queries/home'
import gsap from 'gsap'
import PageTransition from '~/components/PageTransition'
import { TweenMax } from 'gsap'

export default {
  data() {
    return {
      api_url: process.env.strapiBaseUri,
      currentService:0,
      show: true
    }
  },
  apollo: {
    home: {
      prefetch: true,
      query: homeQuery
    }
  },
  mounted: function() {
    this.startAnimations()
    this.appearImage()
    // this.intersecOb()
  },
  methods: {
    // Image appear
    appearImage: function() {
      var timeline = new TimelineMax();
      timeline.to(".ani-img-wrapper", 1, {width:'50%', ease: Power4.easeInOut})
      .to(".ani-img", 1, {opacity:1,delay:-.5,ease: Power4.easeInOut});

      const scene = this.$scrollmagic.scene({
        triggerElement: ".ani-img-wrapper",
        triggerHook: .8,
      })
      scene.setTween(timeline)
      this.$scrollmagic.addScene(scene)
    },
    // Projekt Scroll  
    startAnimations: function() {
      var timeline = new TimelineMax();
      timeline.to(".projekte__wrapper", 1, {transform: 'translateX(-120vh)',});

      const scene = this.$scrollmagic.scene({
        triggerElement: ".projekte__wrapper",
        triggerHook: 1,
        duration: "100%"
      })
      .setTween(timeline)
      this.$scrollmagic.addScene(scene)
    },
    // intersecOb: function() {
    //   // Selecting just the first of my bars
    //   const myBar = document.querySelector('.services');

    //   function callback (entries, observer) {
    //     console.log('entries');
    //   }
      
    //   // Instancing a new IntersectionObserver
    //   const observer = new IntersectionObserver(callback);

    //   // Adding a target to be observed
    //   observer.observe(myBar);
    // },
  },
  components: {
    PageTransition
  }
}
</script>

<style lang="scss">
  .hero {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-content: center;
    position: relative;
    &__text {
      height: 100%;
      position: absolute;
      z-index: 2;
      display: flex;
      flex-flow: column;
      justify-content: center;
    }
    &__image {
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }
  }
</style>
