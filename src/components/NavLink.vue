<script setup lang="ts">
import { defineProps } from "vue";
import { NavRoute } from "@/utils";

defineProps({
  route: {
    type: Object as () => NavRoute,
    required: true,
  },
});
</script>

<template>
  <v-list-item
    :value="route"
    :to="{ name: route.name }"
  >
    <template #prepend>
      <v-icon :icon="route.icon"></v-icon>
    </template>

    <v-list-item-title>{{ route.text }}</v-list-item-title>
  </v-list-item>
</template>
