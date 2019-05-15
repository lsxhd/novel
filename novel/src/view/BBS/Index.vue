<template>
  <di>
    <div><Top></Top></div>
    <div>
      <div class="index">
        <div class="conment" style="float: left">
          <div class="post">
            <AllPost :change="change"></AllPost>
          </div>
        </div>
        <div class="Posting" @click="chagnge()">
          <i class="el-icon-edit"></i>
        </div>
        <div>
          <el-dialog
            title="编辑帖子"
            :visible.sync="dialogVisible"
            width="30%">
            <p>标题</p>
            <el-input v-model="title" type="textarea" rows="2" placeholder="请输入标题"></el-input>
            <br/>
            <p>内容</p>
            <el-input v-model="content" type="textarea" rows="10" placeholder="请输入内容"></el-input>
            <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="posting()">确 定</el-button>
             </span>
          </el-dialog>
        </div>
      </div>
    </div>
  </di>
</template>

<script>
import Top from '../../components/Top'
import AllPost from './post/AllPost'
import {savePost} from '@/api/post'
export default {
  name: 'Index',
  components: {AllPost, Top},
  data () {
    return {
      change: true,
      dialogVisible: false,
      title: '',
      content: ''
    }
  },
  methods: {
    chagnge () {
      var userId = this.$store.state.user.userId
      if (userId === '' || userId === undefined || !Number.isInteger(parseInt(userId))) {
        this.$message({
          message: '请登录',
          type: 'warning'
        })
      } else {
        this.dialogVisible = true
      }
    },
    posting () {
      var userId = this.$store.state.user.userId
      if (userId === '' || userId === undefined || !Number.isInteger(parseInt(userId))) {
        this.$message({
          message: '请登录',
          type: 'warning'
        })
      } else {
        const post = {
          title: this.title,
          content: this.content,
          book_id: this.$route.params.novelId,
          user_id: this.$store.state.user.userId
        }
        if (post.title === '' || post.content === '') {
          this.$message({
            message: '标题和内容不能为空',
            type: 'warning'
          })
        } else {
          savePost(post).then(res => {
            if (res.data.code === 2000) {
              this.$message({
                showClose: true,
                message: '发帖成功',
                type: 'success'
              })
              this.change = !this.change
              this.dialogVisible = false
              this.title = ''
              this.content = ''
            } else {
              this.$message({
                showClose: true,
                message: '发帖失败，请重新发帖',
                type: 'error'
              })
            }
          })
        }
      }
    }
  }
}
</script>

<style scoped>
  .index{
    background: #e2e2e2;
    display: flex;
    justify-content: center;
  }
  .conment{
    width: 700px;
    margin-top: 30px;
    background: #ffffff;
  }
  .Posting{
    background: white;
    margin-top: 30px;
    margin-left: 20px;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid silver;
  }
</style>
