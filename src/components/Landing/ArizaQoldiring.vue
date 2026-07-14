<template>
  <!-- Asosiy sektsiya kirishda paydo bo'lish effekti bilan -->
  <section
    ref="sectionRef"
    :class="[
      'w-full bg-[#123524] min-h-screen transition-all duration-1000 ease-out transform',
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
    ]"
  >
    <div class="max-w-5xl mx-auto px-4 py-2 flex flex-col">
      <!-- Til tanlash va Back buton -->
      <div
        class="mb-2 flex justify-between w-full sm:w-96 items-center flex-shrink-0"
      >
        <a
          href="/"
          class="inline-flex items-center gap-2 rounded-full bg-emerald-600/20 hover:bg-emerald-700 text-white text-sm font-semibold px-5 py-2.5 transition-colors"
        >
          ← {{ t("applyForm.back") }}
        </a>
        <div class="flex justify-end gap-2">
          <button
            @click="setLang('uz')"
            :class="[
              'px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 transform active:scale-95',
              lang === 'uz'
                ? 'bg-emerald-500 text-white scale-105 shadow-md'
                : 'bg-white/10 text-white/60 hover:text-white',
            ]"
          >
            UZ
          </button>
          <button
            @click="setLang('ru')"
            :class="[
              'px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 transform active:scale-95',
              lang === 'ru'
                ? 'bg-emerald-500 text-white scale-105 shadow-md'
                : 'bg-white/10 text-white/60 hover:text-white',
            ]"
          >
            RU
          </button>
        </div>
      </div>

      <!-- Asosiy kontent: promo + forma yoki muvaffaqiyat -->
      <div
        v-if="!submitted"
        class="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center overflow-hidden"
      >
        <!-- Chap taraf: matn -->
        <div
          :class="[
            'text-white transition-all duration-700 delay-200 transform flex-shrink-0',
            isVisible
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-10',
          ]"
        >
          <h2 class="text-2xl sm:text-3xl font-bold mb-4">
            {{ t("applyForm.title1") }}
          </h2>
          <p
            class="text-sm sm:text-base text-white/70 leading-relaxed mb-8 max-w-md"
          >
            {{ t("applyForm.subtitle") }}
          </p>

          <div class="flex flex-col gap-3 text-sm sm:text-base">
            <a
              :href="`tel:${t('applyForm.contacts.phone')}`"
              class="flex items-center gap-3 text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300"
            >
              <span class="text-white/50">📞</span>
              {{ t("applyForm.contacts.phone") }}
            </a>
            <a
              href="#"
              class="flex items-center gap-3 text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300"
            >
              <span class="text-white/50">✈️</span>
              {{ t("applyForm.contacts.telegram") }}
            </a>
            <a
              :href="`mailto:${t('applyForm.contacts.email')}`"
              class="flex items-center gap-3 text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300"
            >
              <span class="text-white/50">✉️</span>
              {{ t("applyForm.contacts.email") }}
            </a>
          </div>
        </div>

        <!-- O'ng taraf: ko'p bosqichli forma -->
        <div
          :class="[
            'bg-white rounded-2xl shadow-xl p-5 sm:p-7 transition-all duration-700 delay-400 transform flex flex-col h-full overflow-hidden',
            isVisible
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-10',
          ]"
        >
          <!-- Stepper -->
          <div class="flex items-center mb-6 flex-shrink-0 overflow-hidden">
            <div class="flex items-center w-full">
              <template v-for="(step, i) in stepLabels" :key="step">
                <div class="flex flex-col items-center shrink-0 p-2">
                  <div
                    class="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold shrink-0 transition-all duration-500"
                    :class="{
                      'bg-emerald-500 text-white scale-105':
                        i + 1 < currentStep,
                      'bg-emerald-600 text-white ring-4 ring-emerald-100 scale-110':
                        i + 1 === currentStep,
                      'bg-gray-100 text-gray-400': i + 1 > currentStep,
                    }"
                  >
                    <span v-if="i + 1 < currentStep">✓</span>
                    <span v-else>{{ i + 1 }}</span>
                  </div>
                  <span
                    class="mt-1.5 text-[10px] sm:text-xs whitespace-nowrap transition-all duration-300"
                    :class="{
                      'text-gray-900 font-medium scale-105':
                        i + 1 === currentStep,
                      'text-gray-400': i + 1 !== currentStep,
                    }"
                  >
                    {{ step }}
                  </span>
                </div>
                <div
                  v-if="i < stepLabels.length - 1"
                  class="flex-1 h-px mx-1.5 sm:mx-2 mb-4 transition-all duration-500 shrink-0"
                  :class="
                    i + 1 < currentStep ? 'bg-emerald-300' : 'bg-gray-200'
                  "
                />
              </template>
            </div>
          </div>

          <p class="text-xs text-gray-400 mb-5 flex-shrink-0">
            {{ t("applyForm.requiredNote") }}
          </p>

          <!-- Maydonlar -->
          <div class="relative overflow-hidden flex-1 min-h-0">
            <Transition name="fade-slide" mode="out-in">
              <!-- 1-BOSQICH: Biznes -->
              <div
                v-if="currentStep === 1"
                key="step1"
                class="flex flex-col gap-4 h-full overflow-y-auto pr-2"
              >
                <div>
                  <label
                    class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                  >
                    {{ t("applyForm.step1Fields.businessName") }}
                  </label>
                  <input
                    v-model="form.name"
                    type="text"
                    placeholder="Masalan: Baraka Restoran"
                    :class="[
                      'w-full rounded-lg text-slate-800 border px-3.5 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all',
                      fieldErrors.name
                        ? 'border-red-500 focus:ring-red-500/40 focus:border-red-500'
                        : 'border-gray-200 focus:ring-emerald-500/40 focus:border-emerald-500',
                    ]"
                  />
                  <p v-if="fieldErrors.name" class="text-xs text-red-500 mt-1">
                    {{ fieldErrors.name }}
                  </p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                    >
                      {{ t("applyForm.step1Fields.category") }}
                    </label>
                    <select
                      v-model="form.category"
                      :class="[
                        'w-full rounded-lg border px-3.5 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 transition-all',
                        fieldErrors.category
                          ? 'border-red-500 focus:ring-red-500/40 focus:border-red-500'
                          : 'border-gray-200 focus:ring-emerald-500/40 focus:border-emerald-500',
                      ]"
                    >
                      <option value="">
                        {{ t("applyForm.step1Fields.categoryPlaceholder") }}
                      </option>
                      <option
                        v-for="cat in categories"
                        :key="cat.id"
                        :value="cat.id"
                      >
                        {{ cat.name }}
                      </option>
                    </select>
                    <p
                      v-if="fieldErrors.category"
                      class="text-xs text-red-500 mt-1"
                    >
                      {{ fieldErrors.category }}
                    </p>
                  </div>
                  <div>
                    <label
                      class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                    >
                      {{ t("applyForm.step1Fields.businessType") }}
                    </label>
                    <select
                      v-model="form.type"
                      :class="[
                        'w-full rounded-lg border px-3.5 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 transition-all',
                        fieldErrors.type
                          ? 'border-red-500 focus:ring-red-500/40 focus:border-red-500'
                          : 'border-gray-200 focus:ring-emerald-500/40 focus:border-emerald-500',
                      ]"
                    >
                      <option value="">
                        {{ t("applyForm.step1Fields.businessTypePlaceholder") }}
                      </option>
                      <option
                        v-for="tp in businessTypeOptions"
                        :key="tp.value"
                        :value="tp.value"
                      >
                        {{ tp.label }}
                      </option>
                    </select>
                    <p
                      v-if="fieldErrors.type"
                      class="text-xs text-red-500 mt-1"
                    >
                      {{ fieldErrors.type }}
                    </p>
                  </div>
                </div>

                <div>
                  <label
                    class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                  >
                    {{ t("applyForm.step1Fields.responsiblePerson") }}
                  </label>
                  <input
                    v-model="form.contact"
                    type="text"
                    placeholder="To'liq ism sharif"
                    :class="[
                      'w-full rounded-lg border text-slate-800 px-3.5 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all',
                      fieldErrors.contact
                        ? 'border-red-500 focus:ring-red-500/40 focus:border-red-500'
                        : 'border-gray-200 focus:ring-emerald-500/40 focus:border-emerald-500',
                    ]"
                  />
                  <p
                    v-if="fieldErrors.contact"
                    class="text-xs text-red-500 mt-1"
                  >
                    {{ fieldErrors.contact }}
                  </p>
                </div>

                <div>
                  <label
                    class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                  >
                    {{ t("applyForm.step1Fields.aboutBusiness") }}
                  </label>
                  <input
                    v-model="form.about"
                    type="text"
                    placeholder="Faoliyatingiz haqida 1-2 jumla..."
                    :class="[
                      'w-full rounded-lg text-slate-800 border px-3.5 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all',
                      fieldErrors.about
                        ? 'border-red-500 focus:ring-red-500/40 focus:border-red-500'
                        : 'border-gray-200 focus:ring-emerald-500/40 focus:border-emerald-500',
                    ]"
                  />
                  <p
                    v-if="fieldErrors.about"
                    class="text-xs text-red-500 mt-1"
                  >
                    {{ fieldErrors.about }}
                  </p>
                </div>
              </div>

              <!-- 2-BOSQICH: Kontakt -->
              <div
                v-else-if="currentStep === 2"
                key="step2"
                class="flex flex-col gap-4 h-full overflow-y-auto pr-2"
              >
                <div>
                  <label
                    class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                  >
                    {{ t("applyForm.step2Fields.phone") }}
                  </label>
                  <input
                    v-model="form.phone"
                    type="tel"
                    placeholder="+998 90 000 00 00"
                    :class="[
                      'w-full rounded-lg text-slate-800 border px-3.5 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all',
                      fieldErrors.phone
                        ? 'border-red-500 focus:ring-red-500/40 focus:border-red-500'
                        : 'border-gray-200 focus:ring-emerald-500/40 focus:border-emerald-500',
                    ]"
                  />
                  <p v-if="fieldErrors.phone" class="text-xs text-red-500 mt-1">
                    {{ fieldErrors.phone }}
                  </p>
                </div>

                <div>
                  <label
                    class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                  >
                    {{ t("applyForm.step2Fields.email") }}
                  </label>
                  <input
                    v-model="form.email"
                    type="email"
                    placeholder="info@biznes.uz"
                    :class="[
                      'w-full rounded-lg border text-slate-800 px-3.5 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all',
                      fieldErrors.email
                        ? 'border-red-500 focus:ring-red-500/40 focus:border-red-500'
                        : 'border-gray-200 focus:ring-emerald-500/40 focus:border-emerald-500',
                    ]"
                  />
                  <p v-if="fieldErrors.email" class="text-xs text-red-500 mt-1">
                    {{ fieldErrors.email }}
                  </p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                    >
                      {{ t("applyForm.step2Fields.instagram") }}
                    </label>
                    <input
                      v-model="form.instagram"
                      type="text"
                      placeholder="@biznes.uz"
                      class="w-full rounded-lg text-slate-800 border border-gray-200 px-3.5 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all"
                    />
                  </div>
                  <div>
                    <label
                      class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                    >
                      {{ t("applyForm.step2Fields.telegramChannel") }}
                    </label>
                    <input
                      v-model="form.telegram"
                      type="text"
                      placeholder="t.me/biznes.uz"
                      class="w-full rounded-lg border text-slate-800 border-gray-200 px-3.5 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                  >
                    {{ t("applyForm.step2Fields.website") }}
                  </label>
                  <input
                    v-model="form.website"
                    type="text"
                    placeholder="www.biznes.uz"
                    class="w-full rounded-lg border border-gray-200 text-slate-800 px-3.5 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>

              <!-- 3-BOSQICH: Joylashuv -->
              <div
                v-else-if="currentStep === 3"
                key="step3"
                class="flex flex-col gap-4 h-full overflow-y-auto pr-2"
              >
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                    >
                      {{ t("applyForm.step3Fields.region") }}
                    </label>
                    <select
                      v-model="form.viloyat"
                      :class="[
                        'w-full rounded-lg border px-3.5 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 transition-all',
                        fieldErrors.viloyat
                          ? 'border-red-500 focus:ring-red-500/40 focus:border-red-500'
                          : 'border-gray-200 focus:ring-emerald-500/40 focus:border-emerald-500',
                      ]"
                    >
                      <option value="">Tanlang</option>
                      <option
                        v-for="v in viloyatOptions"
                        :key="v.value"
                        :value="v.value"
                      >
                        {{ v.label }}
                      </option>
                    </select>
                    <p
                      v-if="fieldErrors.viloyat"
                      class="text-xs text-red-500 mt-1"
                    >
                      {{ fieldErrors.viloyat }}
                    </p>
                  </div>
                  <div>
                    <label
                      class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                    >
                      {{ t("applyForm.step3Fields.cityDistrict") }}
                    </label>
                    <select
                      v-model="form.tuman"
                      :class="[
                        'w-full rounded-lg border px-3.5 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 transition-all',
                        fieldErrors.tuman
                          ? 'border-red-500 focus:ring-red-500/40 focus:border-red-500'
                          : 'border-gray-200 focus:ring-emerald-500/40 focus:border-emerald-500',
                      ]"
                    >
                      <option value="">Tanlang</option>
                      <option v-for="tm in tumanOptions" :key="tm" :value="tm">
                        {{ tm }}
                      </option>
                    </select>
                    <p
                      v-if="fieldErrors.tuman"
                      class="text-xs text-red-500 mt-1"
                    >
                      {{ fieldErrors.tuman }}
                    </p>
                  </div>
                </div>

                <div>
                  <label
                    class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                  >
                    {{ t("applyForm.step3Fields.fullAddress") }}
                  </label>
                  <input
                    v-model="form.address"
                    type="text"
                    :placeholder="
                      t('applyForm.step3Fields.fullAddressPlaceholder')
                    "
                    :class="[
                      'w-full rounded-lg border text-slate-800 px-3.5 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all',
                      fieldErrors.address
                        ? 'border-red-500 focus:ring-red-500/40 focus:border-red-500'
                        : 'border-gray-200 focus:ring-emerald-500/40 focus:border-emerald-500',
                    ]"
                  />
                  <p
                    v-if="fieldErrors.address"
                    class="text-xs text-red-500 mt-1"
                  >
                    {{ fieldErrors.address }}
                  </p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                    >
                      {{ t("applyForm.step3Fields.workingDays") }}
                    </label>
                    <select
                      v-model="form.ish_kunlari"
                      :class="[
                        'w-full rounded-lg border px-3.5 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 transition-all',
                        fieldErrors.ish_kunlari
                          ? 'border-red-500 focus:ring-red-500/40 focus:border-red-500'
                          : 'border-gray-200 focus:ring-emerald-500/40 focus:border-emerald-500',
                      ]"
                    >
                      <option value="">Tanlang</option>
                      <option
                        v-for="k in ishKunlariOptions"
                        :key="k.value"
                        :value="k.value"
                      >
                        {{ k.label }}
                      </option>
                    </select>
                    <p
                      v-if="fieldErrors.ish_kunlari"
                      class="text-xs text-red-500 mt-1"
                    >
                      {{ fieldErrors.ish_kunlari }}
                    </p>
                  </div>
                  <div>
                    <label
                      class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                    >
                      {{ t("applyForm.step3Fields.workingHours") }}
                    </label>
                    <select
                      v-model="form.ish_vaqti"
                      :class="[
                        'w-full rounded-lg border px-3.5 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 transition-all',
                        fieldErrors.ish_vaqti
                          ? 'border-red-500 focus:ring-red-500/40 focus:border-red-500'
                          : 'border-gray-200 focus:ring-emerald-500/40 focus:border-emerald-500',
                      ]"
                    >
                      <option value="">Tanlang</option>
                      <option v-for="v in ishVaqtiOptions" :key="v" :value="v">
                        {{ v }}
                      </option>
                    </select>
                    <p
                      v-if="fieldErrors.ish_vaqti"
                      class="text-xs text-red-500 mt-1"
                    >
                      {{ fieldErrors.ish_vaqti }}
                    </p>
                  </div>
                </div>

                <div
                  class="bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs p-3 rounded-lg animate-pulse shrink-0"
                >
                  {{ t("applyForm.step3Fields.locationNote") }}
                </div>
              </div>

              <!-- 4-BOSQICH: Chegirma -->
              <div
                v-else-if="currentStep === 4"
                key="step4"
                class="flex flex-col gap-4 h-full overflow-y-auto pr-2"
              >
                <div>
                  <label
                    class="block text-xs sm:text-sm font-medium text-gray-700 mb-2"
                  >
                    {{ t("applyForm.step4Fields.discountPercent") }}
                  </label>
                  <div
                    :class="[
                      'flex flex-wrap gap-2 p-1 rounded-lg transition-all',
                      fieldErrors.discount ? 'ring-1 ring-red-500' : '',
                    ]"
                  >
                    <button
                      v-for="opt in discountOptions"
                      :key="opt.val"
                      type="button"
                      @click="form.discount = opt.val"
                      :class="[
                        'px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 border transform active:scale-95 shrink-0',
                        form.discount === opt.val
                          ? 'bg-emerald-600 text-white border-emerald-600 scale-105 shadow-sm'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300',
                      ]"
                    >
                      {{ opt.label }}
                    </button>
                  </div>
                  <p class="text-xs text-gray-500 mt-1">
                    {{ t("applyForm.step4Fields.discountRecommendation") }}
                  </p>
                  <p
                    v-if="fieldErrors.discount"
                    class="text-xs text-red-500 mt-1"
                  >
                    {{ fieldErrors.discount }}
                  </p>
                </div>

                <div>
                  <label
                    class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                  >
                    {{ t("applyForm.step4Fields.minPurchaseAmount") }}
                  </label>
                  <input
                    v-model.number="form.min_sum"
                    type="number"
                    placeholder="50 000"
                    :class="[
                      'w-full rounded-lg border text-slate-800 px-3.5 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all',
                      fieldErrors.min_sum
                        ? 'border-red-500 focus:ring-red-500/40 focus:border-red-500'
                        : 'border-gray-200 focus:ring-emerald-500/40 focus:border-emerald-500',
                    ]"
                  />
                  <p
                    v-if="fieldErrors.min_sum"
                    class="text-xs text-red-500 mt-1"
                  >
                    {{ fieldErrors.min_sum }}
                  </p>
                </div>

                <div>
                  <label
                    class="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5"
                  >
                    {{ t("applyForm.step4Fields.additionalType") }}
                  </label>
                  <select
                    v-model="form.additional_type"
                    :class="[
                      'w-full rounded-lg border px-3.5 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 transition-all',
                      fieldErrors.additional_type
                        ? 'border-red-500 focus:ring-red-500/40 focus:border-red-500'
                        : 'border-gray-200 focus:ring-emerald-500/40 focus:border-emerald-500',
                    ]"
                  >
                    <option value="">Tanlang</option>
                    <option
                      v-for="a in additionalTypeOptions"
                      :key="a.value"
                      :value="a.value"
                    >
                      {{ a.label }}
                    </option>
                  </select>
                  <p
                    v-if="fieldErrors.additional_type"
                    class="text-xs text-red-500 mt-1"
                  >
                    {{ fieldErrors.additional_type }}
                  </p>
                </div>

                <div
                  class="bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs p-3 rounded-lg shrink-0"
                >
                  {{ t("applyForm.submitNote") }}
                </div>
              </div>
            </Transition>
          </div>

          <!-- Xatolik xabari -->
          <p
            v-if="errorMessage"
            class="text-xs text-red-500 mt-3 flex-shrink-0"
          >
            {{ errorMessage }}
          </p>

          <!-- Pastki navigatsiya -->
          <div
            class="flex items-center justify-between mt-6 flex-shrink-0 pt-4 border-t border-gray-100"
          >
            <button
              v-if="currentStep > 1"
              type="button"
              @click="prevStep"
              :disabled="isSubmitting"
              class="flex items-center gap-1 text-sm text-gray-500 hover:text-emerald-600 transition-all duration-200 transform hover:-translate-x-1 disabled:opacity-50"
            >
              ← {{ t("applyForm.back") }}
            </button>
            <span v-else />
            <span class="text-xs text-gray-400"
              >{{ currentStep }}/{{ stepLabels.length }}
              {{ t("applyForm.step") }}
            </span>
            <button
              type="button"
              @click="nextStep"
              :disabled="isSubmitting"
              class="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-5 py-1 transition-all duration-300 transform active:scale-95 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {{
                isSubmitting
                  ? "..."
                  : currentStep < stepLabels.length
                    ? t("applyForm.nextButton")
                    : t("applyForm.done")
              }}
              <span aria-hidden="true" class="transition-transform duration-300"
                >→</span
              >
            </button>
          </div>
        </div>
      </div>

      <!-- Muvaffaqiyat ekrani -->
      <div
        v-else
        class="flex items-center justify-center min-h-96 overflow-hidden"
      >
        <div class="animate-bounce-in">
          <div
            class="bg-white rounded-2xl shadow-xl p-8 text-center w-full max-w-sm"
          >
            <div
              class="mx-auto w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center mb-4 animate-scale-up"
            >
              <span class="text-white text-3xl">✓</span>
            </div>
            <h3 class="text-xl text-slate-800 font-semibold mb-2">
              {{ t("applyForm.title2") }}
            </h3>
            <p class="text-sm text-gray-600 mb-4">
              {{ t("applyForm.subtitle") }}
            </p>

            <div
              class="flex items-center justify-center text-slate-800 gap-2 text-sm mb-5"
            >
              <span
                >{{ t("applyForm.num") }}
                <span class="font-mono font-semibold"
                  >#{{ applicationNumber }}</span
                ></span
              >
              <span
                class="bg-amber-100 text-amber-600 text-xs px-2.5 py-0.5 rounded-full animate-pulse"
                >{{ t("applyForm.status") }}</span
              >
            </div>

            <p class="text-xs text-gray-500 mb-6">
              {{ t("applyForm.contact") }}
              <a href="#" class="text-emerald-600 hover:underline">{{
                t("applyForm.contacts.telegram")
              }}</a>
            </p>

            <button
              @click="resetForm"
              class="w-full border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-medium py-2.5 rounded-lg transition-all duration-300 transform active:scale-95"
            >
              {{ t("applyForm.back") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from "vue";
import { useLanguage } from "../../i18n/useLanguage";

const { t, lang, setLang } = useLanguage();

// ---------------- API sozlamalari ----------------

const API_BASE = import.meta.env.VITE_API_BASE_URL || "/api/v1";

function authHeaders(json = true, includeAuth = true) {
  const token = localStorage.getItem("access_token");
  const headers = {};
  if (json) headers["Content-Type"] = "application/json";
  if (includeAuth && token) headers["Authorization"] = `Bearer ${token}`;
  return headers;
}

async function apiRequest(path, method = "GET", body = null, includeAuth = true) {
  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers: authHeaders(true, includeAuth),
    body: body ? JSON.stringify(body) : undefined,
  });

  if (res.status === 401) {
    localStorage.removeItem("access_token");
  }

  if (!res.ok) {
    let errData = {};
    try {
      errData = await res.json();
    } catch (e) {}
    const msg =
      errData.detail ||
      Object.values(errData).flat().join(" ") ||
      `Xatolik yuz berdi (${res.status})`;
    throw new Error(msg);
  }
  if (res.status === 204) return null;
  return res.json();
}

