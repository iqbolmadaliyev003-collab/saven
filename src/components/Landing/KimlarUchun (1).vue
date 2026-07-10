<template>
  <section class="w-full bg-white py-8 px-4 sm:py-10">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-lg sm:text-xl font-bold text-gray-900 mb-5">
        {{ t("categories.title") }}
      </h2>

      <div class="flex flex-wrap justify-center gap-2 sm:gap-3">
        <button
          v-for="item in t('categories.list')"
          :key="item.name"
          type="button"
          class="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 shadow-sm hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 transition-colors duration-150 whitespace-nowrap"
        >
          <span class="text-sm sm:text-base leading-none">{{ item.icon }}</span>
          <span>{{ item.name }}</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLanguage } from "../../i18n/useLanguage";

const { t } = useLanguage();
</script>