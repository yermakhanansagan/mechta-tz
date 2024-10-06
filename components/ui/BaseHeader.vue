<script setup lang="ts">
import BaseInput from "~/components/ui/BaseInput.vue";

import HeaderIcon from "~/shared/icons/HeaderIcon.vue";
import HeartIcon from "~/shared/icons/HeartFilledIcon.vue";
import CartFilledIcon from "~/shared/icons/CartFiledIcon.vue";
import SearchIcon from "~/shared/icons/SearchIcon.vue";
</script>

<template>
  <header
    class="h-20 mx-auto flex items-center bg-[#2667FF] gap-4 justify-center"
  >
    <HeaderIcon class="hidden" />
    <BaseInput placeholder="Поиск товара" :icon="SearchIcon" />
    <button class="text-white">
      <HeartIcon />
    </button>
    <button class="text-white">
      <CartFilledIcon />
    </button>
  </header>
</template>
