<template>
  <section class="issues-reported level">
    <div class="level-item">
      <div>
        <p class="issues-reported-stat">
          {{value}}
        </p>
        <p class="issues-reported-label">
          Issues currently reported in {{year}}
        </p>
        <a class="icon" href="#">
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

<style scoped>
.issues-reported {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 3px 0 rgba(207,207,207,0.5);
  padding: 30px;
}

.icon {
  float: left;
  margin-left: 50%;
  height: 37px;
  transform: translateX(-50%);
  width: 37px;
}

.icon .fa-stack {
  height: 100%;
  width: 100%;
}

.icon .fa-circle {
  color: #4d6b89;
  height: 100%;
  width: 100%;
}

.icon:hover .fa-circle {
  color: #6285a7;
}

.issues-reported-stat {
  color: #4D6B89;
  font-family: Roboto;
  font-size: 80px;
  font-weight: bold;
  line-height: 94px;
  text-align: center;
}

.issues-reported-label {
  color: #424242;
  font-family: Roboto;
  font-size: 25px;
  line-height: 29px;
  margin: 10px 0 20px 0;
  text-align: center;
  width: 200px;
}
</style>
