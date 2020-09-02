<template>
  <div class="home">
    <v-row>
      <v-col cols="12" md="11">
        <v-card class="mx-auto" max-width="" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">
                THE SUMMARY
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item-group
            v-model="item"
            color="primary"
            v-if="totalPrice !== 0"
          >
            <v-list-item v-for="(item, i) in cartItems" :key="i">
              <v-list-item-icon v-if="item.quantity !== 0">
                <v-icon
                  @click="removeItem(item)"
                  class="mdi mdi-delete"
                  color="red"
                ></v-icon>
              </v-list-item-icon>
              <v-list-item-content v-if="item.quantity !== 0">
                <v-list-item-title v-text="item.name"></v-list-item-title>
              </v-list-item-content>
              <v-list-item-action v-if="item.quantity !== 0">
                <v-btn icon>{{ item.price }} ({{ item.quantity }}) </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list-item-group>

          <v-card-actions>
            <v-btn text>Total: R {{ totalPrice }} </v-btn>
          </v-card-actions>
          <v-card-actions>
            <v-btn text>Balance: R {{ balance }} </v-btn>
          </v-card-actions>
          <v-card-actions>
            <div class="my-2">
              <v-btn @click="order" color="primary">Order</v-btn>
            </div>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    },
    totalPrice() {
      let price = 0;
      this.$store.state.cartItems.map((el) => {
        price += el["quantity"] * el["price"];
      });
      //   ***************************
      //   if (this.$store.state.salary - price < -1000) {
      //     return alert(
      //       "Your Balance is lower than -R1000 Please remove some Items"
      //     );
      //   } else {
      //     return price;
      //   }
      //   ***************************
      return price;
    },
    balance() {
      return this.$store.state.salary - this.totalPrice;
    },
  },
  methods: {
    order() {
      let balance = this.$store.state.salary - this.totalPrice;
      if (balance > 0) {
        alert("Thank you for buying ");
      } else {
        return alert(
          "Your shopping is higher than your Income, please remove some Items"
        );
      }
    },
    removeItem(item) {
      this.$store.dispatch("removeItem", item);
    },
  },
};
</script>

<style scope>
.listCard {
  margin: 10px !important;
}
</style>