// ---------------- Holat (state) ----------------

const currentStep = ref(1);
const submitted = ref(false);
const applicationId = ref(null);
const applicationNumber = ref("");
const isSubmitting = ref(false);
const errorMessage = ref("");

// ✅ YANGI: har bir maydon uchun alohida xato matni saqlanadi.
// Bo'sh string/undefined bo'lsa — xato yo'q, border yashil holatda qoladi.
// Qiymat bo'lsa — input border qizil bo'ladi va matn ostida xabar chiqadi.
const fieldErrors = reactive({
  name: "",
  category: "",
  type: "",
  contact: "",
  about: "",
  phone: "",
  email: "",
  viloyat: "",
  tuman: "",
  address: "",
  ish_kunlari: "",
  ish_vaqti: "",
  discount: "",
  min_sum: "",
  additional_type: "",
});

function clearFieldErrors(keys) {
  keys.forEach((k) => {
    fieldErrors[k] = "";
  });
}

const sectionRef = ref(null);
const isVisible = ref(false);
let observer = null;

onMounted(async () => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        if (sectionRef.value) observer.unobserve(sectionRef.value);
      }
    },
    { threshold: 0.1 },
  );
  if (sectionRef.value) observer.observe(sectionRef.value);

  // Kategoriyalarni backenddan olish: GET /categories/
  try {
    const data = await apiRequest("/categories/");
    categories.value = Array.isArray(data) ? data : data.results || [];
  } catch (e) {
    console.error("Kategoriyalarni olishda xatolik:", e);
  }
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});

