<template>
  <div id="skills" class="mb-3 pt-5">
    <b-container fluid>
      <b-row class="title-skills">
        <b-col sm="12"> Skills </b-col>
      </b-row>

      <hr class="hr"/>

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
              <span class="html-skills">DOM manipulation, semantic tags, attributes</span>
            </b-list-group-item>

            <b-list-group-item class="border-0">
              <img
                src="../assets/css-3.png"
                alt="Icono de html"
                width="25"
                height="25"
              />
              CSS3:
              <span class="html-skills">Pseudo-classes, Media Query, Pseudo-elements, responsive design </span>
            </b-list-group-item>

            <b-list-group-item class="border-0">
              <img
                src="../assets/js.png"
                alt="Icono de html"
                width="25"
                height="25"
              />
              JAVASCRIPT:
              <span class="html-skills">Object-oriented programming, asynchrony, ECMAScript</span>
            </b-list-group-item>

            <b-list-group-item class="border-0">
              <img
                src="../assets/bootstrap.png"
                alt="Icono de html"
                width="25"
                height="25"
              />
              BOOTSTRAP:
              <span class="html-skills">Components, Layout, system class </span>
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
.list-group-item{
  background-color: inherit;
  color: var(--desc-color);
}

.title-skills {
  font-size: 35px;
  color: #1aac9b;
}
</style>