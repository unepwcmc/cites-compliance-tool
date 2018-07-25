<template>
  <div>
    <site-header :username="username" active="search"></site-header>

    <nav class="site-navigation site-navigation-sub" role="navigation" aria-label="sub navigation">
      <div class="level">
        <div class="level-left">
          <h2 class="level-item" :class="{active: (selectedCategory === 'countries')}">
            <a v-on:click="changeCategory('countries')">
              Countries & Regions
            </a>
          </h2>
          <h2 class="level-item" :class="{active: (selectedCategory === 'species')}">
            <a v-on:click="changeCategory('species')">
              Species
            </a>
          </h2>
          <h2 class="level-item" :class="{active: (selectedCategory === 'commodity')}">
            <a v-on:click="changeCategory('commodity')">
              Commodity
            </a>
          </h2>
        </div>
      </div>
    </nav>

    <nav class="site-navigation site-navigation-sub site-navigation-sub-dark" role="navigation" aria-label="sub navigation">
      <div class="level">
        <div class="level-item level-left">
          <div class="control has-icons-right">
            <div class="dropdown" :class="{'is-active': suggestions.length > 0}">
              <div class="dropdown-trigger">
                <input class="input" type="text" placeholder="Search" v-on:input="onSearchInput">
                <span class="icon is-small is-right">
                  <i class="fas fa-search"></i>
                </span>
              </div>
              <div class="dropdown-menu" id="search-selections" role="menu">
                <div class="dropdown-content">
                  <a v-for="(suggestion, index) in suggestions" v-bind:key="index" class="dropdown-item" :data-value="index" v-on:click="onSuggestionSelect">
                    {{suggestion}}
                  </a>
                </div>
              </div>
            </div>
          </div>
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
        <div class="tile is-12 is-parent">
          <search-list :columns="tableColumns[selectedCategory]" :data="tableData" v-on:change-page="onChangePage"></search-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import debounce from 'lodash.debounce'

import SiteHeader from './elements/SiteHeader'

import SearchList from './components/SearchList'

import dataYears from './data/years'
import dataCountries from './data/countries-search-list'
import dataSpecies from './data/species-search-list'
import dataCommodity from './data/commodities-search-list'

import '@fortawesome/fontawesome-free/js/all.js'

export default {
  components: {
    SiteHeader,
    SearchList
  },
  props: ['username'],
  data () {
    return {
      selectedCategory: 'species',
      years: dataYears,
      selectedYear: dataYears[dataYears.length - 1],
      suggestions: [],
      tableData: [],
      tableColumns: {
        countries: {
          headers: ['Country / Region', 'No. Transactions with issues', 'Total No. of Transactions', '% of Transactions with issues'],
          keys: ['name', 'cnt', 'cnt', 'percent']
        },
        commodity: {
          headers: ['Commodity', 'No. Transactions'],
          keys: ['term', 'cnt']
        },
        species: {
          headers: ['Species', 'No. Transactions', 'Appendix'],
          keys: ['name', 'transactions', 'appendix']
        }
      }
    }
  },
  methods: {
    onSelectYear(year) {
      this.selectedYear = year
      this.tableData = dataSpecies
    },
    onSearchInput: debounce(function(e) {
      if (e.target.value.length < 3) {
        this.suggestions = []
        return
      }

      this.suggestions = this.getSuggestions(e.target.value)
    }, 50),
    onClickOutside: function(e) {
      this.suggestions = []
    },
    onSuggestionSelect: function(e) {
      console.log(e.target.dataset.value)
      this.getResultsForSuggestion()
    },
    onChangePage(page) {
      console.log(page)
    },
    getDataForCategory(category) {
      switch (category) {
        case 'countries':
          return dataCountries
          break;
        case 'species':
          return dataSpecies
          break;
        case 'commodity':
          return dataCommodity
          break;
      }
    },
    getSuggestions(value) {
      // TODO: Make real API call
      return ['Suggestion 1', 'Suggestion 2', 'Suggestion 3']
    },
    getResultsForSuggestion(value) {
      // TODO: Make real API call
      return dataSpecies
    },
    changeCategory(category) {
      this.selectedCategory = category
      this.tableData = this.getDataForCategory(category)
    }
  },
  mounted() {
    document.addEventListener('click', this.onClickOutside)
    this.tableData = dataSpecies
  },
  destroyed() {
    document.removeEventListener('click', this.onClickOutside)
  }
}
</script>