const stepLabels = computed(() => [
  t("applyForm.steps.step1"),
  t("applyForm.steps.step2"),
  t("applyForm.steps.step3"),
  t("applyForm.steps.step4"),
]);

// Backenddan keladi: [{ id, name, slug, is_active }, ...]
const categories = ref([]);

const form = ref({
  name: "",
  category: "", // Category UUID
  type: "", // "yatt" | "mchj"
  contact: "",
  about: "",
  phone: "+998",
  email: "",
  instagram: "",
  telegram: "",
  website: "",
  viloyat: "", // Region kodi, masalan "tashkent_city"
  tuman: "",
  address: "",
  ish_kunlari: "", // WorkDay kodi
  ish_vaqti: "", // "HH:MM - HH:MM"
  discount: 15,
  min_sum: 50000,
  additional_type: "", // "fixed" | "min_purchase"
});

const businessTypeOptions = [
  { value: "yatt", label: "YaTT" },
  { value: "mchj", label: "MCHJ" },
];

const viloyatOptions = [
  { value: "tashkent_city", label: "Toshkent shahar" },
  { value: "tashkent_region", label: "Toshkent viloyati" },
  { value: "andijan", label: "Andijon" },
  { value: "bukhara", label: "Buxoro" },
  { value: "fergana", label: "Farg'ona" },
  { value: "jizzakh", label: "Jizzax" },
  { value: "kashkadarya", label: "Qashqadaryo" },
  { value: "navoiy", label: "Navoiy" },
  { value: "namangan", label: "Namangan" },
  { value: "samarkand", label: "Samarqand" },
  { value: "surkhandarya", label: "Surxondaryo" },
  { value: "sirdaryo", label: "Sirdaryo" },
  { value: "khorezm", label: "Xorazm" },
  { value: "karakalpakstan", label: "Qoraqalpog'iston" },
];

