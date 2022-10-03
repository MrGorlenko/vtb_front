<template>
  <div class="footer">
    <div class="footer__question">
      Остались вопросы?
    </div>
    <div class="footer__call">
      Звоните 8 800 775-15-75 или оставьте свои данные и мы перезвоним вам
    </div>
    <div class="footer__row">
      <custom-input type="text" v-model:value="data.name" placeholder="Имя"
        class="footer__input" :error="rules.name.error"
        :errorText="rules.name.errorText" @blur="validateProp('name')"/>
      <custom-input type="tel" v-model:value="data.phone" placeholder="Моб. телефон"
        class="footer__input" :error="rules.phone.error" mask="+7 (999) 999-99-99"
        :errorText="rules.phone.errorText" @blur="validateProp('phone')"/>
      <div class="footer__button" @click="confirmForm" :class="{'success': success}">
        <transition name="fade">
          <div class="cu-input__error footer__error" v-if="preloader.error">
            <span class="cu-input__error-icon">*</span><span>{{errorText}}</span>
          </div>
        </transition>
        <span v-if="!success" :class="{'hidden' : preloader.visible || success}" class="footer__button-text">Перезвоните мне</span>
        <cu-preloader :visible="preloader.visible" class="footer__preloader"/>
        <span v-if="success" :class="{'hidden' : !success}" class="footer__button-text">Запрос отправлен</span>
      </div>
    </div>
    <div class="footer__license">
      Сервис предоставляет “Страховая компания САО «ВСК»” специально для Самозанятых клиентов “Банка ПАО «ВТБ»”.<br>
      Лицензия ЦБ РФ на осуществление страхования: СЛ №0621, СИ №0621, ОС №0621, ОС №0621-04, ОС №0621-05, ПС №0621.
    </div>
    <mq-responsive target="small+">
      <img class="footer__figures-img" :src="require('@/assets/img/figures.webp')">
    </mq-responsive>
    <mq-responsive target="mobile">
      <img class="footer__figures-img" :src="require('@/assets/img/figures-m.webp')">
    </mq-responsive>
    <div class="footer__bottom">
      <div class="footer__left">
        <div class="footer__bottom-text">
          Адрес: 121552, г. Москва, ул. Островная, д. 4<br>
          Тел. : +7 (495) 727-44-44, 785-27-76<br>
          График работы: пн – чт: 09:00 – 18:00, пт: 09:00 – 16:45
        </div>
        <div class="footer__icons">
          <img class="footer__vsk-img" :src="require('@/assets/img/vsk.svg')">
          <img class="footer__vtb-img" :src="require('@/assets/img/vtb.svg')">
        </div>
      </div>
      <div class="footer__right">
        <div class="footer__links">
          <a class="footer__youtube" target="_blank"
            href="https://www.youtube.com/user/vsktv/videos?view_as=subscriber">
            <img :src="require('@/assets/img/youtube.svg')">
          </a>
          <a class="footer__vk" target="_blank"
            href="https://vk.com/vsk.insurance">
            <img :src="require('@/assets/img/vk.svg')">
          </a>
          <a class="footer__tg" target="_blank"
            href="https://t.me/vskinsur">
            <img :src="require('@/assets/img/tg.svg')">
          </a>
          <a class="footer__kl" target="_blank"
            href="https://ok.ru/vskinsurance">
            <img :src="require('@/assets/img/kl.svg')">
          </a>
        </div>
        <div class="footer__contacts">
          <div class="footer__contact">
            <div class="footer__contact-icon">
              <img class="footer__phone" :src="require('@/assets/img/phone.svg')">
            </div>
            <a class="footer__contact-value" href="tel:+78007751575">
              +7 (800) 775 15 75
            </a>
          </div>
          <div class="footer__contact">
            <div class="footer__contact-icon footer__contact-icon--mail">
              <img class="footer__mail" :src="require('@/assets/img/mail.svg')">
            </div>
            <a class="footer__contact-value" href="mailto:MDunaeva@vsk.ru">
              help@vsk.ru
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {MqResponsive} from "vue3-mq"
import CustomInput from '@/components/CustomInput.vue'
import CuPreloader from '@/components/CuPreloader.vue'
export default {
  name: 'FooterTag',
  components: {
    CustomInput,
    MqResponsive,
    CuPreloader
  },
  data(){
    return{
      preloader: {
        visible: false,
        error: false,
      },
      success: false,
      data: {
        name: '',
        phone: '',
      },
      rules: {
        name: {required: true, error: false, errorText: ''},
        phone: {required: true, error: false, complete: true, errorText: ''},
      },
    }
  },
  computed: {
    errorText(){
      return this.preloader.error ? 'Ошибка, проверьте правильность введенных данных' :
       'Проверьте правильность введенных данных';
    },
  },
  methods:{
    validateProp(prop){
      if (this.rules[prop].required){
        if (this.data[prop]) {
          this.rules[prop].error = false;
        }
        else {
          this.rules[prop].error = true;
          this.rules[prop].errorText = 'Поле является обязательным';
          return false;
        }
      }
      if (this.rules[prop].complete){
        if (!this.data[prop].includes('_')) {
          this.rules[prop].error = false;
        }
        else {
          this.rules[prop].error = true;
          this.rules[prop].errorText = 'Поле должно быть заполнено';
          return false;
        }
      }
      return true;
    },
    validateForm(){
      let error = false;
      for (let prop in this.rules){
        if (!this.validateProp(prop)) {
          error = true;
        }
      }
      return !error;
    },
    async confirmForm(){
      if (this.preloader.visible || this.success) return;
      if (this.validateForm()) {
        let formData = Object.assign({}, this.data);
        formData.phone = formData.phone.replace(/[^0-9]/g, '');
        this.preloader.error = false;
        this.preloader.visible = true;
        this.axios.post('https://api-creatum.bexram.online/vtb/mail', formData)
        .then( () => {
          this.preloader.visible = false;
          this.success = true;
        })
        .catch( () =>{
          this.preloader.visible = false;
          this.success = false;
          this.preloader.error = true;
        });
      }
    },
  }
}
</script>

