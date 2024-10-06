<script setup lang="ts">
defineOptions({ inheritAttrs: false });

defineProps<{ placeholder: string; icon?: object }>();

const modelValue = defineModel<string>({ default: "" });
</script>

<template>
  <div class="relative">
    <input
      class="py-3 pl-6 bg-white rounded-full outline-none w-[232px]"
      :class="{ 'pr-[54px]': icon }"
      :placeholder="placeholder"
      v-model="modelValue"
      v-bind="$attrs"
    />
    <component
      :is="icon"
      class="absolute right-6 top-1/2 -translate-y-1/2 text-[#979797]"
    />
  </div>
</template>
