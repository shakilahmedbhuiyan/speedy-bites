<template>
  <div
    class="flex flex-col w-full h-fit rounded-lg bg-radial-[at_50%_95%] from-green-300/30 dark:from-emerald-900/20 from-20%
    via-transparent to-amber-500/10  dark:to-transparent  bg-cover
    bg-no-repeat bg-center px-16 py-14 border-t-2 border-amber-500/50"
    bis_skin_checked="1"
  >
    <div class="flex md:flex-row flex-col justify-center items-center" bis_skin_checked="1">

      <div class="flex flex-col justify-center sm:w-2/5 mb-6 sb:mb-0" bis_skin_checked="1">
        <div class="flex flex-row items-center w-full gap-3" bis_skin_checked="1">
          <img :alt="$appName + ' logo'" src="@/assets/logo.svg" width="80" />
          <!---->
          <div class="capitalize" bis_skin_checked="1">
            <p class="text-3xl font-bold font-serif">{{ $appName }}</p>
            <p class="text-sm opacity-80">Kebab | Grill | Pizza | Burger</p>
          </div>
          <!---->
        </div>
        <div class="flex flex-col text-sm" bis_skin_checked="1">
          <p>66 London Road, Southend-On-Sea, Essex, SS1 1PG</p>
         <div class="inline-flex items-center  gap-4">
          <a href="tel:+4401702312675" class="hover:underline">+44 01702 312675</a>
          <a href="mailto:hello@speedybites.uk" class="hover:underline">hello@speedybites.uk</a>
         </div>

        </div>
        <!---->
      </div>

      <div class="flex flex-row justify-end gap-8 sm:gap-16" bis_skin_checked="1">
        <div class="grid grid-cols-3 gap-24" bis_skin_checked="1">
          <div class="flex flex-col gap-2" bis_skin_checked="1">
            <div class="font-bold uppercase text-[#9ca3af] pb-3" bis_skin_checked="1">Explore</div>
            <a href="#xxx" class="hover:underline">Menu</a>
            <a href="#xxx" class="hover:underline">Opening Hours </a>
          </div>
          <!---->
          <div class="flex flex-col gap-2" bis_skin_checked="1">
            <div class="font-bold uppercase text-[#9ca3af] pb-3" bis_skin_checked="1">Comany</div>
            <a href="#xxx" class="hover:underline">About Us</a>
            <a href="#xxx" class="hover:underline">Contact</a>
          </div>
          <!---->
          <div class="flex flex-col gap-2" bis_skin_checked="1">
            <div class="font-bold uppercase text-[#9ca3af] pb-3" bis_skin_checked="1">Legal</div>
            <a href="#xxx" class="hover:underline">Privacy Policy</a>
            <a href="#xxx" class="hover:underline">Terms of Use</a>
          </div>
          <!---->
        </div>
        <!---->
      </div>
    </div>
    <div class="w-full border-t border-gray-500 my-8" bis_skin_checked="1"></div>
    <div class="text-center text-sm" bis_skin_checked="1">
      ©  {{ new Date().getFullYear()+" "+ $appName }} - All rights reserved.
    </div>
    <!---->
  </div>
</template>
