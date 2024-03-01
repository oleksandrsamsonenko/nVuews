<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import TheSidebar from './TheSidebar.vue'
import TheSwitch from './TheSwitch.vue'
import IconBurger from '/src/components/icons/IconBurger.vue'
import IconSearch from '/src/components/icons/IconSearch.vue'

const search = ref('')
const result = ref('')
const isMenuOpen = ref(false)

const showSidebar = () => {
  isMenuOpen.value = true
}
const hideSidebar = () => {
  isMenuOpen.value = false
}
const submitSearch = () => {
  result.value = search.value
}
</script>

<template>
  <header class="header">
    <RouterLink to="/home" class="logo">N<span class="vue">Vue</span>ws</RouterLink>
    <nav class="navigation">
      <ul class="list">
        <li><RouterLink to="/" class="link">Home</RouterLink></li>
        <li><RouterLink to="/favorite" class="link">Favorite</RouterLink></li>
        <li><RouterLink to="/read" class="link">Read</RouterLink></li>
      </ul>
      <div class="inputwrapper">
        <input
          type="text"
          id="search"
          placeholder="Search |"
          v-model="search"
          class="input"
          v-on:keyup.enter="submitSearch"
        />
        <label for="search" class="label">
          <IconSearch class="search" />
        </label>
      </div>
    </nav>
    <div class="controls">
      <button class="button" type="button" @click="showSidebar"><IconBurger /></button>
      <TheSwitch class="switch" />
    </div>

    <TheSidebar :isMenuOpen="isMenuOpen" @close="hideSidebar" />
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: relative;
  padding: 28px 16px 22px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 14px;
  @media (min-width: 1280px) {
    gap: 105px;
    // max-width: 1680px;
  }
}

.list {
  display: none;
  @media (min-width: 768px) {
    display: flex;
    gap: 44px;
    padding-left: 20px;
  }
  @media (min-width: 1280px) {
    gap: 69px;
  }
}

.link {
  font-weight: 700;
  letter-spacing: 0em;
  @media (min-width: 1280px) {
    font-size: 18px;
  }
}

.router-link-active {
  position: relative;
  &::after {
    position: absolute;
    content: '';
    left: -10%;
    bottom: -8px;
    background-color: var(--primary-blue);
    height: 2px;
    width: 120%;
  }
}

.navigation {
  display: flex;
  justify-content: end;
  align-items: center;
  @media (min-width: 768px) {
    justify-content: space-between;
  }
}

.inputwrapper {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 100%;
  @media (min-width: 768px) {
    width: 215px;
  }
  @media (min-width: 1280px) {
    width: 290px;
  }
}

.label {
  width: fit-content;
  height: 100%;
  display: grid;
  place-items: center;
  transform: translateX(0%);

  @media (min-width: 768px) {
    transform: translateX(150%);
    pointer-events: none;
  }
}
.input {
  transition: all 300ms ease;
  background-color: transparent;
  border: none;
  border-radius: 20px;
  outline: none;
  width: 0px;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.02em;
  padding: 5px 0px 5px 0px;
  color: var(--primary-black);
  @media (min-width: 768px) {
    width: 100%;
    border: 1px solid var(--primary-black);
    padding: 5px 15px 5px 48px;
  }
  &:focus,
  &:not(:placeholder-shown) {
    @media (max-width: 767px) {
      width: 100%;
      border: 1px solid var(--primary-black);
      padding: 5px 15px 5px 48px;
    }
  }
}

.input:focus + .label,
.input:not(:placeholder-shown) + .label {
  @media (max-width: 767px) {
    transform: translateX(150%);
    pointer-events: none;
  }
}
.logo {
  display: block;
  font-size: 24px;
  font-weight: 700;
  @media (min-width: 768px) {
    font-size: 32px;
  }
  @media (min-width: 1280px) {
    font-size: 42px;
  }
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
  @media (min-width: 768px) {
    display: none;
  }
}
.switch {
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
}
</style>
