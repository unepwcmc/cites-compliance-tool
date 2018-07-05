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
          <top-countries :countries="topCountries"></top-countries>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IssuesReported from './components/IssuesReported'
import IssuesChart from './components/IssuesChart'
import IssuesCategories from './components/IssuesCategories'
import TopCountries from './components/TopCountries'

export default {
  components: {
    IssuesReported,
    IssuesChart,
    IssuesCategories,
    TopCountries
  },
  data () {
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

      topCountries: {
        export: [{
          name: 'United States of America',
          key: 'US'
        }, {
          name: 'Japan',
          key: 'JP'
        }, {
          name: 'Italy',
          key: 'IT'
        }, {
          name: 'Germany',
          key: 'DE'
        }, {
          name: 'Russia',
          key: 'RU'
        }],
        import: [{
          name: 'Great Britain',
          key: 'GB'
        }, {
          name: 'Canada',
          key: 'CA'
        }, {
          name: 'Australia',
          key: 'AU'
        }, {
          name: 'Mexico',
          key: 'MX'
        }, {
          name: 'Iceland',
          key: 'IS'
        }]
      }
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
