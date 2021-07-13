<template>
  <div class="ylomi-header-container">
    <div class="uk-container">
      <div class="ylomi-header-content-navbar">
        <div class="uk-align-left">
          <img class="" src="@/assets/imgs/ylomi-logo.svg" alt="logo" />
        </div>
        <div class="uk-align-right">
          <router-link class="ylomi-header-link" to="/bar"
            >Devenir professionnel</router-link
          >
          <button class="uk-button uk-button-default ylomi-header-btn-border">
            Connexion
          </button>
          <button class="uk-button uk-button-default ylomi-header-btn-full">
            Echanger maintenant
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>
<style scoped>
.ylomi-header-container {
  background: var(--ylomi-primary);
  padding: 56px 0px 115px 0px;
}
.ylomi-header-link {
  color: var(--ylomi-white);
}
.ylomi-header-btn-border, .ylomi-header-btn-border:hover, .ylomi-header-btn-border:active {
  margin-left: 25px;
  border: 1.3px solid var(--ylomi-white);
  background-color: none;
  border-radius: 8px;
  text-transform: none;
  color: var(--ylomi-white);
  font-size: 14px;
  line-height: 26px;
  font-style: normal;
  font-weight: 500;
  padding: 8px 16px 8px 16px;
  display: initial;
}
.ylomi-header-btn-full, .ylomi-header-btn-full:hover, .ylomi-header-btn-full:active {
  margin-left: 25px;
  border: 1px solid #FFCC30;
  background-color: #FFCC30;
  border-radius: 8px;
  text-transform: none;
  color: var(--ylomi-primary);
  font-size: 14px;
  line-height: 26px;
  font-style: normal;
  font-weight: 500;
  padding: 8px 16px 8px 16px;
  display: initial;
}
.ylomi-header-content-navbar {
  margin-top: 120px;
}

</style>
