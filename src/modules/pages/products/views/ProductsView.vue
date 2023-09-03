<script setup lang="ts">
import { productsService } from "@/services";
import { onMounted, ref } from "vue";
import { Product } from "@/interfaces/product.interface";
import ProductTable from "../components/ProductTable.vue";

const products = ref<Product[]>([]);
const loading = ref<boolean>(false);

onMounted(async () => {
  loading.value = true;
  try {
    const response = await productsService.get();

    products.value = response.data;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div>
    <h1>ProductosView</h1>

    <div
      v-if="loading || products.length === 0"
      class="d-flex justify-center items-center py-6"
    >
      <v-progress-circular
        v-if="loading"
        model-value="20"
        :size="40"
        :indeterminate="loading"
      ></v-progress-circular>

      <p
        v-else-if="products.length === 0"
        class="text-center"
      >
        No products retrieved
      </p>
    </div>

    <product-table
      v-else
      :products="products"
    ></product-table>
  </div>
</template>
