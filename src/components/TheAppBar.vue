<script setup lang="ts">
import useTheNavigationDrawerStore from "@/store/modules/theNavigationDrawerStore";

const theNavigationDrawerStore = useTheNavigationDrawerStore();

defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <v-app-bar>
    <v-app-bar-nav-icon @click.stop="theNavigationDrawerStore.toogle()" />

    <v-app-bar-title>
      {{ title }}
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <v-menu location="bottom">
      <template #activator="{ props }">
        <v-btn
          v-bind="props"
          icon
        >
          <v-avatar size="45">
            <v-icon icon="mdi-account-circle"></v-icon>
          </v-avatar>
        </v-btn>
      </template>

      <!-- TODO: user -->
      <v-list v-if="true">
        <v-list-item>
          <v-list-item-title> luisfernandosalgadomiguez@gmail </v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item link>
          <v-list-item-title> Perfil de Usuario </v-list-item-title>
        </v-list-item>

        <v-list-item link>
          <v-list-item-title> Cerrar Sesión </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
