<template>
  <div class="search">
    <div class="search-box">
      <el-input v-model="keyword" placeholder="请输入内容"></el-input>
    </div>
    <div class="search-box-icon" >
      <el-row>
        <el-button icon="el-icon-search" circle></el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchBox',
  data: function () {
    return {
      keyword: ''
    }
  }
}
</script>

<style scoped>
  .search{
    height: 100px;
    border-bottom: solid 1px silver;
    padding-right: 15%;
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search-box{
    float: left;
    width: 52%;
    height: 30px;
    margin-top: 30px;
    margin-left: 20%;
    margin-right: 20px;
  }
  .search-box-icon{
    height: 40px;
    padding-top: 30px;
  }
</style>
