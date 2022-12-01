<template>
  <div class="form">
    <div class="form__progress">
      <div class="form__progress-names">
        <div class="form__progress-name form__progress-name--1">
          Выбор тарифа
        </div>
        <div class="form__progress-name form__progress-name--2">Заявка</div>
        <div class="form__progress-name form__progress-name--3">Оплата</div>
      </div>
      <div class="form__progress-bar">
        <div
          class="form__progress-now"
          :class="{
            'form__progress-now--middle': state == 2,
            'form__progress-now--end': state == 3,
          }"
        ></div>
      </div>
    </div>
    <mq-responsive target="small+">
      <img
        class="form__figures-img"
        :src="require('@/assets/img/figures.webp')"
      />
    </mq-responsive>
    <mq-responsive target="mobile">
      <img
        class="form__figures-img"
        :src="require('@/assets/img/figures-m.webp')"
      />
    </mq-responsive>
    <mq-responsive target="small+">
      <img
        class="form__big-figures-img"
        :src="require('@/assets/img/big-figures.webp')"
      />
    </mq-responsive>
    <mq-responsive target="mobile">
      <img
        class="form__big-figures-img"
        :src="require('@/assets/img/big-figures-m.webp')"
      />
    </mq-responsive>
    <mq-responsive target="small+">
      <img
        class="form__bubble-img"
        :src="require('@/assets/img/bubble.webp')"
      />
    </mq-responsive>
    <div class="form__tariffs" id="tariffs">
      <div
        class="form__tariff"
        :class="{
          'form__tariff--checked': data.tariff && data.tariff.number == 1,
          'form__tariff--unchecked': data.tariff && data.tariff.number != 1,
        }"
      >
        <div class="form__tariff-name">Тариф №1</div>
        <div class="form__tariff-content">
          <div class="form__tariff-text">Страховая сумма</div>
          <div class="form__tariff-summ">100 000 ₽</div>
          <div class="form__tariff-period">
            <span class="form__tariff-period-label">Период:</span>
            <span class="form__tariff-period-value">12 мес.</span>
          </div>
        </div>
        <div class="form__tariff-cost">
          <span class="form__price">1 000 ₽</span
          ><span class="form__cost-text">Стоимость</span>
        </div>
        <div class="form__tariff-button button" @click="selectTariff(0)">
          Выбрать
        </div>
      </div>
      <div
        class="form__tariff"
        :class="{
          'form__tariff--checked': data.tariff && data.tariff.number == 2,
          'form__tariff--unchecked': data.tariff && data.tariff.number != 2,
        }"
      >
        <div class="form__tariff-name">Тариф №2</div>
        <div class="form__tariff-content">
          <div class="form__tariff-text">Страховая сумма</div>
          <div class="form__tariff-summ">300 000 ₽</div>
          <div class="form__tariff-period">
            <span class="form__tariff-period-label">Период:</span>
            <span class="form__tariff-period-value">12 мес.</span>
          </div>
        </div>
        <div class="form__tariff-cost">
          <span class="form__price">2 650 ₽</span
          ><span class="form__cost-text">Стоимость</span>
        </div>
        <div class="form__tariff-button button" @click="selectTariff(1)">
          Выбрать
        </div>
      </div>
      <div
        class="form__tariff"
        :class="{
          'form__tariff--checked': data.tariff && data.tariff.number == 3,
          'form__tariff--unchecked': data.tariff && data.tariff.number != 3,
        }"
      >
        <div class="form__tariff-name">Тариф №3</div>
        <div class="form__tariff-content">
          <div class="form__tariff-text">Страховая сумма</div>
          <div class="form__tariff-summ">500 000 ₽</div>
          <div class="form__tariff-period">
            <span class="form__tariff-period-label">Период:</span>
            <span class="form__tariff-period-value">12 мес.</span>
          </div>
        </div>
        <div class="form__tariff-cost">
          <span class="form__price">4 000 ₽</span
          ><span class="form__cost-text">Стоимость</span>
        </div>
        <div class="form__tariff-button button" @click="selectTariff(2)">
          Выбрать
        </div>
      </div>
      <div
        class="form__tariff"
        :class="{
          'form__tariff--checked': data.tariff && data.tariff.number == 4,
          'form__tariff--unchecked': data.tariff && data.tariff.number != 4,
        }"
      >
        <div class="form__tariff-name">Тариф №4</div>
        <div class="form__tariff-content">
          <div class="form__tariff-text">Страховая сумма</div>
          <div class="form__tariff-summ">1 000 000 ₽</div>
          <div class="form__tariff-period">
            <span class="form__tariff-period-label">Период:</span>
            <span class="form__tariff-period-value">12 мес.</span>
          </div>
          <div class="form__tariff-cost">
            <span class="form__price">7 500 ₽</span
            ><span class="form__cost-text">Стоимость</span>
          </div>
          <div class="form__tariff-button button" @click="selectTariff(3)">
            Выбрать
          </div>
        </div>
      </div>
    </div>
    <mq-responsive target="mobile" class="form__swipe">
      <div class="form__swipe-text">swipe</div>
      <div class="form__swipe-icon">
        <img
          class="form__swipe-arrow"
          :src="require('@/assets/img/arrow.svg')"
        />
      </div>
    </mq-responsive>
    <div class="form__form" id="form">
      <div class="form__caption">Укажите данные о себе</div>
      <div class="form__row">
        <custom-input
          type="text"
          class="form__input"
          v-model:value="data.full_name"
          placeholder="ФИО"
          :error="rules.full_name.error"
          :errorText="rules.full_name.errorText"
          @blur="validateProp('full_name')"
        />
        <mq-responsive
          target="small+"
          class="form__input form__input--box input"
          :class="{ checked: data.gender == 1 }"
          @click="genderHandle(1)"
          >М
          <div v-if="rules.gender.error" class="cu-input__error">
            <span class="cu-input__error-icon">*</span>
          </div>
        </mq-responsive>
        <mq-responsive
          target="small+"
          class="form__input form__input--box input"
          :class="{ checked: data.gender == 2 }"
          @click="genderHandle(2)"
          >Ж
          <div v-if="rules.gender.error" class="cu-input__error">
            <span class="cu-input__error-icon">*</span>
          </div>
        </mq-responsive>
        <custom-input
          type="date"
          class="form__input form__input--mobile"
          :max="maxDate"
          :min="minDate"
          v-model:value="data.birthday"
          placeholder="Дата рождения"
          :error="rules.birthday.error"
          :errorText="rules.birthday.errorText"
          @blur="validateProp('birthday')"
        />
        <custom-input
          type="text"
          class="form__input form__input--pc"
          v-model:value="data.birthday"
          placeholder="Дата рождения"
          :error="rules.birthday.error"
          :errorText="rules.birthday.errorText"
          @blur="validateProp('birthday')"
          mask="99.99.9999"
        />
      </div>
      <div class="form__row">
        <custom-input
          type="tel"
          class="form__input form__input--bigger"
          v-model:value="data.passport"
          placeholder="Серия и номер паспорта"
          :error="rules.passport.error"
          mask="9999 999999"
          :errorText="rules.passport.errorText" @blur="validateProp('passport')"
          :style="{'flex': 22}"
        />
        <custom-input
          type="date"
          class="form__input form__input--mobile"
          :min="minDate"
          v-model:value="data.p_date"
          placeholder="Дата выдачи паспорта"
          :error="rules.p_date.error"
          :errorText="rules.p_date.errorText"
          @blur="validateProp('p_date')"
        />
        <custom-input type="text" class="form__input form__input--bigger" v-model:value="data.inn"
          placeholder="ИНН" :error="rules.inn.error" mask="999999999999"
          :errorText="rules.inn.errorText" @blur="validateProp('inn')"
          :style="{'flex': 12}"
        />
        <custom-input
          type="text"
          class="form__input form__input--bigger form__input--pc"
          v-model:value="data.p_date"
          placeholder="Дата выдачи паспорта"
          :style="{'flex': 22}"
          :error="rules.p_date.error"
          mask="99.99.9999"
          :errorText="rules.p_date.errorText"
          @blur="validateProp('p_date')"
        />
      </div>
      <mq-responsive target="mobile" class="form__row form__row--mobile">
        <div
          class="form__input form__input--box input"
          :class="{ checked: data.gender == 1 }"
          @click="genderHandle(1)"
        >
          М
          <div v-if="rules.gender.error" class="cu-input__error">
            <span class="cu-input__error-icon">*</span>
          </div>
        </div>
        <div
          class="form__input form__input--box input"
          :class="{ checked: data.gender == 2 }"
          @click="genderHandle(2)"
        >
          Ж
          <div v-if="rules.gender.error" class="cu-input__error">
            <span class="cu-input__error-icon">*</span>
          </div>
        </div>
      </mq-responsive>
      <div class="form__caption">Оставьте контакты</div>
      <div class="form__row form__row--bottom">
        <custom-input
          type="email"
          class="form__input"
          v-model:value="data.email"
          placeholder="Эл. почта"
          :error="rules.email.error"
          :errorText="rules.email.errorText"
          @blur="validateProp('email')"
        />
        <custom-input
          type="tel"
          class="form__input"
          v-model:value="data.phone"
          placeholder="Моб. телефон"
          :error="rules.phone.error"
          mask="+7 (999) 999-99-99"
          :errorText="rules.phone.errorText"
          @blur="validateProp('phone')"
        />
      </div>
      <div class="form__note form__note--top" :class="{ visible: data.tariff }">
        Вы подаете заявку на покупку полиса страхования профессиональной
        ответственности по тарифу {{ number }} стоимостью {{ price }} руб. со
        сроком 12 месяцев
      </div>
    </div>
    <div class="form__button button" @click="confirmForm">
      <transition name="fade">
        <div
          v-if="rules.tariff.error || preloader.error"
          class="cu-input__error"
        >
          <span class="cu-input__error-icon">*</span
          ><span>{{ errorText }}</span>
        </div>
      </transition>
      <span :class="{ hidden: preloader.visible }" class="form__button-text"
        >Оформить</span
      >
      <cu-preloader :visible="preloader.visible" class="form__preloader" />
    </div>
    <div class="form__note">
      Нажимая кнопку “Оформить”, вы соглашаетесь на обработку ваших персональных
      данных и принимаете условия страхования
    </div>
  </div>
