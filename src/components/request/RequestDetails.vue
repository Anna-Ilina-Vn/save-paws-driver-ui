<script>
/* eslint-disable */
import SButton from '../../ui/s-button.vue';
import SModal from "../../ui/s-modal.vue";
import SRadio from "../../ui/s-radio.vue";

export default {
  data: () => ({
    accept: false,    
    cancelM: {
      radio: '',
      textarea: '',
    },
    missionCancel: false,
    show: false,
  }),
  props: {
    info: {
      type: Object,
    },
  },
  components: {
    SButton,
    SModal,
    SRadio,
  },
  methods: {
    Show() {
      this.MissionCancel = false;
      this.show = !this.show;
    },
    Success() {
      this.missionComplite=true;
    }
  },
};
</script>

<template>
  <div class="request-details">
      <!--<s-icon
        name="arrow-left"
        fill="var(--primary-text)"
      />-->
      <h2>Заявка номер 1</h2>

      <ul class="request-details_list"> 
        <li class="request-details_list-item">
          Адреса
          <div><a href="/">проспект Перемоги 5</a></div>
        </li>
        <li class="request-details_list-item">
          Очікування служби
          <div>Так</div>
        </li>
        <li class="request-details_list-item">
          Опис тварини
          <div>1 собака, травм немає</div>
        </li>
        <li class="request-details_list-item">
          Фото
          <div>
            <img src="URL" alt="текст">
            <img src="URL" alt="текст">
            <img src="URL" alt="текст">
            <!--upload-->
          </div>
        </li>
        <li class="request-details_list-item">
          Ім’я
          <div>Наташа</div>
        </li>
        <li class="request-details_list-item">
          Номер телефону
          <div><a href="tel:">097 337 67 76</a></div>
        </li>
      </ul>

      <footer class="request-details__footer" v-if="accept">
        <s-button :to="{divath: '/'}" >Прийняти заявку</s-button>
      </footer>

      <footer class="request-details__footer" v-else>
        <s-button :to="{path: '/request-list'}" @click="Success">Забрав тварину</s-button>
        <s-button type="secondary" @click="missionCancel = true">Скасувати заявку</s-button>
      </footer>

      <s-modal v-if="missionCancel" class="modal-cancel-mission" title="Щось пішло не так?">
        <fieldset class="modal-cancel-mission__body">
          <s-radio name="s" v-model="cancelM.radio" :value="'the car broke down'" label="зломалася машина" />
          <s-radio name="s" v-model="cancelM.radio" :value="'traffic jam'" label="потрапив у затори" />
          <s-radio name="s" v-model="cancelM.radio" :value="'animal escaped'" label="не зміг спіймати тварину" />
          <label class="modal-cancel-mission-message">
            <p>Твоя відповідь:</p>
            <textarea v-model="cancelM.textarea" name="s" rows="6" />
          </label>
        </fieldset>

        <s-button class="modal-cancel-mission-message__btn" slot="footer" @click="Show" :disabled="!(cancelM.radio || cancelM.textarea)">Підтвердити</s-button>
        <s-button class="modal-cancel-mission-message__btn" slot="footer" @click="missionCancel = !missionCancel" type="secondary">Скасувати</s-button>
      </s-modal>

      <s-modal v-if="show" class="modal-cancel-mission" title="Замовник скасував заявку.">
        <s-button class="modal-cancel-mission-message__btn" :to="{path: '/request-list'}" slot="footer" @click="show=false">До заявок</s-button>
      </s-modal>

  </div>
</template>

<style lang="scss" scoped>
.request-details {
  padding: 32px 0 90px;
  
  h2 {
    font-size: 25px;
    line-height: 30px;
    margin: 0 0 30px;
    font-weight: normal;
    text-align: center;
  }
}

.request-details_list {
  width: 80vw;
  margin: 0 auto;
}

.request-details_list-item {
  margin: 20px 0;
  font-size: 14px;

  div {
    margin: 6px 0;
    font-size: 16px;
  }
}

.request-details__footer {
  margin-top: 50px;
  padding-bottom: 23px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .s-button {
    width: 200px;
    margin: 8px 0;
  }
}

img {
  display: inline-block;
  border: 1px solid red;
  margin: 0 10px;
  width: 82px;
  height: 70px;
}
</style>

<style>
.modal-cancel-mission__body {
  border: none;
  padding: 0;
}

.modal-cancel-mission .s-radio{
  border: none;
}

.modal-cancel-mission-message p {
  margin: 20px 0 10px 20px;
  font-size: 13px;
}

.modal-cancel-mission-message textarea{
  border-color: var(--primary);
  border-radius: 20px;
  width: 100%;
  resize: none;
  padding: 10px;
}

.modal-cancel-mission .s-modal__container {
  max-width: 340px;
  display: flex;
  flex-direction: column;
}

.modal-cancel-mission .s-radio__indicator {
  border: 2px solid var(--primary);
}

.modal-cancel-mission .s-modal__footer button {
  margin: 0 auto 16px;
  width: 70%;
}
</style>