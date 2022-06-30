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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
