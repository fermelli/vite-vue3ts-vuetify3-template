<script setup lang="ts">
import { productsService } from "@/services";
import { onMounted, ref } from "vue";
import { ProductInterface } from "@/interfaces/product.interface";
import ProductTable from "../components/ProductTable.vue";

const products = ref<ProductInterface[]>([]);
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
      v-if="products.length === 0"
      class="d-flex justify-center items-center py-6"
    >
      <v-progress-circular
        model-value="20"
        :size="40"
        :indeterminate="loading"
      ></v-progress-circular>
    </div>

    <product-table
      v-else
      :products="products"
    ></product-table>
  </div>
</template>
