<template>
  <section class="issues-reported level tile__box">
    <div class="level-item">
      <div>
        <p class="issues-reported__stat">
          {{value}}
        </p>
        <p class="issues-reported__label">
          Issues currently reported in {{year}}
        </p>
        <a class="icon icon-download issues-reported__download" href="#">
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
