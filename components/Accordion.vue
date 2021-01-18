<template>
  <div class="py-xs accordion" :class="cssclass">
    <div class="accordion__header" v-on:click="toggle">
      <h3 name="header">{{titel}}</h3>
      <img src="~/assets/src/chevron.svg" class="chevron" v-bind:class="{ rotate: show }"/>
    </div>
    <transition name="accordion"
      v-on:before-enter="beforeEnter" v-on:enter="enter"
      v-on:before-leave="beforeLeave" v-on:leave="leave">
      <div class="body" v-show="show">
        <div class="body-inner">
          <p class="pt-xs">{{beschreibung}}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import homeQuery from '~/apollo/queries/home'
import gsap from 'gsap'

export default {
  props: ['titel', 'beschreibung', 'cssclass'],
  data() {
    return {
      show: false
    }
  },
  mounted: function() {
    this.appearAccordion()
    this.appearAccordionFaq()
  },
  methods: {
    appearAccordion: function() {
      var tween = TweenMax.staggerFromTo('.accordion__service', .5, { opacity:0, top:20,}, { opacity:1, top:0,}, 0.1);
      const scene = this.$scrollmagic.scene({
        triggerElement: ".services__body__list__item",
        triggerHook: .8,
      })
      scene.setTween(tween)
      this.$scrollmagic.addScene(scene)
    },
    // Accordion FAQ
    appearAccordionFaq: function() {
      var tween = TweenMax.staggerFromTo('.accordion__faq', .5,
      { opacity:0, top:20,},
      { opacity:1, top:0,},
      0.1
      );
      const scene = this.$scrollmagic.scene({
        triggerElement: ".faq__body",
        triggerHook: .8,
      })
      scene.setTween(tween)
      this.$scrollmagic.addScene(scene)
    },
    toggle: function() {
      this.show = !this.show;
    },
    beforeEnter: function(el) {
      el.style.height = '0';
      el.style.opacity = 0; 
    },
    enter: function(el) {
      el.style.height = el.scrollHeight + 'px';
      el.style.opacity = 1; 
    },
    beforeLeave: function(el) {
      el.style.height = el.scrollHeight + 'px';
      el.style.opacity = 1; 
    },
    leave: function(el) {
      el.style.height = '0';
      el.style.opacity = 0; 
    }
  }
}
</script>

<style lang="scss" scoped>
.accordion {
  cursor: pointer;
  &__header {
    display: flex;
    flex-flow: row;
  }
  .chevron {
      transition-duration: 0.3s;
      margin-left:8px;
    &.rotate {
      transform: rotate(180deg);
    }
  }
}

.accordion .header-icon {
  position: absolute;
  top: 5px;
  right: 8px;
  transform: rotate(0deg);
  transition-duration: 0.3s;
}

.accordion .body {
  transition: 300ms ease-in-out;
}

.accordion .body-inner {
  transition: 300ms ease-in-out;
  p {
    opacity: .6;
  }
}

.accordion .header-icon.rotate {
  transform: rotate(180deg);
  transition-duration: 0.3s;
}

.accordion.purple {
  background-color: #8c618d;
}

.accordion.purple .body {
  border-color: #8c618d;
}
</style>