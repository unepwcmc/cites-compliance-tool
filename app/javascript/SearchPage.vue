<template>
  <div>
    <site-header :username="username" :user="user" active="search"></site-header>

    <nav class="site-navigation site-navigation-sub" role="navigation" aria-label="sub navigation">
      <div class="level">
        <div class="level-left">
          <h2 class="level-item" :class="{active: (selectedCategory === 'exporting')}">
            <a v-on:click="changeCategory('exporting')">
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
            <div class="dropdown" :class="{'is-active': (suggestions && suggestions.length > 0)}">
              <div class="dropdown-trigger">
                <input v-model="suggestionInput" class="input" type="text" placeholder="Search" v-on:input="onSearchInput">
                <span class="icon is-small is-right">
                  <i class="fas fa-search"></i>
                </span>
              </div>
              <div class="dropdown-menu" id="search-selections" role="menu">
                <div class="dropdown-content">
                  <a v-for="(suggestion, index) in suggestions" v-bind:key="suggestion.id" class="dropdown-item" :data-value="suggestion.id" v-on:click="onSuggestionSelect">
                    {{suggestion.full_name || suggestion.name}}
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
          <search-list :columns="tableColumns[selectedCategory]" :grouping="selectedCategory" :year="selectedYear" :user="user" :filter-id="categoryFilterId"></search-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import debounce from 'lodash.debounce'
import axios from 'axios'

import SiteHeader from './elements/SiteHeader'
import SearchList from './components/SearchList'

import dataYears from './data/years'

import '@fortawesome/fontawesome-free/js/all.js'

export default {
  components: {
    SiteHeader,
    SearchList
  },
  props: ['user', 'username'],
  data () {
    return {
      selectedCategory: 'species',
      categoryFilterId: null,
      years: dataYears,
      selectedYear: dataYears[dataYears.length - 1],
      suggestionInput: null,
      suggestions: [],
      termSuggestionList: [],
      exportingSuggestionList: [],
      tableData: [],
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
      }
    }
  },
  methods: {
    onSelectYear(year) {
      this.selectedYear = year
    },
    onSearchInput: debounce(function(e) {
      if (this.suggestionInput < 3) {
        this.suggestions = []
        this.categoryFilterId = null
        return
      }

      this.getSuggestions(this.suggestionInput)
    }, 200),
    onClickOutside: function(e) {
      this.suggestions = []
    },
    onSuggestionSelect: function(e) {
      this.categoryFilterId = e.target.dataset.value
    },
    getSuggestions(value) {
      switch (this.selectedCategory) {
        case 'species':
          this.getSuggestionsSpecies(value)
          break
        case 'commodity':
          this.getSuggestionsCommodity(value)
          break
        case 'exporting':
          this.getSuggestionsExporting(value)
          break
      }
    },
    getSuggestionsSpecies(value) {
      const endpoint = `/api/v1/sapi/species_autocomplete?sapi[user_id]=${this.user}&sapi[query]=${value}`

      axios.get(endpoint).then((res) => {
        this.suggestions = res.data.auto_complete_taxon_concepts.slice(0, 10)
      })
    },
    getSuggestionsCommodity(value) {
      if (!this.termSuggestionList || this.termSuggestionList.length === 0) {
        const endpoint = `/api/v1/sapi/terms?sapi[user_id]=${this.user}`

        axios.get(endpoint).then((res) => {
          if (!res.data.terms) {
            return
          }

          this.termSuggestionList = res.data.terms
          this.suggestions = this.filterLocalSuggestions(this.termSuggestionList, value)
        })
      } else {
        this.suggestions = this.filterLocalSuggestions(this.termSuggestionList, value)
      }
    },
    getSuggestionsExporting(value) {
      if (!this.exportingSuggestionList || this.exportingSuggestionList.length === 0) {
        const endpoint = `/api/v1/sapi/countries?sapi[user_id]=${this.user}`

        axios.get(endpoint).then((res) => {
          if (!res.data.geo_entities) {
            return
          }

          this.exportingSuggestionList = res.data.geo_entities
          this.suggestions = this.filterLocalSuggestions(this.exportingSuggestionList, value)
        })
      } else {
        this.suggestions = this.filterLocalSuggestions(this.exportingSuggestionList, value)
      }
    },
    filterLocalSuggestions(list, value) {
      return list.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
    },
    changeCategory(category) {
      this.selectedCategory = category
      this.categoryFilterId = null
      this.suggestionInput = null
    }
  },
  mounted() {
    document.addEventListener('click', this.onClickOutside)
    this.selectedCategory = 'species'
  },
  destroyed() {
    document.removeEventListener('click', this.onClickOutside)
  }
}
</script>
