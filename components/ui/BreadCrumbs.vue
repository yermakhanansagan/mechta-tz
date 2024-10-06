<script setup lang="ts">
import { useBreadCrumbs } from "~/composables/useBreadCrumbs";

import ArrowIcon from "~/shared/icons/ArrowIcon.vue";

const breadCrumbs = useBreadCrumbs();
</script>

<template>
  <ul class="flex gap-3">
    <li
      v-for="(item, index) in breadCrumbs"
      :key="index"
      class="flex gap-4 items-center"
    >
      <nuxt-link :to="item.to" class="text-[#2667FF]">
        {{ item.label }}
      </nuxt-link>
      <ArrowIcon
        v-if="index + 1 !== breadCrumbs.length"
        class="text-[#5C5C5C]"
      />
    </li>
  </ul>
</template>
