<template>
  <div>
    <v-container>
      <h1 class="mb-10">Produtos em alta</h1>
      <v-row>
        <v-col
          cols="12"
          md="6"
          lg="4"
          v-for="(item, index) in items"
          :key="index"
        >
          <CardProduct :item="item" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup>
import { useAlertsStore } from "~/stores/CartStore";

const items = [
  {
    id: 1,
    name: "HeadBass XLG",
    price: 79.99,
    description: "A beautiful headphone prepare to enjoy your mind!",
    stars: 2,
    count: 10,
  },
  {
    id: 2,
    name: "HeadBass XLG",
    price: 199.99,
    description: "A beautiful headphone prepare to enjoy your mind!",
    stars: 4,
    count: 5,
  },
  {
    id: 3,
    name: "HeadBass XLG",
    price: 299.99,
    description: "A beautiful headphone prepare to enjoy your mind!",
    stars: 5,
    count: 210,
  },
];
</script>
<style lang="scss" scoped></style>