</template>

<script>
import { MqResponsive } from "vue3-mq";
import CustomInput from "@/components/CustomInput.vue";
import CuPreloader from "@/components/CuPreloader.vue";
export default {
  name: "FormTag",
  components: {
    MqResponsive,
    CustomInput,
    CuPreloader,
  },
  data() {
    return {
      preloader: {
        visible: false,
        error: false,
      },
      data: {
        full_name: "",
        birthday: "",
        phone: "",
        email: "",
        inn: '',
        passport: "",
        p_date: "",
        address: "",
        gender: null,
        tariff: null,
      },
      tariffs: [
        {
          number: 1,
          price: "1 000",
          summ: 100000,
        },
        {
          number: 2,
          price: "2 650",
          summ: 300000,
        },
        {
          number: 3,
          price: "4 000",
          summ: 500000,
        },
        {
          number: 4,
          price: "7 500",
          summ: 1000000,
        },
      ],
      success: false,
      rules: {
        full_name: { required: true, error: false, errorText: "" },
        birthday: {
          required: true,
          error: false,
          complete: true,
          errorText: "",
        },
        phone: { required: true, error: false, complete: true, errorText: "" },
        email: { required: true, error: false },
        gender: { required: true, error: false },
        tariff: { required: true, error: false },
        passport: {
          required: true,
          error: false,
          complete: true,
          errorText: "",
        },
        inn: {required: true, error: false, complete: true, errorText: ''},
        p_date: { required: true, error: false, complete: true, errorText: "" },
      },
    };
  },
  computed: {
    errorText() {
      return this.preloader.error
        ? "Ошибка, проверьте правильность введенных данных"
        : "Выберите тариф";
    },
    number() {
      return this.data.tariff ? this.data.tariff.number : null;
    },
    price() {
      return this.data.tariff ? this.data.tariff.price : null;
    },
    state() {
      return this.success ? 3 : this.data.tariff ? 2 : 1;
    },
    maxDate() {
      let date = new Date();
      return new Date(date.setFullYear(date.getFullYear() - 18))
        .toISOString()
        .split("T")[0];
    },
    minDate() {
      return "1900-01-01";
    },
  },
  methods: {
    validateProp(prop) {
      if (this.rules[prop].required) {
        if (this.data[prop]) {
          this.rules[prop].error = false;
        } else {
          this.rules[prop].error = true;
          this.rules[prop].errorText = "Поле является обязательным";
          return false;
        }
      }
      if (this.rules[prop].complete) {
        if (!this.data[prop].includes("_")) {
          this.rules[prop].error = false;
        } else {
          this.rules[prop].error = true;
          this.rules[prop].errorText = "Поле должно быть заполнено";
          return false;
        }
      }
      if (prop == "email") {
        let reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(this.data.email) == false) {
          this.rules[prop].error = true;
          this.rules[prop].errorText = "Введите корректный e-mail";
          return false;
        }
      }
      if (prop == "p_date" || prop == "birthday") {
        if (
          !Date.parse(this.data[prop].split(".").reverse().join("-")) ||
          Date.parse(this.data[prop].split(".").reverse().join("-")) >
            Date.now()
        ) {
          this.rules[prop].error = true;
          this.rules[prop].errorText = "Введите корректную дату";
          return false;
        }
      }
      return true;
    },
    validateForm() {
      let error = false;
      for (let prop in this.rules) {
        if (!this.validateProp(prop)) {
          error = true;
        }
      }
      return !error;
    },
    async confirmForm() {
      if (this.preloader.visible) return;
      this.success = false;
      if (this.validateForm()) {
        let formData = Object.assign({}, this.data);
        formData.birthday = formData.birthday.split(".").reverse().join("-");
        formData.p_date = formData.p_date.split(".").reverse().join("-");
        formData.p_series = formData.passport.split(" ")[0];
        formData.p_number = formData.passport.split(" ")[1];
        formData.phone = formData.phone.replace(/[^0-9]/g, "");
        formData.summ = this.data.tariff.summ;
        delete formData.tariff;
        delete formData.passport;
        this.preloader.error = false;
        this.preloader.visible = true;
        this.axios
          .post("https://api.vskcorp.ru/vtb/buy/", formData)
          .then((response) => {
            this.preloader.visible = false;
            this.success = true;
            document.location.href = response.data;
            // window.open(response.data);
          })
          .catch(() => {
            this.preloader.visible = false;
            this.preloader.error = true;
          });
      }
    },
    selectTariff(number) {
      if (this.data.tariff && this.data.tariff.number == number + 1) {
        this.data.tariff = null;
      } else {
        this.data.tariff = this.tariffs[number];
        this.validateProp("tariff");
        // const el = document.getElementById('form');
        // el.scrollIntoView({behavior: "smooth"});
      }
    },
    genderHandle(gender) {
      if (gender == 1) {
        this.data.gender = this.data.gender == 1 ? null : 1;
      } else {
        this.data.gender = this.data.gender == 2 ? null : 2;
      }
      this.validateProp("gender");
    },
  },
};
</script>

