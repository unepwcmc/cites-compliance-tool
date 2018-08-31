<template>
  <section class="top-countries tile__box">
    <div v-show="exporting && importing">
      <header class="level">
        <div class="level-left">
          <h3 class="level-item">Top 5 countries</h3>
          <a class="button is-rounded level-item top-countries__button-mode" :class="{'is-dark': mode === 'exporting'}" v-on:click="onClickExport">Exporting</a>
          <a class="button is-rounded level-item top-countries__button-mode" :class="{'is-dark': mode === 'importing'}" v-on:click="onClickImport">Importing</a>
        </div>
        <div class="level-right">
          <a class="button level-item is-dark button-full-list" v-on:click="openModal">
            <span>Full List</span>
            <span class="icon is-small">
              <i class="fas fa-angle-right"></i>
            </span>
          </a>
        </div>
      </header>

      <div class="columns">
        <div class="column">
          <div class="top-countries__map-container">
            <div class="top-countries__map" ref="map"></div>
          </div>
        </div>
        <div class="column is-5">
          <ul class="top-countries__list">
            <li class="level" v-for="(country, index) in getModeData()" :key="index" v-on:mouseover="onCountryMouseover(getCountryKey(country), index)" v-on:mouseleave="onCountryMouseleave(getCountryKey(country))">
              <div class="level-left">
                <span class="level-item top-countries__list-dot" :style="{backgroundColor: colours[index]}"></span>

                <span class="level-item top-countries__list-name">
                  <strong>{{index + 1}}.</strong> {{getTruncatedName(getCountryName(country), 23)}} ({{country.value}})
                </span>
              </div>
              <div class="level-right">
                <component-links :download="getDownloadLink(country)"></component-links>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Datamap from 'datamaps/dist/datamaps.world.hires.js'

import iso2toiso3 from '../helpers/iso2-to-iso3'
import countries from '../data/countries';

import ComponentLinks from '../elements/ComponentLinks'

export default {
  components: {
    ComponentLinks
  },
  props: ['exporting', 'importing', 'user', 'year'],
  data () {
    return {
      mode: 'exporting',
      colours: ['#3c526a', '#088ba5', '#00a2d0', '#3aa18e', '#b3c82b'],
      getMap: null,
      activeCountry: null
    }
  },
  watch: {
    exporting() {
      setTimeout(() => {
        this.reloadMap()
      }, 0)
    },
    importing() {
      setTimeout(() => {
        this.reloadMap()
      }, 0)
    }
  },
  methods: {
    getModeData() {
      return (this.mode === 'exporting') ? this.exporting : this.importing
    },
    countriesObject () {
      let countries = {}
      this.getModeData().forEach((country, index) => {
        let iso3 = iso2toiso3[this.getCountryKey(country)]
        countries[iso3] = {fillKey: `top${index+1}`}
      })
      return countries
    },
    onCountryMouseover(key, index) {
      if (this.activeCountry === key) {
        return
      }

      this.activeCountry = key

      const map = this.getMap()
      map.marker(key, {
        colour: this.colours[index],
        value: index + 1
      })
    },
    onCountryMouseleave(key) {
      this.activeCountry = null
      const map = this.getMap()
      map.marker('')
    },
    onClickExport() {
      this.mode = 'exporting'
      this.reloadMap()
    },
    onClickImport() {
      this.mode = 'importing'
      this.reloadMap()
    },
    reloadMap() {
      if (!this.importing || !this.exporting) {
        return
      }

      if (!this.getMap) {
        this.createMap()
      }

      const map = this.getMap()
      map.updateChoropleth(this.countriesObject(), {reset: true})
    },
    getCountryKey(country) {
      return country.importer_iso || country.exporter_iso
    },
    getCountryId(country) {
      return country.importer_id || country.exporter_id
    },
    getCountryName(country) {
      return country.importer || country.exporter
    },
    getTruncatedName(name, characters) {
      if (name.length > characters) {
        name = name.substr(0, characters) + '...'
      }

      return name
    },
    openModal() {
      this.$emit('open-modal', 'countries')
    },
    getDownloadLink(item) {
      let endpoint = `/api/v1/sapi/download?sapi[user_id]=${this.user}&sapi[year]=${this.year}&sapi[grouping]=${this.mode}ing&sapi[id]=${this.getCountryId(item)}`

      return endpoint
    },
    createMap() {
      let map = new Datamap({
        element: this.$refs.map,
        geographyConfig: {
          popupOnHover: false,
          highlightOnHover: false
        },
        fills: {
          defaultFill: "#c6ced9",
          top1: this.colours[0],
          top2: this.colours[1],
          top3: this.colours[2],
          top4: this.colours[3],
          top5: this.colours[4]
        },
        data: this.countriesObject()
      })

      map.addPlugin('marker', function(layer, data, options) {
        const self = this
        const svg = this.svg

        let classNameCircle = 'marker-circle'
        let classNameLabel = 'marker-label'

        let markers = layer
          .selectAll(`.${classNameCircle}`)
          .data(data, JSON.stringify)

        svg.selectAll(`.${classNameCircle}`).remove()
        svg.selectAll(`.${classNameLabel}`).remove()

        if (!data) {
          return
        }

        let iso3 = iso2toiso3[data]
        let centroid = self.path.centroid(svg.select(`path.${iso3}`).data()[0])

        markers
          .enter()
          .append('circle')
          .attr('class', classNameCircle)
          .attr('cx', centroid[0])
          .attr('cy', centroid[1])
          .attr('r', 15)
          .style('fill', options.colour)

        markers
          .enter()
          .append('text')
          .attr('class', classNameLabel)
          .attr('x', centroid[0])
          .attr('y', centroid[1] + 2)
          .attr('text-anchor', 'middle')
          .attr('dy', '0.25em')
          .text(options.value)
      })

      // Bit of a hack to get DataMaps to return correctly without
      // messing with the SVG manipulation methods
      //
      // Setting this.map to the map object breaks some DataMaps methods
      // like .labels()
      this.getMap = () => { return map }
    }
  }
}
</script>
