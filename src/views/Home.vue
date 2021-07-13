<template>
  <div>
    <ylomi-header />
    <div>
      <div class="uk-text-center ylomi-home-action-wrap">
        <span>
          Decouvrez nos actions sur le COVID-19 à Cotonou
        </span> 
        <span style="margin-left: 10px">
          <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 1.5L20.5 6M20.5 6L16.5 10.5M20.5 6H1.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span> 
      </div>
      <div class="uk-container">
        <div>
          <div class="ylomi-home-promise-container">
            <div class="ylomi-home-promise-title">
              Pourquoi Utiliser Ylomi ?
            </div>
            <div class="ylomi-home-promise-card">
              <vk-grid class="uk-child-width-1-3">
                <div>
                  <ylomi-promise :data="promiseContent.bloc1" />
                </div>
                <div>
                  <ylomi-promise :data="promiseContent.bloc2" />
                </div>
                <div>
                  <ylomi-promise :data="promiseContent.bloc3" />
                </div>
              </vk-grid>
            </div>
          </div>
        </div>
      </div>
      <div class="uk-container">
        <div>
          <div class="ylomi-home-el-box-container">
            <div class="ylomi-home-el-title-large">
              De quel service <br> avez-vous besoin ?
            </div>
            <div>
              <div class="ylomi-home-el-desc-large">
                There's a lot discover. From home. Or a short drive away
              </div>
              <div class="uk-align-right ylomi-home-service-link-wrap">
                <div class="uk-flex">
                  <div class="ylomi-home-service-link">Voir Plus</div>
                  <div>
                    <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 1.7699L20 6.2699M20 6.2699L16 10.7699M20 6.2699H1" stroke="#382DB8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="ylomi-home-service-card">
              <vk-grid class="uk-child-width-1-5">
                <div>
                  <ylomi-service title="Demenagement">
                    <slot>
                      <img class="ylomi-service-box-img" src="@/assets/imgs/service-dj.jpeg" alt="" />
                    </slot>
                  </ylomi-service>
                </div>
                <div>
                  <ylomi-service title="Electricité">
                    <slot>
                      <img class="ylomi-service-box-img" src="@/assets/imgs/service-electricité.jpeg" alt="" />
                    </slot>
                  </ylomi-service>
                </div>
                <div>
                  <ylomi-service title="Informatique">
                    <slot>
                      <img class="ylomi-service-box-img" src="@/assets/imgs/service-informatique.jpg" alt="" />
                    </slot>
                  </ylomi-service>
                </div>
                <div>
                  <ylomi-service title="Massage">
                    <slot>
                      <img class="ylomi-service-box-img" src="@/assets/imgs/service-informatique.jpg" alt="" />
                    </slot>
                  </ylomi-service>
                </div>
                <div>
                  <ylomi-service title="Plomberie">
                    <slot>
                      <img class="ylomi-service-box-img" src="@/assets/imgs/service-informatique.jpg" alt="" />
                    </slot>
                  </ylomi-service>
                </div>
              </vk-grid>
            </div>
          </div>
        </div>
      </div>
      <div class="uk-container">
        <div>
          <div class="ylomi-home-box-infos-wrap">
            <vk-grid class="uk-child-width-1-2">
              <div>
                <div class="ylomi-home-box-infos-title">
                  Faites desormais vos demandes par notre chatbots whatsapp !
                </div>
                <div>
                  <button class="uk-button uk-button-default ylomi-home-box-infos-btn-full">
                    <span style="margin-right: 6px">
                      <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5273 21.3856C16.9041 21.3856 21.2628 17.0269 21.2628 11.6501C21.2628 6.27338 16.9041 1.91467 11.5273 1.91467C6.15058 1.91467 1.79187 6.27338 1.79187 11.6501C1.79187 13.4004 2.25378 15.0429 3.06236 16.4622L1.79369 21.3181L7.0384 20.2912C8.3816 20.9904 9.90831 21.3856 11.5273 21.3856Z" fill="#53D96A"/>
                        <path d="M6.66826 19.1553L6.99478 19.349C8.36608 20.1638 9.93829 20.5947 11.5417 20.5955H11.5451C16.4691 20.5955 20.4765 16.5846 20.4785 11.6548C20.4794 9.2659 19.5511 7.01945 17.8644 5.32963C16.1776 3.63981 13.9348 2.70874 11.5485 2.70773C6.62075 2.70773 2.61332 6.71817 2.61151 11.6476C2.61071 13.3368 3.08297 14.9821 3.97718 16.4057L4.18976 16.7438L3.2871 20.0429L6.66826 19.1553ZM0.706543 22.5985L2.23144 17.0246C1.29094 15.3934 0.796125 13.5428 0.796729 11.647C0.799146 5.71596 5.62045 0.890747 11.5451 0.890747C14.4202 0.892151 17.1187 2.01226 19.1483 4.04549C21.1773 6.07871 22.2945 8.78122 22.2935 11.6556C22.2909 17.5862 17.4688 22.4123 11.5451 22.4123C11.5447 22.4123 11.5455 22.4123 11.5451 22.4123H11.5405C9.74182 22.4115 7.97434 21.9598 6.40434 21.1027L0.706543 22.5985Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.85896 7.14992C8.65765 6.70232 8.44588 6.69325 8.25464 6.68539C8.09802 6.67874 7.91886 6.67914 7.73989 6.67914C7.56073 6.67914 7.26984 6.74645 7.02385 7.0155C6.77765 7.28454 6.08374 7.93487 6.08374 9.25771C6.08374 10.5805 7.04619 11.8586 7.18026 12.0382C7.31453 12.2176 9.03813 15.0188 11.7681 16.0964C14.0366 16.992 14.4982 16.8138 14.9908 16.7691C15.4832 16.7244 16.5797 16.1188 16.8034 15.491C17.0272 14.8632 17.0272 14.3254 16.9602 14.2129C16.8929 14.1007 16.714 14.0335 16.4452 13.8991C16.1767 13.7647 14.8563 13.1142 14.6101 13.0245C14.3639 12.9348 14.1849 12.8901 14.0058 13.1591C13.8268 13.4282 13.3125 14.0335 13.1557 14.2129C12.999 14.3925 12.8424 14.4148 12.5737 14.2804C12.3051 14.1456 11.4401 13.862 10.4141 12.9461C9.61568 12.2335 9.07678 11.3534 8.91996 11.0844C8.76334 10.8153 8.90325 10.6698 9.03792 10.5358C9.15851 10.4153 9.30647 10.2218 9.44094 10.0648C9.57481 9.90784 9.6197 9.79579 9.70908 9.61663C9.79866 9.43707 9.75397 9.28008 9.68674 9.14566C9.6197 9.01124 9.09771 7.68155 8.85896 7.14992Z" fill="white"/>
                      </svg>
                    </span>
                    <span>
                      Lancer votre demande
                    </span>
                  </button>
                </div>
              </div>
              <div>
                <img class="ylomi-home-box-infos-icon" src="@/assets/load.png" alt="" />
              </div>
            </vk-grid>
          </div>
        </div>
      </div>
      <div class="uk-container">
        <div>
          <div class="ylomi-home-el-box-container">
            <div class="ylomi-home-el-title-large">
              Nos Professionnels <span>Vedette</span>
            </div>
            <div>
              <div class="ylomi-home-el-desc-large">
                There's a lot discover. From home. Or a short drive away
              </div>
            </div>
            <div class="ylomi-home-pro-content">
              <vk-grid class="uk-child-width-1-4">
                <div>
                  <ylomi-professional
                    :fullname="proListContent.user1.fullname"  
                    :work="proListContent.user1.work"  
                    :experience="proListContent.user1.experience"  
                    :rate="proListContent.user1.rate"  
                  /> 
                </div>
                <div>
                  <ylomi-professional
                    :fullname="proListContent.user2.fullname"  
                    :work="proListContent.user2.work"  
                    :experience="proListContent.user2.experience"  
                    :rate="proListContent.user2.rate" 
                  /> 
                </div>
                <div>
                  <ylomi-professional
                    :fullname="proListContent.user3.fullname"  
                    :work="proListContent.user3.work"  
                    :experience="proListContent.user3.experience"  
                    :rate="proListContent.user3.rate" 
                  /> 
                </div>
                <div>
                  <ylomi-professional
                    :fullname="proListContent.user4.fullname"  
                    :work="proListContent.user4.work"  
                    :experience="proListContent.user4.experience"  
                    :rate="proListContent.user4.rate" 
                  /> 
                </div>
              </vk-grid>
            </div>
            <div class="ylomi-home-pro-content">
              <vk-grid class="uk-child-width-1-4">
                <div>
                  <ylomi-professional
                    :fullname="proListContent.user1.fullname"  
                    :work="proListContent.user1.work"  
                    :experience="proListContent.user1.experience"  
                    :rate="proListContent.user1.rate"  
                  /> 
                </div>
                <div>
                  <ylomi-professional
                    :fullname="proListContent.user2.fullname"  
                    :work="proListContent.user2.work"  
                    :experience="proListContent.user2.experience"  
                    :rate="proListContent.user2.rate" 
                  /> 
                </div>
                <div>
                  <ylomi-professional
                    :fullname="proListContent.user3.fullname"  
                    :work="proListContent.user3.work"  
                    :experience="proListContent.user3.experience"  
                    :rate="proListContent.user3.rate" 
                  /> 
                </div>
                <div>
                  <ylomi-professional
                    :fullname="proListContent.user4.fullname"  
                    :work="proListContent.user4.work"  
                    :experience="proListContent.user4.experience"  
                    :rate="proListContent.user4.rate" 
                  /> 
                </div>
              </vk-grid>
            </div>
          </div>
        </div>
      </div>
      <div class="uk-container">
        <div>
          <div class="ylomi-home-el-box-container">
            <div class="ylomi-home-el-title-large">
              Nous sommes dans <br> <span>votre ville !</span>
            </div>
            <div>
              <div class="ylomi-home-el-desc-large">
                There's a lot discover. From home. Or a short drive away
              </div>
            </div>
            <div class="ylomi-home-city-wrap">
              <vk-grid class="uk-child-width-1-4">
                <div>
                  <ylomi-city title="Grand-Popo" desc="234 pros">
                    <slot>
                      <img class="ylomi-city-box-img" src="@/assets/imgs/grand-popo.jpeg" alt="" />
                    </slot>
                  </ylomi-city>
                </div>
                <div>
                  <ylomi-city title="Bohicon" desc="234 pros">
                    <slot>
                      <img class="ylomi-city-box-img" src="@/assets/imgs/bohicon.jpeg" alt="" />
                    </slot>
                  </ylomi-city>
                </div>
                <div>
                  <ylomi-city title="Natitingou" desc="234 pros">
                    <slot>
                      <img class="ylomi-city-box-img" src="@/assets/imgs/natitingou.jpeg" alt="" />
                    </slot>
                  </ylomi-city>
                </div>
                <div>
                  <ylomi-city title="Abomey" desc="234 pros">
                    <slot>
                      <img class="ylomi-city-box-img" src="@/assets/imgs/abomey.jpeg" alt="" />
                    </slot>
                  </ylomi-city>
                </div>
              </vk-grid>
              <vk-grid class="uk-child-width-1-4">
                <div>
                  <ylomi-city title="Cotonou" desc="234 pros">
                    <slot>
                      <img class="ylomi-city-box-img" src="@/assets/imgs/cotonou.jpeg" alt="" />
                    </slot>
                  </ylomi-city>
                </div>
                <div>
                  <ylomi-city title="Porto Novo" desc="234 pros">
                    <slot>
                      <img class="ylomi-city-box-img" src="@/assets/imgs/porto.jpeg" alt="" />
                    </slot>
                  </ylomi-city>
                </div>
                <div>
                  <ylomi-city title="Calavi" desc="234 pros">
                    <slot>
                      <img class="ylomi-city-box-img" src="@/assets/imgs/calavi.jpeg" alt="" />
                    </slot>
                  </ylomi-city>
                </div>
                <div>
                  <ylomi-city title="Parakou" desc="234 pros">
                    <slot>
                      <img class="ylomi-city-box-img" src="@/assets/imgs/parakou.jpeg" alt="" />
                    </slot>
                  </ylomi-city>
                </div>
              </vk-grid>
            </div>
          </div>
        </div>
      </div>
      <div class="uk-container">
        <div>
          <div class="ylomi-home-el-box-container">
            <div class="ylomi-home-el-title-large">
              Nos Pro nous <br> <span>aiment</span>
            </div>
            <div>
              <div class="ylomi-home-el-desc-large">
                Rejoignez la communauté de jobeurs, deéveloppez votre <br>
                activité et augmentez vos revenus en rendant service près <br>
                de chez vous.
              </div>
            </div>
            <div>
              <vk-grid class="uk-child-width-1-2">
                <div class="ylomi-home-pro-list">
                  <div>
                    List....
                  </div>
                </div>
                <div class="uk-text-right">
                  <button class="uk-button uk-button-default ylomi-home-normal-btn-full">
                    <span>
                      Devenez Pro Ylomi
                    </span>
                  </button>
                </div>
              </vk-grid>
            </div>
          </div>
        </div>
      </div>
      <div class="uk-container">
        <div>
          <div class="ylomi-home-box-infos-wrap" style="position: relative">
            <vk-grid class="uk-child-width-1-2">
              <div>
                <div class="ylomi-home-box-infos-title-small">
                  L'expérience est meilleure sur notre application !
                </div>
                <div>
                  <img class="" src="@/assets/imgs/apple-play-store.svg" alt="" />
                </div>
              </div>
            </vk-grid>
            <div class="ylomi-home-box-infos-phone-content">
              <img class="" src="@/assets/imgs/phone.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <ylomi-footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      promiseContent: {
        bloc1: {
          title: "Professionnels Qualifiés",
          desc: "There's a lot discover. From home. Or a short drive away",
          icon: "users"
        },
        bloc2: {
          title: "Une assurance de Qualité",
          desc: "There's a lot discover. From home. Or a short drive away",
          icon: "check"
        },
        bloc3: {
          title: "Dans votre Zone",
          desc: "There's a lot discover. From home. Or a short drive away",
          icon: "localize"
        }
      },
      proListContent: {
        user1: {
          img:"",
          fullname: "Professionnels Qualifiés",
          work: "Plombier",
          experience: "3 ans",
          rate: "4.5",
        },
        user2: {
          fullname: "Professionnels Qualifiés",
          work: "Plombier",
          experience: "3 ans",
          rate: "4.5",
        },
        user3: {
          fullname: "Professionnels Qualifiés",
          work: "Plombier",
          experience: "3 ans",
          rate: "4.5",
        },
        user4: {
          fullname: "Professionnels Qualifiés",
          work: "Plombier",
          experience: "3 ans",
          rate: "4.5",
        },
      },
    };
  },
  components: {
  }
}
</script>
<style scoped>
.ylomi-home-action-wrap {
  color: var(--ylomi-white);
  background: #48CAE4;
  padding-top: 8px;
  padding-bottom: 8px;
}
.ylomi-home-promise-container {
  margin-top: 74px;
  margin-bottom: 147px;
}
.ylomi-home-promise-title {
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  color: #222222;
}
.ylomi-home-promise-card {
  margin-top: 40px;
}
.ylomi-home-el-box-container {
  margin-bottom: 147px;
}
.ylomi-home-el-title-large {
  font-weight: bold;
  font-size: 52px;
  line-height: 56px;
  letter-spacing: 0.8px;
  color: #333333;
  margin-bottom: 10px;
}
.ylomi-home-el-desc-large {
  font-size: 18px;
  line-height: 26px;
  color: #717171;
}
.ylomi-home-service-link {
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: #382DB8;
  margin-right: 6px;
}
.ylomi-home-service-card {
  margin-top: 55px;
}
.ylomi-home-service-link-wrap {
  margin-top: -16px;
  cursor: pointer;
}
.ylomi-home-box-infos-wrap {
  margin-bottom: 153px;
  background: var(--ylomi-primary);
  padding: 60px 69px 60px 69px;
  border-radius: 32px;
}
.ylomi-home-box-infos-title {
  font-size: 42px;
  font-weight: bold;
  line-height: 61px;
  letter-spacing: 0.8px;
  color: var(--ylomi-white);
  margin-bottom: 44px;
}
.ylomi-home-box-infos-title-small  {
  width: 70%;
  font-size: 42px;
  font-weight: bold;
  line-height: 61px;
  letter-spacing: 0.8px;
  color: var(--ylomi-white);
  margin-bottom: 44px;
}
.ylomi-home-box-infos-icon {
  margin-top: -43px;
}
.ylomi-home-box-infos-btn-full, .ylomi-home-box-infos-btn-full:hover, .ylomi-home-box-infos-btn-full:active {
  border: 1px solid #53D96A;
  background: #53D96A;
  border-radius: 8px;
  text-transform: none;
  color: var(--ylomi-white);
  font-weight: 500;
  font-size: 28px;
  line-height: 26px;
  padding: 35px 30px 35px 30px;
  display: initial;
}
.ylomi-home-normal-btn-full, .ylomi-home-normal-btn-full:hover, .ylomi-home-normal-btn-full:active {
  border: 1px solid var(--ylomi-primary);
  background: var(--ylomi-primary);
  border-radius: 8px;
  text-transform: none;
  color: var(--ylomi-white);
  font-weight: 500;
  font-size: 28px;
  line-height: 26px;
  padding: 35px 40px 35px 40px;
  display: initial;
}
.ylomi-home-box-infos-phone-content {
  position: absolute;
  bottom: 0;
  right: 10%;
}
.ylomi-home-pro-list {
  margin-top: 26px;
}
.ylomi-home-city-wrap {
  padding-top: 79px;
}
.ylomi-home-pro-content {
  margin-top: 55px;
}
</style>
