<script setup lang="ts">
defineProps({
  category: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div>
    <h1 class="text-h6">ProductoView</h1>

    <p>Category: {{ category }}</p>
  </div>
</template>
