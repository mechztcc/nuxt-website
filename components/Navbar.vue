<template>
  <div class="d-flex justify-space-between pa-3">
    <div class="d-flex"></div>
    <div class="d-flex align-center">
      <v-icon @click="toggleTheme">mdi-theme-light-dark</v-icon>
      <v-btn color="primary mx-2">
        Favoritos
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn color="primary">
        Carrinho
        <v-icon size="large">mdi-cart</v-icon>
      </v-btn>
    </div>
  </div>
</template>
<script setup>
import { useTheme } from "vuetify";

const theme = useTheme();

function toggleTheme() {
  console.log("change theme");
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>
<style lang=""></style>
