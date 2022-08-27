<template>
  <div id="projects" class="pt-5">
    <b-container fluid>
      <b-row class="title-projects">
        <b-col sm="12"> Projects </b-col>
      </b-row>

      <hr class="hr"/>

      <b-row align-h="around">
        <b-col sm="8" md="4" class="d-flex justify-content-around">
          <b-card
            title="ToDo App"
            :img-src="require('@/assets/toDo-App.png')"
            img-alt="ToDo project"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="card-container my-3"
          >
            <b-card-text>
              App for notes and toDos with authentication, made with Vue, Firebase and Bootstrap
            </b-card-text>

            <div class="d-flex justify-content-around mt-5">
              <b-button
                href="https://github.com/VickyMastro/Vue-ToDo-App"
                class="project-buttons"
                target="_blank"
                >GitHub</b-button
              >
              <b-button
                href="https://vickymastro.github.io/Vue-ToDo-App/"
                class="project-buttons"
                target="_blank"
                >Page</b-button
              >
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
  color: var(--title-color);
}

.card-container {
  color: var(--desc-color);
  border: none;
  background-color: inherit;
  box-shadow: var(--card-border) 0px 5px 15px;
}

.project-buttons {
  background-color: #1aac9b;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.project-buttons:focus,
.project-buttons:hover {
  background-color: #1aac9b;
  box-shadow: none;
}
</style>
