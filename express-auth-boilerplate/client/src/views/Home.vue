<template>
  <div class="home">
    <div class="container">
      <div class="jumbotron text-center">
        <h1>Node Authentification</h1>
        <p>Login or Register with:</p>
        <router-link class="nav-link" to="/login">
          <b-button variant="primary">Login</b-button>
        </router-link>
        <router-link class="nav-link" to="/register">
          <b-button variant="primary">Register</b-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { validateToken, getPayloadFromToken } from "../utils/userUtils";
import { Payload } from "../types/payload";

@Component({})
export default class Home extends Vue {}
</script>

<style lang="scss">
#app {
  background: #fff;
}
</style>
