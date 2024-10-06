<script setup lang="ts">
import { useProduct } from "~/composables/useProduct";
import ProductInfoLine from "./ProductInfoLine.vue";

const { product } = useProduct();
</script>

<template>
  <section>
    <h3 class="font-semibold text-sm lg:text-base text-[#322F38]">О товаре</h3>
    <ProductInfoLine
      label="Страна-изготовитель"
      :text="product.countryManufacturer"
    />
    <ProductInfoLine label="Материал оправы" :text="product.material" />
    <ProductInfoLine label="Материал линзы" :text="product.lenseMaterial" />
    <ProductInfoLine label="Ширина линзы, мм" :text="product.lenseWidth" />
    <ProductInfoLine label="Разъем" :text="product.connector" />
  </section>
</template>
