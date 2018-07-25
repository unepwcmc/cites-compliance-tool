<template>
  <div>
    <site-header :username="username" active="dashboard"></site-header>

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
          <issues-chart :values="chartValues[selectedYear]" :years="years"></issues-chart>
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-12 is-parent">
          <issues-categories :values="categoryValues[selectedYear]"></issues-categories>
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-12 is-parent">
          <top-countries :export="topCountriesValuesExport[selectedYear].slice(0, 5)" :import="topCountriesValuesImport[selectedYear].slice(0, 5)"></top-countries>
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
          <top-species :species="speciesValues[selectedYear]"></top-species>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SiteHeader from './elements/SiteHeader'

import IssuesReported from './components/IssuesReported'
import IssuesChart from './components/IssuesChart'
import IssuesCategories from './components/IssuesCategories'
import IssuesTaxonomies from './components/IssuesTaxonomies'

import TopCommodities from './components/TopCommodities'
import TopCountries from './components/TopCountries'
import TopSpecies from './components/TopSpecies'

import dataYears from './data/years'
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
    SiteHeader,
    IssuesReported,
    IssuesChart,
    IssuesCategories,
    IssuesTaxonomies,
    TopCommodities,
    TopCountries,
    TopSpecies
  },
  props: ['username'],
  data () {
    return {
      years: dataYears,
      selectedYear: dataYears[dataYears.length - 1],

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
