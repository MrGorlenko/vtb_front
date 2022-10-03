<template>
  <div class="cu-input">
    <input class="cu-input__input input" :type="type" :placeholder="placeholder" ref="input"
      :max="max" :min="min" @input="update" :class="{date: type=='date'}" @blur="blur">
    <transition name="fade">
      <div class="cu-input__error" v-if="error">
        <span class="cu-input__error-icon">*</span><span>{{errorText}}</span>
      </div>
    </transition>
    <span class="cu-input__placeholder" v-if="(type=='date') && (!value)" @click="focus">
      {{placeholder}}
    </span>
  </div>
</template>

<script>
import Inputmask from "inputmask";
export default {
  name: 'CustomInput',
  props: {
    value: String,
    placeholder: String,
    type: String,
    mask: {
      type: String,
      default: null,
    },
    error: Boolean,
    errorText: String,
    max: {
      type: String,
      default: "",
    },
    min: {
      type: String,
      default: "",
    },
  },
  mounted(){
    if (this.mask) {
      let im = new Inputmask({
        mask: this.mask,
        showMaskOnHover: false,
      });
      im.mask(this.$refs.input)
    }
  },
  methods: {
    update(event){
      let value = event.srcElement.value;
      this.$emit('update:value', value);
    },
    blur(){
      this.$emit('blur');
    },
    focus(){
      this.$refs.input.focus();
    }
  },
}
</script>

<style lang="scss">
@import '../assets/custom.scss';
.cu-input{
  position: relative;
  &__placeholder{
    position: absolute;
    user-select: none;
    left: 0;
    top: 0;
    height: 1px;
    opacity: 0.5;
    font-weight: 100;
    border-radius: 10px;
    font-size: 36px;
    line-height: 41px;
    @media (max-width: 600px){
      @include font-size-am(20);
      @include line-height-am(23);
      @include top-am(15);
      @include left-am(12);
    }
  }
  &__error{
    position: absolute;
    bottom: -18%;
    right: 0;
    display: flex;
    white-space: nowrap;
    font-size: 17px;
    line-height: 20px;
    margin-right: 10px;
    color: red;
    font-weight: 400;
    @media (max-width: 1440px){
      @include font-size-a(17);
      @include line-height-a(20);
      @include margin-a(0,10,0,0);
    }
    @media (max-width: 600px){
      @include font-size-am(11);
      @include line-height-am(13);
      @include margin-am(0,5,0,0);
      bottom: -24%;
    }
  }
  &__error-icon{
    display: flex;
    align-items: center;
    font-size: 30px;
    line-height: 36px;
    margin-right: 5px;
    font-weight: 300;
    @media (max-width: 1440px){
      @include font-size-a(30);
      @include line-height-a(36);
      @include margin-a(0,5,0,0);
    }
    @media (max-width: 600px){
      @include font-size-am(22);
      @include line-height-am(28);
      @include margin-am(-2,5,0,0);
    }
  }
  &__input{
    width: 100%;
    height: 100%;
    -webkit-min-logical-width: 93.5%;
    &.date{
      @media (max-width: 600px){
        @include height-am(49);
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
