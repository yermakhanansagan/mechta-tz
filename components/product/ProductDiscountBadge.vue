<script setup lang="ts">
defineProps<{ discount: number }>();
</script>

<template>
  <div class="text-white bg-[#F63B00] px-2 py-0.5 text-[10px] rounded-full">
    {{ `-${discount}%` }}
  </div>
</template>
