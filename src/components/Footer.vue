<template>
  <div id="contact">
    <b-container fluid>
      <b-row class="title-contact">
        <b-col sm="12"> Contact Me </b-col>
      </b-row>
    </b-container>

    <hr style="width: 80%; margin-left: 10%; color: var(--dividing-line)" />

    <div class="footer-container">
      <a
        href="https://twitter.com/MastroVicky?t=Anh2T0VaJESMoYWqJYTRnQ&s=09"
        target="_blank"
      >
        Twitter
      </a>

      <a href="mailto:vicmastroianni1702@gmail.com">Gmail</a>

      <a
        href="https://www.linkedin.com/in/victoria-mastroianni-956479222/"
        target="_blank"
      >
        Linkedin
      </a>

      <a href="https://github.com/VickyMastro" target="_blank"> GitHub </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.title-contact {
  font-size: 35px;
  color: var(--title-color);
}

.footer-container {
  height: 50px;
  background-color: #1aac9b;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.footer-container a {
  color: #2c3e50 !important;
  font-size: 25px;
  text-decoration: none;
}
</style>