// Backendda alohida model yo'q — erkin matn sifatida yuboriladi
const tumanOptions = [
  "Chilonzor tumani",
  "Yunusobod tumani",
  "Mirobod tumani",
  "Shayxontohur tumani",
];

const ishKunlariOptions = [
  { value: "mon_fri", label: "Dushanba - Juma" },
  { value: "mon_sat", label: "Dushanba - Shanba" },
  { value: "everyday", label: "Har kuni" },
];

const ishVaqtiOptions = ["09:00 - 18:00", "10:00 - 20:00", "08:00 - 22:00"];

const additionalTypeOptions = [
  { value: "fixed", label: "Barcha mahsulotlar" },
  { value: "min_purchase", label: "Minimal xarid summasi" },
];

const discountOptions = computed(() => {
  const vals = [5, 10, 15, 20, 25];
  const labels = t("applyForm.step4Fields.discountOptions");
  return vals.map((val, i) => ({ val, label: labels?.[i] ?? `${val}%` }));
});

// ---------------- Yordamchi funksiyalar ----------------

// "09:00 - 18:00" -> ["09:00:00", "18:00:00"]
function parseWorkHours(range) {
  if (!range) return [null, null];
  const [from, to] = range.split("-").map((s) => s.trim());
  return [from ? `${from}:00` : null, to ? `${to}:00` : null];
}

