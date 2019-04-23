<template>
  <div class="index-top">
    <div class="index-top-1">
      <p><a>登录</a> | <a>注册</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Top',
  data: function () {
    return {
      state: true
    }
  }
}
</script>

<style scoped>
  .index-top{
    display: flex;
    justify-content: center;
    border-bottom: solid 1px silver;
  }
  .index-top-1{
    width: 50%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
</style>
