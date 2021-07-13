<template>
  <div class="ylomi-header-container" :style="headerBg">
    <div class="uk-container">
      <div class="ylomi-header-content-navbar">
        <div class="uk-align-left">
          <img class="" src="@/assets/imgs/ylomi-logo.svg" alt="logo" />
        </div>
        <div class="uk-align-right">
          <router-link class="ylomi-header-link" to="/bar"
            >Devenir professionnel</router-link
          >
          <button class="uk-button uk-button-default ylomi-header-btn-border ylomi-header-btn-container">
            Connexion
          </button>
          <button class="uk-button uk-button-default ylomi-header-btn-full ylomi-header-btn-container">
            Echanger maintenant
          </button>
        </div>
      </div>
      <div class="ylomi-header-title-large">
        Trouvez le prestataire <span>idéal</span> <br>
        pour tous les services au Bénin
      </div>
      <div class="ylomi-header-title-short">
        There's a lot discover. From home. Or a short drive away
      </div>
      <div>
        <div class="uk-inline ylomi-header-field-input-wrap">
          <a class="uk-form-icon ylomi-header-icon-search" href="#" uk-icon="icon: search; ratio: 2"></a>
          <input
            class="uk-input ylomi-header-field-input"
            type="text"
            placeholder="Veuillez renseigner ce champ"
          />
        </div>
      </div>
      <div class="ylomi-header-title">
        Ceux sont les Services populaire en ce moment.
      </div>
      <div>
        <button class="uk-button uk-button-default ylomi-header-btn-border">
          Plombiers
        </button>
        <button class="uk-button uk-button-default ylomi-header-btn-border ylomi-header-btn-container">
          Aide au demenagement
        </button>
        <button class="uk-button uk-button-default ylomi-header-btn-border ylomi-header-btn-container">
          Soudeur
        </button>
        <button class="uk-button uk-button-default ylomi-header-btn-border ylomi-header-btn-container">
          Mécanicien
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerBg: {
        backgroundImage: `url(${require('@/assets/imgs/header-bg-image.svg')})`,
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat"
      }
    }
  },
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
.ylomi-header-btn-container {
  margin-left: 25px;
}
.ylomi-header-btn-border, .ylomi-header-btn-border:hover, .ylomi-header-btn-border:active {
  border: 1.3px solid var(--ylomi-white);
  background: none;
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
  margin-bottom: 120px;
}
.ylomi-header-title-large  {
  margin-bottom: 25px;
  font-weight: bold;
  font-size: 52px;
  line-height: 56px;
  letter-spacing: 0.8px;
  color: var(--ylomi-white);
}
.ylomi-header-title-short {
  color: var(--ylomi-white);
  margin-bottom: 32px;
  font-size: 18px;
  line-height: 26px;
}
.ylomi-header-title {
  color: var(--ylomi-white);
  margin-bottom: 20px;
  margin-top: 20px;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
}
.ylomi-header-field-input-wrap {
  width: 72%;
}
.ylomi-header-field-input {
  color: var(--ylomi-black);
  font-size: 16px;
  border: none;
  padding: 37px;
  border-radius: 16px;
  border-bottom: 1px solid var(--ylomi-white)!important;
}
.ylomi-header-icon-search {
  left: 20px;
  color: var(--ylomi-primary);
} 
.uk-form-icon:not(.uk-form-icon-flip)~.uk-input {
  padding-left: 77px!important;
}
</style>
