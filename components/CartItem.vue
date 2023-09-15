<template>
  <v-card class="mt-3">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="3"
          lg="3"
          class="d-flex align-center justify-center"
        >
          <img class="img-size" src="~assets/phone.jpg" alt="" />
        </v-col>
        <v-col
          cols="12"
          md="6"
          lg="6"
          class="d-flex align-center justify-start"
        >
          <span>{{ item.description }}</span>
        </v-col>
        <v-col
          cols="3"
          md="3"
          lg="3"
          class="d-flex flex-column align-center justify-end"
        >
          <div class="d-flex align-center">
            <v-btn icon="mdi-minus" @click="store.decrementItem(item)"></v-btn>
            <span class="mx-3">{{ item.count }}</span>
            <v-btn icon="mdi-plus" @click="store.incrementItem(item)"></v-btn>
          </div>
          <div class="d-flex mt-3">
            <h2>R$ {{ item.price }}</h2>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script setup>
import { useAlertsStore } from "~/stores/CartStore";

const props = defineProps(["item"]);
const store = useAlertsStore();
</script>
<style lang="scss" scoped>
.img-size {
  max-height: 120px;
  max-width: 120px;
}
</style>
