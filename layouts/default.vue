<script setup>
import BaseHeader from "~/components/ui/BaseHeader.vue";
</script>

<template>
  <div class="min-h-screen">
    <BaseHeader />
    <main class="bg-[#FDFDFD] max-w-[1296px] min-w-[328px] mx-auto mt-4">
      <slot />
    </main>
    <footer></footer>
  </div>
</template>
