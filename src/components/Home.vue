<script>
/* eslint-disable */
import SInput from '../ui/s-input.vue';
import SButton from '../ui/s-button.vue';

export default {
  name: 'Home',
  data() {
    return {
      user: {
        username: '',
        phone: '',
        post: '',
        password: '',
      },
      users: [],
      resource: {},
      node: 'user-data'
    };
  },
  components: {
    SInput,
    SButton,
  },
  methods: {
    Submit() {
      this.resource.saveAlt(this.user);
      console.log(this.user)
    }
  },
  created() {
        const customActions = {
            saveAlt: {method: 'POST', url: 'drivers.json'},
            getData: {method: 'GET', }
        };

        this.resource = this.$resource('{node}.json', {}, customActions);
      }
};
</script>

<template>
  <div class="home-page">
    <h2>Вітаємо у команді!</h2>
    <p>Дякуємо, що обрали SavePaws. Для того, аби почати роботу, Вам треба зареєструватися.</p>
    <form class="set-user-info__form">
      <fieldset>
        <legend class="visually-hidden">
          Основна інформація
        </legend>
        <select  name="" id="" v-model="user.post">
          <option disabled value="">Посада</option>
          <option>Водій</option>
          <option>Адміністратор</option>
        </select>
        <s-input :label="'Ім\'я'" v-model="user.username"></s-input>
        <s-input :label="'Номер телефону'" v-model="user.phone"></s-input>
        <s-input :label="'Пароль для аккаунту'" v-model="user.password"></s-input>
      </fieldset>

      <footer class="set-user-info__footer">
        <s-button :to="{path: '/request-list'}" @click="Submit" >Підтвердити</s-button>
      </footer>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  padding: 32px 12vw 90px;

  h2 {
    font-size: 25px;
    line-height: 30px;
    font-weight: normal;
    text-align: center;
  }

  p {
    font-size: 16px;
    line-height: 24px;
    margin: 0 5vw;
  }
}
.set-user-info__form {
  width: 100%;
  margin-top: 32px;

  fieldset {
    border: none;
    padding: 0;
    margin: 0;
    appearance: none;
  }

  legend {
    padding: 0;
    text-align: center;
    appearance: none;
  }

  .s-input {
    margin: 20px 0;

    &:last-child {
      margin-bottom: 50px;
    }
  }

  select {
    width: 100%;
    height: 45px;
    font-size: 100%;
    cursor: pointer;
    border: 1px solid rgba(51, 51, 51, 0.1);
    border-radius: 20px 20px 0 0;
    padding: 14px;
    appearance: none;
  }
}

.set-user-info__footer {
  margin-top: 20px;
  padding-bottom: 23px;

  display: flex;
  justify-content: center;
  align-items: center;

  .s-button {
    width: 200px;
  }
}
</style>
