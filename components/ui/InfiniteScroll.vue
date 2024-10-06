<script setup lang="ts">
const emit = defineEmits<{ (e: "intersected"): void }>();
const props = withDefaults(
  defineProps<{ unObserve?: boolean; options?: IntersectionObserverInit }>(),
  {
    options: () => ({
      rootMargin: "0px",
      threshold: 1.0,
    }),
  }
);
const observedElement = ref<Element>();

function onIntersected(
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) {
  if (props.unObserve) return;
  if (entries[0].isIntersecting) {
    emit("intersected");
  }
}

function observerInit() {
  const observer = new IntersectionObserver(onIntersected, props.options);
  observer.observe(observedElement.value as Element);
}

onMounted(observerInit);
</script>

<template>
  <div>
    <slot />
    <div ref="observedElement" class="h-0.5 w-full"></div>
  </div>
</template>

<style scoped></style>
