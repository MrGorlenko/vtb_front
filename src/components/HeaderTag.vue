<template>
  <div class="header">
    <img class="header__vks-img" :src="require('@/assets/img/vsk.svg')">
    <img class="header__vtb-img" :src="require('@/assets/img/vtb.svg')">
  </div>
</template>

<script>
export default {
  name: 'HeaderTag',
}
</script>

<style lang="scss">
@import '../assets/custom.scss';
.header{
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 60px 80px 0 80px;
  @media (max-width: 1440px){
    @include padding-a(60,80,0,80);
  }
  &__vks-img{
    margin-right: 65px;
    height: 82px;
    @media (max-width: 1440px){
      @include margin-a(0,65,0,0);
      @include max-width-a(365);
      @include height-a(82);
    }
    @media (max-width: 600px){
      @include margin-am(0,18,0,0);
      @include max-width-am(84);
      @include height-am(23);
    }
  }
  &__vtb-img{
    margin-right: 65px;
    height: 82px;
    @media (max-width: 1440px){
      @include margin-a(0,65,0,0);
      @include max-width-a(293);
      @include height-a(82);
    }
    @media (max-width: 600px){
      @include margin-am(0,0,0,0);
      @include max-width-am(64);
      @include height-am(23);
    }
  }
}
</style>
