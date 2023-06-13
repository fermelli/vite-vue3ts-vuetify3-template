<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import AppLayout from "@/layouts/AppLayout.vue";
import { LayoutsTypes } from "@/utils";

const route = useRoute();

const layout = computed(() => {
  switch (route.meta.layout as LayoutsTypes) {
    case "app-layout":
      return AppLayout;
    default:
      return AppLayout;
  }
});
</script>

<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<style scoped></style>
