<template>
    <section id="Howitworks" class="w-full bg-white py-16 px-6">
        <div class="max-w-6xl mx-auto text-center">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
                {{ t("howItWorks.title") }}
            </h2>
            <p class="mt-3 text-gray-500">
                {{ t("howItWorks.subtitle") }}
            </p>

            <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div v-for="(step, i) in t('howItWorks.steps')" :key="i" class="card bg-white border border-gray-200 shadow-sm">
                    <div class="card-body p-6">
                        <div
                            class="w-9 h-9 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-semibold">
                            {{ step.number }}
                        </div>
                        <h3 class="mt-5 text-lg font-semibold text-gray-900">
                            {{ step.title }}
                        </h3>
                        <p class="mt-2 text-sm text-gray-500 leading-relaxed">
                            {{ step.description }}
                        </p>
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