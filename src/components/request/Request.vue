<template>
  <div class="request-wrapper">
      <h2>{{ info.address }}</h2>
      <p>{{ info.descr }} <span class="color-text" v-show="info.injury">є травми</span></p>
      <p class="request-number">Номер заявки - {{ info.id }}</p>
      <slot />
  </div>
</template>

<script>

export default {
  props: {
    info: {
      type: Object,
    },
  },
};
</script>
<style lang="scss" scoped>
  .request-wrapper {
    display: block;
    width: 300px;
    min-height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
    margin: 24px auto;
    border-radius: 20px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);

    .color-text {
      color: #FA3E3E;
    }

    h2 {
      font-size: 20px;
      line-height: 24px;
      font-weight: normal;
    }
  }

  .request-number {
    font-size: 13px;
    line-height: 20px;
  }
</style>
