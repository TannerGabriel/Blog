<template>
  <div v-if="show" class="home">
    <h1>Nodejs Authentification</h1>
    <router-link class="nav-link" to="/login">
      <b-button @click="logout()" variant="primary">Logout</b-button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { validateToken, getPayloadFromToken } from "../utils/userUtils";
import { Payload } from "../types/payload";

@Component({})
export default class Profile extends Vue {
  show = false;

  logout() {
    localStorage.token = "";
  }

  async mounted() {
    const state = await validateToken(localStorage.token);
    if (state == false) this.$router.push({ name: "login" });
    else this.show = true;
  }
}
</script>

<style lang="scss">
#app {
  background: #fff;
}
</style>
