<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  methods: {
    beforeEnter: function (el) {
      console.log('beforeEnter')
    },
    // the done callback is optional when
    // used in combination with CSS
    enter: function (el, done) {
      console.log('enter')
      done()
    },
    afterEnter: function (el) {
      console.log('afterEnter')
    },
    enterCancelled: function (el) {
      console.log('enterCancelled')
    },

    // --------
    // LEAVING
    // --------

    beforeLeave: function (el) {
      console.log('beforeLeave')
    },
    // the done callback is optional when
    // used in combination with CSS
    leave: function (el, done) {
      console.log('leave')
      done()
    },
    afterLeave: function (el) {
      console.log('afterLeave')
    },
    // leaveCancelled only available with v-show
    leaveCancelled: function (el) {
      console.log('leaveCancelled')
    }
  },
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
