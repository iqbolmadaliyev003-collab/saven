<template>
    <div class="w-full bg-[#0b1f0f] py-10 px-6">
        <div class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <div v-for="(stat, i) in stats" :key="i" class="flex flex-col gap-1">
                <span class="text-3xl md:text-4xl font-bold text-[#5fe642]">
                    {{ stat.value }}
                </span>
                <span class="text-sm text-gray-400">{{ stat.label }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
const stats = [
    { value: "400+", label: "hamkor biznes" },
    { value: "50K+", label: "faol a'zo" },
    { value: "+27%", label: "mijozlar oqimi o'sishi" },
    { value: "24 soat", label: "ulanish vaqti" },
];
</script>