<style lang="scss">
@import '../assets/custom.scss';
.footer {
  position: relative;
  padding: 0 80px 80px 80px;
  margin-top: 100px;
  @media (max-width: 1440px){
    @include padding-a(0,80,80,80);
    @include margin-a(100,0,0,0);
  }
  @media (max-width: 1440px){
    @include margin-am(35,0,0,0);
  }
  &__question {
    font-weight: 600;
    letter-spacing: 0.01em;
    font-size: 36px;
    line-height: 43px;
    padding-left: 5px;
    @media (max-width: 1440px){
      @include font-size-a(36);
      @include line-height-a(43);
      @include padding-a(0,0,0,5);
    }
    @media (max-width: 600px){
      @include font-size-am(20);
      @include line-height-am(24);
      @include padding-am(0,0,0,0);
    }
  }
  &__call {
    letter-spacing: 0.01em;
    font-weight: 200;
    font-size: 25px;
    line-height: 29px;
    margin: 10px 0 25px 0;
    padding-left: 5px;
    @media (max-width: 1440px){
      @include font-size-a(25);
      @include line-height-a(29);
      @include margin-a(10,0,25,0);
      @include padding-a(0,0,0,5);
    }
    @media (max-width: 600px){
      @include font-size-am(12);
      @include line-height-am(14);
      @include margin-am(10,0,15,0);
      @include padding-am(0,0,0,0);
      max-width: 75%;
    }
  }
  &__row {
    display: flex;
    @media (max-width: 600px){
      flex-direction: column;
    }
  }
  &__input{
    flex: 7;
    &+&{
      margin-left: 20px;
      @media (max-width: 1440px){
        @include margin-a(0,0,0,20);
      }
      @media (max-width: 600px){
        @include margin-am(10,0,10,0);
      }
    }
  }
  &__preloader{
    position: absolute;
    left: 50%;
    top: 52%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    @media (max-width: 1440px){
      @include width-a(60);
      @include height-a(60);
    }
    div {
      width: 48px;
      height: 48px;
      margin: 6px;
      border: 6px solid #fff;
      @media (max-width: 1440px){
        @include width-a(48);
        @include height-a(48);
        @include margin-a(6,6,6,6);
        @include border-width-a(6);
      }
      border-color: #454545 transparent transparent transparent;
    }
  }
  &__button-text{
    opacity: 1;
    transition: opacity linear .3s;
    &.hidden{
      opacity: 0;
    }
  }
  &__error{
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translateY(120%);
  }
  &__button{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, rgba(222, 179, 255, 0.7) 0%, rgba(134, 229, 239, 0.7) 106.94%);
    font-weight: 700;
    color: #454545;
    flex: 3;
    margin-left: 20px;
    border-radius: 10px;
    font-size: 22px;
    line-height: 27px;
    padding: 0 50px;
    cursor: pointer;
    user-select: none;
    @media (max-width: 1440px){
      @include margin-a(0,0,0,20);
      @include border-radius-a(10);
      @include font-size-a(22);
      @include line-height-a(27);
      @include padding-a(0,50,0,50);
    }
    @media (max-width: 600px){
      @include margin-am(0,0,0,0);
      @include border-radius-am(10);
      @include font-size-am(12);
      @include line-height-am(15);
      @include padding-am(10,0,10,0);
    }
    transition: box-shadow linear .2s;
    &:not(.success):hover{
      box-shadow: 1px -1px 5px rgb(193, 215, 249);
      background: linear-gradient(175deg, rgba(222, 179, 255, 0.7) 0%, rgba(134, 229, 239, 0.7) 106.94%);
    }
    &.success{
      cursor: default;
    }
  }
  &__license {
    letter-spacing: 0.01em;
    font-weight: 300;
    font-size: 25px;
    line-height: 29px;
    margin-top: 100px;
    margin-bottom: 10px;
    @media (max-width: 1440px){
      @include font-size-a(25);
      @include line-height-a(29);
      @include margin-a(100,0,10,0);
    }
    @media (max-width: 600px){
      @include font-size-am(8);
      @include line-height-am(9);
      @include margin-a(100,0,10,0);
      max-width: 90%;
    }
  }
  &__bottom {
    position: relative;
    display: flex;
    border: 1px solid #FFFFFF;
    border-radius: 60px;
    margin: 80px -40px 0 -40px;
    padding: 50px 40px;
    @media (max-width: 1440px){
      @include border-radius-a(60);
      @include margin-a(80,-40,0,-40);
      @include padding-a(50,40,50,40);
    }
    @media (max-width: 600px){
      flex-direction: column-reverse;
    }
  }
  &__left {
    flex: 1;
    @media (max-width: 600px){
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  &__bottom-text {
    letter-spacing: 0.01em;
    color: #717171;
    font-size: 20px;
    line-height: 23px;
    @media (max-width: 1440px){
      @include font-size-a(20);
      @include line-height-a(23);
    }
    @media (max-width: 600px){
      @include font-size-am(10);
      @include line-height-am(12);
      text-align: center;
    }
  }
  &__icons {
    display: flex;
    justify-content: space-between;
    margin-top: 65px;
    padding-right: 110px;
    @media (max-width: 1440px){
      @include margin-a(65,0,0,0);
      @include padding-a(0,110,0,0);
    }
    @media (max-width: 600px){
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: flex-start;
      @include margin-am(20,0,0,-80);
      img + img{
        @include margin-am(0,0,20,0);
      }
    }
  }
  &__right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    @media (max-width: 600px){
      display: flex;
      flex-direction: column;
      align-items: center;
      @include margin-am(0,0,15,0);
    }
  }
  &__links {
    display: flex;
    a{
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    a+a{
      margin-left: 20px;
      @media (max-width: 1440px){
        @include margin-a(0,0,0,20);
      }
      @media (max-width: 600px){
        @include margin-am(0,0,0,12);
      }
    }
  }
  &__contacts {
    padding-left: 20px;
    @media (max-width: 1440px){
      @include padding-a(0,0,0,20);
    }
    @media (max-width: 600px){
      @include padding-am(5,0,0,0);
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  &__contact {
    display: flex;
    align-items: center;
    @media (max-width: 600px){
      @include margin-am(5,0,0,0);
    }
  }
  &__contact-icon {
    &--mail{
      margin-top: 5px;
      @media (max-width: 1440px){
        @include margin-a(5,0,0,0);
      }
    }
  }
  &__contact-value {
    font-weight: 500;
    text-align: center;
    color: #614AD3;
    font-size: 36px;
    line-height: 44px;
    padding-left: 50px;
    @media (max-width: 1440px){
      @include font-size-a(36);
      @include line-height-a(44);
      @include padding-a(0,0,0,50);
    }
    @media (max-width: 600px){
      @include font-size-am(16);
      @include line-height-am(18);
      @include padding-am(0,0,0,10);
    }
  }
  &__vtb-img{
    max-width: 202px;
    @media (max-width: 1440px){
      @include max-width-a(202);
    }
    @media (max-width: 600px){
      @include max-width-am(100);
    }
  }
  &__vsk-img{
    max-width: 265px;
    @media (max-width: 1440px){
      @include max-width-a(265);
    @media (max-width: 600px){
      @include max-width-am(130);
    }
    }
  }
  &__figures-img {
    position: absolute;
    filter: blur(1px);
    bottom: 0;
    right: 0;
    margin: 0 -35px 50px 0;
    @media (max-width: 1440px){
      @include margin-a(0,-35,50,0);
      @include max-width-a(305);
    }
    @media (max-width: 600px){
      @include margin-am(0,0,0,0);
      @include max-width-am(120);
    }
  }
  &__youtube img {
    @media (max-width: 1440px){
      @include max-width-a(49);
    }
    @media (max-width: 600px){
      @include max-width-am(37);
    }
  }
  &__vk img {
    @media (max-width: 1440px){
      @include max-width-a(40);
    }
    @media (max-width: 600px){
      @include max-width-am(30);
    }
  }
  &__tg img {
    @media (max-width: 1440px){
      @include max-width-a(38);
    }
    @media (max-width: 600px){
      @include max-width-am(29);
    }
  }
  &__kl img {
    @media (max-width: 1440px){
      @include max-width-a(47);
    }
    @media (max-width: 600px){
      @include max-width-am(30);
    }
  }
  &__phone {
    @media (max-width: 1440px){
      @include max-width-a(30);
    }
    @media (max-width: 600px){
      @include max-width-am(15);
    }
  }
  &__mail {
    @media (max-width: 1440px){
      @include max-width-a(30);
    }
    @media (max-width: 600px){
      @include max-width-am(15);
    }
  }
}

</style>
