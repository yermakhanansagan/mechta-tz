import { ofetch } from "ofetch";
import type { Product } from "~/shared/types/types";

export function useProduct() {
  const product = useState<Product>("product", () => ({
    createdAt: "",
    title: "",
    image: "",
    price: 0,
    discount: 0,
    description: "",
    countryManufacturer: "",
    material: "",
    lenseMaterial: "",
    lenseWidth: "",
    connector: "",
    rating: 0,
    ratesCount: 0,
    id: "",
  }));

  const loading = ref(false);

  async function getProduct(id: number) {
    try {
      loading.value = true;
      const data = await ofetch<Product>(
        `https://665801795c36170526468b7c.mockapi.io/api/v1/products/${id}`
      );
      product.value = data;
    } catch {
    } finally {
      loading.value = false;
    }
  }

  function clearProduct() {
    product.value = {
      ...{
        createdAt: "",
        title: "",
        image: "",
        price: 0,
        discount: 0,
        description: "",
        countryManufacturer: "",
        material: "",
        lenseMaterial: "",
        lenseWidth: "",
        connector: "",
        rating: 0,
        ratesCount: 0,
        id: "",
      },
    };
  }

  return { product, loading, getProduct, clearProduct };
}
