<script setup>
import MainNav from './components/MainNav.vue'
import MainFooter from './components/MainFooter.vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Kebab Grill Pizza Burger',
  titleTemplate: '%s - Speedy Bites',
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    {
      name: 'description',
      content:
        'Speedy Bites is a restaurant that specializes in kebabs, grill, pizza, and burgers.',
    },
    {
      name: 'keywords',
      content: 'kebab, grill, pizza, burger, restaurant, food, fast food, delivery',
    },
  ],
})
</script>

<template>

  <MainNav />


  <RouterView />
  <MainFooter />
</template>

