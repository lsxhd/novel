<template>
  <div >
    <p style="text-align: center">后端管理页面</p>
    <div class="usrManagement">
      <el-tabs v-model="activeName" tab-position="left" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">
          <UserList></UserList>
        </el-tab-pane>
        <el-tab-pane label="上传书籍" name="second">
          <upload></upload>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Top from '../../components/Top'
import UserList from './UserList'
import Upload from '../../components/Upload'
export default {
  name: 'UserManagement',
  components: {Upload, UserList, Top},
  data () {
    return {
      activeName: 'second'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}

</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .usrManagement{
    margin-left: 100px;
    margin-top: 100px;
    padding-top: 10px;
    border-top: 1px silver solid;
  }
</style>
