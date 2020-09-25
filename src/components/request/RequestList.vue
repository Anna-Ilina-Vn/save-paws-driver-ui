<template>
  <div class="request-list-page">
      <s-header @setFilter="ShowAll" ></s-header>
      <ul>
          <router-link
            tag="li"
            to="/request-details"
            style="cursor: pointer">
            <s-request v-if="filter" :info="request">1</s-request>
            <s-request :info="request">2</s-request>
            <s-request v-if="filter" :info="request">3</s-request>
            <s-request :info="request">4</s-request>
          </router-link>
      </ul>

      <transition name="fade">
        <div class="success-mission" v-if="show" @click="show = false">
          <p>Ура!</p>
          <p>Ще одна тварина врятована завдяки тобі</p>
                <!--<s-icon
          name="cancel"
          fill="var(--primary-text)"
        />-->
        </div>
      </transition>
  </div>
</template>

<script>
import Header from '../Header.vue';
import Request from './Request.vue';

export default {
  data: () => ({
    request: {
      id: '1',
      address: 'проспект Перемоги 5',
      descr: '1 собака',
      injury: true,
    },
    requests: [],
    filter: true,
    show:true',
  }),
  components: {
    's-request': Request,
    's-header': Header,
  },
  methods: {
    ShowAll(value) {
      this.filter = value;
    },
  },
};
</script>

<style scoped>
.request-list-page {
  padding: 32px 0 90px;
  position: relative;
}

.success-mission {
  width: 100%;
  height: 60px;
  position: absolute;
  top: 0;
  padding-top: 10px;
  text-align: center;
  background-color: rgb(204, 255, 229, 0.8);
  color: #7EBF50;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .8s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
