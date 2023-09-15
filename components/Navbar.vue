<template>
  <div class="d-flex justify-space-between pa-3 bg-primary elevation-5">
    <div class="d-flex">
      <router-link to="/home">H</router-link>
    </div>
    <div class="d-flex align-center">
      <v-icon @click="toggleTheme()">mdi-theme-light-dark</v-icon>
      <v-badge color="secondary" content="0" class="mx-3">
        <v-icon icon="mdi-heart" size="x-large"></v-icon>
      </v-badge>
      <v-badge color="secondary" :content="store.items.length" @click="navigateTo('/cart')">
        <v-icon icon="mdi-cart" size="x-large"></v-icon>
      </v-badge>
    </div>
  </div>
</template>
<script setup>
import { useTheme } from "vuetify";
import { useAlertsStore } from "~/stores/CartStore";

const theme = useTheme();
const route = useRoute();
const store = useAlertsStore();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>
<style lang=""></style>
