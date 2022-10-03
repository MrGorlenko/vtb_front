<template>
  <div class="commercial">
    <div class="commercial__header">
      <span class="commercial__text commercial__text--1">
        Страхование профессиональной ответственности
      </span>
      <span class="commercial__text commercial__text--2">
        для Самозанятых ВТБ
      </span>
      <span class="commercial__text commercial__text--3">
        защитим от исков при причинении вреда третьим лицам
      </span>
    </div>
    <mq-responsive target="small+">
      <img class="commercial__figures-img" :src="require('@/assets/img/figures.webp')">
    </mq-responsive>
    <mq-responsive target="mobile">
      <img class="commercial__figures-img" :src="require('@/assets/img/figures-m.webp')">
    </mq-responsive>
    <mq-responsive target="small+">
      <img class="commercial__cylinder-img" :src="require('@/assets/img/cylinder.webp')">
    </mq-responsive>
    <mq-responsive target="mobile">
      <img class="commercial__cylinder-img" :src="require('@/assets/img/cylinder-m.webp')">
    </mq-responsive>
    <mq-responsive target="small+" class="commercial__cards">
      <div class="commercial__card">
        <div class="commercial__card-icon"></div>
        <div class="commercial__card-img">
          <img class="commercial__purse-img" :src="require('@/assets/img/purse.svg')">
        </div>
        <div class="commercial__card-text">
          Возместим<br>до 1 млн. руб.
        </div>
      </div>
      <div class="commercial__card">
        <div class="commercial__card-icon"></div>
        <div class="commercial__card-img">
          <img class="commercial__like-img" :src="require('@/assets/img/like.svg')">
        </div>
        <div class="commercial__card-text">
          Без неприятных<br>хлопот
        </div>
      </div>
      <div class="commercial__card">
        <div class="commercial__card-icon">
        </div>
        <div class="commercial__card-img">
          <img class="commercial__clicks-img" :src="require('@/assets/img/clicks.svg')">
        </div>
        <div class="commercial__card-text">
          Оформление<br>в нескольких кликов
        </div>
      </div>
      <div class="commercial__card">
        <div class="commercial__card-icon">
        </div>
        <div class="commercial__card-img">
          <img class="commercial__document-img" :src="require('@/assets/img/document.svg')">
        </div>
        <div class="commercial__card-text">
          Без<br>документов
        </div>
      </div>
    </mq-responsive>
    <mq-responsive target="mobile" class="commercial__cards commercial__cards--mobile commercial__cards--mobile-top">
      <div class="commercial__card">
        <div class="commercial__card-icon"></div>
        <div class="commercial__card-img">
          <img class="commercial__purse-img" :src="require('@/assets/img/purse.svg')">
        </div>
        <div class="commercial__card-text">
          Возместим<br>до 1 млн. руб.
        </div>
      </div>
      <div class="commercial__card">
        <div class="commercial__card-icon"></div>
        <div class="commercial__card-img">
          <img class="commercial__like-img" :src="require('@/assets/img/like.svg')">
        </div>
        <div class="commercial__card-text">
          Без неприятных<br>хлопот
        </div>
      </div>
    </mq-responsive>
    <mq-responsive target="mobile" class="commercial__cards commercial__cards--mobile commercial__cards--mobile-bottom">
      <div class="commercial__card">
        <div class="commercial__card-icon">
        </div>
        <div class="commercial__card-img">
          <img class="commercial__clicks-img" :src="require('@/assets/img/clicks.svg')">
        </div>
        <div class="commercial__card-text">
          Оформление<br>в нескольких кликов
        </div>
      </div>
      <div class="commercial__card">
        <div class="commercial__card-icon">
        </div>
        <div class="commercial__card-img">
          <img class="commercial__document-img" :src="require('@/assets/img/document.svg')">
        </div>
        <div class="commercial__card-text">
          Без документов
        </div>
      </div>
    </mq-responsive>
    <div class="button commercial__button" @click="scroll">
      Перейти к тарифам
    </div>
  </div>
</template>

<script>
import {MqResponsive} from "vue3-mq"
export default {
  name: 'CommercialTag',
  components: {
    MqResponsive
  },
  methods: {
    scroll(){
      const el = document.getElementById('tariffs');
      el.scrollIntoView({behavior: "smooth"});
    }
  }
}
</script>

