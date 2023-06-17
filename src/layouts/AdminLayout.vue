<script setup lang="ts">
import TheAppBar from "@/components/TheAppBar.vue";
import TheNavigationDrawer from "@/components/TheNavigationDrawer.vue";
</script>

<template>
  <v-layout>
    <the-app-bar title="My App" />

    <the-navigation-drawer></the-navigation-drawer>

    <v-main>
      <v-container fluid>
        <slot></slot>
      </v-container>
    </v-main>
  </v-layout>
</template>
