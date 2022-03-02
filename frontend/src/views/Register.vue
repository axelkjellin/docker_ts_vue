
<template>
  <b-container class="fluid h-100">
    <b-row class="justify-content-md-center h-100" align-v="center">
      <b-col cols="4">
        <b-card title="Register account">
          <b-card>
            <b-form-group
              class="mb-3"
              id="fieldset-1"
              label="Name"
              label-for="input-1"
            >
              <b-form-input id="input-1" placeholder="Please enter your name" v-model="user.name" trim></b-form-input>
            </b-form-group>
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
              label="Email"
              label-for="input-1"
            >
              <b-form-input id="input-1" placeholder="Please enter your password" v-model="user.password" trim></b-form-input>
              <span v-if="!isGreaterThan6" class="text-danger">Password must be at least 8 characters</span>
            </b-form-group>
            <b-form-group
              class="mb-3"
              id="fieldset-1"
              label="Password "
              label-for="input-1"
            >
              <b-form-input id="input-1" placeholder="Please confirm your password" v-model="user.passwordConfirmation" trim></b-form-input>
              <span v-if="!isValidPassword && user.passwordConfirmation" class="text-danger">Password is not the same</span>
              <span v-if="!isGreaterThan6" class="text-danger">Password must be at least 8 characters</span>
            </b-form-group>
            <div class="d-flex justify-content-between">
              <b-button class="btn" size="sm" href="/">Login</b-button>
              <b-button variant="primary" size="sm" @click="register()">Register</b-button>
            </div>
          </b-card>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import redirect from "@/exports/redirect";

export default {
  name: "Register",
  data() {
    return {
      user: {
        name: null,
        email: null,
        password: null,
        passwordConfirmation: null
      }
    };
  },
  methods: {
    register() {
      this.$http
        .post("http://localhost:8000/api/register", this.user)
        .then(resp => {
          if (resp.status == 201) {
            return redirect('');
          }
        });
    }
  },
  computed: {
    isValidPassword() {
      return this.user.passwordConfirmation == this.user.password
    },
    isGreaterThan6() {
      return this.user.password ? this.user.password.length > 6 : true
    }
  }
};
</script>

<style>
</style>