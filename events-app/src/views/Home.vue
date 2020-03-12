<template>
<div class="home">
  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Welcome to the Fitness Fight     
        </h1>
          <div class="button-block">
          <button class="button is-xl is-dark">Exercises</button>
        </div>
      </div>
    </div>
  </section>
</div>
</template>
<script>
export default {
  name: 'home',
  components: {
  }
}
</script>
<style lang="scss" scoped>
  .hero {  
    text-align: center;
    background-image: url('https://www.eaglebrookclub.com/sites/www.eaglebrookclub.com/files/styles/content_blocks/public/Eagle%20Brook%20Fitness%20%231_1.jpg?itok=GcNbDE3x');
    background-size:auto;
    background-position:center center;
    background-repeat: no-repeat;
    height: 500px;
  }
  .hero-body .title {
    text-shadow: 4px 4px 4px rgba(219, 128, 128, 0.6);
    padding: 40px 0 20px 0;
    font-size: 60px;
  }
  .subtitle {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
    font-size: 30px;
  }
  .button-block {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    position: absolute;
    bottom: -300px;
    .button {
      margin-right: 50px;
      padding-left: 50px;
      padding-right: 50px;
    }
    .welcome {
      width: 400px;
      padding: 10px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .is-xl {
    font-size: 1.8rem;
    
  }
</style>