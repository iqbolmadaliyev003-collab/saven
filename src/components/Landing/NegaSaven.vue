<template>
  <section id="Afzalliklar" class="w-full bg-white py-12 sm:py-16 px-4">
    <div class="max-w-5xl mx-auto">
      <!-- Sarlavha -->
      <div class="text-center mb-10 sm:mb-12">
        <h2 class="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
          {{ t("benefits.title") }}
        </h2>
        <p class="mt-2 text-sm sm:text-base text-gray-500">
          {{ t("benefits.subtitle") }}
        </p>
      </div>

      <!-- Kartalar -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        <div v-for="item in t('benefits.items')" :key="item.title"
          class="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
          <div class="flex-row items-start gap-4 p-5 sm:p-6 flex">
            <div class="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl shrink-0 bg-[#DFF3E3]">
              <span class="text-xl sm:text-2xl">{{ item.icon }}</span>
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
import { useLanguage } from "../../i18n/useLanguage";

const { t } = useLanguage();
</script>