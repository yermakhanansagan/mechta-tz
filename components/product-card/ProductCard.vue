<script setup lang="ts">
import BaseButton from "~/components/ui/BaseButton.vue";
import ProductDiscountBadge from "./ProductDiscountBadge.vue";

import StarIcon from "~/shared/icons/StarIcon.vue";
import CartIcon from "~/shared/icons/CartIcon.vue";
import type { Product } from "~/shared/types/types";

defineProps<{ product: Product }>();

const ratingInStars = (rating: number) => (rating * 5) / 100;
</script>

<template>
  <article class="w-40 rounded-2xl border border-solid border-[#E7E7E7] p-2">
    <img :src="product.image" :alt="`${product.title} image`" class="mx-auto" />
    <h3 class="text-xs text-[#363842] line-clamp-1 mt-3">
      {{ product.title }}
    </h3>
    <div class="flex gap-1.5 items-center">
      <ul class="flex gap-[2.88px]">
        <li v-for="(item, index) in 5" :key="index">
          <StarIcon
            class="text-[#BDBEC2]"
            :class="{
              '!text-[#363842]': index + 1 <= ratingInStars(product.rating),
            }"
          />
        </li>
      </ul>
      <span class="text-[11px] text-[#5C5C5C]"> 256 отзывов </span>
    </div>

    <div class="flex flex-col gap-3 mt-4">
      <div class="flex gap-2">
        <span class="text-sm text-[#979797] line-through">12 970 ₸</span>
        <ProductDiscountBadge :discount="product.discount" />
      </div>
      <strong class="text-xl text-[#322F38]"> 12 970 ₸ </strong>
    </div>

    <BaseButton class="mt-3">
      <CartIcon />
    </BaseButton>
  </article>
</template>
