<template>
  <section class="w-full bg-white py-12 sm:py-16 px-4 ">
    <div class="max-w-5xl mx-auto">
      <!-- Sarlavha -->
      <div class="text-center mb-10 sm:mb-12">
        <h2 class="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
          Nega Saven?
        </h2>
        <p class="mt-2 text-sm sm:text-base text-gray-500">
          Biznesingiz uchun to'g'ridan-to'g'ri natija beradigan hamkorlik
        </p>
      </div>

      <!-- Kartalar -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        <div v-for="item in features" :key="item.title"
          class="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
          <div class="flex-row items-start gap-4 p-5 sm:p-6 flex">
            <div class="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl shrink-0 bg-[#DFF3E3]">
              <span class="text-xl sm:text-2xl" v-html="item.icon"></span>
            </div>
            <div>
              <h3 class="font-semibold text-base sm:text-lg text-[#1A1A1A] mb-1">
                {{ item.title }}
              </h3>
              <p class="text-sm text-gray-500 leading-relaxed">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    title: "Yangi mijozlar oqimi",
    description:
      "50 000+ faol a'zo yangi joylarni aynan Saven orqali tanlaydi — endi ular sizni ham ko'radi.",
    icon: "👥",
  },
  {
    title: "0 so'mlik marketing",
    description:
      "Reklama byudjeti shart emas: chegirmangiz — eng kuchli reklamangiz. Faqat kelgan mijozga chegirma berasiz.",
    icon: "📣",
  },
  {
    title: "Biznes panel statistikasi",
    description:
      "Tashriflar, o'rtacha chek, qaytgan mijozlar — barchasi real vaqtda, alohida kabinetingizda.",
    icon: "📊",
  },
  {
    title: "Filiallar boshqaruvi",
    description:
      "Bir kabinetdan barcha filial va kassirlarni boshqaring — har biriga alohida QR-kod.",
    icon: "🏢",
  },
];
</script>