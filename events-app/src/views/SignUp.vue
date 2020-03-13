<template>
  <form class="container" @submit.prevent="signup">
      {{error}}
      <div class="field">
        <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email" v-model="email" >
            <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
            </span>
        </p>
        </div>

        <div class="field">
        <p class="control has-icons-left has-icons-right">
            <input class="input" type="name" placeholder="Name" v-model="name" >
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
        <p class="control has-icons-left">
            <input class="input" type="confirm password" placeholder="Cofirm Password" v-model="confirmpassword">
            <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
            </span>
        </p>
        </div>
        <div class="field">
        <p class="control">
            <button class="button is-success">
            Login
            </button>
        </p>
        </div>
  </form>
</template>

<script>
import { SignUp} from "../models/users1";

export default {
    data(){
        return {
            email: '',
            name: '',
            password: '',
            confirmpassword: '',
            error: ''
        }
    },
    methods: {
        signup(){
            try {
                SignUp(this.email, this.name, this.password, this.confirmpassword );
                this.$router.push('/login');
            } catch (error) {
                this.error = error;
            }
        }
    }
}
</script>

<style>

</style>
