<template>
  <section class="top-countries">
    <header class="level">
      <div class="level-left">
        <h2 class="level-item">Top 5 countries</h2>
        <a class="button is-rounded level-item">Exporting</a>
        <a class="button is-rounded level-item">Importing</a>
      </div>
      <div class="level-right">
        <a class="button level-item">Normal</a>
      </div>
    </header>

    <div class="columns">
      <div class="column">
        <div class="map-container">
          <div class="map" ref="map"></div>
        </div>
      </div>
      <div class="column is-5">
        Second column
      </div>
    </div>
  </section>
</template>

<script>
import d3 from 'd3'
import topojson from 'topojson'
import Datamap from 'datamaps';

export default {
  props: ['countries'],
  data () {
    return {
      colours: ['#3c526a', '#088ba5', '#00a2d0', '#3aa18e', '#b3c82b'],
      map: null
    }
  },
  methods: {
    countriesObject () {
      let countries = {}
      this.countries.forEach((country, index) => {
        countries[country.key] = {fillKey: `top${index+1}`}
      })
      return countries
    }
  },
  mounted () {
    this.map = new Datamap({
      element: this.$refs.map,
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
  }
}
</script>

<style scoped>
.top-countries {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 3px 0 rgba(207,207,207,0.5);
  padding: 30px;
}

header {
  margin-bottom: 20px;
}

h2 {
  color: #424242;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  line-height: 21px;
}

.map-container {
  border: 1px solid rgba(66, 66, 66, 0.2);
  border-radius: 2px;
  box-sizing: border-box;
  padding: 5px 20px 0;
}

.map {
  height: 290px;
  position: relative;
  width: 100%;
}
</style>