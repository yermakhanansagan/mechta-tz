<script setup lang="ts">
import BaseInput from "~/components/ui/BaseInput.vue";

import HeaderIcon from "~/shared/icons/HeaderIcon.vue";
import HeartIcon from "~/shared/icons/HeartFilledIcon.vue";
import CartFilledIcon from "~/shared/icons/CartFiledIcon.vue";
import SearchIcon from "~/shared/icons/SearchIcon.vue";

const route = useRoute();
const router = useRouter();

const searchValue = defineModel<string>();

function onSearch() {
  // dont know about logic of search

  if (route.path !== "/") return;
  router.replace({ query: { searchValue: searchValue.value } });
}
</script>

<template>
  <header
    class="h-20 mx-auto flex items-center bg-[#2667FF] gap-4 justify-center"
  >
    <span class="lg:w-[306px] hidden lg:block">
      <HeaderIcon />
    </span>
    <BaseInput
      class="lg:w-[636px]"
      placeholder="Поиск товара"
      :icon="SearchIcon"
      v-model="searchValue"
      @keyup.enter="onSearch"
    />
    <button class="text-white">
      <HeartIcon />
    </button>
    <button class="text-white">
      <CartFilledIcon />
    </button>
  </header>
</template>
