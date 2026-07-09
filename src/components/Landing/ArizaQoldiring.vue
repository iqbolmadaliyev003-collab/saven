<template>
  <section class="w-full bg-[#123524] py-10 px-4 sm:py-14">
    <div
      class="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
    >
      <!-- Chap taraf: matn -->
      <div class="text-white">
        <h2 class="text-2xl sm:text-3xl font-bold mb-4">Ariza qoldiring</h2>
        <p
          class="text-sm sm:text-base text-white/70 leading-relaxed mb-8 max-w-md"
        >
          Formani to'ldiring — operatorlarimiz 24 soat ichida bog'lanadi va
          hamkorlik shartlarini kelishib olamiz.
        </p>

        <div class="flex flex-col gap-3 text-sm sm:text-base">
          <a
            href="tel:+998712000000"
            class="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
          >
            <span class="text-white/50">📞</span> +998 71 200 00 00
          </a>
          <a
            href="#"
            class="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
          >
            <span class="text-white/50">✈️</span> @saven_biznes
          </a>
          <a
            href="mailto:biznes@saven.uz"
            class="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
          >
            <span class="text-white/50">✉️</span> biznes@saven.uz
          </a>
        </div>
      </div>

      <!-- O'ng taraf: forma -->
      <div class="bg-white rounded-2xl shadow-xl p-5 sm:p-7">
        <!-- Stepper -->
        <div class="flex items-center mb-6 overflow-x-auto">
          <template v-for="(step, i) in steps" :key="step.label">
            <div class="flex flex-col items-center shrink-0">
              <div
                class="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold shrink-0"
                :class="
                  i + 1 === currentStep
                    ? 'bg-emerald-600 text-white'
                    : i + 1 < currentStep
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-gray-100 text-gray-400'
                "
              >
                {{ i + 1 }}
              </div>
              <span
                class="mt-1.5 text-[10px] sm:text-xs whitespace-nowrap"
                :class="
                  i + 1 === currentStep
                    ? 'text-gray-900 font-medium'
                    : 'text-gray-400'
                "
              >
                {{ step.label }}
              </span>
            </div>
            <div
              v-if="i < steps.length - 1"
              class="flex-1 h-px mx-1.5 sm:mx-2 mb-4"
              :class="i + 1 < currentStep ? 'bg-emerald-300' : 'bg-gray-200'"
            />
          </template>
        </div>

        <p class="text-xs text-gray-400 mb-5">
          * bilan belgilangan maydonlar majburiy
        </p>

        <!-- Forma maydonlari -->
        <form class="flex flex-col gap-4" @submit.prevent="nextStep">
          <div>
            <label
              class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
            >
              Biznes nomi *
            </label>
            <input
              v-model="form.name"
              type="text"
              placeholder="Masalan: Baraka Restoran"
              class="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
            />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
              >
                Kategoriya *
              </label>
              <select
                v-model="form.category"
                class="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
              >
                <option value="">Tanlang</option>
                <option value="restoran">Restoran</option>
                <option value="kafe">Kafe</option>
                <option value="salon">Salon</option>
              </select>
            </div>
            <div>
              <label
                class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
              >
                Biznes turi *
              </label>
              <select
                v-model="form.type"
                class="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
              >
                <option value="">YaTT / MChJ</option>
                <option value="yatt">YaTT</option>
                <option value="mchj">MChJ</option>
              </select>
            </div>
          </div>

          <div>
            <label
              class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
            >
              Mas'ul shaxs FIO *
            </label>
            <input
              v-model="form.contact"
              type="text"
              placeholder="To'liq ism sharif"
              class="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
            />
          </div>

          <div>
            <label
              class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
            >
              Biznes haqida qisqacha
            </label>
            <input
              v-model="form.about"
              type="text"
              placeholder="Faoliyatingiz haqida 1-2 jumla..."
              class="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
            />
          </div>

          <div class="flex items-center justify-between mt-2">
            <span class="text-xs text-gray-400"
              >{{ currentStep }}/{{ steps.length }} qadam</span
            >
            <button
              type="submit"
              class="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-5 py-2.5 transition-colors"
            >
              Keyingi <span aria-hidden="true">→</span>
            </button>
          </div>
        </form>
      </div>
    </div>

    <p class="text-center text-white/50 text-xs sm:text-sm mt-8">
      → Ariza to'g'ridan-to'g'ri Admin panel «Arizalar» bo'limiga tushadi
    </p>
  </section>
</template>

<script setup>
import { ref } from "vue";

const steps = [
  { label: "Biznes" },
  { label: "Kontakt" },
  { label: "Joylashuv" },
  { label: "Chegirma" },
];

const currentStep = ref(1);

const form = ref({
  name: "",
  category: "",
  type: "",
  contact: "",
  about: "",
});

function nextStep() {
  if (currentStep.value < steps.length) {
    currentStep.value++;
  }
}
</script>
