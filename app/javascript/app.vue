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
          <a class="level-item" href="/download/download_all">
            Download All
            <span class="icon-download-light"></span>
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
          <div class="level-item dropdown is-right is-hoverable site-navigation-sub__dropdown">
            <div class="dropdown-trigger">
              <button class="button" aria-haspopup="true" aria-controls="year-select">
                <span>{{selectedYear}}</span>
                <span class="icon is-small">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div class="dropdown-menu" id="year-select" role="menu">
              <div class="dropdown-content">
                <a v-for="(year) in years" :key="year" class="dropdown-item" v-on:click="onSelectYear(year)">
                  {{year}}
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
          <issues-reported :values="issuesReportedValues[selectedYear]"></issues-reported>
        </div>
        <div class="tile is-8 is-parent">
          <issues-chart :values="chartValues[selectedYear]"></issues-chart>
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-12 is-parent">
          <issues-categories :values="categoryValues[selectedYear]"></issues-categories>
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-12 is-parent">
          <top-commodities :commodities="commodityValues[selectedYear].slice(0, 5)"></top-commodities>
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-12 is-parent">
          <issues-taxonomies :taxonomies="taxonomyValues[selectedYear].slice(0, 8)"></issues-taxonomies>
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-12 is-parent">
          <top-countries :export="topCountriesValuesExport[selectedYear].slice(0, 5)" :import="topCountriesValuesImport[selectedYear].slice(0, 5)"></top-countries>
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-12 is-parent">
          <top-species :species="speciesValues[selectedYear]"></top-species>
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

import dataReported from './data/reported'
import dataChart from './data/chart'
import dataCategories from './data/categories'
import dataExporters from './data/exporters'
import dataImporters from './data/importers'
import dataTaxonomy from './data/taxonomies'
import dataCommodity from './data/commodities'
import dataSpecies from './data/species'

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
      years: ['2014', '2015', '2016', '2017'],
      selectedYear: '2016',

      issuesReportedValues: dataReported,
      chartValues: dataChart,
      categoryValues: dataCategories,
      topCountriesValuesExport: dataExporters,
      topCountriesValuesImport: dataImporters,
      speciesValues: dataSpecies,
      taxonomyValues: dataTaxonomy,
      commodityValues: dataCommodity
    }
  },
  methods: {
    onSelectYear(year) {
      this.selectedYear = year;
    }
  }
}
</script>
