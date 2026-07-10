<template>
  <div class="bg-white min-h-screen">
    <!-- Header -->
    <header class="border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div>
            <span
              class="flex justify-center w-14 text-2xl font-bold text-[#89EA5C] bg-[#E4FBCC] px-4 rounded-2xl">saven</span>
          </div>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center gap-8">
            <a href="#Howitworks" class="text-gray-700 hover:text-gray-900 text-sm font-medium">Qanday ishlaydi</a>
            <a href="#Afzalliklar" class="text-gray-700 hover:text-gray-900 text-sm font-medium">Afzalliklar</a>
            <a href="#KopSoraladiganSavollar" class="text-gray-700 hover:text-gray-900 text-sm font-medium">FAQ</a>
          </nav>

          <!-- Right section -->
          <div class="flex items-center gap-4">
            <div class="hidden sm:flex items-center gap-2">
              <button class="text-gray-600 hover:text-gray-900 text-sm font-medium">
                UZ
              </button>
              <button class="text-gray-400 hover:text-gray-600 text-sm">
                RU
              </button>
            </div>
            <RouterLink to="ariza"
              class="bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold px-6 py-2 rounded-full text-sm transition-colors">
              Ariza qoldirish
            </RouterLink>
          </div>

          <!-- Mobile menu button -->
          <button class="md:hidden text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <main class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-8 py-12 lg:py-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-6 lg:space-y-8">
          <div>
            <p class="text-lime-500 text-sm font-semibold tracking-wide uppercase mb-4">
              Bizneslar uchun
            </p>
            <h1 class="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Do'koningizga yangi mijozlar oqimini ulang
            </h1>
          </div>

          <p class="text-gray-600 text-base sm:text-lg leading-relaxed">
            Saven a'zolari — chegirma qidirayotgan minglab faol xaridorlar.
            Ariza qoldiring, 24 soat ichida hamkorlilkni boshlayizmiz.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <RouterLink to="ariza"
              class="bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold px-8 py-3 rounded-full transition-colors">
              Ariza qoldirish
            </RouterLink>
            <button class="text-lime-600 hover:text-lime-700 font-semibold flex items-center gap-2">
              Qanday ishlaydi
              <span>→</span>
            </button>
          </div>

          <!-- Stats -->
          <div class="flex flex-col sm:flex-row gap-6 pt-4">
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-lime-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700 text-sm">400+ hamkor</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-lime-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700 text-sm">50 000+ faol a'zo</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-lime-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700 text-sm">Ulianish bepul</span>
            </div>
          </div>
        </div>

        <!-- Right Side - Phone Mockup -->
        <div class="flex justify-center lg:justify-end">
          <div class="relative w-full max-w-sm">
            <!-- Phone Frame -->
            <div class="bg-black rounded-3xl p-2 shadow-2xl">
              <div class="bg-white rounded-3xl overflow-hidden">
                <!-- Phone Status Bar -->
                <div class="bg-white px-4 py-2 flex justify-between items-center text-xs font-semibold text-gray-900">
                  <span></span>
                  <span>9:41</span>
                  <span></span>
                </div>

                <!-- Phone Content -->
                <div class="bg-gradient-to-b from-gray-50 to-white p-4 space-y-3 min-h-96">
                  <!-- Header -->
                  <div class="flex items-center justify-between mb-2">
                    <button class="text-gray-600">‹</button>
                    <h2 class="text-lg font-bold text-gray-900">Barber</h2>
                    <span></span>
                  </div>

                  <!-- Service Status -->
                  <div class="flex gap-2 mb-3">
                    <span class="bg-lime-400 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full">Yaqin
                      atrof</span>
                    <span class="text-gray-600 text-xs">Yupesi nortingi</span>
                  </div>

                  <p class="text-gray-700 text-xs font-medium">
                    24 ta biznes topildi
                  </p>

                  <!-- Service Items -->
                  <div class="space-y-3 mt-4">
                    <!-- Item 1 -->
                    <div class="bg-white rounded-xl p-3 shadow-sm">
                      <div class="flex gap-3">
                        <div
                          class="w-12 h-12 bg-lime-400 rounded-xl flex items-center justify-center font-bold text-gray-900">
                          F
                        </div>
                        <div class="flex-1">
                          <h3 class="font-semibold text-gray-900 text-sm">
                            Fresh Cut Barber
                          </h3>
                          <p class="text-gray-600 text-xs">
                            Chilanzor • 0.4 km
                          </p>
                          <div class="flex items-center gap-1 mt-1">
                            <span class="text-xs font-semibold text-gray-900">4.9</span>
                            <span class="text-gray-500 text-xs">• 1 soat avval</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Item 2 -->
                    <div class="bg-white rounded-xl p-3 shadow-sm">
                      <div class="flex gap-3">
                        <div
                          class="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center font-bold text-white">
                          P
                        </div>
                        <div class="flex-1">
                          <h3 class="font-semibold text-gray-900 text-sm">
                            Premium Style
                          </h3>
                          <p class="text-gray-600 text-xs">
                            Buyuk bazaar • 1.2 km
                          </p>
                          <div class="flex items-center gap-1 mt-1">
                            <span class="text-xs font-semibold text-gray-900">4.8</span>
                            <span class="text-gray-500 text-xs">• 1 soat avval</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Item 3 -->
                    <div class="bg-white rounded-xl p-3 shadow-sm">
                      <div class="flex gap-3">
                        <div
                          class="w-12 h-12 bg-orange-400 rounded-xl flex items-center justify-center font-bold text-gray-900">
                          B
                        </div>
                        <div class="flex-1">
                          <h3 class="font-semibold text-gray-900 text-sm">
                            Barbershop №7
                          </h3>
                          <p class="text-gray-600 text-xs">Mirabad • 1.8 km</p>
                          <div class="flex items-center gap-1 mt-1">
                            <span class="text-xs font-semibold text-gray-900">4.6</span>
                            <span class="text-gray-500 text-xs">• 2 soat avval</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Bottom Navigation -->
                  <div class="flex justify-around items-center mt-6 pt-4 border-t border-gray-200 text-gray-600">
                    <button class="flex flex-col items-center gap-1">
                      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                      </svg>
                      <span class="text-xs">Asosiy</span>
                    </button>
                    <button class="flex flex-col items-center gap-1">
                      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H3V5h12v4z" />
                      </svg>
                      <span class="text-xs">Katalog</span>
                    </button>
                    <button class="flex flex-col items-center gap-1">
                      <div class="w-6 h-6 bg-lime-400 rounded text-gray-900 flex items-center justify-center">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z" />
                        </svg>
                      </div>
                      <span class="text-xs">Chatni</span>
                    </button>
                    <button class="flex flex-col items-center gap-1">
                      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                      <span class="text-xs">Profil</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "SavenLanding",
  data() {
    return {};
  },
};
</script>

<style scoped>
/* Optimize for fast rendering */
* {
  box-sizing: border-box;
}

/* Smooth transitions without affecting performance */
button {
  transition: background-color 150ms ease-in-out;
}

a {
  transition: color 150ms ease-in-out;
}
</style>
