<script setup lang="ts">
const route = useRoute();
const router = useRouter();

type SortKey = { label: string; key: string };

const sortKeys: SortKey[] = [
  { label: "По популярности", key: "someKey1" },
  { label: "Сначала подешевле", key: "someKey2" },
  { label: "Сначала подороже", key: "someKey3" },
  { label: "Сначала новое", key: "someKey4" },
  { label: "По алфавиту", key: "someKey5" },
];

function selectSortType(key: string) {
  router.replace({ query: { ...route.query, sortType: key } });
}
</script>

<template>
  <div
    class="flex px-5 border border-solid border-[#E7E7E7] rounded-2xl gap-4 items-center"
  >
    <span>Сортировать:</span>
    <ul class="flex gap-4">
      <li v-for="(item, index) in sortKeys" :key="index">
        <button
          @click="selectSortType(item.key)"
          class="py-2.5"
          :class="{
            'text-[#2667FF]  border-b-2 border-[#2667FF]':
              route.query.sortType === item.key,
          }"
        >
          {{ item.label }}
        </button>
      </li>
    </ul>
  </div>
</template>
