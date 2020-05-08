<template>
    <section>
        <div class="field">
            <label class="label">Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="First Name Last Name" v-model="name">
            </div>
        </div>

        <div class="field">
            <label class="label">Username</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input is-success" type="text" placeholder="myusername" v-model="username">
            <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
            </span>
            </div>
        </div>
        <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input is-danger" type="email" placeholder="hello@gmail.com" v-model="email">
                <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                    <i class="fas fa-exclamation-triangle"></i>
                </span>
            </div>
        </div>

        <div class="field">
            <div class="control">
            <label class="checkbox">
            <input type="checkbox">
                <p>I agree to the terms and conditions</p>
            </label>
            </div>
        </div>
        <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input is-success" type="text" placeholder="mypassword" v-model="password">
                    <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                    </span>
                </div>    
            </div>

        <div class="field is-grouped">
            <div class="control">
            <button class="button is-link">Submit</button>
        </div>
        <div class="control">
            <button class="button is-link is-light" @click="clear">Cancel</button>
        </div>
        </div>
    </section>
</template>


<script>
export default {
    data: () => ({
        username: "",
        email:"",
        password: "",
        name: ""
    }),
    methods: {
        clear () {
            this.username="";
            this.email="";
            this.password="";
            this.name="";
        }
    }    
}
</script>