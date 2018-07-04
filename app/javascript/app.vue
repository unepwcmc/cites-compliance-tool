<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item navbar-logo" href="#">
          <img src="https://s3.amazonaws.com/wcmc.logo/UN-Environment-WCMC+logo+2017+white.svg" alt="UN Environment WCMC">
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="#">
            Dashboard
          </a>
          <a class="navbar-item" href="#">
            Search
          </a>
        </div>

        <div class="navbar-end">
          <a class="navbar-item" href="#">
            Download All
          </a>
          <a class="navbar-item" href="#">
            Name
          </a>
        </div>
      </div>
    </nav>

    <div class="container is-fluid is-marginless tile-container">
      <div class="tile is-ancestor">
        <div class="tile is-4 is-parent">
        </div>
        <div class="tile is-8 is-parent">
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-12 is-parent">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data: function () {
    return {}
  }
}
</script>

<style>
html {
  background: #f3f3f3;
}

/* Stops level elements being too wide */
.level-item {
  flex-shrink: 1;
}
</style>

<style scoped>
.navbar {
  background: #00a0d1;
  height: 65px;
}

.navbar-item, .navbar-link {
  color: #fff;
}

.navbar-logo img {
  height: 36px;
  max-height: none;
}

.tile-container {
  padding: 20px;
}
</style>
