<template>
  <section>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item>
          <router-link class="nav-link" to="/">Home</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link class="nav-link" to="/profile">Profile</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Navbar extends Vue {}
</script>


<style lang="scss">
a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
}
</style>
