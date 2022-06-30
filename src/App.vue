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
import Header from '../src/components/Header.vue'
import Presentation from './components/Presentation.vue'
import About from './components/About.vue'
import Skills from '../src/components/Skills.vue'
import Projects from './components/Projects.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components:{
    Header,
    Presentation,
    About,
    Skills,
    Projects,
    Footer,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&display=swap');
#app {
  font-family: 'Inconsolata', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
