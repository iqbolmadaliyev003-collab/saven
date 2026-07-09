<template>
  <section class="w-full bg-base-100 py-12 sm:py-16 px-4">
    <div class="max-w-5xl mx-auto">
      <!-- Sarlavha -->
      <div class="text-center mb-10 sm:mb-12">
        <h2 class="text-2xl sm:text-3xl font-bold text-base-content">
          Nega Saven?
        </h2>
        <p class="mt-2 text-sm sm:text-base text-base-content/60">
          Biznesingiz uchun to'g'ridan-to'g'ri natija beradigan hamkorlik
        </p>
      </div>

      <!-- Kartalar -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        <div
          v-for="item in features"
          :key="item.title"
          class="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <div class="card-body flex-row items-start gap-4 p-5 sm:p-6">
            <div
              class="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl shrink-0"
              :class="item.iconBg"
            >
              <span class="text-xl sm:text-2xl" v-html="item.icon"></span>
            </div>
            <div>
              <h3
                class="font-semibold text-base sm:text-lg text-base-content mb-1"
              >
                {{ item.title }}
              </h3>
              <p class="text-sm text-base-content/60 leading-relaxed">
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
    iconBg: "bg-emerald-100",
  },
  {
    title: "0 so'mlik marketing",
    description:
      "Reklama byudjeti shart emas: chegirmangiz — eng kuchli reklamangiz. Faqat kelgan mijozga chegirma berasiz.",
    icon: "📣",
    iconBg: "bg-amber-100",
  },
  {
    title: "Biznes panel statistikasi",
    description:
      "Tashriflar, o'rtacha chek, qaytgan mijozlar — barchasi real vaqtda, alohida kabinetingizda.",
    icon: "📊",
    iconBg: "bg-emerald-100",
  },
  {
    title: "Filiallar boshqaruvi",
    description:
      "Bir kabinetdan barcha filial va kassirlarni boshqaring — har biriga alohida QR-kod.",
    icon: "🏢",
    iconBg: "bg-sky-100",
  },
];
</script>
