<template>
  <div id="presentation" class="pt-5">
    <b-container fluid class="p-4">
      <b-row class="align-items-center">
        <b-col sm="12" md="6">
          <b-img
            thumbnail
            fluid
            src="https://picsum.photos/200/200/?image=59"
            alt="Image 3"
          ></b-img>
        </b-col>

        <b-col sm="12" md="6" class="pt-5">
          <span>¡Hi! I'm Victoria Mastroianni,</span>
          <br/>
          <span>Front-End Developer</span>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Presentation",
};
</script>

<style scoped>
span{
  font-size: 35px;
  color: var(--presentation-color);
}
</style>