<template>
  <main class="transition workflow-detail fc-white">

    <!-- Header -->
    <section id="phase" class="phase">
      <div class="phase__section wrapper">
        <h1 class="ff-a fs-xxl center">{{ about.titeltext }}</h1>
      </div>

      <div class="phase__section phase__top" v-for="phase in about.phase" :key="about.phase.id">
        <div class="phase__top__left">
          <div>
            <div class="phase__top__left__top">
              <span>{{ phase.counter }}</span>
              <h2 class="ff-a fs-xl">{{ phase.titel }}</h2>
            </div>
            <p>{{ phase.beschreibung }}</p>
          </div>
        </div>
        <div class="phase__top__right">
          <p>Methoden die wir anwenden</p>
          <div class="phase__top__right__tags" >
            <Tag :titel="tag.tag" v-for="tag in phase.tags" :key="phase.tags.id" />
          </div>
        </div>
      </div>
      
      <!-- Space -->
      <div class="phase__imagery">
        <div class="grain"></div>
        <div class="spot"></div>
        <div class="dot"></div>
      </div>
    </section>

    <!-- Capabilities -->
    <section class="capabilites bc-black p-m">
      <div class="capabilites__header">
        <h2>Unsere Fähigkeiten</h2>
      </div>
      <div class="capabilites__body">
        <div class="capabilites__body__item">
          <div class="capabilites__body__item__header">
            <h3>Design</h3>
          </div>
          <div class="capabilites__body__item__list">
            <p>Research</p>
            <p>UI/UX audit</p>
            <p>Stakeholder workshops</p>
            <p>Product strategy</p>
            <p>Innovation consulting</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <Cta />
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
    about: {
      prefetch: true,
      query: homeQuery
    }
  },
  mounted: function() {
    // this.moveDot()
    // this.moveSpot()
    this.scrollDot()
    this.scrollSpot()
  },
  methods: {
    scrollDot: function() {
      const scrollTrigger = {
        trigger: '.phase',
        start: 'top',
        end: 'bottom',
        scrub: 1,
        ease: "power1.inOut" 
      };
      gsap.timeline({ scrollTrigger })
      .to(".dot", .3, {transform: 'translateX(30%) scale(2)', opacity: '.5',})
    },
    scrollSpot: function() {
      const scrollTrigger = {
        trigger: '.phase',
        start: 'top',
        end: 'bottom',
        scrub: 1,
        ease: "power1.inOut" 
      };
      gsap.timeline({ scrollTrigger })
      .to(".spot", .3, {transform: 'translateX(-50%) scale(3)',})
    },

    // moveDot: function() {
    //   var timeline = new TimelineMax();
    //   timeline
    //   .to(".dot", 1, {transform: 'translate(40%, 20%) scale(1.5) rotate(-75deg)',})
    //   .to(".dot", 2, {transform: 'translate(70%, 40%) scale(1.1) rotate(-205deg)',})
    //   .to(".dot", 3, {transform: 'translate(70%, 30%) scale(2) rotate(-135deg)',})

    //   var height = document.getElementById('phase').offsetHeight;

    //   const scene = this.$scrollmagic.scene({
    //     triggerElement: ".phase",
    //     triggerHook: 0,
    //     duration: height + 'px',
    //   })
    //   .setTween(timeline)
    //   this.$scrollmagic.addScene(scene)
    // },
    // moveSpot: function() {
    //   var timeline = new TimelineMax();
    //   timeline
    //   .to(".spot", 1, {transform: 'translate(40%, 0%) scale(1.5)', ease: Power1.easeInOut})
    //   .to(".spot", 2, {transform: 'translate(90%, 20%) scale(1.1)', ease: Power1.easeInOut})
    //   .to(".spot", 3, {transform: 'translate(90%, 50%) scale(2)', ease: Power1.easeInOut})
    //   .to(".spot", 4, {transform: 'translate(70%, 20%) scale(1)', ease: Power1.easeInOut})

    //   var height = document.getElementById('phase').offsetHeight;

    //   const scene = this.$scrollmagic.scene({
    //     triggerElement: ".phase",
    //     triggerHook: 0,
    //     duration: height + 'px',
    //   })
    //   .setTween(timeline)
    //   this.$scrollmagic.addScene(scene)
    // },
  }
}
</script>

<style lang="scss">
.phase__imagery {
    width: 100vw;
    height: 100vh;
    top:0;
    z-index: -3;
    position: fixed;
    background-color: black;
    .grain {
      width: 100%;
      height: 100%;
      z-index: -1;
      background-image: url('~assets/src/grain.png');
      background-size: cover;
      position: absolute;
    }
    .spot {
      z-index: -2;
      background-image: url('~assets/src/spot.png');
      width: 800px;
      height: 800px;
      position: absolute;
      background-size: cover;
      transform: translate(20%, 20%) scale(1.5);
      opacity: .9;
    }
    .dot {
      z-index: -3;
      background-image: url('~assets/src/dot.jpg');
      width: 800px;
      height: 800px;
      position: absolute;
      background-size: cover;
      transform: translate3d(30%, 50%, 0) ;
    }
  }
</style>
