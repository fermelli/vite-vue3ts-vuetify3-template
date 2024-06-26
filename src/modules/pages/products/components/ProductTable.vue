<script setup lang="ts">
import { PropType } from "vue";
import { Product } from "@/interfaces/product.interface";

defineProps({
  products: {
    type: Array as PropType<Product[]>,
    required: true,
  },
});
</script>

<template>
  <v-table density="compact">
    <thead>
      <tr>
        <th class="text-left">ID.</th>
        <th class="text-left">Name</th>
        <th class="text-left">Description</th>
        <th class="text-right">Price</th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="product in products"
        :key="product.name"
      >
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.description }}</td>
        <td class="text-right">{{ product.price }}</td>
      </tr>
    </tbody>
  </v-table>
</template>
