<template>
  <div>
    <v-container>
      <h1 class="mb-10">Carrinho</h1>
      <v-row>
        <v-col cols="12" v-for="(item, index) in store.items" :key="index">
          <CartItem :item="item" />
        </v-col>
        <v-col cols="12">
          <CartTotal />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup>
import { useAlertsStore } from "~/stores/CartStore";

const store = useAlertsStore();
</script>
<style lang="scss"></style>
