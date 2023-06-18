<script setup lang="ts">
import { NavRoute } from "@/interfaces/nav-route";

defineProps({
  route: {
    type: Object as () => NavRoute,
    required: true,
  },
});
</script>

<template>
  <v-list-item :to="route.to">
    <template #prepend>
      <v-icon :icon="route.icon"></v-icon>
    </template>

    <v-list-item-title>{{ route.text }}</v-list-item-title>
  </v-list-item>
</template>
