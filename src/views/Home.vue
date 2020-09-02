<template>
  <div class="home">
    <v-row>
      <v-col cols="12" md="9">
        <v-row>
          <v-col cols="12" md="3" v-for="item in allItems" :key="item.id">
            <v-card class="mx-auto" max-width="200">
              <v-img :src="item.url" height="150px"></v-img>

              <v-card-title> {{ item.name }} : R{{ item.price }} </v-card-title>

              <v-card-subtitle> {{ item.desc }} </v-card-subtitle>

              <v-card-actions>
                <v-btn @click="itemDetails(item)" color="red" text>
                  View
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="3" class="cart-component">
        <Cart />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Cart from "./Cart";
export default {
  name: "Home",
  components: {
    Cart,
  },

  computed: {
    allItems() {
      return this.$store.state.allItems;
    },
  },
  methods: {
    itemDetails(item) {
      this.$router.push({ name: "details", params: item });
    },
  },
};
</script>
<style scoped>
.cart-component {
  position: fixed !important;
  padding: 2em;
  left: 80%;
  top: 7%;
  transform: translateX(-20%);
}
</style>
