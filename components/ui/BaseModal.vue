<script setup lang="ts">
const modelValue = defineModel<boolean>();
</script>

<template>
  <div
    class="w-screen h-screen flex items-center justify-center fixed bg-[#41465233] top-0 right-0"
    v-if="modelValue"
  >
    <div class="bg-white rounded-2xl py-8 px-20 relative">
      <div>
        <button
          class="flex items-center justify-center size-8 text-white bg-[#D7D7D766] right-4 top-4 rounded-full absolute px-2 py-1 hover:opacity-50"
          @click="modelValue = false"
        >
          X
        </button>
      </div>
      <slot />
    </div>
  </div>
</template>
