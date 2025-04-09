<script setup>


</script>

<template>
  <section class="max-w-4xl mx-auto flex justify-center items-center flex-col gap-4 mb-12">

    <div class="flex flex-col justify-center items-center text-center font-serif w-full mt-12">
      <h1 class="text-4xl mt-8 font-bold text-center text-gray-800 dark:text-amber-100 text-shadow-2xs mx-auto">
        Kebab | Grill | Pizza | Burger
      </h1>
      <p class="opacity-70 text-sm sm:text-lg mt-4 font-sans px-4">
        Your one-stop destination for delicious food!<br>
        We offer a wide variety of dishes, including kebabs, grilled items, pizzas, and burgers. <br>
      </p>
    </div>

    <div class="w-full hero-image -skew-y-12 skew-x-5">
      <img src="@/assets/img/2.png" alt="Welcome Image" width="350"
      class="h-auto max-w-xl mx-auto drop-shadow-2xl motion-safe:animate-wiggle" />
    </div>

    <div>
        <router-link to="/menu"
        class="w-full bg-orange-500 hover:bg-amber-500 text-white font-bold py-2 px-8 rounded-full shadow-lg
         transition duration-300 ease-in-out drop-shadow-lg inline-flex gap-3">
         <span class="text-shadow"> Explore Menu</span>
         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
          fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>

      </router-link>
    </div>


</section>
</template>
