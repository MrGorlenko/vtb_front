<template>
  <div class="background-content">
    <div class="background-1"></div>
    <div class="background-2"></div>
    <div class="background-3"></div>
  </div>
  <div class="content">
    <header-tag/>
    <description-tag/>
    <commercial-tag/>
    <form-tag/>
    <footer-tag/>
  </div>
  <cu-modal v-model:visible="visible" :success="success"/>
</template>

<script>
import HeaderTag from './components/HeaderTag.vue'
import DescriptionTag from './components/DescriptionTag.vue'
import CommercialTag from './components/CommercialTag.vue'
import FormTag from './components/FormTag.vue'
import FooterTag from './components/FooterTag.vue'
import CuModal from './components/CuModal.vue'
export default {
  name: 'App',
  components: {
    HeaderTag,
    DescriptionTag,
    CommercialTag,
    FormTag,
    FooterTag,
    CuModal,
  },
  data(){
    return{
      visible: false,
      success: false,
    }
  },
  created(){
    let url = window.location.href;
    if (url.includes('success')){
      this.visible = true;
      this.success = true;
    }
    if (url.includes('fail')){
      this.visible = true;
      this.success = false;
    }
  }
}
</script>

<style lang="scss">
@import 'assets/null.css';
@import 'assets/fonts/gilroy/stylesheet.css';
@import 'assets/custom.scss';
body{
  background-color: #EDF4FF;
  display: flex;
  flex-direction: column;
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Gilroy;
  color: #000000;
  overflow-x: hidden;
  flex: 1;
}
.background-content{
  position: relative;
  min-height: 1px;
  width: 100%;
  // max-width: 1440px;
}
.content{
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 1440px;
  width: 100%;
  z-index: 2;
}
.background-1{
  position: absolute;
  top: 0px;
  background: linear-gradient(180deg, #8BB5FF 0%, #E1FBFF 79.48%, rgba(225, 251, 255, 0) 100%);
  z-index: 1;
  width: 100%;
  height: 1618px;
  @media (max-width: 1440px){
    @include height-a(1618);
  }
  @media (max-width: 600px){
    @include height-am(779);
  }
}
.background-2{
  position: absolute;
  background:
    linear-gradient(180deg, rgba(72, 127, 226, 0) 0%,
      rgba(72, 127, 226, 0.21) 14.06%, #A7AEE5 41.67%, rgba(141, 239, 255, 0.55) 75%,
      rgba(141, 239, 255, 0) 100%);
  top: 1622px;
  width: 100%;
  height: 1574px;
  @media (max-width: 1440px){
    @include top-a(1622);
    @include height-a(1574);
  }
  @media (max-width: 600px){
    @include top-am(782);
    @include height-am(920);
  }
}
.background-3{
  position: absolute;
  background: linear-gradient(180deg,
    rgba(187, 167, 229, 0) 0%,
    rgba(187, 167, 229, 0.37) 30.22%,
    rgba(225, 251, 255, 0.46) 60.06%,
    rgba(225, 251, 255, 0) 100%);
  top: 3054px;
  width: 100%;
  height: 1059px;
  @media (max-width: 1440px){
    @include top-a(3054);
    @include height-a(1059);
  }
  @media (max-width: 600px){
    @include top-am(1967);
    @include height-am(823);
  }
}
</style>
