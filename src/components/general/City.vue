<template>
  <div>
    <div class="uk-flex ylomi-city-box-container">
      <div class="ylomi-city-box-img">
        <slot></slot>
      </div>
      <div class="uk-flex uk-flex-middle">
        <div>
          <div class="ylomi-city-box-title">
            {{ title }}
          </div>
          <div class="ylomi-city-box-desc">
            {{ desc }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    title: String,
    desc: String,
    img: String,
  },
  components: {
  }
}
</script>
<style scoped>
.ylomi-city-box-img {
  width: 64px;
  height: 64px;
  border-radius: 8px;
  margin-right: 16px;
}
.ylomi-city-box-title {
  color: #222222;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  padding-bottom: 3px;
}
.ylomi-city-box-desc {
  color: #222222;
  font-size: 14px;
  line-height: 20px;
  color: rgba(34, 34, 34, 0.6);
}
</style>>
