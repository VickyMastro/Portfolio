<template>
  <div id="projects" class="pt-5">
    <b-container fluid>
      <b-row class="title-projects">
        <b-col sm="12"> Projects </b-col>
      </b-row>

      <hr style="width: 80%; margin-left: 10%; color: #1aac9b" />

      <b-row align-h="around">
        <b-col
          sm="8"
          md="4"
          class="d-flex justify-content-around"
        >
          <b-card
            title="Card "
            img-src="https://picsum.photos/600/300/?image=20"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="card-container my-3"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>

            <div class="d-flex justify-content-around">
              <b-button href="#" class="project-buttons">GitHub</b-button>
              <b-button href="#" class="project-buttons">Page</b-button>
            </div>
          </b-card>
        </b-col>

        <b-col sm="8" md="4" class="d-flex justify-content-around">
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=20"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="card-container my-3"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>

            <div class="d-flex justify-content-around">
              <b-button href="#" class="project-buttons">GitHub</b-button>
              <b-button href="#" class="project-buttons">Page</b-button>
            </div>
          </b-card>
        </b-col>

        <b-col sm="8" md="4" class="d-flex justify-content-around">
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=20"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="card-container my-3"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>

            <div class="d-flex justify-content-around">
              <b-button href="#" class="project-buttons">GitHub</b-button>
              <b-button href="#" class="project-buttons">Page</b-button>
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

.card-container {
  border: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.project-buttons {
  background-color: #1aac9b;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.project-buttons:hover {
  background-color: #1aac9b;

}
</style>