// "+998 90 000 00 00" -> "+998900000000"
function normalizePhone(phone) {
  const digits = phone.replace(/\D/g, "").replace(/^998/, "");
  return `+998${digits}`;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidUzPhone(phone) {
  const normalized = normalizePhone(phone);
  return /^\+998\d{9}$/.test(normalized);
}

// ---------------- Validatsiya (har bir bosqich uchun) ----------------
// Har bir funksiya fieldErrors ob'ektini to'ldiradi va shu bosqich
// xatosiz bo'lsa true, xato bo'lsa false qaytaradi.

function validateStep1() {
  clearFieldErrors(["name", "category", "type", "contact", "about"]);
  let ok = true;

  if (!form.value.name.trim()) {
    fieldErrors.name = "Biznes nomini kiriting.";
    ok = false;
  }
  if (!form.value.category) {
    fieldErrors.category = "Kategoriyani tanlang.";
    ok = false;
  }
  if (!form.value.type) {
    fieldErrors.type = "Biznes turini tanlang.";
    ok = false;
  }
  if (!form.value.contact.trim()) {
    fieldErrors.contact = "Mas'ul shaxsning to'liq ismini kiriting.";
    ok = false;
  }
  if (!form.value.about.trim()) {
    fieldErrors.about = "Faoliyatingiz haqida qisqacha yozing.";
    ok = false;
  }
  return ok;
}

function validateStep2() {
  clearFieldErrors(["phone", "email"]);
  let ok = true;

  if (!form.value.phone.trim() || !isValidUzPhone(form.value.phone)) {
    fieldErrors.phone =
      "Telefon raqamini to'g'ri kiriting (+998 XX XXX XX XX).";
    ok = false;
  }
  if (!form.value.email.trim() || !isValidEmail(form.value.email)) {
    fieldErrors.email = "Email manzilini to'g'ri kiriting.";
    ok = false;
  }
  return ok;
}

function validateStep3() {
  clearFieldErrors([
    "viloyat",
    "tuman",
    "address",
    "ish_kunlari",
    "ish_vaqti",
  ]);
  let ok = true;

  if (!form.value.viloyat) {
    fieldErrors.viloyat = "Viloyatni tanlang.";
    ok = false;
  }
  if (!form.value.tuman) {
    fieldErrors.tuman = "Tuman/shaharni tanlang.";
    ok = false;
  }
  if (!form.value.address.trim()) {
    fieldErrors.address = "To'liq manzilni kiriting.";
    ok = false;
  }
  if (!form.value.ish_kunlari) {
    fieldErrors.ish_kunlari = "Ish kunlarini tanlang.";
    ok = false;
  }
  if (!form.value.ish_vaqti) {
    fieldErrors.ish_vaqti = "Ish vaqtini tanlang.";
    ok = false;
  }
  return ok;
}

function validateStep4() {
  clearFieldErrors(["discount", "min_sum", "additional_type"]);
  let ok = true;

  if (!form.value.discount) {
    fieldErrors.discount = "Chegirma foizini tanlang.";
    ok = false;
  }
  if (!form.value.additional_type) {
    fieldErrors.additional_type = "Qo'shimcha shartni tanlang.";
    ok = false;
  }
  if (
    form.value.additional_type === "min_purchase" &&
    (!form.value.min_sum || form.value.min_sum <= 0)
  ) {
    fieldErrors.min_sum = "Minimal xarid summasini kiriting.";
    ok = false;
  }
  return ok;
}

// ---------------- Wizard navigatsiyasi ----------------

async function nextStep() {
  errorMessage.value = "";

  // ✅ Har bir bosqichda mos validatsiya ishga tushiriladi.
  // Xato topilsa — tegishli input(lar) qizil bo'ladi va umumiy alert chiqadi,
  // so'rov backendga yuborilmaydi.
  let stepIsValid = true;
  if (currentStep.value === 1) stepIsValid = validateStep1();
  else if (currentStep.value === 2) stepIsValid = validateStep2();
  else if (currentStep.value === 3) stepIsValid = validateStep3();
  else if (currentStep.value === 4) stepIsValid = validateStep4();

  if (!stepIsValid) {
    errorMessage.value =
      "Iltimos, qizil rangda belgilangan maydonlarni to'g'ri to'ldiring.";
    return;
  }

  isSubmitting.value = true;
  try {
    if (currentStep.value === 1) {
      const payload = {
        business_name: form.value.name,
        category: form.value.category,
        business_type: form.value.type,
        responsible_full_name: form.value.contact,
        short_description: form.value.about,
      };
      const created = await apiRequest("/applications/step1/", "POST", payload);
      applicationId.value = created.id;
    } else if (currentStep.value === 2) {
      const payload = {
        phone_number: normalizePhone(form.value.phone),
        email: form.value.email,
        instagram: form.value.instagram,
        telegram: form.value.telegram,
        website: form.value.website,
      };
      await apiRequest(
        `/applications/${applicationId.value}/step/2/`,
        "PATCH",
        payload,
      );
    } else if (currentStep.value === 3) {
      const [from, to] = parseWorkHours(form.value.ish_vaqti);
      const payload = {
        region: form.value.viloyat,
        city_district: form.value.tuman,
        full_address: form.value.address,
        work_days: form.value.ish_kunlari,
        work_hours_from: from,
        work_hours_to: to,
      };
      await apiRequest(
        `/applications/${applicationId.value}/step/3/`,
        "PATCH",
        payload,
      );
    } else if (currentStep.value === 4) {
      const payload = {
        discount_percent: form.value.discount,
        min_purchase_amount: form.value.min_sum || null,
        discount_type: form.value.additional_type,
      };
      await apiRequest(
        `/applications/${applicationId.value}/step/4/`,
        "PATCH",
        payload,
      );
      applicationNumber.value = applicationId.value;
      submitted.value = true;
      isSubmitting.value = false;
      return;
    }

    if (currentStep.value < stepLabels.value.length) {
      currentStep.value++;
    }
  } catch (e) {
    // Backend xatoligi bo'lsa ham umumiy alert sifatida ko'rsatiladi
    errorMessage.value = e.message || "Noma'lum xatolik yuz berdi.";
  } finally {
    isSubmitting.value = false;
  }
}

function prevStep() {
  if (currentStep.value > 1) currentStep.value--;
  errorMessage.value = "";
}

function resetForm() {
  submitted.value = false;
  currentStep.value = 1;
  applicationId.value = null;
  applicationNumber.value = "";
  errorMessage.value = "";
  Object.keys(fieldErrors).forEach((k) => (fieldErrors[k] = ""));
  form.value = {
    name: "",
    category: "",
    type: "",
    contact: "",
    about: "",
    phone: "+998",
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

<style scoped>
/* 1. Forma qadamlari o'zgargandagi Fade-Slide animatsiyasi */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* 2. Muvaffaqiyat ekrani uchun maxsus animatsiyalar */
@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }

  50% {
    opacity: 0.9;
    transform: scale(1.05);
  }

  70% {
    transform: scale(0.9);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes scaleUp {
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
}

.animate-bounce-in {
  animation: bounceIn 0.6s ease-out forwards;
}

.animate-scale-up {
  animation: scaleUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both;
}

/* Scrollbar yo'q qilish */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(16, 185, 129, 0.3);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(199, 238, 225, 0.5);
}
</style>