<script setup lang="ts">
import { NavRoute } from "@/types/routes";
import NavLink from "@/components/NavLink.vue";

defineProps({
  route: {
    type: Object as () => NavRoute,
    required: true,
  },
});
</script>

<template>
  <v-list-group
    :value="route.name"
    :prepend-icon="route.icon"
  >
    <template #activator="{ props }">
      <v-list-item
        v-bind="props"
        :title="route.text"
      ></v-list-item>
    </template>

    <nav-link
      v-for="routeChildren in route.children"
      :key="routeChildren.text"
      :route="routeChildren"
    />
  </v-list-group>
</template>
