<template>
  <div id="form">
      <b-container class="fluid">
          <h1 style="text-align:right;margin-top:30;">
              Olá {{currentUser.name}}
          </h1> 
          <h6 style="text-align:right;margin-bottom:30px;">
              <b-button size="sm" @click="logout()">logout</b-button>
          </h6>
      </b-container>
  </div>
</template>

<script>
import redirect from "@/exports/redirect";

export default {
  name: "Home",
  components: {

  },
  data() {
    return {
      currentUser: null,
      reloadClasses: false
    };
  },
  mounted() {
    this.getCurrentUser(sessionStorage.getItem("session"));
  },
  methods: {
    getCurrentUser(session) {
      if (session) {
        this.currentUser = JSON.parse(session);
        this.getAuthorization();
      } else {
        console.log('oi')
        redirect();
      }
    },
    logout() {
      sessionStorage.clear();
      redirect();
    },
    getAuthorization() {
      this.currentUser.authorization = {
        headers: { authorization: "Bearer " + this.currentUser.token }
      };
    },
    onClickChild(value) {
        if(value) {
            return true
        }
    }
  }
};
</script>