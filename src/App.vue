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
    <router-view v-slot="{ Component, route: slotRoute }">
      <transition
        :name="slotRoute.meta.transitionName as string || 'fade'"
        mode="out-in"
      >
        <component
          :is="Component"
          :key="slotRoute.path"
        />
      </transition>
    </router-view>
  </component>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
