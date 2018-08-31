<template>
  <section class="issues-chart tile__box">
    <div v-show="values" class="issues-chart__svg">
      <svg width="100%" height="100%" viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0" x2="1" y1="0" y2="0">
            <stop offset="10%" stop-color="#039ed5"/>
            <stop offset="95%" stop-color="#b3c92a"/>
          </linearGradient>
        </defs>

        <!--
        Offset first path point ever so slightly so it gets a bounding box
        http://www.w3.org/TR/SVG11/coords.html#ObjectBoundingBox
        -->
        <path :d="getPath()" fill="none" stroke="url(#lineGradient)" stroke-width="4"/>

        <circle v-if="!isFirstYear()" cx="60" :cy="normaliseValue(getFirstValue().issuesReported)" r="4" fill="#4D6B89" stroke="#fff" stroke-width="2"/>
        <circle cx="200" :cy="normaliseValue(getSecondValue().issuesReported)" r="4" fill="#4D6B89" stroke="#fff" stroke-width="2"/>
        <circle v-if="!isLastYear()" cx="340" :cy="normaliseValue(getThirdValue().issuesReported)" r="4" fill="#4D6B89" stroke="#fff" stroke-width="2"/>
      </svg>
    </div>

    <div class="issues-chart__panel-column is-first">
      <issues-chart-panel v-if="getFirstValue()" :values="getFirstValue()"></issues-chart-panel>
    </div>

    <div class="issues-chart__panel-column is-second">
      <issues-chart-panel :values="getSecondValue()" :active="true"></issues-chart-panel>
    </div>

    <div class="issues-chart__panel-column is-third">
      <issues-chart-panel v-if="getThirdValue()" :values="getThirdValue()"></issues-chart-panel>
    </div>
  </section>
</template>

<script>
// TODO: Support 2017 edge-case (no future years)

import IssuesChartPanel from './IssuesChartPanel'

export default {
  components: {
    IssuesChartPanel
  },
  props: ['values', 'years'],
  data () {
    return {
      min: 0
    }
  },
  methods: {
    getMaxValue() {
      return Math.max(...this.values.map((t) => t.issuesReported))
    },
    normaliseValue (value) {
      return 100 - ((value / this.getMaxValue()) * 100)
    },
    isFirstYear() {
      return (this.values.length < 3 && this.values[0].year.toString() === this.years[0].toString())
    },
    isLastYear() {
      return (this.values.length < 3 && this.values[1].year.toString() === this.years[this.years.length - 1].toString())
    },
    getFirstValue() {
      if (this.isFirstYear()) {
        return false
      }

      return this.values[0]
    },
    getSecondValue() {
      if (this.isFirstYear()) {
        return this.values[0]
      }

      return this.values[1]
    },
    getThirdValue() {
      if (this.isFirstYear()) {
        return this.values[1]
      }

      return this.values[2]
    },
    getPath() {
      let path

      if (this.isFirstYear()) {
        path = `M200 ${this.normaliseValue(this.values[0].issuesReported)}
        L340 ${this.normaliseValue(this.values[1].issuesReported)}`
      } else if (this.isLastYear()) {
        path = `M60 ${this.normaliseValue(this.values[0].issuesReported)}
        L200 ${this.normaliseValue(this.values[1].issuesReported)}`
      } else {
        path = `M60 ${this.normaliseValue(this.values[0].issuesReported)}
        L200 ${this.normaliseValue(this.values[1].issuesReported)}
        L340 ${this.normaliseValue(this.values[2].issuesReported)}`
      }

      return path
    }
  }
}
</script>
