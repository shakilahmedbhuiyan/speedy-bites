<template>
  <button
    @click="toggleDarkMode"
    class="p-2 rounded-lg transition-colors"
    :class="{
      'bg-gray-200 text-gray-800 hover:bg-gray-300': !isDarkMode,
      'bg-gray-800 text-white hover:bg-gray-700': isDarkMode,
    }"
  >
    <span class="sr-only">Toggle Dark Mode</span>
    <svg
      v-if="isDarkMode"
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
      />
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 text-gray-800"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDarkMode = ref(false)

// Check localStorage and system preference
onMounted(() => {
  const savedPreference = localStorage.getItem('darkMode')
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  isDarkMode.value = savedPreference
    ? savedPreference === 'true'
    : systemPrefersDark

  updateDarkClass()
})

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('darkMode', isDarkMode.value)
  updateDarkClass()
}

const updateDarkClass = () => {
  const html = document.documentElement;
  if (isDarkMode.value) {
    html.classList.add('dark');
    html.setAttribute('data-theme', 'dark');
  } else {
    html.classList.remove('dark');
    html.removeAttribute('data-theme');
  }
}
</script>
