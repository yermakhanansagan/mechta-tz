<script setup lang="ts">
import StarIcon from "~/shared/icons/StarIcon.vue";

defineProps<{ rating: number; ratesCount: number }>();

const ratingInStars = (rating: number) =>
  (rating * 5) / 100 ? (rating * 5) / 100 : 0;
</script>

<template>
  <div class="flex gap-1.5 items-center">
    <ul class="flex gap-[2.88px]">
      <li v-for="(item, index) in 5" :key="index">
        <StarIcon
          class="text-[#BDBEC2]"
          :class="{
            '!text-[#363842]': index + 1 <= ratingInStars(rating),
          }"
        />
      </li>
    </ul>
    <span class="text-[11px] lg:text-sm text-[#5C5C5C]">
      {{ `${ratesCount} отзывов` }}
    </span>
  </div>
</template>
