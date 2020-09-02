<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h2 @click="goHome">Budget Calculator</h2>
      </div>
      <v-spacer></v-spacer>

      <v-badge avatar bordered overlap>
        <template v-slot:badge>
          <v-avatar>
            <span>{{ count }}</span>
          </v-avatar>
        </template>

        <v-avatar size="40">
          <v-icon left>
            mdi-cart
          </v-icon>
        </v-avatar>
      </v-badge>

      <h4 style="margin-left:25px">Income: R{{ salary }}</h4>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({}),
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
  computed: {
    count() {
      return this.$store.state.itemCount;
    },
    salary() {
      return this.$store.state.salary;
    },
  },
};
</script>
