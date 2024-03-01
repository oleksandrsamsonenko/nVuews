<script setup>
import TheSwitch from './TheSwitch.vue'
import IconClose from '/src/components/icons/IconClose.vue'
import IconHome from '/src/components/icons/IconHome.vue'
import IconFavorite from '/src/components/icons/IconFavorite.vue'
import IconRead from '/src/components/icons/IconRead.vue'

defineProps({
  isMenuOpen: Boolean
})

const emit = defineEmits(['close'])
</script>
<template>
  <transition name="slide">
    <div v-if="isMenuOpen" class="menu">
      <div class="header">
        <h2 class="logo">N<span class="vue">Vue</span>ws</h2>
        <button class="button" type="button" @click="emit('close')">
          <IconClose />
        </button>
      </div>
      <nav class="list">
        <RouterLink to="/" @click="emit('close')" class="link"
          ><IconHome class="icon" />Home <span class="arrow">{{ '>' }}</span></RouterLink
        >
        <RouterLink to="/favorite" @click="emit('close')" class="link"
          ><IconFavorite class="icon" />Favorite<span class="arrow">{{ '>' }}</span></RouterLink
        >
        <RouterLink to="/read" @click="emit('close')" class="link"
          ><IconRead class="icon" />Read <span class="arrow">{{ '>' }}</span></RouterLink
        >
      </nav>
      <TheSwitch />
    </div>
  </transition>
</template>

<style scoped lang="scss">
.menu {
  padding: 29px 0px 18px;
  transition: all 350ms ease;
  position: absolute;
  width: 100vw;
  height: 100svh;
  background-color: var(--primary-background);
  top: 0;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 68px;
  @media (min-width: 768px) {
    display: none;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
  line-height: 33px;
}
.logo {
  display: block;
  font-size: 24px;
  font-weight: 700;
}
.vue {
  color: #42b883;
  font-size: inherit;
  font-weight: inherit;
}

.button {
  padding: 0;
  background: transparent;
  border: none;
  color: var(--primary-black);
  display: grid;
  place-items: center;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-family: Manrope;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;
}

.link {
  padding: 6px 16px;
  display: flex;
  gap: 16px;
  align-items: center;
  //   transition: all 350ms ease;
}

.arrow {
  display: none;
}
.router-link-active {
  color: #ffffff;
  background-color: var(--primary-blue);
}

.router-link-active .icon {
  filter: drop-shadow(-1px -1px 0px #ffffff) drop-shadow(1px -1px 0px #ffffff)
    drop-shadow(1px 1px 0px #ffffff) drop-shadow(-1px 1px 0px #ffffff);
}

.router-link-active .arrow {
  margin-left: auto;
  display: block;
  color: #ffffff;
  font-size: 24px;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  right: -125%;
  //   transform: scale(0.8);
}

.slide-enter-active {
  transition: all 0.35s ease-out;
}

.slide-leave-active {
  transition: all 0.35s ease-in;
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  right: 0;
  //   transform: scale(1);
}
</style>
