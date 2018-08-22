<template>
  <div>
    <site-header :username="username" :user="user" active="dashboard"></site-header>

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
          <issues-reported :values="issuesReportedValues[selectedYear]" :user="user" :year="selectedYear"></issues-reported>
        </div>
        <div class="tile is-8 is-parent">
          <issues-chart :values="chartValues[selectedYear]" :years="years"></issues-chart>
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-12 is-parent">
          <issues-categories :values="categoryValues[selectedYear]" :user="user" :year="selectedYear"></issues-categories>
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-12 is-parent">
          <top-countries :export="topCountriesValuesExport[selectedYear].slice(0, 5)" :import="topCountriesValuesImport[selectedYear].slice(0, 5)" v-on:open-modal="openModal" :user="user" :year="selectedYear"></top-countries>
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-12 is-parent">
          <top-commodities :commodities="commodityValues[selectedYear].slice(0, 5)" v-on:open-modal="openModal" :user="user" :year="selectedYear"></top-commodities>
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-12 is-parent">
          <issues-taxonomies :taxonomies="taxonomyValues[selectedYear].slice(0, 8)" :user="user" :year="selectedYear"></issues-taxonomies>
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-12 is-parent">
          <top-species :species="speciesValues[selectedYear]" v-on:open-modal="openModal" :user="user" :year="selectedYear"></top-species>
        </div>
      </div>
    </div>

    <div class="modal" :class="{'is-active': modalActive}">
      <div class="modal-background"></div>
      <div class="modal-content">
        <h1>{{tableName}}</h1>
        <h2>Issues currently reported in {{selectedYear}}</h2>
        <search-list :columns="tableColumns[tableCategory]" :grouping="tableCategory" :year="selectedYear" per-page="8" :user="user" :in-modal="true"></search-list>
      </div>
      <button class="modal-close is-large button-full-list" aria-label="close" v-on:click="closeModal()"></button>
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

import SearchList from './components/SearchList'

import dataYears from './data/years'
import dataChart from './data/chart'

import '@fortawesome/fontawesome-free/js/all.js'

export default {
  components: {
    SiteHeader,
    IssuesReported,
    IssuesChart,
    IssuesCategories,
    IssuesTaxonomies,
    SearchList,
    TopCommodities,
    TopCountries,
    TopSpecies
  },
  props: ['user', 'username', 'category', 'commodities', 'exporting', 'importing', 'species', 'taxonomy'],
  data () {
    return {
      years: dataYears,
      selectedYear: dataYears[dataYears.length - 1],

      issuesReportedValues: this.category,
      chartValues: dataChart,
      categoryValues: this.category,
      topCountriesValuesExport: this.exporting,
      topCountriesValuesImport: this.importing,
      speciesValues: this.species,
      taxonomyValues: this.taxonomy,
      commodityValues: this.commodities,
      tableColumns: {
        exporting: {
          headers: ['Country / Region', 'No. Transactions with issues', 'Total No. of Transactions', '% of Transactions with issues'],
          keys: ['country', 'cnt', 'total_cnt', 'percentage']
        },
        commodity: {
          headers: ['Commodity', 'No. Transactions'],
          keys: ['term', 'cnt']
        },
        species: {
          headers: ['Species', 'No. Transactions', 'Appendix'],
          keys: ['taxon_name', 'cnt', 'appendix']
        }
      },
      tableCategory: 'species',
      tableName: 'Species',
      modalActive: false
    }
  },
  methods: {
    onSelectYear(year) {
      this.selectedYear = year
    },

    openModal(category) {
      switch (category) {
        case 'countries':
          this.tableCategory = 'exporting'
          this.tableName = 'Countries'
          break
        case 'species':
          this.tableCategory = 'species'
          this.tableName = 'Species'
          break
        case 'commodity':
          this.tableCategory = 'commodity'
          this.tableName = 'Commodity'
          break
      }

      this.modalActive = true
    },

    closeModal() {
      this.modalActive = false
    }
  }
}
</script>
