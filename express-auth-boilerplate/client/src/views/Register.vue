<template>
  <div class="auth">
    <b-alert variant="success" :show="success">Successfully registered</b-alert>
    <b-alert variant="danger" :show="errorState">{{errorMessage}}</b-alert>
    <section class="register"></section>
    <b-container class="auth-container">
      <b-form @submit="onSubmit" v-if="show">
        <h2>Register</h2>
        <b-form-group id="register" label-for="Register">
          <b-form-input
            id="email"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>

          <b-input
            type="password"
            id="password"
            placeholder="Password"
            required
            v-model="form.password"
          ></b-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
      <router-link class="nav-link" to="/login">Login instead</router-link>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import axios from "axios";

@Component({
  components: {}
})
export default class Register extends Vue {
  form = {
    email: "",
    password: ""
  };
  show = true;
  success = 0;
  errorState = 0;
  errorMessage = "";

  onSubmit(evt: Event) {
    console.log(this.form);
    evt.preventDefault();
    axios
      .post("http://localhost:3000/auth/signup", this.form)
      .then(response => {
        this.success += 2;
        setTimeout(() => {
          this.$router.push("/profile");
          localStorage.token = response.data.token;
        }, 2000);
      })
      .catch(error => {
        this.errorMessage = `${error.message}: ${error.response.data.message}`;
        this.errorState += 4;
      });
  }
}
</script>

<style lang="scss">
.register {
  padding-top: 8rem;
}
</style>
