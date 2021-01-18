<template>
  <header class="p-s fc-white">
    <div class="branding">
      <NuxtLink to="/" class="fc-white">
        <span class="ff-a fc-white">Mezzo<br>Mezzo.Studio</span>
      </NuxtLink>
    </div>
    <div class="menu">
      <div class="menu__item">
        <NuxtLink to="/workflow" class="fc-white">Workflow</NuxtLink>
        <div class="menu__item__hover"></div>
      </div>
      <div class="menu__item">
        <NuxtLink to="/about" class="fc-white">About</NuxtLink>
        <div class="menu__item__hover"></div>
      </div>
      <div class="menu__item">   
        <NuxtLink to="/" class="fc-white">Contact</NuxtLink>
        <div class="menu__item__hover"></div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
header {
  z-index: 3;
  width: 100%;
  position: fixed;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  .branding {

  }
  .menu {
    display: flex;
    flex-flow: row;
    &__item {
      padding:16px;
      a {
        color: white;
      }
      &__hover {
        height: 1px;
        background-color: rgba(255,255,255,1);
        width:0;
        transition: all .2s ease-in-out;
        margin-top: 4px;
      }
      &:hover {
        .menu__item__hover {
          background-color: rgba(255,255,255,1);
          width:100%;
        }
      }
    }
    
  }
}
</style>
