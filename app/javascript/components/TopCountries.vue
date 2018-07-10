<template>
  <section class="top-countries tile-box">
    <header class="level">
      <div class="level-left">
        <h3 class="level-item">Top 5 countries</h3>
        <a class="button is-rounded level-item top-countries-button-mode" :class="{'is-dark': mode === 'export'}" v-on:click="onClickExport">Exporting</a>
        <a class="button is-rounded level-item top-countries-button-mode" :class="{'is-dark': mode === 'import'}" v-on:click="onClickImport">Importing</a>
      </div>
      <div class="level-right">
        <a class="button level-item is-dark button-full-list">
          <span>Full List</span>
          <span class="icon is-small">
            <i class="fas fa-angle-right"></i>
          </span>
        </a>
      </div>
    </header>

    <div class="columns">
      <div class="column">
        <div class="map-container">
          <div class="map" ref="map"></div>
        </div>
      </div>
      <div class="column is-5">
        <ul class="top-countries-list">
          <li class="level" v-for="(country, index) in countries[mode]" :key="index" v-on:mouseover="onCountryMouseover(country.key, index)" v-on:mouseleave="onCountryMouseleave(country.key)">
            <div class="level-left">
              <span class="level-item top-countries-list-dot" :style="{backgroundColor: colours[index]}"></span>

              <span class="level-item top-countries-list-name">
                <strong>{{index + 1}}.</strong> {{country.name}}
              </span>
            </div>
            <div class="level-right">
              <div class="level-item top-countries-list-dropdown dropdown is-right is-hoverable">
                <div class="dropdown-trigger icon-ellipsis">
                  <span class="icon is-large">
                    <i class="fas fa-lg fa-ellipsis-v"></i>
                  </span>
                </div>

                <div class="dropdown-menu" role="menu">
                  <div class="dropdown-content">
                    <a href="#" class="dropdown-item">
                      Download Issues
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import Datamap from 'datamaps'

import iso2toiso3 from '../helpers/iso2-to-iso3'

export default {
  props: ['countries'],
  data () {
    return {
      mode: 'export',
      colours: ['#3c526a', '#088ba5', '#00a2d0', '#3aa18e', '#b3c82b'],
      getMap: null,
      activeCountry: null
    }
  },
  methods: {
    countriesObject () {
      let countries = {}
      this.countries[this.mode].forEach((country, index) => {
        let iso3 = iso2toiso3[country.key]
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
      this.mode = 'export'
      this.reloadMap()
    },
    onClickImport() {
      this.mode = 'import'
      this.reloadMap()
    },
    reloadMap() {
      const map = this.getMap()
      map.updateChoropleth(this.countriesObject(), {reset: true})
    }
  },
  mounted () {
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
        .attr('alignment-baseline', 'middle')
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
</script>

<style scoped lang="scss">
@import '../../assets/stylesheets/application.scss';

header {
  margin-bottom: 20px;
}

.top-countries-button-mode {
  color: #4d6b89;
  border-color: #4d6b89;
}

.top-countries-button-mode.is-dark,
.top-countries-button-mode:hover {
  background-color: #4d6b89;
  border-color: transparent;
  color: #fff;
}

.map-container {
  border: $tile-section-border;
  border-radius: 2px;
  box-sizing: border-box;
  padding: 5px 20px 0;
  text-align: center;
}

.map {
  height: 290px;
  position: relative;
  width: 100%;
}

.map >>> .marker-circle {
  stroke: #fff;
  stroke-width: 2;
}

.map >>> .marker-label {
  fill: #fff;
  font-family: Roboto;
  font-size: 16px;
}

.top-countries-list {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.top-countries-list li {
  border: $tile-section-border;
  flex-grow: 1;
  margin-bottom: 10px;
  padding: 0 0 0 15px;
}

.top-countries-list li:last-child {
  margin-bottom: 0;
}

.top-countries-list li:hover {
  box-shadow: 0 2px 5px 0 rgba(210, 210, 210, 0.5);
}

.top-countries-list-dot {
  border-radius: 50%;
  height: 15px;
  width: 15px;
}

.top-countries-list-name strong {
  margin-right: 5px;
}

.top-countries-list-dropdown.is-right .dropdown-menu {
  right: -30px;
}
</style>