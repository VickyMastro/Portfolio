<template>
  <b-navbar toggleable="lg" type="dark" sticky class="navbar-container px-3">
    <DarkMode :modes="['light', 'dark']">
      <template v-slot="{ mode }">
        <button style="background-color: inherit; border: none">
          <img
            src="../assets/light-mode.png"
            v-show="mode === 'light'"
            width="20px"
            height="20px"
            alt="Mode"
          />
          <img
            src="../assets/dark-mode.png"
            v-show="mode === 'dark'"
            width="20px"
            height="20px"
            alt="Mode"
          />
        </button>
      </template>
    </DarkMode>
    <b-navbar-brand>
      <a href="/" style="text-decoration: none; color: #fff">VickyMastro</a>
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
  name: "Header",
};
</script>

<style scoped>
.navbar-container {
  background-color: #1aac9b;
}
</style>