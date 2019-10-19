<template>
  <section class="auth">
    <b-alert variant="success" :show="success">Successfully logged in</b-alert>
    <b-alert variant="danger" :show="errorState">{{errorMessage}}</b-alert>
    <section class="signin">
      <b-container class="auth-container">
        <b-form @submit="onSubmit" v-if="show">
          <h2>Login</h2>
          <b-form-group id="login" label-for="login">
            <b-form-input
              id="email"
              v-model="form.email"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
            <b-input
              type="password"
              id="text-password"
              aria-describedby="password-help-block"
              required
              placeholder="Password"
              v-model="form.password"
            ></b-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
          <router-link class="nav-link" to="/register">Don't have an account yet. Register instead</router-link>
        </b-form>
      </b-container>
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import axios from "axios";
import { validateToken } from "../utils/userUtils";

@Component({
  components: {}
})
export default class Login extends Vue {
  form = {
    email: "",
    password: ""
  };
  show = true;
  success = 0;
  errorState = 0;
  errorMessage = "";

  onSubmit(evt: Event) {
    evt.preventDefault();
    axios
      .post("http://localhost:3000/auth/signin", this.form)
      .then(response => {
        if (response.status == 201) {
          this.success += 2;
          setTimeout(() => {
            this.$router.push({ name: "profile" });
            localStorage.token = response.data.token;
          }, 2000);
        } else {
          alert("Wrong credentials");
        }
      })
      .catch(error => {
        this.errorMessage = `${error.message}: ${error.response.data.message}`;
        this.errorState += 4;
      });
  }

  async mounted() {
    const state = await validateToken(localStorage.token);
    if (state == true) this.$router.push({ name: "profile" });
  }
}
</script>

<style lang="scss">
.signin {
  padding-top: 8rem;
}
</style>
