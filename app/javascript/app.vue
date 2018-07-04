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
        </div>
        <div class="tile is-8 is-parent">
          <issues-chart :values="chartValues"></issues-chart>
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
import IssuesChart from './components/IssuesChart';

export default {
  components: {
    IssuesChart
  },
  data: function () {
    return {
      chartValues: [{
        year: 2015,
        issuesReported: 0,
        countriesReported: 0,
        countriesYetToReport: 0
      }, {
        year: 2016,
        issuesReported: 200,
        countriesReported: 200,
        countriesYetToReport: 200
      }, {
        year: 2017,
        issuesReported: 100,
        countriesReported: 100,
        countriesYetToReport: 100
      }]
    }
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
