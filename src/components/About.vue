<template>
  <div class="pt-5">
    <b-container fluid>
      <b-row class="title-about">
        <b-col sm="12"> About Me </b-col>
      </b-row>
      
      <hr class="hr"/>

      <b-row align-h="center">
        <b-col sm="6">
          <div class="desc-about my-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
            ullam maiores sequi excepturi? Ullam ducimus deserunt maxime ipsa
            possimus optio vel rerum consectetur eos hic, error reiciendis alias
            impedit delectus!
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.title-about {
  font-size: 35px;
  color: #1aac9b;
}

.desc-about{
  font-size: 20px;
  color: var(--desc-color);
}
</style>