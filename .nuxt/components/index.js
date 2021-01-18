export { default as Accordion } from '../../components/Accordion.vue'
export { default as Button } from '../../components/Button.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as Member } from '../../components/Member.vue'
export { default as PageTransition } from '../../components/PageTransition.vue'
export { default as Phase } from '../../components/Phase.vue'
export { default as Tag } from '../../components/Tag.vue'

export const LazyAccordion = import('../../components/Accordion.vue' /* webpackChunkName: "components/Accordion" */).then(c => c.default || c)
export const LazyButton = import('../../components/Button.vue' /* webpackChunkName: "components/Button" */).then(c => c.default || c)
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/Footer" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/Header" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyMember = import('../../components/Member.vue' /* webpackChunkName: "components/Member" */).then(c => c.default || c)
export const LazyPageTransition = import('../../components/PageTransition.vue' /* webpackChunkName: "components/PageTransition" */).then(c => c.default || c)
export const LazyPhase = import('../../components/Phase.vue' /* webpackChunkName: "components/Phase" */).then(c => c.default || c)
export const LazyTag = import('../../components/Tag.vue' /* webpackChunkName: "components/Tag" */).then(c => c.default || c)
