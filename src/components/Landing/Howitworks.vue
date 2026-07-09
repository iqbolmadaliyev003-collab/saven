<template>
    <section class="w-full bg-white py-16 px-6">
        <div class="max-w-6xl mx-auto text-center">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
                Qanday ishlaydi?
            </h2>
            <p class="mt-3 text-gray-500">
                3 oddiy qadam — ho'yingiz tez va shaffof ishlaydi
            </p>

            <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div v-for="(step, i) in steps" :key="i" class="card bg-white border border-gray-200 shadow-sm">
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
const steps = [
    {
        number: "1",
        title: "Ariza qoldirasiz",
        description:
            "Formani to'ldiring — atigi 2 daqiqa vaqt oladi. Operatorlarimiz 24 soat ichida siz bilan bog'lanadi.",
    },
    {
        number: "2",
        title: "Chegirma va QR ulanadi",
        description:
            "Chegirma foizini birga belgilaymiz, kassaga QR-kod o'rnatamiz va xodimlaringizni o'rgatamiz.",
    },
    {
        number: "3",
        title: "Mijozlar kela boshlaydi",
        description:
            "Saven a'zolari sizni ilovada ko'radi. Natijani Biznes panelda real vaqtda kuzatib borasiz.",
    },
];
</script>