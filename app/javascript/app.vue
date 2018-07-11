<template>
  <div id="app">
    <nav class="site-navigation site-navigation-main" role="navigation" aria-label="main navigation">
      <div class="level">
        <div class="level-left">
          <a class="level-item site-navigation-main__logo" href="#">
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

    <nav class="site-navigation site-navigation-sub" role="navigation" aria-label="sub navigation">
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
          <issues-reported :values="issuesReportedValues"></issues-reported>
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

import dataExporters from './data/exporters'
import dataImporters from './data/importers'
import dataTaxonomy from './data/taxonomies'
import dataCommodity from './data/commodities'

import '@fortawesome/fontawesome-free/js/all.js'

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
      issuesReportedValues: {
        year: 2016,
        value: 23286
      },

      chartValues: [{
        year: 2015,
        issuesReported: 34259,
        countriesReported: 200,
        countriesYetToReport: 7
      }, {
        year: 2016,
        issuesReported: 23286,
        countriesReported: 200,
        countriesYetToReport: 23
      }, {
        year: 2017,
        issuesReported: 27932,
        countriesReported: 100,
        countriesYetToReport: 15
      }],

      categoryValues: [{
        name: "Trade Suspensions",
        value: 7356
      }, {
        name: "Appendix I Trade",
        value: 17231
      }, {
        name: "Quotas",
        value: 10898
      }],

      topCountries: {
        export: dataExporters.slice(0, 5),
        import: dataImporters.slice(0, 5)
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

      taxonomyValues: dataTaxonomy.slice(0, 8),

      commodityValues: dataCommodity.slice(0, 5)
    }
  }
}
</script>
