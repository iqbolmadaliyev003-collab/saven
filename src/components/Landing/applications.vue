<template>
  <section class="w-full bg-[#123524] py-2 px-4">
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
        <!-- Muvaffaqiyatli yuborilgan holat -->
        <div
          v-if="submitted"
          class="flex flex-col items-center justify-center text-center py-5 px-2"
        >
          <div
            class="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-5"
          >
            <svg
              class="w-8 h-8 text-emerald-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
          <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">
            Arizangiz qabul qilindi!
          </h3>
          <p class="text-sm text-gray-500 max-w-xs mb-6">
            Operatorlarimiz 24 soat ichida siz bilan bog'lanib, shartnoma va QR
            o'rnatish bo'yicha kelishib oladi.
          </p>
          <button
            type="button"
            class="text-sm font-semibold text-emerald-700 hover:text-emerald-800"
            @click="resetForm"
          >
            ← Yangi ariza yuborish
          </button>
        </div>

        <template v-else>
          <!-- Stepper -->
          <div class="flex items-center mb-6 overflow-x-auto">
            <template v-for="(step, i) in steps" :key="step.label">
              <div class="flex flex-col items-center shrink-0">
                <div
                  class="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold shrink-0 transition-colors duration-200"
                  :class="
                    i + 1 < currentStep
                      ? 'bg-white border-2 border-emerald-500 text-emerald-600'
                      : i + 1 === currentStep
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-100 text-gray-400'
                  "
                >
                  <svg
                    v-if="i + 1 < currentStep"
                    class="w-3.5 h-3.5 sm:w-4 sm:h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="3"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span v-else>{{ i + 1 }}</span>
                </div>
                <span
                  class="mt-1.5 text-[10px] sm:text-xs whitespace-nowrap"
                  :class="
                    i + 1 === currentStep
                      ? 'text-gray-900 font-medium'
                      : i + 1 < currentStep
                        ? 'text-emerald-600'
                        : 'text-gray-400'
                  "
                >
                  {{ step.label }}
                </span>
              </div>
              <div
                v-if="i < steps.length - 1"
                class="flex-1 h-px mx-1.5 sm:mx-2 mb-4 transition-colors duration-200"
                :class="i + 1 < currentStep ? 'bg-emerald-300' : 'bg-gray-200'"
              />
            </template>
          </div>

          <p class="text-xs text-gray-400 mb-5">
            * bilan belgilangan maydonlar majburiy
          </p>

          <!-- Forma maydonlari -->
          <form class="flex flex-col gap-4" @submit.prevent="handleSubmit">
            <transition name="fade-slide" mode="out-in">
              <!-- 1-BOSQICH: Biznes -->
              <div
                v-if="currentStep === 1"
                key="step1"
                class="flex flex-col gap-4"
              >
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
                      class="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
                    >
                      <option value="" disabled>Tanlang</option>
                      <option value="restoran">Restoran</option>
                      <option value="kafe">Kafe</option>
                      <option value="salon">Salon</option>
                      <option value="boshqa">Boshqa</option>
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
                      class="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
                    >
                      <option value="" disabled>YaTT / MChJ</option>
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
              </div>

              <!-- 2-BOSQICH: Kontakt -->
              <div
                v-else-if="currentStep === 2"
                key="step2"
                class="flex flex-col gap-4"
              >
                <div>
                  <label
                    class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Telefon raqami *
                  </label>
                  <input
                    v-model="form.phone"
                    type="tel"
                    placeholder="+998 90 000 00 00"
                    class="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label
                    class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Email manzil
                  </label>
                  <input
                    v-model="form.email"
                    type="email"
                    placeholder="info@biznes.uz"
                    class="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
                  />
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Instagram
                    </label>
                    <input
                      v-model="form.instagram"
                      type="text"
                      placeholder="@biznes_uz"
                      class="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label
                      class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Telegram kanal
                    </label>
                    <input
                      v-model="form.telegram"
                      type="text"
                      placeholder="t.me/biznes_uz"
                      class="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Veb-sayt
                  </label>
                  <input
                    v-model="form.website"
                    type="text"
                    placeholder="www.biznes.uz"
                    class="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
                  />
                </div>
              </div>

              <!-- 3-BOSQICH: Joylashuv -->
              <div
                v-else-if="currentStep === 3"
                key="step3"
                class="flex flex-col gap-4"
              >
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Viloyat *
                    </label>
                    <select
                      v-model="form.region"
                      class="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
                    >
                      <option value="" disabled>Tanlang</option>
                      <option value="tashkent_city">Toshkent shahar</option>
                      <option value="tashkent_region">Toshkent viloyati</option>
                      <option value="samarkand">Samarqand</option>
                      <option value="fergana">Farg'ona</option>
                      <option value="andijan">Andijon</option>
                      <option value="boshqa">Boshqa</option>
                    </select>
                  </div>
                  <div>
                    <label
                      class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Shahar / Tuman *
                    </label>
                    <select
                      v-model="form.district"
                      class="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
                    >
                      <option value="" disabled>Tanlang</option>
                      <option value="chilonzor">Chilonzor tumani</option>
                      <option value="yunusobod">Yunusobod tumani</option>
                      <option value="mirzo_ulugbek">
                        Mirzo Ulug'bek tumani
                      </option>
                      <option value="yashnobod">Yashnobod tumani</option>
                      <option value="boshqa">Boshqa</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                  >
                    To'liq manzil
                  </label>
                  <input
                    v-model="form.address"
                    type="text"
                    placeholder="Ko'cha, uy, mo'ljal..."
                    class="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
                  />
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Ish kunlari
                    </label>
                    <select
                      v-model="form.workDays"
                      class="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
                    >
                      <option value="mon_fri">Dushanba - Juma</option>
                      <option value="mon_sat">Dushanba - Shanba</option>
                      <option value="every_day">Har kuni</option>
                    </select>
                  </div>
                  <div>
                    <label
                      class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Ish vaqti
                    </label>
                    <select
                      v-model="form.workHours"
                      class="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
                    >
                      <option value="09-18">09:00 - 18:00</option>
                      <option value="10-22">10:00 - 22:00</option>
                      <option value="24h">24 soat</option>
                    </select>
                  </div>
                </div>

                <p class="flex items-start gap-1.5 text-xs text-gray-400">
                  <span class="text-amber-500 leading-none mt-0.5">⚠</span>
                  Manzilni aniq ko'rsating — operator siz bilan bog'lanib
                  joylashuvni aniqlashtiradi
                </p>
              </div>

              <!-- 4-BOSQICH: Chegirma -->
              <div v-else key="step4" class="flex flex-col gap-4">
                <div>
                  <label
                    class="block text-xs sm:text-sm font-medium text-gray-700 mb-2.5"
                  >
                    Chegirma foizi *
                  </label>
                  <div class="grid grid-cols-4 gap-2">
                    <button
                      v-for="option in discountOptions"
                      :key="option"
                      type="button"
                      class="rounded-full py-2 text-sm font-semibold border transition-colors"
                      :class="
                        form.discount === option
                          ? 'bg-emerald-500 border-emerald-500 text-white'
                          : 'bg-white border-gray-200 text-gray-600 hover:border-emerald-300'
                      "
                      @click="form.discount = option"
                    >
                      {{ option }}
                    </button>
                  </div>
                  <p class="text-xs text-gray-400 mt-2">
                    Tavsiya: telegram/insta orqali 10–15% eng samarali natija
                    beradi
                  </p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Min. xarid summasi (so'm)
                    </label>
                    <input
                      v-model="form.minAmount"
                      type="text"
                      inputmode="numeric"
                      placeholder="50 000"
                      class="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label
                      class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Do'kon turi
                    </label>
                    <select
                      v-model="form.productType"
                      class="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
                    >
                      <option value="all">Barcha mahsulotlar</option>
                      <option value="selected">Tanlangan mahsulotlar</option>
                    </select>
                  </div>
                </div>

                <div
                  class="flex items-start gap-2.5 rounded-lg bg-emerald-50 border border-emerald-100 px-3.5 py-3"
                >
                  <span class="text-emerald-600 mt-0.5">✓</span>
                  <p class="text-xs text-emerald-800 leading-relaxed">
                    Yuborilgach, arizangiz operatorga tushadi — 24 soat ichida
                    shartnoma va QR o'rnatish bo'yicha bog'lanamiz
                  </p>
                </div>
              </div>
            </transition>

            <p v-if="errorMessage" class="text-xs text-red-500 -mt-1">
              {{ errorMessage }}
            </p>

            <!-- Navigatsiya -->
            <div class="flex items-center justify-between mt-2">
              <RouterLink
                to="/"
                class="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-5 py-2.5 transition-colors"
              >
                ← Orqaga
              </RouterLink>
              <button
                v-if="currentStep > 1"
                type="button"
                class="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                @click="prevStep"
              >
                ← Orqaga
              </button>
              <span v-else class="text-xs text-gray-400">
                {{ currentStep }}/{{ steps.length }} qadam
              </span>

              <button
                v-if="currentStep < steps.length"
                type="submit"
                class="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-5 py-2.5 transition-colors"
              >
                Keyingi <span aria-hidden="true">→</span>
              </button>
              <button
                v-else
                type="submit"
                :disabled="isSubmitting"
                class="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white text-sm font-semibold px-5 py-2.5 transition-colors"
              >
                {{ isSubmitting ? "Yuborilmoqda..." : "Ariza yuborish" }}
              </button>
            </div>

            <span
              v-if="currentStep > 1"
              class="text-xs text-gray-400 text-right -mt-2"
            >
              {{ currentStep }}/{{ steps.length }} qadam
            </span>
          </form>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from "vue";

const steps = [
  { label: "Biznes" },
  { label: "Kontakt" },
  { label: "Joylashuv" },
  { label: "Chegirma" },
];

const discountOptions = ["5%", "10%", "15%", "20%", "25%+"];

const currentStep = ref(1);
const submitted = ref(false);
const isSubmitting = ref(false);
const errorMessage = ref("");

const form = reactive({
  // 1-bosqich
  name: "",
  category: "",
  type: "",
  contact: "",
  about: "",
  // 2-bosqich
  phone: "",
  email: "",
  instagram: "",
  telegram: "",
  website: "",
  // 3-bosqich
  region: "",
  district: "",
  address: "",
  workDays: "mon_fri",
  workHours: "09-18",
  // 4-bosqich
  discount: "15%",
  minAmount: "",
  productType: "all",
});

// Har bir bosqich uchun majburiy maydonlarni tekshirish
function validateStep(step) {
  errorMessage.value = "";

  if (step === 1) {
    if (!form.name || !form.category || !form.type || !form.contact) {
      errorMessage.value =
        "Iltimos, * bilan belgilangan maydonlarni to'ldiring";
      return false;
    }
  }
  if (step === 2) {
    if (!form.phone) {
      errorMessage.value = "Telefon raqamini kiriting";
      return false;
    }
  }
  if (step === 3) {
    if (!form.region || !form.district) {
      errorMessage.value = "Viloyat va tumanni tanlang";
      return false;
    }
  }
  return true;
}

function prevStep() {
  errorMessage.value = "";
  if (currentStep.value > 1) currentStep.value--;
}

function handleSubmit() {
  if (!validateStep(currentStep.value)) return;

  if (currentStep.value < steps.length) {
    currentStep.value++;
    return;
  }

  submitApplication();
}

// BACKEND BILAN ULASH UCHUN TAYYOR QISM

async function submitApplication() {
  isSubmitting.value = true;
  errorMessage.value = "";
  try {
    // TODO: backend tayyor bo'lganda haqiqiy so'rovga almashtiring
    await new Promise((resolve) => setTimeout(resolve, 900));
    console.log("Yuborilayotgan ma'lumot:", JSON.parse(JSON.stringify(form)));

    submitted.value = true;
  } catch (err) {
    errorMessage.value = "Xatolik yuz berdi, qaytadan urinib ko'ring";
  } finally {
    isSubmitting.value = false;
  }
}

function resetForm() {
  currentStep.value = 1;
  submitted.value = false;
  errorMessage.value = "";
  Object.assign(form, {
    name: "",
    category: "",
    type: "",
    contact: "",
    about: "",
    phone: "",
    email: "",
    instagram: "",
    telegram: "",
    website: "",
    region: "",
    district: "",
    address: "",
    workDays: "mon_fri",
    workHours: "09-18",
    discount: "15%",
    minAmount: "",
    productType: "all",
  });
}
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.2s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(12px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-12px);
}
</style>
