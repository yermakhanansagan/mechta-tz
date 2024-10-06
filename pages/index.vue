<script setup lang="ts">
import { ofetch } from "ofetch";

import ProductCard from "~/components/product/ProductCard.vue";
import BreadCrumbs from "~/components/ui/BreadCrumbs.vue";
import SortSelector from "~/components/ui/SortSelector.vue";

import LoadingIcon from "~/shared/icons/LoadingIcon.vue";
import type { Product } from "~/shared/types/types";

const route = useRoute();

const products = ref<Product[]>([]);
const loading = ref(false);

async function getProducts() {
  try {
    loading.value = true;

    const data = await ofetch<Product[]>(
      "https://665801795c36170526468b7c.mockapi.io/api/v1/products",
      { query: { limit: 10, search: route.query.searchValue } }
    );

    products.value = [...products.value, ...data];
  } catch {
  } finally {
    loading.value = false;
  }
}

watch(() => route.query, getProducts);

onBeforeMount(getProducts);
</script>

<template>
  <div class="px-4" v-if="!loading">
    <BreadCrumbs />

    <SortSelector class="mt-6 hidden lg:flex" />

    <ul class="flex flex-wrap gap-2 justify-center mt-4">
      <li v-for="product in products" :key="product.id" class="w-min">
        <nuxt-link :to="`/product/${product.id}`">
          <ProductCard :product="product" />
        </nuxt-link>
      </li>
    </ul>
  </div>

  <div v-else class="flex w-screen h-screen items-center justify-center">
    <LoadingIcon class="animate-spin size-10" />
  </div>
</template>
