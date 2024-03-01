<script setup>
import { RouterView } from 'vue-router'
import { useStore } from 'vuex'
import { computed, watch } from 'vue'

import TheHeader from './components/TheHeader.vue'
const store = useStore()
const theme = computed(() => {
  return store.getters.getDarkMode
})
theme.value ? document.body.classList.add('dark') : document.body.classList.add('light')

watch(theme, () => {
  if (!theme.value) {
    document.body.classList.replace('dark', 'light')
    return
  }
  document.body.classList.replace('light', 'dark')
})
</script>

<template>
  <TheHeader />
  <RouterView />
</template>

<style scoped></style>
