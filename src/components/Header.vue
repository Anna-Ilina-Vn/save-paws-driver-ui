<script>
/* eslint-disable */
export default {
  data: () => ({
    active: true,
  }),
  methods: {
    makeActive() {
      this.active = !this.active;
      this.$emit('setFilter', this.active);
    },
  },
}
</script>>
<template>
  <div class="header_nav">
    <ul class="header_nav-list">
      <li class="header_nav-list-item" :class="{'active': active}" @click="makeActive"><a>Усі заявки</a></li>
      <li class="header_nav-list-item" :class="{'active': !active}" @click="makeActive"><a>Мої заявки</a></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.header_nav-list {
  padding: 0;
  list-style: none;
  width: 90%;
  margin: 0 auto;
  border: 1px solid var(--primary);
  border-radius: 30px;
 }
.header_nav-list-item {
  display: inline-block;
  line-height: 50px;
  width: 50%;
  padding: 0 24px;
  text-align: center;
  font-size: 20px;
  border-radius: 30px;

  a {
    color: var(--primary);
  }
}

.active {
  background-color: var(--primary);
  
  a {
    color: var(--white);
  }
}
</style>

