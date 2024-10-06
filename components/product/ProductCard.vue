<script setup lang="ts">
import BaseButton from "~/components/ui/BaseButton.vue";
import ProductDiscountBadge from "./ProductDiscountBadge.vue";

import type { Product } from "~/shared/types/types";

import CartIcon from "~/shared/icons/CartIcon.vue";
import ProductRate from "./ProductRate.vue";
import HeartIcon from "~/shared/icons/HeartIcon.vue";

defineProps<{ product: Product }>();
</script>

<template>
  <article
    class="w-40 lg:w-[306px] rounded-2xl border border-solid border-[#E7E7E7] p-2 relative lg:px-4 lg:py-6"
  >
    <button
      class="absolute right-2 lg:right-4 lg:top-4 top-2.5 rounded-full p-2.5 bg-[#5454544D] hover:bg-[#2667FF99]"
    >
      <HeartIcon class="text-white size-5 lg:size-7" />
    </button>
    <img :src="product.image" :alt="`${product.title} image`" class="mx-auto" />
    <h3 class="text-xs lg:text-sm text-[#363842] line-clamp-1 mt-3">
      {{ product.title }}
    </h3>

    <ProductRate :rating="product.rating" :ratesCount="product.ratesCount" />

    <div
      class="flex flex-col gap-3 mt-4 lg:flex-row lg:justify-between lg:items-end"
    >
      <div class="flex flex-col gap-3">
        <div class="flex gap-2">
          <span class="text-sm lg:text-base text-[#979797] line-through">
            {{ `${product.price.toLocaleString()} ₸` }}
          </span>
          <ProductDiscountBadge :discount="product.discount" />
        </div>
        <strong class="text-xl text-[#322F38] lg:text-[32px]">
          {{
            `${Number(
              ((product.price * product.discount) / 100).toFixed()
            ).toLocaleString()} ₸`
          }}
        </strong>
      </div>

      <BaseButton class="lg:w-11">
        <CartIcon />
      </BaseButton>
    </div>
  </article>
</template>
