<template>
  <section class="issues-taxonomies">
    <header class="level">
      <div class="level-left">
        <h2 class="level-item">Issues by taxonomy</h2>
      </div>
      <div class="level-right">
        <a class="button level-item is-dark issues-taxonomies-button-full-list">
          <span>Full List</span>
          <span class="icon is-small">
            <i class="fas fa-angle-right"></i>
          </span>
        </a>
      </div>
    </header>

    <div class="columns">
      <div class="column">
        <ul class="issues-taxonomies-chart">
          <li v-for="(taxonomy, index) in taxonomies" :key="index">
            <div class="issues-taxonomies-chart-bar" :style="{height: `${barPercentage(taxonomy.percent)}%`, backgroundColor: colours[index]}"></div>
            <div class="issues-taxonomies-chart-labels">
              <span class="issues-taxonomies-chart-labels-index">
                <strong :style="{color: textColours[index]}">{{index + 1}}</strong>
              </span>

              <span class="issues-taxonomies-chart-labels-value" :style="{top: `${100 - barPercentage(taxonomy.percent)}%`}">
                <strong :style="{color: textColours[index]}">{{taxonomy.value}}<br>{{taxonomy.percent}}%</strong>
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div class="column is-6">
        <ul class="issues-taxonomies-list">
          <li class="level" v-for="(taxonomy, index) in taxonomies" :key="index">
            <div class="level-left">
              <span class="level-item issues-taxonomies-list-dot" :style="{backgroundColor: colours[index]}"></span>

              <span class="level-item issues-taxonomies-list-name">
                <strong>{{index + 1}}.</strong> {{taxonomy.name}}
              </span>
            </div>
            <div class="level-right">
              <div class="level-item issues-taxonomies-list-dropdown dropdown is-right is-hoverable">
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
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['taxonomies'],
  data () {
    return {
      colours: ['#3c526a', '#088ba5', '#00a2d0', '#3aa18e', '#58bc8a', '#91c352', '#b4c92c', '#d5ec3a'],
      textColours: ['#fff', 'inherit', 'inherit', 'inherit', 'inherit', 'inherit', 'inherit', 'inherit'],
      barMin: 30
    }
  },
  methods: {
    barPercentage(value) {
      return this.barMin + (value / 100) * (100 - this.barMin);
    }
  }
}
</script>

<style scoped>
.issues-taxonomies {
  box-sizing: border-box;
  font-family: Roboto;
  height: 100%;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 3px 0 rgba(207,207,207,0.5);
  padding: 20px 15px;
}

header {
  margin-bottom: 20px;
}

h2 {
  color: #424242;
  font-size: 18px;
  font-weight: bold;
  line-height: 21px;
}

.issues-taxonomies-button-full-list {
  background-color: #3f5770;
}
.issues-taxonomies-button-full-list:hover {
  background-color: #517091;
}

.issues-taxonomies-list,
.issues-taxonomies-chart {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 250px;
}

.issues-taxonomies-chart {
  flex-direction: row;
  flex-wrap: nowrap;
  padding-left: 15px;
}

.issues-taxonomies-list li {
  border: 1px solid #D7D7D7;
  flex: 1 1 50px;
  margin-bottom: 10px;
  margin-left: 10px;
  padding: 0 0 0 15px;
}

.issues-taxonomies-list li:nth-child(4n) {
  margin-bottom: 0;
}

.issues-taxonomies-chart li {
  border-radius: 2px;
  flex-grow: 1;
  margin: 0 0 0 10px;
  padding: 0 0 15px 0;
}

.issues-taxonomies-chart li:first-child {
  margin-left: 0;
}

.issues-taxonomies-list-dot {
  border-radius: 50%;
  height: 15px;
  width: 15px;
}

.issues-taxonomies-list-name strong {
  margin-right: 5px;
}

.issues-taxonomies-list-dropdown:hover {
  cursor: pointer;
}

.issues-taxonomies-list-dropdown.is-right .dropdown-menu {
  right: -30px;
}

.issues-taxonomies-button-full-list span:first-child {
  padding-right: 20px;
}

.issues-taxonomies-chart li {
  position: relative;
}

.issues-taxonomies-chart-labels-index,
.issues-taxonomies-chart-labels-value {
  position: absolute;
  width: 100%;
  z-index: 2;
}

.issues-taxonomies-chart-labels-index {
  bottom: 10px;
  text-align: center;
}

.issues-taxonomies-chart-labels-value {
  left: 50%;
  line-height: 1.3;
  margin-top: 15px;
  transform: translateX(-50%);
  width: auto;
}

.issues-taxonomies-chart-bar {
  border-radius: 2px;
  bottom: 0;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: 1;
}
</style>