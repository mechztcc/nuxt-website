<template>
  <v-card class="mt-3">
    <v-card-title> Total: R$ {{ store.calculate }} </v-card-title>
  </v-card>
</template>
<script setup>
import { useAlertsStore } from "~/stores/CartStore";

const store = useAlertsStore();
</script>
<style lang=""></style>
