<template>
  <div id="projects">
    <b-container fluid>
      <b-row class="title-projects">
        <b-col sm="12"> Projects </b-col>
      </b-row>

      <hr style="width: 80%; margin-left: 10%" />

      <b-row align-h="around">
        <b-col md="4">
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>

            <div class="d-flex justify-content-around">
              <b-button href="#" variant="primary">GitHub</b-button>
              <b-button href="#" variant="primary">Page</b-button>
            </div>
          </b-card>
        </b-col>

        <b-col md="4">
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>

            <div class="d-flex justify-content-around">
              <b-button href="#" variant="primary">GitHub</b-button>
              <b-button href="#" variant="primary">Page</b-button>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Projects",
};
</script>

<style scoped>
.title-projects {
  font-size: 35px;
  color: #1aac9b;
}
</style>