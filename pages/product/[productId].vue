<script setup lang="ts">
import { ofetch } from "ofetch";
import type { Product } from "~/shared/types/types";

const route = useRoute();
const id = route.params.productId;

async function getProduct() {
  const data = await ofetch<Product>(
    `https://665801795c36170526468b7c.mockapi.io/api/v1/products/${id}`
  );
}

onBeforeMount(getProduct);
</script>

<template></template>
