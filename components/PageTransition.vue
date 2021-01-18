<template>
  <div class="transition-box">
  </div>
</template>

<style lang="scss" scoped>
.transition-box {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100vw;
  height: 100vh;
  transform: translate3d(100vw, 0, 0);
  transition-property: transform;
  transition-duration: 1000ms;
  transition-timing-function: ease-in-out;
  background:black;
  h1 {
    height: auto;
    color: white;
  }
}
</style>