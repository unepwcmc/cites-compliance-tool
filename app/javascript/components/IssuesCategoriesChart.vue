<template>
  <section class="issues-categories-chart">
    <h2>{{title}}</h2>

    <div class="dropdown is-right is-hoverable">
      <div class="dropdown-trigger">
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

    <div class="issues-categories-chart-doughnut">
      <!--
      SVG viewbox calculations as per
      https://markus.oberlehner.net/blog/pure-css-animated-svg-circle-chart/
      -->
      <svg width="150" height="150" viewBox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="doughnutGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="10%" stop-color="#039ed5"/>
            <stop offset="95%" stop-color="#b3c92a"/>
          </linearGradient>
        </defs>

        <circle class="circle-chart-background" stroke="#efefef" stroke-width="4" fill="none" cx="50%" cy="50%" r="13.91549431" />

        <circle class="circle-chart-circle" stroke="url(#doughnutGradient)" stroke-width="4" :stroke-dasharray="`${scaledValue},100`" stroke-linecap="round" fill="none" cx="50%" cy="50%" r="13.91549431" />

        <g class="circle-chart-label">
          <text class="circle-chart-value" x="49%" y="52%" alignment-baseline="middle" text-anchor="middle" font-size="6">
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
      max: 200,
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

<style scoped>
.issues-categories-chart {
  border: 1px solid rgba(66, 66, 66, 0.2);
  border-radius: 2px;
  background-color: #fff;
  padding: 15px;
  position: relative;
}

.issues-categories-chart h2 {
  color: #424242;
  font-family: Roboto;
  font-size: 16px;
  line-height: 19px;
}

.issues-categories-chart .dropdown {
  position: absolute;
  right: 0;
  top: 0;
}

.issues-categories-chart .dropdown:hover {
  cursor: pointer;
}

.issues-categories-chart .dropdown.is-right .dropdown-menu {
  right: -30px;
}

.issues-categories-chart-doughnut {
  margin: 25px 0 10px;
  text-align: center;
}

.issues-categories-chart-doughnut text {
  color: #424242;
  font-family: Roboto;
  font-weight: bold;
}

.circle-chart-circle {
  animation: circle-chart-fill 2s reverse;
  transform: rotate(-90deg);
  transform-origin: 50%;
}

.circle-chart-label {
  animation: circle-chart-appear 2s forwards;
  opacity: 0;
}

@keyframes circle-chart-fill {
  to {
    stroke-dasharray: 0 100;
  }
}

@keyframes circle-chart-appear {
  to {
    opacity: 1;
  }
}
</style>
