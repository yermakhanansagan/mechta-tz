<script setup>
import BaseHeader from "~/components/ui/BaseHeader.vue";
</script>

<template>
  <BaseHeader />
  <main class="bg-[#FDFDFD] py-4">
    <slot />
  </main>
  <footer></footer>
</template>
