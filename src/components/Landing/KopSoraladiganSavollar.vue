<template>
  <section id="KopSoraladiganSavollar" class="w-full bg-white py-10 px-4 sm:py-14">
    <div class="max-w-2xl mx-auto">
      <h2
        class="text-center text-lg sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8"
      >
        {{ t("faq.title") }}
      </h2>

      <div class="flex flex-col gap-3">
        <div
          v-for="(item, index) in t('faq.items')"
          :key="index"
          class="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden"
        >
          <button
            type="button"
            @click="toggle(index)"
            class="w-full flex items-start sm:items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5 text-left"
          >
            <span class="text-sm sm:text-base font-semibold text-gray-900">
              {{ item.question }}
            </span>
            <span
              class="shrink-0 mt-0.5 sm:mt-0 text-gray-400 text-xl leading-none transition-transform duration-200"
              :class="openIndex === index ? 'rotate-180 text-emerald-600' : ''"
            >
              {{ openIndex === index ? "−" : "+" }}
            </span>
          </button>

          <div
            class="grid transition-all duration-300 ease-in-out"
            :class="openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
          >
            <div class="overflow-hidden">
              <p
                class="px-4 pb-4 sm:px-6 sm:pb-5 text-xs sm:text-sm text-gray-500 leading-relaxed"
              >
                {{ item.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useLanguage } from "../../i18n/useLanguage";

const { t } = useLanguage();
const openIndex = ref(0);

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index;
}
</script>