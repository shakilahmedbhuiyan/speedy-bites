<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import DarkModeToggle from '@/components/DarkModeToggle.vue'
import { RouterLink } from 'vue-router'

const navigation = [
  { name: 'Home', href: '/'  },
  { name: 'Menu', href: '/menu' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },

]
</script>

<template>
  <div class="flex justify-center items-center sticky top-0 z-50">

  <Disclosure as="nav" class="w-[calc(100vw-10%)] px-8 bg-gray-200/50 dark:bg-gray-900/50 shadow-lg
   rounded-xl backdrop-blur"
   v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">

        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400
          hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block size-6" aria-hidden="true" />
            <XMarkIcon v-else class="block size-6" aria-hidden="true" />
          </DisclosureButton>
        </div>

        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex shrink-0 items-center">
            <img class="h-12 w-auto" src="@/assets/logo.svg" alt="Speedy Bites" />
          </div>
        </div>

        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div class="hidden sm:block">
            <div class="flex items-center gap-3">
              <RouterLink v-for="item in navigation" :key="item.name" :to="item.href"
              :class="[item.current ?
              'bg-gray-900 text-white dark:bg-gray-500 dark:text-white' :
               'text-gray-700 dark:text-gray-300 hover:bg-gray-700 hover:text-white',
              'rounded-md p-3 text-sm font-medium']"
              :aria-current="item.current ? 'page' : undefined">{{ item.name }}</RouterLink>
              <DarkModeToggle />
            </div>
          </div>

          <div class="flex items-center sm:hidden">
            <DarkModeToggle/>
            </div>


        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <RouterLink v-for="item in navigation" :key="item.name" as="a"
        :to="item.href"
        :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
        'block rounded-md px-3 py-2 text-base font-medium']"
        :aria-current="item.current ? 'page' : undefined">{{ item.name }}</RouterLink>
      </div>
    </DisclosurePanel>
  </Disclosure>
</div>
</template>

