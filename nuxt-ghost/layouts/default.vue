<template>
  <v-app>
    <Toolbar />
    <nuxt />
  </v-app>
</template>

<script>
import Toolbar from "../components/Toolbar.vue";

export default {
  components: {
    Toolbar
  },
  data() {
    return {};
  }
};
</script>
