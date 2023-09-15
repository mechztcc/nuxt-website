<template>
  <div>
    <v-card elevation="1">
      <img class="img-size" src="~assets/phone.jpg" alt="" />
      <div class="d-flex">
        <v-card-title primary-title> {{ item.name }} </v-card-title>
        <v-card-title primary-title> R$ {{ item.price }} </v-card-title>
      </div>
      <v-card-text>
        <div class="d-flex">
          <v-icon v-for="(item, index) in item.stars" :key="index">
            mdi-star
          </v-icon>
          <div class="mx-2">({{ item.count }})</div>
        </div>
      </v-card-text>
      <v-card-text> {{ item.description }} </v-card-text>
      <v-card-actions>
        <v-btn block color="primary" dark>Adicionar ao carrinho</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script setup>
const props = defineProps(["item"]);
</script>
<style lang="scss">
.img-size {
  object-fit: cover;
  min-width: 300px;
  max-width: 100%;
}
</style>