<style lang="scss">
@import "../assets/custom.scss";
.form {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__progress {
    display: flex;
    flex-direction: column;
    padding: 4.5% 9% 0 9%;
    width: 100%;
    @media (max-width: 600px) {
      padding: 9% 5% 0 5%;
    }
  }
  &__progress-names {
    display: flex;
    justify-content: space-between;
    padding: 1% 0%;
    letter-spacing: 0.01em;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
    @media (max-width: 1440px) {
      @include font-size-a(30);
      @include line-height-a(35);
    }
    @media (max-width: 600px) {
      @include font-size-am(12);
      @include line-height-am(14);
      font-weight: 500;
    }
  }
  &__progress-name {
    width: 33%;
    display: flex;
    &--1 {
      justify-content: flex-start;
      padding-left: 2%;
    }
    &--2 {
      justify-content: center;
    }
    &--3 {
      justify-content: flex-end;
    }
  }
  &__progress-bar {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0.276) 100%
    );
    backdrop-filter: blur(10px);
    width: 100%;
    border-radius: 10px;
    height: 30px;
    margin-bottom: 260px;
    @media (max-width: 1440px) {
      @include border-radius-a(10);
      @include height-a(30);
      @include margin-a(0, 0, 260, 0);
    }
    @media (max-width: 600px) {
      @include border-radius-am(10);
      @include height-am(12);
      @include margin-am(0, 0, 55, 0);
    }
  }
  &__progress-now {
    width: 24%;
    &--middle {
      width: 57%;
    }
    &--end {
      width: 100%;
    }
    background: linear-gradient(
      90deg,
      rgba(162, 89, 255, 0.8) 0%,
      rgba(9, 249, 191, 0.552) 100%
    );
    backdrop-filter: blur(10px);
    border-radius: 10px;
    height: 30px;
    transition: width linear 0.2s;
    @media (max-width: 1440px) {
      @include border-radius-a(10);
      @include height-a(30);
    }
    @media (max-width: 600px) {
      @include border-radius-am(10);
      @include height-am(12);
    }
  }
  &__tariffs {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 4%;
    z-index: 1;
    @media (max-width: 600px) {
      overflow-x: auto;
      max-width: 100vw;
      padding: 18% 6% 25% 6%;
      -ms-overflow-style: none; /* IE и Edge */
      scrollbar-width: none; /* Firefox */
      &::-webkit-scrollbar {
        display: none; /* для Chrome, Safari и Opera */
      }
      @include margin-am(-50, 0, -70, 0);
    }
  }
  &__tariff {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(
      106.97deg,
      rgba(255, 255, 255, 0.2) 5.84%,
      rgba(255, 255, 255, 0.05) 70.7%
    );
    background-blend-mode: overlay;
    backdrop-filter: blur(47px);
    box-shadow: 0 0 5px white;
    border-radius: 60px;
    padding: 40px 20px 30px 20px;
    transition: all linear 0.1s;
    &--checked {
      box-shadow: -13px -7px 38px rgba(225, 251, 255, 0.8),
        10px 9px 90px rgba(97, 74, 211, 0.8);
      @media (max-width: 1440px) {
        @include box-shadow-tariff-a();
      }
      @media (max-width: 600px) {
        @include box-shadow-tariff-am();
      }
    }
    &--unchecked {
      background: none;
      box-shadow: none;
      opacity: 0.6;
    }
    @media (max-width: 1440px) {
      @include border-radius-a(60);
      @include padding-a(40, 20, 30, 20);
    }
    @media (max-width: 600px) {
      @include border-radius-am(12);
      @include padding-am(20, 20, 30, 20);
      backdrop-filter: blur(9px);
      & + & {
        @include margin-am(0, 0, 0, 25);
      }
    }
  }
  &__tariff-name {
    font-weight: 600;
    text-align: center;
    letter-spacing: 0.01em;
    color: #4c5ce9;
    font-size: 30px;
    line-height: 36px;
    @media (max-width: 1440px) {
      @include font-size-a(30);
      @include line-height-a(36);
    }
    @media (max-width: 600px) {
      @include font-size-am(24);
      @include line-height-am(29);
    }
  }
  &__tariff-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__tariff-text {
    text-align: center;
    letter-spacing: 0.01em;
    font-size: 20px;
    line-height: 23px;
    margin-top: 50px;
    @media (max-width: 1440px) {
      @include font-size-a(20);
      @include line-height-a(23);
      @include margin-a(50, 0, 0, 0);
    }
    @media (max-width: 600px) {
      @include font-size-am(16);
      @include line-height-am(19);
      @include margin-am(25, 0, 0, 0);
    }
  }
  &__tariff-summ {
    font-weight: 600;
    text-align: center;
    letter-spacing: 0.01em;
    font-size: 40px;
    line-height: 48px;
    width: 240px;
    margin-top: 10px;
    margin-bottom: 10px;
    @media (max-width: 1440px) {
      @include font-size-a(40);
      @include line-height-a(48);
      @include width-a(240);
      @include margin-a(10, 0, 10, 0);
    }
    @media (max-width: 600px) {
      @include font-size-am(36);
      @include line-height-am(43);
      @include width-am(210);
      @include margin-am(10, 0, 10, 0);
    }
  }
  &__tariff-period {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__tariff-period-label {
    letter-spacing: 0.01em;
    font-size: 20px;
    line-height: 23px;
    margin-right: 10px;
    @media (max-width: 1440px) {
      @include font-size-a(20);
      @include line-height-a(23);
      @include margin-a(0, 10, 0, 0);
    }
    @media (max-width: 600px) {
      @include font-size-am(16);
      @include line-height-am(19);
    }
  }
  &__tariff-period-value {
    font-weight: 600;
    letter-spacing: 0.01em;
    font-size: 25px;
    line-height: 30px;
    @media (max-width: 1440px) {
      @include font-size-a(25);
      @include line-height-a(30);
    }
    @media (max-width: 600px) {
      @include font-size-am(22);
      @include line-height-am(26);
    }
  }
  &__tariff-cost {
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    padding: 15px 30px;
    margin-top: 50px;
    margin-bottom: 25px;
    @media (max-width: 1440px) {
      @include border-radius-a(12);
      @include padding-a(15, 30, 15, 30);
      @include margin-a(50, 0, 25, 0);
    }
    @media (max-width: 600px) {
      @include border-radius-am(12);
      @include padding-am(15, 30, 15, 30);
      @include margin-am(25, 0, 30, 0);
    }
  }
  &__price {
    font-weight: 600;
    text-align: center;
    letter-spacing: 0.01em;
    font-size: 40px;
    line-height: 48px;
    @media (max-width: 1440px) {
      @include font-size-a(40);
      @include line-height-a(48);
    }
    @media (max-width: 600px) {
      @include font-size-am(40);
      @include line-height-am(48);
    }
  }
  &__cost-text {
    text-align: center;
    letter-spacing: 0.01em;
    font-size: 20px;
    line-height: 23px;
    @media (max-width: 1440px) {
      @include font-size-a(20);
      @include line-height-a(23);
    }
    @media (max-width: 600px) {
      @include font-size-am(20);
      @include line-height-am(23);
    }
  }
  &__tariff-button {
    font-weight: 700;
    text-transform: capitalize;
    border-radius: 20px;
    font-size: 22px;
    line-height: 27px;
    padding: 15px 70px;
    @media (max-width: 1440px) {
      @include border-radius-a(20);
      @include font-size-a(22);
      @include line-height-a(27);
      @include padding-a(15, 70, 15, 70);
    }
    @media (max-width: 600px) {
      @include border-radius-am(20);
      @include font-size-am(22);
      @include line-height-am(27);
      @include padding-am(15, 70, 15, 70);
    }
  }
  &__swipe {
    display: flex;
  }
  &__swipe-text {
    background: linear-gradient(
      80.19deg,
      rgba(162, 89, 255, 0.648) -60.35%,
      rgba(9, 249, 191, 0.15) 80.45%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-weight: 700;
    text-align: center;
    letter-spacing: 0.01em;
    font-size: 36px;
    line-height: 44px;
    @include font-size-am(36);
    @include line-height-am(44);
  }
  &__swipe-icon {
    position: relative;
    background: rgba(255, 255, 255, 0.4);
    opacity: 0.8;
    backdrop-filter: blur(9px);
    border: 1px solid rgba(9, 249, 191, 0.3);
    @include border-radius-am(12);
    @include width-am(70);
    @include height-am(50);
    @include margin-am(0, 0, 0, 50);
  }
  &__swipe-arrow {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &__form {
    margin-top: 100px;
    padding: 0 80px;
    width: 100%;
    @media (max-width: 1440px) {
      @include margin-a(100, 0, 0, 0);
      @include padding-a(0, 80, 0, 80);
    }
    @media (max-width: 600px) {
      @include padding-am(0, 19, 0, 19);
    }
  }
  &__caption {
    font-weight: 600;
    letter-spacing: 0.01em;
    font-size: 36px;
    line-height: 43px;
    padding-left: 5px;
    @media (max-width: 1440px) {
      @include font-size-a(36);
      @include line-height-a(43);
      @include padding-a(0, 0, 0, 5);
    }
    @media (max-width: 600px) {
      @include font-size-am(20);
      @include line-height-am(24);
      @include padding-am(0, 0, 0, 0);
      @include margin-am(20, 0, 15, 0);
    }
  }
  &__row {
    display: flex;
    margin: 20px 0;
    @media (max-width: 1440px) {
      @include margin-a(20, 0, 20, 0);
    }
    @media (max-width: 600px) {
      & + & {
        @include margin-am(10, 0, 0, 0);
      }
      flex-direction: column;
      @include margin-a(0, 0, 0, 0);
    }
    &--bottom {
      margin-bottom: 30px;
      @media (max-width: 1440px) {
        @include margin-a(20, 0, 30, 0);
      }
      @media (max-width: 600px) {
        @include margin-a(0, 0, 0, 0);
      }
    }
    &--mobile {
      flex-direction: row;
      @include margin-am(10, 0, 0, 0);
    }
  }
  &__input {
    flex: 32;
    &--pc {
      @media (max-width: 600px) {
        display: none;
      }
    }
    &--mobile {
      display: none;
      @media (max-width: 600px) {
        display: inherit;
      }
    }
    &--smaller {
      flex: 18;
    }
    &--bigger {
      flex: 32;
    }
    &--box {
      position: relative;
      flex: 6;
      text-align: center;
      cursor: pointer;
      user-select: none;
      transition: background-color linear 0.2s, border-color linear 0.2s;
      &:hover {
        background-color: rgba(217, 225, 255, 0.3);
      }
      &.checked {
        background-color: rgba(77, 100, 255, 0.3);
        border-color: #d2d2d2;
      }
    }
    & + & {
      margin-left: 20px;
      @media (max-width: 1440px) {
        @include margin-a(0, 0, 0, 20);
      }
      @media (max-width: 600px) {
        @include margin-am(10, 0, 0, 0);
      }
    }
    &--box + &--box {
      @media (max-width: 600px) {
        @include margin-am(0, 0, 0, 10);
      }
    }
  }
  &__note {
    letter-spacing: 0.01em;
    max-width: 55%;
    display: flex;
    justify-content: center;
    text-align: center;
    font-weight: 200;
    font-size: 20px;
    line-height: 23px;
    @media (max-width: 1440px) {
      @include font-size-a(20);
      @include line-height-a(23);
    }
    @media (max-width: 600px) {
      @include font-size-am(8);
      @include line-height-am(9);
      @include margin-am(5, 0, 0, 0);
      max-width: 50%;
    }
    &--top {
      text-align: left;
      max-width: 60%;
      margin-top: 10px;
      opacity: 0;
      transition: opacity linear 0.2s;
      @media (max-width: 1440px) {
        @include margin-a(10, 0, 0, 0);
      }
      @media (max-width: 600px) {
        @include margin-am(10, 0, 0, 0);
        @include font-size-am(10);
        @include line-height-am(11);
        @include margin-am(20, 0, 0, 0);
        max-width: 80%;
      }
      &.visible {
        opacity: 1;
      }
    }
  }
  &__preloader {
    position: absolute;
    left: 50%;
    top: 52%;
    transform: translate(-50%, -50%);
    div {
      border-color: #614ad3 transparent transparent transparent;
    }
  }
  &__button-text {
    opacity: 1;
    transition: opacity linear 0.3s;
    &.hidden {
      opacity: 0;
    }
  }
  &__button {
    position: relative;
    background: rgba(255, 255, 255, 0.3);
    font-weight: 700;
    color: #614ad3;
    border-radius: 30px;
    font-size: 42px;
    line-height: 51px;
    padding: 25px 60px;
    margin-top: 60px;
    margin-bottom: 30px;
    .cu-input__error {
      font-weight: 400;
      bottom: -40%;
      right: 50%;
      transform: translate(50%);
      margin: 0;
      @media (max-width: 600px) {
        bottom: -74%;
      }
    }
    @media (max-width: 1440px) {
      @include border-radius-a(30);
      @include font-size-a(42);
      @include line-height-a(51);
      @include padding-a(25, 60, 25, 60);
      @include margin-a(60, 0, 30, 0);
    }
    @media (max-width: 600px) {
      @include border-radius-am(10);
      @include font-size-am(14);
      @include line-height-am(18);
      @include padding-am(10, 30, 10, 30);
      @include margin-am(25, 0, 10, 0);
    }
  }
  &__figures-img {
    position: absolute;
    top: 200px;
    left: 610px;
    @media (max-width: 1440px) {
      @include top-a(200);
      @include left-a(610);
      @include max-width-a(305);
    }
    @media (max-width: 600px) {
      @include top-am(85);
      @include left-am(180);
    }
  }
  &__big-figures-img {
    position: absolute;
    top: 260px;
    left: -350px;
    @media (max-width: 1440px) {
      @include top-a(260);
      @include left-a(-350);
      @include max-width-a(776);
    }
    @media (max-width: 600px) {
      @include top-am(100);
      @include left-am(-75);
    }
  }
  &__bubble-img {
    position: absolute;
    top: 775px;
    left: 965px;
    @media (max-width: 1440px) {
      @include top-a(775);
      @include left-a(965);
      @include max-width-a(175);
    }
  }
}
.input {
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid #ffffff;
  font-weight: 100;
  border-radius: 10px;
  font-size: 36px;
  line-height: 41px;
  padding: 15px 15px;
  @media (max-width: 1440px) {
    @include border-radius-a(10);
    @include font-size-a(36);
    @include line-height-a(41);
    @include padding-a(16, 15, 14, 15);
  }
  @media (max-width: 600px) {
    @include border-radius-am(6);
    @include font-size-am(20);
    @include line-height-am(23);
    @include padding-am(14, 11, 10, 11);
  }
}
</style>
