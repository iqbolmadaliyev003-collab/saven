<template>
  <section class="w-full bg-[#123524] py-10 px-4 sm:py-14">
    <div class="max-w-5xl mx-auto">
      <!-- Asosiy kontent: promo + forma yoki muvaffaqiyat -->
      <div
        v-if="!submitted"
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
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

        <!-- O'ng taraf: ko'p bosqichli forma -->
        <div class="bg-white rounded-2xl shadow-xl p-5 sm:p-7">
          <!-- Stepper -->
          <div class="flex items-center mb-6 overflow-x-auto pb-2">
            <template v-for="(step, i) in steps" :key="step.label">
              <div class="flex flex-col items-center shrink-0">
                <div
                  class="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold shrink-0 transition-all"
                  :class="{
                    'bg-emerald-500 text-white': i + 1 < currentStep,
                    'bg-emerald-600 text-white': i + 1 === currentStep,
                    'bg-gray-100 text-gray-400': i + 1 > currentStep,
                  }"
                >
                  <span v-if="i + 1 < currentStep">✓</span>
                  <span v-else>{{ i + 1 }}</span>
                </div>
                <span
                  class="mt-1.5 text-[10px] sm:text-xs whitespace-nowrap"
                  :class="{
                    'text-gray-900 font-medium': i + 1 === currentStep,
                    'text-gray-400': i + 1 !== currentStep,
                  }"
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

          <!-- Maydonlar -->
          <div class="flex flex-col gap-4">
            <!-- 1-BOSQICH: Biznes -->
            <div v-if="currentStep === 1">
              <div>
                <label
                  class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                  >Biznes nomi *</label
                >
                <input
                  v-model="form.name"
                  type="text"
                  placeholder="Masalan: Baraka Restoran"
                  class="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
                />
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <label
                    class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                    >Kategoriya *</label
                  >
                  <select
                    v-model="form.category"
                    class="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
                  >
                    <option value="">Tanlang</option>
                    <option
                      v-for="cat in categoryOptions"
                      :key="cat"
                      :value="cat"
                    >
                      {{ cat }}
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                    >Biznes turi *</label
                  >
                  <select
                    v-model="form.type"
                    class="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
                  >
                    <option value="">Tanlang</option>
                    <option v-for="t in typeOptions" :key="t" :value="t">
                      {{ t }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="mt-4">
                <label
                  class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                  >Mas'ul shaxs FIO *</label
                >
                <input
                  v-model="form.contact"
                  type="text"
                  placeholder="To'liq ism sharif"
                  class="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
                />
              </div>

              <div class="mt-4">
                <label
                  class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                  >Biznes haqida qisqacha</label
                >
                <input
                  v-model="form.about"
                  type="text"
                  placeholder="Faoliyatingiz haqida 1-2 jumla..."
                  class="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
                />
              </div>
            </div>

            <!-- 2-BOSQICH: Kontakt (1-rasm) -->
            <div v-if="currentStep === 2">
              <div>
                <label
                  class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                  >Telefon raqami *</label
                >
                <input
                  v-model="form.phone"
                  type="tel"
                  placeholder="+998 90 000 00 00"
                  class="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
                />
              </div>

              <div class="mt-4">
                <label
                  class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                  >Email manzili</label
                >
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="info@biznes.uz"
                  class="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
                />
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <label
                    class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                    >Instagram</label
                  >
                  <input
                    v-model="form.instagram"
                    type="text"
                    placeholder="@biznes.uz"
                    class="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label
                    class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                    >Telegram kanali</label
                  >
                  <input
                    v-model="form.telegram"
                    type="text"
                    placeholder="t.me/biznes.uz"
                    class="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
                  />
                </div>
              </div>

              <div class="mt-4">
                <label
                  class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                  >Veb-sayt</label
                >
                <input
                  v-model="form.website"
                  type="text"
                  placeholder="www.biznes.uz"
                  class="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
                />
              </div>
            </div>

            <!-- 3-BOSQICH: Joylashuv (2-rasm) -->
            <div v-if="currentStep === 3">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                    >Viloyat *</label
                  >
                  <select
                    v-model="form.viloyat"
                    class="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
                  >
                    <option value="">Tanlang</option>
                    <option v-for="v in viloyatOptions" :key="v" :value="v">
                      {{ v }}
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                    >Shahar / Tuman *</label
                  >
                  <select
                    v-model="form.tuman"
                    class="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
                  >
                    <option value="">Tanlang</option>
                    <option v-for="t in tumanOptions" :key="t" :value="t">
                      {{ t }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="mt-4">
                <label
                  class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                  >To'liq manzil *</label
                >
                <input
                  v-model="form.address"
                  type="text"
                  placeholder="Ko'cha, uy, mo'ljal..."
                  class="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
                />
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <label
                    class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                    >Ish kunlari</label
                  >
                  <select
                    v-model="form.ish_kunlari"
                    class="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
                  >
                    <option value="">Tanlang</option>
                    <option v-for="k in ishKunlariOptions" :key="k" :value="k">
                      {{ k }}
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                    >Ish vaqti</label
                  >
                  <select
                    v-model="form.ish_vaqti"
                    class="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
                  >
                    <option value="">Tanlang</option>
                    <option v-for="v in ishVaqtiOptions" :key="v" :value="v">
                      {{ v }}
                    </option>
                  </select>
                </div>
              </div>

              <div
                class="mt-4 bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs p-3 rounded-lg"
              >
                Aniq lokatsiyani operator siz bilan birga belgilaydi
              </div>
            </div>

            <!-- 4-BOSQICH: Chegirma (3-rasm) -->
            <div v-if="currentStep === 4">
              <div>
                <label
                  class="block text-xs sm:text-sm font-medium text-gray-700 mb-2"
                  >Chegirma foizi *</label
                >
                <div class="flex flex-wrap gap-2">
                  <button
                    v-for="opt in discountOptions"
                    :key="opt.val"
                    type="button"
                    @click="form.discount = opt.val"
                    :class="[
                      'px-4 py-1.5 text-sm font-medium rounded-full transition-all border',
                      form.discount === opt.val
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300',
                    ]"
                  >
                    {{ opt.label }}
                  </button>
                </div>
                <p class="text-xs text-gray-500 mt-1">
                  Tavsiya: kategoriyangizda o'rtacha 10-20% eng samarali
                </p>
              </div>

              <div class="mt-4">
                <label
                  class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                  >Min. xarid summasi (so'm)</label
                >
                <input
                  v-model.number="form.min_sum"
                  type="number"
                  placeholder="50 000"
                  class="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
                />
              </div>

              <div class="mt-4">
                <label
                  class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                  >Qo‘shimcha turi</label
                >
                <select
                  v-model="form.additional_type"
                  class="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
                >
                  <option value="">Tanlang</option>
                  <option
                    v-for="a in additionalTypeOptions"
                    :key="a"
                    :value="a"
                  >
                    {{ a }}
                  </option>
                </select>
              </div>

              <div
                class="mt-4 bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs p-3 rounded-lg"
              >
                Yuborilgach arizangiz operatorga tushadi — 24 soat ichida
                shartnoma va QR o‘rnatish bo‘yicha bog‘lanamiz
              </div>
            </div>
          </div>

          <!-- Pastki navigatsiya -->
          <div class="flex items-center justify-between mt-6">
            <button
              v-if="currentStep > 1"
              type="button"
              @click="prevStep"
              class="flex items-center gap-1 text-sm text-gray-500 hover:text-emerald-600 transition-colors"
            >
              ← Orqaga
            </button>
            <span class="text-xs text-gray-400"
              >{{ currentStep }}/{{ steps.length }} qadam</span
            >
            <button
              type="button"
              @click="nextStep"
              class="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-5 py-2.5 transition-colors"
            >
              {{ currentStep < steps.length ? "Keyingi" : "Ariza yuborish" }}
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Muvaffaqiyat ekrani (4-rasm) -->
      <div v-else class="max-w-md mx-auto">
        <div class="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div
            class="mx-auto w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center mb-4"
          >
            <span class="text-white text-3xl">✓</span>
          </div>
          <h3 class="text-xl font-semibold mb-2">Arizangiz qabul qilindi!</h3>
          <p class="text-sm text-gray-600 mb-4">
            Operatorlarimiz 24 soat ichida siz bilan bog‘lanadi va hamkorlik
            shartlarini kelishib olamiz.
          </p>

          <div class="flex items-center justify-center gap-2 text-sm mb-5">
            <span
              >Ariza raqami:
              <span class="font-mono font-semibold">#ZA-2481</span></span
            >
            <span
              class="bg-amber-100 text-amber-600 text-xs px-2.5 py-0.5 rounded-full"
              >Kutilmoqda</span
            >
          </div>

          <p class="text-xs text-gray-500 mb-6">
            Savollar bo‘lsa:
            <a href="#" class="text-emerald-600">@saven_biznes</a>
          </p>

          <button
            @click="resetForm"
            class="w-full border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-medium py-2.5 rounded-lg transition-colors"
          >
            Bosh sahifaga qaytish
          </button>
        </div>
      </div>
    </div>

    <p class="text-center text-white/50 text-xs sm:text-sm mt-8">
      → Ariza to‘g‘ridan-to‘g‘ri Admin panel «Arizalar» bo‘limiga tushadi
    </p>
  </section>

  <footer class="bg-white text-[#667085]">
    <div
      class="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8 px-6 py-10"
    >
      <div
        class="flex flex-col items-center md:items-start gap-4 text-center md:text-left"
      >
        <span
          class="flex justify-center w-14 text-2xl font-bold text-[#89EA5C] bg-[#E4FBCC] px-4 rounded-2xl"
          >saven</span
        >
        <p>© 2026 Saven. Barcha huquqlar himoyalangan.</p>
      </div>
      <div
        class="flex flex-col items-center md:items-end gap-4 text-center md:text-right"
      >
        <div class="flex flex-col sm:flex-row gap-2 sm:gap-8">
          <p>Oferta</p>
          <p>Maxfiylik siyosati</p>
        </div>
        <a href="#" class="text-[#3F9A1F]">@saven_biznes</a>
      </div>
    </div>
  </footer>
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
const submitted = ref(false);

const form = ref({
  // 1-bosqich
  name: "Baraka Restoran",
  category: "Restoran",
  type: "YaTT",
  contact: "Aliyev Valijon",
  about: "Mazali taomlar va qulay muhit",
  // 2-bosqich
  phone: "+998 90 000 00 00",
  email: "info@biznes.uz",
  instagram: "@biznes.uz",
  telegram: "t.me/biznes.uz",
  website: "www.biznes.uz",
  // 3-bosqich
  viloyat: "Toshkent shahri",
  tuman: "Chilonzor tumani",
  address: "Ko'cha, uy, mo'ljal...",
  ish_kunlari: "Dushanba - Juma",
  ish_vaqti: "09:00 - 18:00",
  // 4-bosqich
  discount: 15,
  min_sum: 50000,
  additional_type: "Barcha mahsulotlar",
});

const categoryOptions = ["Restoran", "Kafe", "Salon", "Do'kon"];
const typeOptions = ["YaTT", "MChJ"];
const viloyatOptions = [
  "Toshkent shahri",
  "Toshkent viloyati",
  "Samarqand viloyati",
  "Buxoro viloyati",
];
const tumanOptions = [
  "Chilonzor tumani",
  "Yunusobod tumani",
  "Mirobod tumani",
  "Shayxontohur tumani",
];
const ishKunlariOptions = ["Dushanba - Juma", "Dushanba - Shanba", "Har kuni"];
const ishVaqtiOptions = ["09:00 - 18:00", "10:00 - 20:00", "08:00 - 22:00"];
const additionalTypeOptions = [
  "Barcha mahsulotlar",
  "Faqat yangi mahsulotlar",
  "Tanlangan toifalar",
];

const discountOptions = [
  { val: 5, label: "5%" },
  { val: 10, label: "10%" },
  { val: 15, label: "15%" },
  { val: 20, label: "20%" },
  { val: 25, label: "25%+" },
];

function nextStep() {
  if (currentStep.value < steps.length) {
    currentStep.value++;
  } else {
    submitApplication();
  }
}

function prevStep() {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
}

function submitApplication() {
  submitted.value = true;
}

function resetForm() {
  submitted.value = false;
  currentStep.value = 1;
  form.value = {
    name: "",
    category: "",
    type: "",
    contact: "",
    about: "",
    phone: "+998 ",
    email: "",
    instagram: "",
    telegram: "",
    website: "",
    viloyat: "",
    tuman: "",
    address: "",
    ish_kunlari: "",
    ish_vaqti: "",
    discount: 15,
    min_sum: 50000,
    additional_type: "",
  };
}
</script>
