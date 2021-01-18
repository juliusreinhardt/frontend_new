import Vue from 'vue'
import VueScrollmagic from 'vue-scrollmagic'
Vue.use(VueScrollmagic)

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)