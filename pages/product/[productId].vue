<script setup lang="ts">
import ProductInfo from "~/components/product/product-info/ProductInfo.vue";
import ProductRate from "~/components/product/ProductRate.vue";
import BaseButton from "~/components/ui/BaseButton.vue";
import BreadCrumbs from "~/components/ui/BreadCrumbs.vue";
import BaseModal from "~/components/ui/BaseModal.vue";
import { useProduct } from "~/composables/useProduct";

import HeartIcon from "~/shared/icons/HeartIcon.vue";
import LoadingIcon from "~/shared/icons/LoadingIcon.vue";
import GiftIcon from "~/shared/icons/GiftIcon.vue";

const route = useRoute();
const id = route.params.productId;

const breadCrumbs = useBreadCrumbs();
const showModal = ref(false);

const { product, loading, getProduct, clearProduct } = useProduct();

onBeforeMount(async () => {
  await getProduct(+id);
  breadCrumbs.value.push({ label: product.value.title, to: "" });
});

const formatedPrice = (value: string) => Number(value).toLocaleString();

dropBreadcrumbs();
onBeforeUnmount(clearProduct);
</script>

<template>
  <div v-if="product.id && !loading">
    <BreadCrumbs class="px-4" />
    <article class="px-4 mt-4">
      <div class="mt-5 hidden lg:block">
        <h2 class="text-[#363842] text-[32px]">{{ product.title }}</h2>
        <ProductRate
          class="mt-2"
          :rating="product.rating"
          :ratesCount="product.ratesCount"
        />
      </div>
      <div class="lg:flex gap-6 lg:mt-5">
        <img
          :src="product.image"
          alt="product image"
          class="border border-solid border-[#E7E7E7] rounded-xl"
        />
        <div class="mt-5 lg:mt-0">
          <div class="block lg:hidden">
            <h2 class="text-[#363842] text-xl">{{ product.title }}</h2>
            <ProductRate
              class="mt-2"
              :rating="product.rating"
              :ratesCount="product.ratesCount"
            />
          </div>
          <p class="mt-4 text-[#322F38] text-sm lg:text-base">
            {{ product.description }}
          </p>

          <ProductInfo class="mt-4" />

          <div
            class="mt-[11px] bg-white p-4 rounded-t-2xl shadow shadow-[#2667FF26] hidden lg:block"
          >
            <div>
              <strong class="text-[#322F38] text-[28px]">
                {{
                  `${formatedPrice(
                    ((product.price * product.discount) / 100).toFixed()
                  )} ₸ `
                }}
              </strong>
              <span class="text-[#979797] text-lg line-through">
                {{ `${formatedPrice(product.price.toFixed())} ₸ ` }}
              </span>
            </div>
            <div class="flex mt-6 gap-4">
              <BaseButton @click="showModal = true">Купить</BaseButton>
              <BaseButton class="flex-1" disabled>
                <HeartIcon class="text-[#2667FF]" />
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </article>

    <div
      class="mt-[11px] bg-white p-4 rounded-t-2xl shadow shadow-[#2667FF26] block lg:hidden"
    >
      <div>
        <strong class="text-[#322F38] text-[28px]">
          {{
            `${formatedPrice(
              ((product.price * product.discount) / 100).toFixed()
            )} ₸ `
          }}
        </strong>
        <span class="text-[#979797] text-lg line-through">
          {{ `${formatedPrice(product.price.toFixed())} ₸ ` }}
        </span>
      </div>
      <div class="flex mt-6 gap-4">
        <BaseButton @click="showModal = true">Купить</BaseButton>
        <BaseButton class="flex-1" disabled>
          <HeartIcon class="text-[#2667FF]" />
        </BaseButton>
      </div>
    </div>
  </div>
  <div v-else class="flex w-screen h-screen items-center justify-center">
    <LoadingIcon class="animate-spin size-10" />
  </div>

  <BaseModal v-model="showModal">
    <section class="flex flex-col gap-3 items-center">
      <GiftIcon />
      <h3 class="font-bold text-2xl text-[#322F38] mt-5">Спасибо за заказ!</h3>
      <span class="text-[#6A707C]">Уже собираем</span>
    </section>
  </BaseModal>
</template>
