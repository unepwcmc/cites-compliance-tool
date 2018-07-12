<template>
  <section class="issues-categories-chart">
    <h2>{{title}}</h2>

    <div class="dropdown is-right is-hoverable issues-categories-chart__dropdown">
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

    <div class="issues-categories-chart__doughnut">
      <!--
      SVG viewbox calculations as per
      https://markus.oberlehner.net/blog/pure-css-animated-svg-circle-chart/
      -->
      <svg width="200" height="200" viewBox="0 0 35.83098862 35.83098862" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="doughnutGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="10%" stop-color="#039ed5"/>
            <stop offset="95%" stop-color="#b3c92a"/>
          </linearGradient>
        </defs>

        <circle class="issues-categories-chart__doughnut-background" stroke="#efefef" stroke-width="4" fill="none" cx="50%" cy="50%" r="15.91549431" />

        <circle class="issues-categories-chart__doughnut-circle" stroke="url(#doughnutGradient)" stroke-width="3" :stroke-dasharray="`${scaledValue},100`" stroke-linecap="round" fill="none" cx="50%" cy="50%" r="15.91549431" />

        <g class="issues-categories-chart__doughnut-label">
          <text class="issues-categories-chart__doughnut-value" x="49%" y="52%" alignment-baseline="middle" text-anchor="middle" font-size="5">
            {{value}}
          </text>
        </g>
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  props: ['title', 'value'],
  data () {
    return {
      max: 20000,
      min: 0
    }
  },
  computed: {
    scaledValue () {
      return (this.value / this.max) * 100
    }
  }
}
</script>
