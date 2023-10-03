<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import AdminLayout from "@/layouts/AdminLayout.vue";
import PageLayout from "@/layouts/PageLayout.vue";
import { LayoutsTypes } from "@/types/layouts.type";
import { useSetTheme } from "@/themes/use-set-theme";
import BlankLayout from "./layouts/BlankLayout.vue";

const route = useRoute();

useSetTheme();

const layout = computed(() => {
  switch (route.meta.layout as LayoutsTypes) {
    case "admin-layout":
      return AdminLayout;
    case "page-layout":
      return PageLayout;
    case "blank-layout":
      return BlankLayout;
    default:
      return BlankLayout;
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
./themes/use-set-theme
