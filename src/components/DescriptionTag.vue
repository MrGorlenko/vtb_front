<template>
  <div class="description">
    <mq-responsive target="small+">
      <img class="description__ball-1-img" :src="require('@/assets/img/ball-1.webp')">
    </mq-responsive>
    <mq-responsive target="mobile">
      <img class="description__ball-1-img" :src="require('@/assets/img/ball-1-m.webp')">
    </mq-responsive>
    <div class="description__blur">
    </div>
    <mq-responsive target="small+">
      <img class="description__3d-img" :src="require('@/assets/img/3d.webp')">
    </mq-responsive>
    <mq-responsive target="mobile">
      <img class="description__3d-img" :src="require('@/assets/img/3d-m.webp')">
    </mq-responsive>
    <div class="description__text description__text--1" :class="{'visible': visible}">Безопасно</div>
    <div class="description__text description__text--2" :class="{'visible': visible}">Легко</div>
    <div class="description__text description__text--3" :class="{'visible': visible}">Быстро</div>
  </div>
</template>

<script>
import {MqResponsive} from "vue3-mq"
export default {
  name: 'DescriptionTag',
  components: {
    MqResponsive
  },
  data(){
    return {
      visible: false,
    }
  },
  created(){
    window.onload = () => {
      this.visible = true;
    }
  }
}
</script>

<style lang="scss">
@import '../assets/custom.scss';
.description{
  position: relative;
  padding-top: 55px;
  min-height: 680px;
  display: flex;
  justify-content: center;
  @media (max-width: 1440px){
    @include padding-a(55,0,0,0);
    @include min-height-a(680);
  }
  @media (max-width: 600px){
    @include min-height-am(220);
  }
  &__ball-1-img {
    position: absolute;
    top: 400px;
    left: 150px;
    @media (max-width: 1440px){
      @include top-a(400);
      @include left-a(150);
      @include max-width-a(238);
    }
    @media (max-width: 600px){
      @include top-am(114);
    }
  }
  &__blur {
    position: absolute;
    margin-top: 230px;
    width: 91%;
    height: 308px;
    background: linear-gradient(106.97deg, rgba(255, 255, 255, 0.2) 5.84%, rgba(255, 255, 255, 0.05) 70.7%);
    background-blend-mode: overlay;
    backdrop-filter: blur(25px);
    border-radius: 60px;
    @media (max-width: 1440px){
      @include margin-a(230,0,0,0);
      @include height-a(308);
      @include border-radius-a(60);
    }
    @media (max-width: 600px){
      @include margin-am(50,0,0,0);
      @include height-am(96);
    }
  }
  &__3d-img {
    position: absolute;
    left: 440px;
    max-width: 700px;
    @media (max-width: 1440px){
      @include left-a(440);
      @include max-width-a(700);
    }
    @media (max-width: 600px){
      @include left-am(135);
      @include max-width-am(233);
    }
  }
  &__text{
    position: absolute;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 900;
    text-align: center;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #E7ECFF;
    font-size: 60px;
    line-height: 76px;
    border-radius: 90px;
    padding: 10px 80px;
    @media (max-width: 1440px){
      @include font-size-a(60);
      @include line-height-a(76);
      @include border-radius-a(90);
      @include padding-a(10,80,10,80);
    }
    opacity: 0;
    transition: transform linear .7s, opacity linear 1s;
    &.visible{
      transform: translate(0%);
      opacity: 1;
    }
    &--1{
      left: 0;
      background: linear-gradient(256.03deg, rgba(108, 141, 247, 0.8) 24.55%, rgba(255, 255, 255, 0.8) 139.23%);
      backdrop-filter: blur(50px);
      top: 100px;
      margin-left: -55px;
      padding: 10px 100px;
      transform: translate(-200%);
      @media (max-width: 1440px){
        @include top-a(100);
        @include margin-a(0,0,0,-55);
        @include padding-a(10,100,10,100);
      }
      @media (max-width: 600px){
        @include top-am(15);
      }
    }
    &--2{
      background: linear-gradient(267.41deg, rgba(179, 181, 255, 0.8) 29.32%, rgba(255, 255, 255, 0.8) 172.16%);
      backdrop-filter: blur(50px);
      box-shadow: 0 -2px 0px white;
      left: 80px;
      top: 340px;
      transform: translate(-200%);
      @media (max-width: 1440px){
        @include left-a(80);
        @include top-a(340);
      }
      @media (max-width: 600px){
        box-shadow: 0 -1px 0px white;
      }
    }
    &--3{
      right: 0;
      background: linear-gradient(266.84deg, rgba(125, 176, 250, 0.8) 10.12%, rgba(255, 255, 255, 0.8) 127.97%);
      backdrop-filter: blur(50px);
      box-shadow: 0 -2px 0px white;
      top: 460px;
      margin-right: -30px;
      transform: translate(200%);
      @media (max-width: 1440px){
        @include top-a(460);
        @include margin-a(0,-30,0,0);
      }
      @media (max-width: 600px){
        @include top-am(170);
        @include margin-am(0,19,0,0);
        box-shadow: 0 -1px 0px white;
      }
    }
  }
}
</style>
