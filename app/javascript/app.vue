<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          UN Environment WCMC
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
          <issues-reported year="2016" value="123"></issues-reported>
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
import IssuesReported from './components/IssuesReported';

export default {
  components: {
    IssuesReported
  },
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
}

.navbar-item, .navbar-link {
  color: #fff;
}

.tile-container {
  padding: 20px;
}
</style>
