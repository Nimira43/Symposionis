import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('themeStore', () => {
  const theme = ref('dark')

  const setTheme = (newTheme) =>
})