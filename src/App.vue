<template>
  <div id="app">
    <Header />
    <Presentation />
    <About />
    <Skills />
    <Projects />
    <Footer />
  </div>
</template>

<script>
import Header from "../src/components/Header.vue";
import Presentation from "./components/Presentation.vue";
import About from "./components/About.vue";
import Skills from "../src/components/Skills.vue";
import Projects from "./components/Projects.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Presentation,
    About,
    Skills,
    Projects,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&display=swap");
:root {
  --presentation-color: #21e1ca;
  --title-color: #1aac9b;
  --desc-color: #668fb9;
  --dividing-line: #1aac9b;
}

html.dark-mode {
  --bg: #0a1014;
  --card-border: #0c484152;
}

html.light-mode {
  --bg: #fff;
  --card-border: rgba(0, 0, 0, 0.35);
}

#app {
  font-family: "Inconsolata", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  transition: all 0.5s ease-in-out;
  background-color: var(--bg);
}

.hr {
  width: 80%;
  margin-left: 10%;
  color: var(--dividing-line);
}
</style>
