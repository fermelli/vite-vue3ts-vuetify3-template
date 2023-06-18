<script setup lang="ts">
import TheNavBar from "@/components/TheNavBar.vue";
</script>

<template>
  <the-nav-bar></the-nav-bar>

  <v-layout>
    <v-main>
      <v-container fluid>
        <slot></slot>
      </v-container>
    </v-main>
  </v-layout>
</template>
