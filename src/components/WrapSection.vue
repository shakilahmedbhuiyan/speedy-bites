

<template>
  <section id="wrap">
    <div class="container">
      <div class="flex flex-wrap items-center max-w-5xl mx-auto overflow-clip">

          <div class="wrap-image">
            <img class="mask-radial-[90%_100%] mask mask-radial-from-75% mask-radial-at-left
          dark:-mask-linear-80 dark:mask-linear-from-65% dark:mask-linear-to-90% drop-shadow-lg
        aspect-square sm:aspect-auto" width="500"
        :src="$isDev ? '/src/assets/img/wrap.png' :
      '/cdn-cgi/image/width=500,quality=80,quality=80,format=webp,onerror=redirect/src/assets/img/wrap.png'" />
          </div>



        <div class="flex flex-col justify-center items-center text-center mx-auto">
          <h2 class="text-4xl font-bold text-shadow-lg font-serif tracking-wide
          dark:text-shadow-lg/70 dark:text-shadow-amber-500/40">
          Taste the Fantastic
            <span class="dark:text-amber-500 text-orange-500 ">Wraps</span>
          </h2>
          <p class="text-lg font-semibold leading-loose w-fit opacity-80">
            Bold, Loaded, and Tightly Packed Deliciousness!
            </p>
            <div class="grid grid-cols-3 gap-8 sm:gap-12 text-start text-sm font-semibold pl-3 mx-auto w-fit my-3 opacity-85">
              <ul class="list-disc">
                <li>Lamb Doner</li>
                <li>Chicken Doner</li>
                <li>Mix Doner</li>
                <li>Peri Peri Chicken</li>
              </ul>

              <ul class="list-disc">
                <li>Lamb Shish</li>
                <li>Chicken Shish</li>
                <li>Mix Shish</li>
                <li>BBQ Chicken</li>
              </ul>

              <ul class="list-disc">
                <li>Halloumi</li>
                <li>Falafel</li>
                <li>Cheese and Chips</li>
                <li>Crispy Chicken</li>
              </ul>

            </div>

        </div>

    </div>
    </div>

  </section>
</template>
