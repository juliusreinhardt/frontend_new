<template>
  <div class="member__single">
      <div class="member__single__image ani-img-wrapper-member">
          <img class="ani-img-member" :src="url" alt="">
      </div>
      <div class="member__single__text p-s">
          <h3 class="fs-s">{{name}}</h3>
          <p class="fs-s">{{beschreibung}}</p>
      </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import homeQuery from '~/apollo/queries/home'

export default {
  props: ['url', 'name', 'beschreibung'],
  data() {
    return {
      show: false
    }
  },
  mounted: function() {
    this.appearImageMember()
  },
  methods: {
      appearImageMember: function() {
      var timeline = new TimelineMax();
      timeline.staggerTo(".ani-img-wrapper-member", 1, {width:'100%', ease: Power4.easeInOut},.2)
      timeline.staggerTo(".ani-img-member", 1, {opacity:1, ease: Power4.easeInOut,},.1);
      const scene = this.$scrollmagic.scene({
        triggerElement: ".member__wrapper",
        triggerHook: 1,
      })
      scene.setTween(timeline)
      this.$scrollmagic.addScene(scene)
    }
  }
}
</script>

<style lang="scss" scoped>
.member__single {
    flex: 0 0 40%;
    &__image {
        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }
}
.member__single__text {
    p {
        opacity: .6;
    }
}
</style>