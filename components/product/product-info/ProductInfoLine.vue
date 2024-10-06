<script setup lang="ts">
defineProps<{ label: string; text: string }>();
</script>

<template>
  <div
    class="flex justify-between w-full border-b border-solid border-[#E7E7E7] pt-3 pb-[14px] lg:pb-3"
  >
    <span class="text-[#6A707C] text-sm lg:text-base">
      {{ label }}
    </span>
    <span class="text-[#322F38] font-semibold">
      {{ text }}
    </span>
  </div>
</template>
