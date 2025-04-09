<script setup>


</script>

<template>
  <section class="max-w-4xl mx-auto flex justify-center items-center flex-col gap-4 mb-12">

    <div class="flex flex-col justify-center items-center text-center font-serif w-full mt-10">
      <h1 class="text-4xl mt-8 font-bold text-center text-gray-800 dark:text-amber-100
      drop-shadow-lg mx-auto divide-x divide-gray-300 dark:divide-slate-700">
        <span class="pr-2">Kebab</span>
        <span class="pr-2"> Grill</span>
        <span class="pr-2"> Pizza</span>
        <span> Burger</span>
      </h1>
      <p class="opacity-80 text-sm sm:text-lg mt-4 font-sans px-4">
        Your one-stop destination for delicious food!<br>
        We offer a wide variety of dishes, including kebabs, grilled items, pizzas, and burgers. <br>
      </p>
    </div>

    <div class="hero-image -skew-y-12 skew-x-5">
      <img src="@/assets/img/2.png" alt="Welcome Image" width="350"
      class="h-auto max-w-xl mx-auto drop-shadow-2xl bg-blend-color motion-safe:animate-wiggle" />
    </div>

    <div>
        <router-link to="/menu"
        class="w-full bg-orange-500 hover:bg-amber-500 text-white font-bold py-2 px-8 rounded-full
         transition-all duration-300 ease-in-out drop-shadow-2xl inline-flex items-center hover:space-x-2 will-change-auto">
         <span class="text-shadow"> Explore Menu</span>
         <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8"
         fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
         <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </router-link>
    </div>


</section>
</template>
