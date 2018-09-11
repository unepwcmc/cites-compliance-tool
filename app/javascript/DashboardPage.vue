<template>
  <div>
    <site-header :username="username" :user="user" :admin="admin" active="dashboard"></site-header>

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
          <issues-reported :values="issuesReported" :user="user" :year="selectedYear"></issues-reported>
        </div>
        <div class="tile is-8 is-parent">
          <issues-chart :values="chart" :years="years"></issues-chart>
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-12 is-parent">
          <issues-categories :values="category" :user="user" :year="selectedYear"></issues-categories>
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-12 is-parent">
          <top-countries :exporting="exporting" :importing="importing" v-on:open-modal="openModal" :user="user" :year="selectedYear"></top-countries>
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-12 is-parent">
          <top-commodities :values="commodity" v-on:open-modal="openModal" :user="user" :year="selectedYear"></top-commodities>
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-12 is-parent">
          <issues-taxonomies :values="taxonomy" :user="user" :year="selectedYear"></issues-taxonomies>
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-12 is-parent">
          <top-species :values="species" v-on:open-modal="openModal" :user="user" :year="selectedYear"></top-species>
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
import axios from 'axios'

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

  props: ['user', 'username', 'admin'],

  data () {
    return {
      years: dataYears,
      selectedYear: dataYears[0],

      groupings: [
        'category',
        'importing',
        'exporting',
        'commodity',
        'taxonomy',
        'species'
      ],

      issuesReportedValues: null,
      chartValues: null,
      categoryValues: null,
      exportingValues: null,
      importingValues: null,
      speciesValues: null,
      taxonomyValues: null,
      commodityValues: null,

      loading: {
        category: false,
        importing: false,
        exporting: false,
        commodity: false,
        taxonomy: false,
        species: false
      },

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

  mounted () {
    this.getData()
  },

  computed: {
    issuesReported() {
      if (this.issuesReportedValues) {
        return this.issuesReportedValues[this.selectedYear]
      }

      return
    },

    chart() {
      if (this.chartValues) {
        return this.chartValues[this.selectedYear]
      }

      return
    },

    category() {
      if (this.categoryValues) {
        return this.categoryValues[this.selectedYear]
      }

      return
    },

    exporting() {
      if (this.exportingValues) {
        return this.exportingValues[this.selectedYear].slice(0, 5)
      }

      return
    },

    importing() {
      if (this.importingValues) {
        return this.importingValues[this.selectedYear].slice(0, 5)
      }

      return
    },

    commodity() {
      if (this.commodityValues) {
        return this.commodityValues[this.selectedYear].slice(0, 5)
      }

      return
    },

    taxonomy() {
      if (this.taxonomyValues) {
        return this.taxonomyValues[this.selectedYear].slice(0, 8)
      }

      return
    },

    species() {
      if (this.speciesValues) {
        return this.speciesValues[this.selectedYear]
      }

      return
    }
  },

  methods: {
    getEndpointGrouping(grouping) {
      return `/api/v1/sapi/?sapi[user_id]=${this.user}&sapi[call]=grouped&sapi[grouping]=${grouping}`
    },

    getEndpointChart() {
      return `/api/v1/sapi/?sapi[user_id]=${this.user}&sapi[call]=chart&sapi[year]=${this.selectedYear}`
    },

    getData() {
      this.groupings.forEach((grouping) => {
        let values

        switch(grouping) {
          case 'category':
            values = ['categoryValues', 'issuesReportedValues']
            break
          default:
            values = `${grouping}Values`
            break
        }

        this.getDataGrouping(grouping, values)
      })

      this.getDataChart()
    },

    getDataGrouping(grouping, values) {
      const endpoint = this.getEndpointGrouping(grouping)

      this.loading[grouping] = true

      axios.get(endpoint).then((res) => {
        if (Array.isArray(values)) {
          values.forEach((value) => {
            this[value] = res.data
          })
        } else {
          this[values] = res.data
        }

        this.loading[grouping] = false
      }).catch((err) => {
        console.error(err)
        this.loading[grouping] = false
      })
    },

    getDataChart() {
      const endpoint = this.getEndpointChart()

      this.chartValues = null
      this.loading.chart = true

      axios.get(endpoint).then((res) => {
        this.chartValues = res.data

        if (this.selectedYear === '2012') {
          this.chartValues[this.selectedYear].shift()
        }

        if (this.selectedYear === '2017') {
          this.chartValues[this.selectedYear].pop()
        }

        this.loading.chart = false
      }).catch((err) => {
        console.error(err)
        this.loading.chart = false
      })
    },

    onSelectYear(year) {
      this.selectedYear = year
      this.getDataChart()
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
