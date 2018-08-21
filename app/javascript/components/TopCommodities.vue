<template>
  <section class="top-commodities tile__box">
    <header class="level">
      <div class="level-left">
        <h3 class="level-item">Top 5 commodity</h3>
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
      <div class="column is-5">
        <ul class="top-commodities__list">
          <li class="level" v-for="(commodity, index) in commodities" :key="index">
            <div class="level-left">
              <span class="level-item top-commodities__list-dot" :style="{backgroundColor: colours[index]}"></span>

              <span class="level-item top-commodities__list-name">
                <strong>{{index + 1}}.</strong> {{commodity.term}}
              </span>
            </div>
            <div class="level-right">
              <div class="level-item top-commodities__list-dropdown dropdown is-right is-hoverable">
                <component-links :download="links.download" :details="links.details"></component-links>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="column">
        <ul class="top-commodities__chart">
          <li class="level" v-for="(commodity, index) in commodities" :key="index">
            <div class="top-commodities__chart-bar" :style="{width: `${commodity.percent}%`, backgroundColor: colours[index]}"></div>
            <div class="level-left">
              <span class="level-item top-commodities__chart-name">
                <strong :style="{color: textColours[index]}">{{index + 1}}. {{commodity.value}} ({{Number(commodity.percent).toFixed(1)}}%)</strong>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import ComponentLinks from '../elements/ComponentLinks'

export default {
  components: {
    ComponentLinks
  },
  props: ['commodities'],
  data () {
    return {
      colours: ['#3c526a', '#088ba5', '#00a2d0', '#3aa18e', '#b3c82b'],
      textColours: ['#fff', 'inherit', 'inherit', 'inherit', 'inherit'],
      links: {
        details: '#',
        download: '#'
      }
    }
  },
  methods: {
    openModal() {
      this.$emit('open-modal', 'commodity')
    }
  }
}
</script>
