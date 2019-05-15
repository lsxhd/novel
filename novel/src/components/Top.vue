<template>
  <div>
    <div v-if="!isLogin" class="index-top">
      <div class="index-top-1">
        <div>
          <el-button type="text" @click="HomePage()">首页</el-button>
          <el-button type="text" @click="dialogLoginVisible = true">登录</el-button>
          <el-button type="text" @click="registered()">注册</el-button>
          <el-dialog title="" :visible.sync="dialogLoginVisible">
            <div slot="footer" class="dialog-footer">
              <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <!--在弹框中放入标签页，标签页为用户登录，管理员登录和注册   -->
                <el-tabs v-model="activeName" >
                  <el-tab-pane label="用户登录" name="first">
                    <el-form-item label="用户名" prop="name">
                      <el-input v-model.number="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                      <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-button @click="dialogLoginVisible = false">取 消</el-button>
                    <el-button type="primary" @click="getlogin ()">确 定</el-button>
                  </el-tab-pane>
                  <el-tab-pane label="管理员登录" name="second">
                    <el-form-item label="用户名" prop="name">
                      <el-input v-model.number="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                      <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-button @click="dialogLoginVisible = false">取 消</el-button>
                    <el-button type="primary" @click="getloginManagement ()">确 定</el-button>
                  </el-tab-pane>
                  <el-tab-pane label="注册" name="third">
                    <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
                      <el-form-item label="用户名" prop="name">
                        <el-input v-model.number="ruleForm.name"></el-input>
                      </el-form-item>
                      <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="确认密码" prop="checkPass">
                        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                      </el-form-item>
                    </el-form>
                    <el-button @click="dialogRegisteredVisible = false">取 消</el-button>
                    <el-button type="primary" @click="registered()">确 定</el-button>
                  </el-tab-pane>
                </el-tabs>
              </el-form>
            </div>
          </el-dialog>
        </div>
      </div>
    </div>
    <div v-if="isLogin" class="index-top-2">
      <el-button type="text" @click="HomePage()">首页</el-button>
      <el-button type="text" @click="viewInfo()">个人书架</el-button>
      <el-button type="text" @click="removelogin()">退出登录</el-button>
    </div>
  </div>
</template>

<script>
import { loginManagement } from '@/api/login'
// import { getUser } from '@/utils/auth'
export default {
  name: 'Top',
  data: function () {
    return {
      activeName: 'first',
      isLogin: false,
      userId: this.$store.state.user.userId,
      userName: '',
      state: true,
      dialogLoginVisible: false,
      ruleForm: {
        name: '尘世不及',
        pass: '123456',
        checkPass: ''
      }
    }
  },
  created: function () {
    this.islogin()
  },
  methods: {
    // 普通用户登录
    getlogin () {
      this.dialogLoginVisible = false
      const users = {
        user_name: this.ruleForm.name,
        password: this.ruleForm.pass
      }
      this.$store.dispatch('Login', users).then(this.islogin)
    },
    getloginManagement () {
      this.dialogLoginVisible = false
      const users = {
        user_name: this.ruleForm.name,
        password: this.ruleForm.pass
      }
      loginManagement(users).then(res => {
        console.log(res.data)
        if (res.data.code === 2000) {
          this.$router.push({
            path: '/user'
          })
        } else {
          this.$message({
            message: '密码或者用户名错误',
            type: 'warning'
          })
        }
      })
    },
    viewInfo () {
      var userId = this.$store.state.user.userId
      if (userId === '' || userId === undefined || !Number.isInteger(parseInt(userId))) {
        this.$message({
          message: '请登录',
          type: 'warning'
        })
      } else {
        this.$router.push({
          path: '/userInfo'
        })
      }
    },
    removelogin () {
      this.$store.dispatch('FedLogOut').then(this.islogin())
      location.reload()
    },
    islogin: function () {
      var userId = this.$store.state.user.userId
      // console.log('userid:')
      // console.log(userId)
      // console.log(userId !== undefined)
      // console.log(userId !== '')
      // console.log(!Number.isInteger(parseInt(userId)))
      if (userId === '' || userId === undefined || !Number.isInteger(parseInt(userId))) {
        // console.log('未登录或退出登录')
        this.isLogin = false
        // console.log('是否登录：' + this.isLogin)
      } else {
        // console.log('已登录')
        this.isLogin = true
      }
    },
    registered () {
      this.dialogLoginVisible = true
      this.activeName = 'third'
    },
    HomePage () {
      this.$router.push({
        path: '/'
      })
    }
  },
  watch: {
    userId () {
      this.islogin()
    }
  }
}
</script>

<style scoped>
  .index-top{
    display: flex;
    justify-content: flex-end;
  }
  .index-top-1{
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
  .index-top-2{
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
</style>