<style lang="scss">
@import '../assets/custom.scss';
.commercial{
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 45px;
  @media (max-width: 1440px){
    @include padding-a(0, 45, 0, 45);
  }
  @media (max-width: 600px){
    @include padding-am(0, 20, 0, 20);
  }
  &__header {
    display: flex;
    flex-direction: column;
    border: 1px solid #FFFFFF;
    width: 100%;
    border-radius: 60px;
    padding: 65px 40px;
    @media (max-width: 1440px){
      @include padding-a(65, 40, 65, 40);
      @include border-radius-a(60);
    }
    @media (max-width: 600px){
      @include padding-am(17, 11, 27, 11);
      @include border-radius-am(20);
    }
  }
  &__text {
    display: inline-block;
    letter-spacing: 0.01em;
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
    @media (max-width: 1440px){
      @include font-size-a(40);
      @include line-height-a(48);
    }
    @media (max-width: 600px){
      @include font-size-am(18);
      @include line-height-am(21);
    }
    &--1 {
    }
    &--2 {
      font-style: italic;
      font-weight: 400;
    }
    &--3 {
      font-size: 30px;
      line-height: 36px;
      margin-top: 40px;
      @media (max-width: 1440px){
        @include font-size-a(30);
        @include line-height-a(36);
        @include margin-a(40, 0, 0, 0);
      }
      @media (max-width: 600px){
        @include font-size-am(16);
        @include line-height-am(19);
        @include margin-am(17, 0, 0, 0);
      }
    }
  }
  &__cards {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 90px;
    padding: 0 50px;
    @media (max-width: 1440px){
      @include margin-a(90, 0, 0, 0);
      @include padding-a(0, 50, 0, 50);
    }
    @media (max-width: 600px){
      @include padding-am(0, 0, 0, 0);
    }
    &--mobile-top{
      @media (max-width: 600px){
        @include margin-am(80, 0, 0, 0);
        @include padding-am(0, 0, 0, 0);
      }
    }
  }
  &__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 600px){
      flex: 1;
    }
  }
  &__card-icon {
    position: absolute;
    background: rgba(255, 255, 255, 0.2);
    border: 3px solid #FFFFFF;
    box-shadow: 0 0 15px white;
    filter: blur(4px);
    border-radius: 50%;
    width: 150px;
    height: 150px;
    @media (max-width: 1440px){
      @include width-a(150);
      @include height-a(150);
    }
    @media (max-width: 600px){
      @include width-am(67);
      @include height-am(67);
      box-shadow: none;
      filter: blur(1px);
    }
  }
  &__card-img{
    position: relative;
    width: 150px;
    height: 150px;
    @media (max-width: 1440px){
      @include width-a(150);
      @include height-a(150);
    }
    @media (max-width: 600px){
      @include width-am(67);
      @include height-am(67);
    }
    img{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
    }
    .commercial__clicks-img{
      top: 55%;
    }
  }
  &__card-text {
    display: flex;
    text-align: center;
    font-weight: 400;
    letter-spacing: 0.01em;
    margin-top: 30px;
    font-size: 25px;
    line-height: 29px;
    @media (max-width: 1440px){
      @include margin-a(30,0,0,0);
      @include font-size-a(25);
      @include line-height-a(29);
    }
    @media (max-width: 600px){
      @include margin-a(30,0,0,0);
      @include font-size-am(14);
      @include line-height-am(16);
    }
  }
  &__figures-img{
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 40px;
    margin-right: -20px;
    @media (max-width: 1440px){
      @include margin-a(40,-20,0,0);
      @include max-width-a(305);
    }
    @media (max-width: 600px){
      @include margin-am(90,0,0,0);
      @include max-width-am(95);
    }
  }
  &__cylinder-img{
    position: absolute;
    top: 280px;
    left: 800px;
    @media (max-width: 1440px){
      @include top-a(280);
      @include left-a(800);
      @include max-width-a(112);
    }
    @media (max-width: 600px){
      @include top-am(153);
      @include left-am(194);
    }
  }
  &__purse-img{
    @media (max-width: 1440px){
      @include max-width-a(79);
    }
    @media (max-width: 600px){
      @include max-width-am(34.6);
    }
  }
  &__like-img{
    @media (max-width: 1440px){
      @include max-width-a(77);
    }
    @media (max-width: 600px){
      @include max-width-am(34.86);
    }
  }
  &__clicks-img{
    @media (max-width: 1440px){
      @include max-width-a(87);
    }
    @media (max-width: 600px){
      @include max-width-am(29.88);
    }
  }
  &__document-img{
    @media (max-width: 1440px){
      @include max-width-a(56);
    }
    @media (max-width: 600px){
      @include max-width-am(19.03);
    }
  }
  &__button{
    font-weight: 700;
    border-radius: 30px;
    margin-top: 90px;
    font-size: 42px;
    line-height: 51px;
    padding: 25px 80px;
    @media (max-width: 1440px){
      @include border-radius-a(30);
      @include margin-a(90,0,0,0);
      @include padding-a(25,80,25,80);
      @include font-size-a(42);
      @include line-height-a(51);
    }
    @media (max-width: 600px){
      @include border-radius-am(10);
      @include margin-am(50,0,0,0);
      @include padding-am(7,30,7,30);
      @include font-size-am(16);
      @include line-height-am(23);
    }
  }
}
  .button{
    background: rgba(255, 255, 255, 0.3);
    color: #614AD3;
    box-shadow: 1px -2px 0 white;
    cursor: pointer;
    user-select: none;
    text-align: center;
    transition: background-color linear .3s, box-shadow linear .3s;
    @media (max-width: 600px){
        box-shadow: 1px -1px 0 white;
    }
    &:hover{
      box-shadow: 2px -2px 3px #E1FBFF;
      background-color: #8BB5FF88;
    }
  }
</style>
