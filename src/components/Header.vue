<template>
  <div>
  <b-navbar toggleable="lg" type="dark" class="navbar-container px-3">
    <b-navbar-brand href="#">VickyMastro</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="presentation">About Me</b-nav-item>
        <b-nav-item href="skills">Skills</b-nav-item>
        <b-nav-item href="projects">Projects</b-nav-item>
        <b-nav-item href="contact">Contact Me</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
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