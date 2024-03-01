<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

import IconSun from './icons/IconSun.vue'
import IconMoon from './icons/IconMoon.vue'

const store = useStore()
const status = computed({
  get() {
    return store.getters.getDarkMode
  },
  set() {
    store.dispatch('setDarkMode', !store.getters.getDarkMode)
  }
})
</script>

<template>
  <div class="switch">
    <input type="checkbox" id="switch" class="input" v-model="status" />
    <IconSun class="icon" :class="{ active: !status }" />
    <span class="description" :class="{ active: !status }">Light</span>
    <label for="switch" class="label">
      <span class="circle"></span>
    </label>
    <IconMoon class="icon" :class="{ active: status }" />
    <span class="description" :class="{ active: status }">Dark</span>
  </div>
</template>

<style scoped lang="scss">
.switch {
  display: flex;
  padding: 0px 16px;
  gap: 8px;
}
.input {
  display: none;
  visibility: hidden;
}
.label {
  display: block;
  width: 40px;
  height: 20px;
  border: 1px solid var(--primary-blue);
  border-radius: 20px;
  position: relative;
  transition: all 350ms ease;
}

.dark * .label {
  border: 1px solid white;
  background-color: var(--primary-blue);
}
.circle {
  position: absolute;
  top: 1px;
  left: 1px;
  height: 16px;
  width: 16px;
  border-radius: 16px;
  background-color: var(--primary-blue);
  transition: all 350ms ease;
}

.dark * .circle {
  background-color: white;
}

.input:checked ~ .label > .circle {
  left: calc(100% - 17px);
}

.icon {
  color: var(--primary-gray);
  transition: color 300ms ease;
  @media (min-width: 1280px) {
    display: none;
  }
}
.description {
  display: none;
  @media (min-width: 1280px) {
    display: block;
    font-family: Poppins;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0em;
  }
}
.active {
  color: var(--primary-blue);
}
</style>
