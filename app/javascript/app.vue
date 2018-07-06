<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item navbar-logo" href="#">
          <img src="https://s3.amazonaws.com/wcmc.logo/UN-Environment-WCMC+logo+2017+white.svg" alt="UN Environment World Conservation Monitoring Centre">
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
          <issues-chart :values="chartValues"></issues-chart>
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-12 is-parent">
          <issues-categories :values="categoryValues"></issues-categories>
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-12 is-parent">
          <top-commodities :commodities="commodityValues"></top-commodities>
        </div>
      </div>
      
      <div class="tile is-ancestor">
        <div class="tile is-12 is-parent">
          <issues-taxonomies :taxonomies="taxonomyValues"></issues-taxonomies>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IssuesReported from './components/IssuesReported'
import IssuesChart from './components/IssuesChart'
import IssuesCategories from './components/IssuesCategories'
import IssuesTaxonomies from './components/IssuesTaxonomies'

import TopCommodities from './components/TopCommodities'

export default {
  components: {
    IssuesReported,
    IssuesChart,
    IssuesCategories,
    IssuesTaxonomies
    TopCommodities
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
      }],
      categoryValues: [{
        name: "Trade Suspensions",
        value: 35
      }, {
        name: "Appendix 1 Trade",
        value: 135
      }, {
        name: "Quotas",
        value: 72
      }],

      taxonomyValues: [{
        name: 'Mammals',
        value: 40,
        percent: 20
      }, {
        name: 'Birds',
        value: 300,
        percent: 100
      }, {
        name: 'Reptiles',
        value: 65,
        percent: 35
      }, {
        name: 'Amphibians',
        value: 50,
        percent: 25
      }, {
        name: 'Fish',
        value: 0,
        percent: 0
      }, {
        name: 'Invertebrates',
        value: 30,
        percent: 15
      }, {
        name: 'Plants',
        value: 90,
        percent: 45
      }, {
        name: 'Timber',
        value: 150,
        percent: 75
      }],

      commodityValues: [{
        name: 'Animalia',
        value: 45,
        percent: 75
      }, {
        name: 'Plantae',
        value: 32,
        percent: 60
      }, {
        name: 'Leather',
        value: 15,
        percent: 35
      }, {
        name: 'Skins',
        value: 10,
        percent: 20
      }, {
        name: 'Trophies',
        value: 7,
        percent: 10
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
