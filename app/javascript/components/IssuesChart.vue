<template>
  <section class="issues-chart tile__box">
    <a class="icon icon-download issues-chart__download" href="#">
      <span class="fa-stack">
        <i class="fas fa-circle fa-stack-2x"></i>
        <i class="fas fa-download fa-stack-1x fa-inverse"></i>
      </span>
    </a>

    <div class="issues-chart__svg">
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
        <path :d="`
          M60 ${normaliseValue(values[0].issuesReported) + 0.001}
          200 ${normaliseValue(values[1].issuesReported)}
          L340 ${normaliseValue(values[2].issuesReported)}`" fill="none" stroke="url(#lineGradient)" stroke-width="4"/>

        <circle cx="60" :cy="normaliseValue(values[0].issuesReported)" r="4" fill="#4D6B89" stroke="#fff" stroke-width="2"/>
        <circle cx="200" :cy="normaliseValue(values[1].issuesReported)" r="4" fill="#4D6B89" stroke="#fff" stroke-width="2"/>
        <circle cx="340" :cy="normaliseValue(values[2].issuesReported)" r="4" fill="#4D6B89" stroke="#fff" stroke-width="2"/>
      </svg>
    </div>

    <div class="issues-chart__panel-column is-first">
      <div class="issues-chart__panel">
        <div class="issues-chart__panel-issues">
          <span>{{values[0].issuesReported}}</span>
          <p>Issues reported</p>
        </div>

        <div class="issues-chart__panel-countries">
          <span>{{values[0].countriesReported}}</span>
          <p>Countries reported</p>
        </div>

        <div class="issues-chart__panel-countries">
          <span>{{values[0].countriesYetToReport}}</span>
          <p>Countries yet to report</p>
        </div>

        <div class="issues-chart__label">{{values[0].year}}</div>
      </div>
    </div>

    <div class="issues-chart__panel-column is-second">
      <div class="issues-chart__panel active">
        <div class="issues-chart__panel-issues">
          <span>{{values[1].issuesReported}}</span>
          <p>Issues reported</p>
        </div>

        <div class="issues-chart__panel-countries">
          <span>{{values[1].countriesReported}}</span>
          <p>Countries reported</p>
        </div>

        <div class="issues-chart__panel-countries">
          <span>{{values[1].countriesYetToReport}}</span>
          <p>Countries yet to report</p>
        </div>

        <div class="issues-chart__label">{{values[1].year}}</div>
      </div>
    </div>

    <div class="issues-chart__panel-column is-third">
      <div class="issues-chart__panel">
        <div class="issues-chart__panel-issues">
          <span>{{values[2].issuesReported}}</span>
          <p>Issues reported</p>
        </div>

        <div class="issues-chart__panel-countries">
          <span>{{values[2].countriesReported}}</span>
          <p>Countries reported</p>
        </div>

        <div class="issues-chart__panel-countries">
          <span>{{values[2].countriesYetToReport}}</span>
          <p>Countries yet to report</p>
        </div>

        <div class="issues-chart__label">{{values[2].year}}</div>
      </div>
    </div>
  </section>
</template>

<script>
// TODO: Support 2017 edge-case (no future years)

export default {
  props: ['values'],
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
    }
  }
}
</script>
