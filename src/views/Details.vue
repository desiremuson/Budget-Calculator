<template>
  <div class="home">
    <v-card class="mx-auto" max-width="550">
      <v-img class="white--text align-end" height="320px" :src="details.url">
        <v-card-title>{{ details.name }}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">R {{ details.price }}</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          iusto culpa! Sit maiores ab provident rem ipsam odio a, voluptatem
          veniam tempore repellat quam error sed libero enim, minus sint.
        </div>
      </v-card-text>

      <v-card-actions>
        <v-btn @click="removeItem" color="red" text>
          Remove
        </v-btn>
        <v-spacer></v-spacer>

        <v-btn @click="addItem" color="red" text>
          Add
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "details",
  data() {
    return {
      details: this.$route.params,
    };
  },
  methods: {
    addItem() {
      if (
        this.$store.state.salary - (this.totalPrice + this.details.price) <
        -1000
      ) {
        return alert(
          "If you add this Item your Balance will be lower than -R1000 "
        );
      } else {
        this.$store.dispatch("addToCart", this.details);
        this.$router.push("/");
      }
      //   this.$store.dispatch("addToCart", this.details);
      //   this.$router.push("/");
    },
    removeItem() {
      this.$store.dispatch("removeItem", this.details);
      this.$router.push("/");
    },
    goToCart() {
      this.$router.push("/cart");
    },
  },
  created() {
    if (this.$route.params.id !== undefined) {
      localStorage.setItem("details", JSON.stringify(this.$route.params));
    }
  },
  mounted() {
    this.details = JSON.parse(localStorage.getItem("details"));
  },
  computed: {
    totalPrice() {
      let price = 0;
      this.$store.state.cartItems.map((el) => {
        price += el["quantity"] * el["price"];
      });

      return price;
    },
  },
};
</script>

<style scoped>
.home {
  margin: 30px;
}</style
>>
