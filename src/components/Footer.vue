<template>
  <div id="footer">
    <b-container fluid>
      <b-row class="title-contact">
        <b-col sm="12"> Contact Me </b-col>
      </b-row>
    </b-container>

    <hr style="width: 80%; margin-left: 10%" />

    <div class="footer-container">
      <a class="footer-a" href="#"> Twitter </a>

      <a class="footer-a" href="#"> Linkedin </a>

      <a class="footer-a" href="#"> GitHub </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer-container {
  height: 50px;
  background-color: #1aac9b;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.title-contact {
  font-size: 35px;
  color: #1aac9b;
}
.contact-icons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.footer-a {
  color: black !important;
  text-decoration: none;
}
</style>