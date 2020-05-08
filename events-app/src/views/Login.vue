<template>
  <section>
    <h1 class="title">Login</h1>  
  <form class="box" @submit.prevent="login"> 
    <p class="has-text-centered">{{ error }}</p>
  <div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="text" placeholder="Username" v-model="username">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
  </div>
  <div class="field">
  <p class="control has-icons-left">
    <input class="input" type="password" placeholder="Password" v-model="password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
  </div>
  <div class="field">
  <p class="control">
    <button class="button is-info">
      Login
    </button>
  </p>
  </div>
   <figure class="image is 1x1">
      <img src="https://www.verywellfit.com/thmb/DwHL8LFd6HHK92JT0j2YMAn9JXQ=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Dumbbells-568094543df78ccc15a5b493.jpg">
    </figure>
    </form>
 </section> 
</template>

<script>
import {Login} from "../models/users";
export default {
    data: () => ({
            username: "",
            password: "",
            error: "",
    }),
    methods: {
         async login(){
            try {
                await Login(this.username, this.password);
                this.$router.push('/about');
            } catch (error) {
                this.error = error;
            }
        }
}
}
</script>