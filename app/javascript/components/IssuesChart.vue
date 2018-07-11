<template>
  <section class="issues-chart tile-box">
    <a class="icon icon-download" href="#">
      <span class="fa-stack">
        <i class="fas fa-circle fa-stack-2x"></i>
        <i class="fas fa-download fa-stack-1x fa-inverse"></i>
      </span>
    </a>

    <div class="issues-chart-svg">
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

    <div class="panel-column is-first">
      <div class="issues-chart-panel">
        <div class="issues-chart-panel-issues">
          <span>{{values[0].issuesReported}}</span>
          <p>Issues reported</p>
        </div>

        <div class="issues-chart-panel-countries">
          <span>{{values[0].countriesReported}}</span>
          <p>Countries reported</p>
        </div>

        <div class="issues-chart-panel-countries">
          <span>{{values[0].countriesYetToReport}}</span>
          <p>Countries yet to report</p>
        </div>

        <div class="issues-chart-label">{{values[0].year}}</div>
      </div>
    </div>

    <div class="panel-column is-second">
      <div class="issues-chart-panel active">
        <div class="issues-chart-panel-issues">
          <span>{{values[1].issuesReported}}</span>
          <p>Issues reported</p>
        </div>

        <div class="issues-chart-panel-countries">
          <span>{{values[1].countriesReported}}</span>
          <p>Countries reported</p>
        </div>

        <div class="issues-chart-panel-countries">
          <span>{{values[1].countriesYetToReport}}</span>
          <p>Countries yet to report</p>
        </div>

        <div class="issues-chart-label">{{values[1].year}}</div>
      </div>
    </div>

    <div class="panel-column is-third">
      <div class="issues-chart-panel">
        <div class="issues-chart-panel-issues">
          <span>{{values[2].issuesReported}}</span>
          <p>Issues reported</p>
        </div>

        <div class="issues-chart-panel-countries">
          <span>{{values[2].countriesReported}}</span>
          <p>Countries reported</p>
        </div>

        <div class="issues-chart-panel-countries">
          <span>{{values[2].countriesYetToReport}}</span>
          <p>Countries yet to report</p>
        </div>

        <div class="issues-chart-label">{{values[2].year}}</div>
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
      min: 0,
      max: 40000
    }
  },
  methods: {
    normaliseValue (value) {
      return 100 - ((value / this.max) * 100)
    }
  }
}
</script>

<style scoped lang="scss">
.issues-chart {
  height: 380px;
  position: relative;
}

.issues-chart-svg {
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 0;
  padding: 30px 0 70px 0;
  width: 100%;
}

.issues-chart-svg svg {
  overflow: visible;
}

.icon-download {
  position: absolute;
  right: 15px;
  top: 20px;
  z-index: 3;
}

.panel-column {
  bottom: 0;
  position: absolute;
  transform: translateX(-50%);
}

.panel-column.is-first {
  left: 15%;
}

.panel-column.is-second {
  left: 50%;
}

.panel-column.is-third {
  left: 85%;
}

.issues-chart-panel {
  border: 1px solid rgba(255, 255, 255, 0);
  height: 300px;
  padding: 20px 0 0;
  width: 155px;
  z-index: 2;
}

.issues-chart-panel-issues,
.issues-chart-panel-countries {
  margin: 0 30% 0 13px;
}

.issues-chart-panel-countries {
  display: none;
}

.issues-chart-panel.active,
.issues-chart-panel:hover {
  background: rgba(255, 255, 255, 0.68);
  border: 1px solid #f5f5f5;
  box-shadow: 0 2px 4px 0 rgba(162, 157, 157, 0.5);
}

.issues-chart-panel.active .issues-chart-panel-countries,
.issues-chart-panel:hover .issues-chart-panel-countries {
  display: block;
}

.issues-chart-panel p,
.issues-chart-panel span {
  color: #424242;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
}

.issues-chart-panel p {
  margin-bottom: 10px;
}

.issues-chart-panel span {
  font-size: 16px;
}

.issues-chart-label {
  bottom: 15px;
  font-family: Roboto;
  font-size: 25px;
  font-weight: 500;
  position: absolute;
  text-align: center;
  width: 100%;
  z-index: 3;
}
</style>
