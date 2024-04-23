<script setup lang="ts">
import { NavRoute } from "@/interfaces/nav-route.interface";
import { LocationNavigationDrawer } from "@/types/utils.type";
import { ref, watch } from "vue";
import NavLinkGroup from "./NavLinkGroup.vue";
import NavLink from "./NavLink.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  temporary: {
    type: Boolean,
    default: false,
  },
  location: {
    type: String as () => LocationNavigationDrawer,
    default: undefined,
  },
  routes: {
    type: Array as () => NavRoute[],
    required: true,
  },
  isOpen: {
    type: Boolean,
    required: true,
  },
  openedGroups: {
    type: Array as () => string[],
    required: true,
  },
});

defineEmits<{
  (e: "update:isOpen", value: boolean): void;
  (e: "update:openedGroups", value: string[]): void;
}>();

const isOpenRef = ref<boolean>(props.isOpen);
const openedGroupsRef = ref<string[]>(props.openedGroups);

watch(
  () => props.isOpen,
  (value) => {
    isOpenRef.value = value;
  },
);
</script>

<template>
  <v-navigation-drawer
    v-model="isOpenRef"
    :temporary="temporary"
    :location="location"
    @update:model-value="$emit('update:isOpen', $event)"
  >
    <v-list
      v-model:opened="openedGroupsRef"
      open-strategy="multiple"
      @update:opened="$emit('update:openedGroups', $event as string[])"
    >
      <v-list-subheader>{{ title }}</v-list-subheader>

      <slot name="prepend-links"></slot>

      <v-divider></v-divider>

      <component
        :is="route?.children ? NavLinkGroup : NavLink"
        v-for="route in routes"
        :key="route.text"
        :route="route"
      ></component>

      <slot name="append-links"></slot>
    </v-list>
  </v-navigation-drawer>
</template>
