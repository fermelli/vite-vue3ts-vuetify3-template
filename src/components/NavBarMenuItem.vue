<script setup lang="ts">
import { ref } from "vue";
import { NavRoute } from "@/interfaces/nav-route";

defineProps({
  menuItem: {
    type: Object as () => NavRoute,
    required: true,
  },
});

const menu = ref(false);
</script>

<template>
  <v-btn
    v-if="!menuItem.children"
    class="text-none"
    :to="menuItem.to"
  >
    <template #append>
      <v-icon :icon="menuItem.icon"></v-icon>
    </template>

    {{ menuItem.text }}
  </v-btn>

  <v-menu
    v-else
    v-model="menu"
    open-on-hover
  >
    <template #activator="{ isActive, props }">
      <v-btn
        class="text-none"
        v-bind="props"
      >
        {{ menuItem.text }}
        <template #append>
          <v-icon
            class="menu-icon"
            :class="{ 'menu-icon--rotate': isActive }"
          >
            mdi-chevron-down
          </v-icon>
        </template>
      </v-btn>
    </template>

    <v-list
      density="compact"
      nav
    >
      <v-list-item
        v-for="(subItem, index) in menuItem.children"
        :key="index"
        :to="subItem.to"
      >
        <template #append>
          <v-icon :icon="subItem.icon"></v-icon>
        </template>

        <v-list-item-title>
          {{ subItem.text }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
