<template>
<nav class="navbar container" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <strong class="is-size-5">Fitness Fight</strong>
    </a>
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div id="navbar" class="navbar-menu">
    <div class="navbar-start">
      <router-link to="/" class="navbar-item">Home</router-link>
      <router-link to="/about" class="navbar-item">About</router-link>
      <router-link to="/dietplan" class="navbar-item">Diet Plan</router-link>
      <router-link to="/workinghours" class="navbar-item">Working Hours</router-link>
      <router-link to="/exercises" class="navbar-item">Exercises</router-link>
      <router-link to="/sleep_time" class="navbar-item"> SleepTrack</router-link>
      <router-link to="/MyWorkouts" class="navbar-item"> workouts</router-link>
      
      <router-link to="/help" class="navbar-item">Help</router-link>

    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-dark" href="/login">
            <strong>Sign In </strong>
          </a>
          <a class="button is-dark" href="/SignUp">
            <strong>Sign Up </strong>
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>
<script>
export default {
    name: 'Nav'
}
</script>
<style lang="scss" scoped>
  nav {
    margin-top: 25px;
    margin-bottom: 30px;
    a {
      font-weight: bold;
      color: #111111;
      &.router-link-exact-active {
        color: #0b7550;
      }
    }
  }
</style>