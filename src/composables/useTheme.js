// src/composables/useTheme.js
import { ref, watch, onMounted } from 'vue'

const isDark = ref(true)

export function useTheme() {
  const initTheme = () => {
    const saved = localStorage.getItem('theme')
    isDark.value = saved ? saved === 'dark' : true
    applyTheme()
  }

  const applyTheme = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    }
  }

  const toggleTheme = () => {
    isDark.value = !isDark.value
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    applyTheme()
  }

  return { isDark, toggleTheme, initTheme }
}
