<template>
  <div id="skills" class="mb-3">
    <b-container fluid>
      <b-row class="title-skills">
        <b-col sm="12"> Skills </b-col>
      </b-row>

      <hr style="width: 80%; margin-left: 10%" />

      <b-row align-h="center">
        <b-col sm="10">
          <b-list-group >
            <b-list-group-item class="border-0">
              <img
                src="../assets/html-5.png"
                alt="Icono de html"
                width="25"
                height="25"
              />
              HTML5:
              <span class="html-skills">Manipulación del DOM, Semántica de etiquetas, Atributos</span>
            </b-list-group-item>

            <b-list-group-item class="border-0">
              <img
                src="../assets/css-3.png"
                alt="Icono de html"
                width="25"
                height="25"
              />
              CSS3:
              <span class="html-skills">Pseudo-classes, Media Query, Pseudo-elements </span>
            </b-list-group-item>

            <b-list-group-item class="border-0">
              <img
                src="../assets/js.png"
                alt="Icono de html"
                width="25"
                height="25"
              />
              JAVASCRIPT:
              <span class="html-skills">POO, Asincronismo, ECMAScript</span>
            </b-list-group-item>

            <b-list-group-item class="border-0">
              <img
                src="../assets/bootstrap.png"
                alt="Icono de html"
                width="25"
                height="25"
              />
              BOOTSTRAP:
              <span class="html-skills">Components, Layout </span>
            </b-list-group-item>

            <b-list-group-item class="border-0">
              <img
                src="../assets/logo.png"
                alt="Icono de html"
                width="25"
                height="25"
              />
              VUE:
              <span class="html-skills">Components, vuex, router, events, directives</span>
            </b-list-group-item>

            <b-list-group-item class="border-0">
              <img
                src="../assets/github.png"
                alt="Icono de html"
                width="25"
                height="25"
              />
              GIT Y GITHUB:              
              <span class="html-skills">console commands</span>
            </b-list-group-item>
            
          </b-list-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Skills",
};
</script>

<style scoped>
.title-skills {
  font-size: 35px;
  color: #1aac9b;
}
</style>