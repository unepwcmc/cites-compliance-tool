<template>
  <div id="app">
    <nav class="main-navigation" role="navigation" aria-label="main navigation">
      <div class="level">
        <div class="level-left">
          <a class="level-item navbar-logo" href="#">
            <img src="https://s3.amazonaws.com/wcmc.logo/UN-Environment-WCMC+logo+2017+white.svg" alt="UN Environment World Conservation Monitoring Centre">
          </a>

          <a class="level-item is-active" href="#">
            Dashboard
          </a>
          <a class="level-item" href="#">
            Search
          </a>
        </div>

        <div class="level-right">
          <a class="level-item" href="#">
            Download All
            <span class="icon">
              <i class="fas fa-download"></i>
            </span>
          </a>
          <a class="level-item" href="#">
            Name
          </a>
        </div>
      </div>
    </nav>

    <nav class="sub-navigation" role="navigation" aria-label="sub navigation">
      <div class="level">
        <div class="level-left">
          <h2 class="level-item">Overview</h2>
        </div>

        <div class="level-right">
          <div class="level-item dropdown is-hoverable">
            <div class="dropdown-trigger">
              <button class="button" aria-haspopup="true" aria-controls="year-select">
                <span>2016</span>
                <span class="icon is-small">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div class="dropdown-menu" id="year-select" role="menu">
              <div class="dropdown-content">
                <a href="#" class="dropdown-item">
                  2014
                </a>
                <a href="#" class="dropdown-item">
                  2015
                </a>
                <a href="#" class="dropdown-item">
                  2016
                </a>
                <a href="#" class="dropdown-item">
                  2017
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="container tile-container">
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

      <div class="tile is-ancestor">
        <div class="tile is-12 is-parent">
          <top-countries :countries="topCountries"></top-countries>
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-12 is-parent">
          <top-species :species="speciesValues"></top-species>
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
import TopCountries from './components/TopCountries'
import TopSpecies from './components/TopSpecies'

export default {
  components: {
    IssuesReported,
    IssuesChart,
    IssuesCategories,
    IssuesTaxonomies,
    TopCommodities,
    TopCountries,
    TopSpecies
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
        name: "Appendix I Trade",
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
      },

      speciesValues: [{
        name: 'Species 1',
        transactions: 123,
        appendix: 'II'
      }, {
        name: 'Species 2',
        transactions: 123,
        appendix: 'II'
      }, {
        name: 'Species 3',
        transactions: 123,
        appendix: 'II'
      }, {
        name: 'Species 4',
        transactions: 123,
        appendix: 'II'
      }, {
        name: 'Species 5',
        transactions: 123,
        appendix: 'II'
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

<style lang="scss">
@import '../assets/stylesheets/application.scss';

html {
  background-color: #f3f3f3;
  overflow-x: auto;
}

body {
  color: $body-font-colour;
  font-family: $body-font;
}

/* Bulma overrides */

@media screen and (max-width: 769px), print {
  .level,
  .level-left,
  .level-right,
  .tile:not(.is-child),
  .columns:not(.is-desktop) {
    display: flex;
  }

  .level-left+.level-right {
    margin-top: inherit;
  }

  .level-left .level-item:not(:last-child),
  .level-right .level-item:not(:last-child) {
    margin-bottom: inherit;
    margin-right: .75rem;
  }

  .level>.level-item:not(.is-narrow) {
    flex-grow: 1;
  }

  .tile.is-4 {
    flex: none;
    width: 33.33333%;
  }

  .tile.is-8 {
    flex: none;
    width: 66.66667%;
  }

  .tile.is-12 {
    flex: none;
    width: 100%;
  }

  .column.is-5 {
    flex: none;
    width: 41.66667%;
  }

  .column.is-6 {
    flex: none;
    width: 50%;
  }
}

/* Stops level elements being too wide */
.level-item {
  flex-shrink: 1;
}
</style>

<style scoped lang="scss">
@import '../assets/stylesheets/application.scss';

#app {
  min-width: 960px;
}

nav .level {
  height: 65px;
}

nav .level-left,
nav .level-right,
nav .level-item {
  height: 100%;
}

nav .level-item {
  margin: 0 !important;
  padding-left: 40px;
  padding-right: 40px;
}

.main-navigation {
  background: $blue-light;
  font-size: 18px;
}

.sub-navigation {
  background: #fff;
  color: #424242;
  height: 65px;
}

.sub-navigation h2 {
  font-size: 18px;
  font-weight: 500;
}

.sub-navigation button {
  font-weight: 500;
}

.sub-navigation button > span:first-child {
  padding-right: 2.75em;
}

.main-navigation .level-item,
.main-navigation .navbar-link {
  color: #fff;
}

.main-navigation .level-item .icon {
  padding-left: 20px;
}

.main-navigation .navbar-logo:hover {
  background: none !important;
}

.main-navigation .navbar-logo img {
  height: 36px;
  max-height: none;
}

.main-navigation a.level-item:hover,
.main-navigation a.level-item.is-active,
.main-navigation .navbar-link:hover,
.main-navigation .navbar-link.is-active {
  background: #fff;
  color: #424242;
}

.tile-container {
  padding: 20px 0 50px;
  max-width: 960px;
  overflow-x: hidden;
  width: 960px;
}
</style>
