<template>
  <b-container class="fluid h-100">
    <b-row class="justify-content-md-center h-100" align-v="center">
      <b-col cols="4">
        <!-- <b-card title="Login"> -->
          <!-- <b-card> -->
            <b-form-group
              class="mb-3"
              id="fieldset-1"
              label="Email"
              label-for="input-1"
            >
              <b-form-input id="input-1" placeholder="Please enter your email" v-model="user.email" trim></b-form-input>
            </b-form-group>
            <b-form-group
              class="mb-3"
              id="fieldset-1"
              label="Password "
              label-for="input-1"
            >
              <b-form-input id="input-1" placeholder="Please enter your password" v-model="user.password" trim></b-form-input>
            </b-form-group>
            <div class="d-flex justify-content-between">
              <b-button size="sm" variant="primary" @click="login()" >Login</b-button>
              <b-button class="btn" href="/register" size="sm">Register</b-button>
            </div>
            {{currentUser}}
          <!-- </b-card> -->
        <!-- </b-card> -->
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import redirect from "@/exports/redirect";

export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      console.log(this.user)
      this.axios
        .post("http://localhost:3000/login", this.user)
        .then(resp => {
          if (resp.data) {
            sessionStorage.setItem("session", JSON.stringify(resp.data));
            redirect('home')
          } else {
            redirect();
          }
        })
        .finally((resp) => {
          // console.log(resp)
          // this.$router.push('home')
        });
    }
  }
};
</script>

<style>
</style>

