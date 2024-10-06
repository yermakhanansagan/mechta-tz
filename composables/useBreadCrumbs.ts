export const useBreadCrumbs = () =>
  useState<{ label: string; to: string }[]>("breadCrumbsLinks", () => [
    { label: "Смартфоны и гаджеты", to: "/" },
    { label: "Смартфоны", to: "/" },
  ]);

export function dropBreadcrumbs() {
  const breadCrumbsLinks = useBreadCrumbs();
  onUnmounted(() => (breadCrumbsLinks.value.length = 0));
}
