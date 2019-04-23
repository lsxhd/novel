<template>
    <div class="menu" style="width: 100%">
      <div class="menu-1">
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          height="50px"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1" style="width: 25%"><a href="" target="_blank"><span style=" display: flex;justify-content: center;">全部作品</span></a></el-menu-item>
          <el-menu-item index="2" style="width: 25%"><a href="" target="_blank"><span style=" display: flex;justify-content: center;">排行</span></a></el-menu-item>
          <el-menu-item index="3" style="width: 25%"><a href="" target="_blank"><span style=" display: flex;justify-content: center;">完本</span></a></el-menu-item>
          <el-menu-item index="4" style="width: 25%"><a href="" target="_blank"><span style=" display: flex;justify-content: center;">免费</span></a></el-menu-item>
        </el-menu>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style scoped>
  .menu{
    margin-top: 20px;
    display: flex;
    justify-content: center;
    /*border: solid 1px deeppink;*/
  }
  .menu-1{
    width: 70%;
    height: 80px;
    /*display: flex;*/
    /*justify-content: center;*/
    /*border: solid 1px magenta;*/
  }
  el-menu-item{
    height: 1000px;
  }
</style>
