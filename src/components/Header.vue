<template>
    <b-navbar
      toggleable="lg"
      type="dark"
      sticky
      class="navbar-container px-3"
    >
      <b-navbar-brand>
        <a href="/" style='text-decoration: none; color: #fff;'>VickyMastro</a>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-scroll-to="'#presentation'">Presentation</b-nav-item>
          <b-nav-item v-scroll-to="'#skills'">Skills</b-nav-item>
          <b-nav-item v-scroll-to="'#projects'">Projects</b-nav-item>
          <b-nav-item v-scroll-to="'#contact'">Contact Me</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
.navbar-container{
  background-color: #1aac9b;
}
</style>