<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import AdminLayout from "@/layouts/AdminLayout.vue";
import PageLayoutVue from "@/layouts/PageLayout.vue";
import { LayoutsTypes } from "@/types/layouts.type";

const route = useRoute();

const layout = computed(() => {
  switch (route.meta.layout as LayoutsTypes) {
    case "admin-layout":
      return AdminLayout;
    case "page-layout":
      return PageLayoutVue;
    default:
      return AdminLayout;
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
@/types/layouts.type
