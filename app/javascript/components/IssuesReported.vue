<template>
  <section class="issues-reported level tile-box">
    <div class="level-item">
      <div>
        <p class="issues-reported-stat">
          {{value}}
        </p>
        <p class="issues-reported-label">
          Issues currently reported in {{year}}
        </p>
        <a class="icon icon-download" href="#">
          <span class="fa-stack">
            <i class="fas fa-circle fa-stack-2x"></i>
            <i class="fas fa-download fa-stack-1x fa-inverse"></i>
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['year', 'value'],
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/stylesheets/application.scss';

.icon-download {
  float: left;
  margin-left: 50%;
  transform: translateX(-50%);
}

.issues-reported-stat {
  color: $blue-dark;
  font-size: 80px;
  font-weight: bold;
  line-height: 94px;
  text-align: center;
}

.issues-reported-label {
  color: $grey-dark;
  font-size: 25px;
  line-height: 29px;
  margin: 10px 0 20px 0;
  text-align: center;
  width: 200px;
}
</style>
