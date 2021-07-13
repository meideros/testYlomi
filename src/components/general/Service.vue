<template>
  <div>
    <div class="ylomi-service-box-container">
      <div>
        <slot></slot>
      </div>
      <div class="uk-text-center ylomi-service-box-title">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    title: String,
    img: String,
  },
  components: {
  }
}
</script>
<style scoped>
.ylomi-service-box-img {
  border-radius: 16px;
  width: 100%;
}
.ylomi-service-box-title {
  margin-top: 8px;
  color: #222222;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
}
</style>>
