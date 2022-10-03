<template>
  <transition name="fade">
    <div class="modal" v-if="visible">
      <div class="modal__content">
        <mq-responsive target="small+">
          <img class="modal__figures-img" :src="require('@/assets/img/figures-v.png')">
        </mq-responsive>
        <mq-responsive target="mobile">
          <img class="modal__figures-img" :src="require('@/assets/img/figures-v.png')">
        </mq-responsive>
        <mq-responsive target="small+">
          <img class="modal__ball-img" :src="require('@/assets/img/ball-1.webp')">
        </mq-responsive>
        <mq-responsive target="mobile">
          <img class="modal__ball-img" :src="require('@/assets/img/ball-1-m.webp')">
        </mq-responsive>
        <div class="modal__label modal__label--top">{{topText}}</div>
        <div class="modal__label modal__label--bottom"></div>
        <div class="modal__confirmation">
          <div class="modal__text">{{middleText1}}<br>{{middleText2}}<br>
            Полис придет вам<br>на электронную почту
          </div>
          <div class="modal__icon">
            <img v-if="success" class="modal__icon-img" :src="require('@/assets/img/success.svg')">
            <img v-else class="modal__icon-img" :src="require('@/assets/img/fail.svg')">
          </div>
        </div>
        <div class="modal__button" @click="updateVisible">{{buttonText}}</div>
      </div>
    </div>
  </transition>
</template>

<script>
import {MqResponsive} from "vue3-mq"
export default {
  name: 'CuModal',
  components: {
    MqResponsive,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    topText(){
      return 'безопасно';
    },
    middleText1(){
      return this.success ? 'Заказ успешно' : 'Ошибка';
    },
    middleText2(){
      return this.success ? 'оплачен!' : 'оплаты заказа';
    },
    buttonText(){
      return this.success ? 'Отлично!' : 'На главную';
    },
  },
  methods:{
    updateVisible(){
      this.$emit('update:visible', false);
      let href = document.location.href.split('/')[0] +
        '//' + document.location.href.split('/')[2];
      history.pushState(null, null, href);
    }
  }
}
</script>

<style lang="scss">
@import '../assets/custom.scss';
.modal {
  position: fixed;
  z-index: 5;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #EDF4FF;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__figures-img{
    position: absolute;
    top: -50px;
    left: 720px;
    max-width: 720px;
    @media (max-width: 1440px){
      @include left-a(720);
      @include max-width-a(720);
    }
    @media (max-width: 600px){
      top: 10%;
      @include max-width-am(250);
      @include left-am(200);
    }
  }
  &__ball-img{
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(-100%,-50%);
    max-width: 145px;
    @media (max-width: 1440px){
      @include max-width-a(145);
    }
    @media (max-width: 600px){
      @include max-width-a(145);
    }
  }
  &__content {
    position: relative;
    max-width: 1440px;
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &__label {
    position: absolute;
    font-weight: 900;
    text-align: center;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #E7ECFF;
    background: linear-gradient(256.03deg, rgba(108, 141, 247, 0.8) 24.55%, rgba(255, 255, 255, 0.8) 139.23%);
    backdrop-filter: blur(25px);
    padding: 10px 100px;
    font-size: 60px;
    line-height: 76px;
    border-radius: 90px;
    @media (max-width: 1440px){
      @include padding-a(10,100,10,100);
      @include font-size-a(60);
      @include line-height-a(76);
      @include border-radius-a(90);
    }
    @media (max-width: 600px){
      @include font-size-am(22);
      @include line-height-am(28);
    }
    &--top {
      top: 30px;
      left: 29px;
    }
    &--bottom {
      left: 0;
      bottom: 0;
      transform: translate(-40%,-100%);

      background: linear-gradient(266.84deg, rgba(125, 176, 250, 0.8) 10.12%, rgba(255, 255, 255, 0.8) 127.97%);
      width: 414px;
      height: 87px;
      @media (max-width: 1440px){
        @include width-a(414);
        @include height-a(87);
      }
    }
  }
  &__confirmation {
    background: linear-gradient(105.52deg,
      rgba(255, 255, 255, 0.135) 5.82%,
      rgba(198, 154, 254, 0.05) 81.69%);
    backdrop-filter: blur(42px);
    border-radius: 60px;
    border: solid 6px #C3C6FF;
    @media (max-width: 1440px){
      @include border-radius-a(60);
      @include border-width-a(6);
    }
    @media (max-width: 600px){
      display: flex;
      flex-direction: column-reverse;
      @include border-width-am(3);
      @include border-radius-am(30);
    }
  }
  &__text {
    font-weight: 600;
    text-align: center;
    letter-spacing: 0.01em;
    padding: 70px 170px;
    padding-bottom: 0;
    font-size: 55px;
    line-height: 57px;
    @media (max-width: 1440px){
      @include padding-a(70,170,0,170);
      @include font-size-a(55);
      @include line-height-a(57);
    }
    @media (max-width: 600px){
      @include padding-a(0,170,170,170);
      @include font-size-am(22);
      @include line-height-am(23);
    }
  }
  &__icon {
    display: flex;
    justify-content: center;
    padding: 4% 0;
    @media (max-width: 600px){
      padding: 10% 0;
    }
  }
  &__icon-img{
    max-width: 254;
    @media (max-width: 1440px){
      @include max-width-a(254);
    }
    @media (max-width: 600px){
      @include max-width-am(104);
    }
  }
  &__button {
    background: linear-gradient(266.84deg, rgba(179, 181, 255, 0.8) 10.12%, rgba(255, 255, 255, 0.8) 127.97%);
    backdrop-filter: blur(50px);
    box-shadow: -1px -1px 1px #fff;
    cursor: pointer;
    transition: all linear .2s;
    &:hover{
      box-shadow: -2px -2px 3px #fff;
      background-color: #8BB5FF88;
    }
    font-weight: 700;

    margin-top: 50px;
    padding: 25px 110px;
    border-radius: 90px;
    font-size: 36px;
    line-height: 36px;
    @media (max-width: 1440px){
      @include margin-a(50,0,0,0);
      @include padding-a(25,110,25,110);
      @include border-radius-a(90);
      @include font-size-a(36);
      @include line-height-a(36);
    }
    @media (max-width: 600px){
      @include margin-am(25,0,0,0);
      @include padding-a(40,150,40,150);
      @include border-radius-am(90);
      @include font-size-am(16);
      @include line-height-am(19);
    }
  }
}
</style>
