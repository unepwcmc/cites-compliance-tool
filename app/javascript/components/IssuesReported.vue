<template>
  <section class="issues-reported level tile__box">
    <div class="level-item">
      <div>
        <p class="issues-reported__stat">
          {{values.value}}
        </p>
        <p class="issues-reported__label">
          Issues currently reported in {{values.year}}
        </p>
        <a class="icon-download issues-reported__download" :href="'/download/download?year=' + values.year"></a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['values'],
  data () {
    return {}
  }
}
</script>
