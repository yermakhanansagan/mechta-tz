<script setup lang="ts">
import { ofetch } from "ofetch";

import ProductCard from "~/components/product-card/ProductCard.vue";
import BreadCrumbs from "~/components/ui/BreadCrumbs.vue";
import type { Product } from "~/shared/types/types";

const products = ref<Product[]>([]);

async function getProducts() {
  const data = await ofetch<Product[]>(
    "https://665801795c36170526468b7c.mockapi.io/api/v1/products"
  );

  products.value = [...products.value, ...data];
}

onBeforeMount(getProducts);
</script>

<template>
  <div class="px-4">
    <BreadCrumbs />

    <ul class="grid grid-cols-2 gap-2 mt-4">
      <li v-for="product in products" :key="product.id">
        <nuxt-link :to="`/product/${product.id}`">
          <ProductCard :product="product" />
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
