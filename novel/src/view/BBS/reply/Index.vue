<template>
  <div>
    <div>
      <div><Top></Top></div>
      <div class="index">
        <div class="post">
          <ReplyTop :postData="postData"></ReplyTop>
        </div>
        <div>
          <div class="conment" style="float: left">
            <div class="reply">
              <AllReply :replyDatas="replyDatas"></AllReply>
            </div>
          </div>
          <div class="replying" @click="chagnge()">
            <i class="el-icon-message"></i>
          </div>
          <el-dialog
            title="回复"
            :visible.sync="dialogVisible"
            width="30%">
            <br/>
            <p>内容</p>
            <el-input v-model="content" type="textarea" rows="10" placeholder="请输入回复内容"></el-input>
            <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="replying()">确 定</el-button>
             </span>
          </el-dialog>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Top from '../../../components/Top'
import ReplyTop from './ReplyTop'
import AllReply from './AllReply'
import {getReplyByPostId, saveReply} from '@/api/reply'
export default {
  name: 'Index',
  components: {AllReply, ReplyTop, Top},
  data () {
    return {
      postData: {},
      replyDatas: [],
      dialogVisible: false,
      content: ''
    }
  },
  mounted () {
    this.getReplyData()
  },
  methods: {
    getReplyData () {
      getReplyByPostId(this.$route.params.postId).then(res => {
        this.postData = res.data.postdata
        this.replyDatas = res.data.replydata
        console.log(res.data)
      })
    },
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
    replying () {
      var userId = this.$store.state.user.userId
      if (userId === '' || userId === undefined || !Number.isInteger(parseInt(userId))) {
        this.$message({
          message: '请登录',
          type: 'warning'
        })
      } else {
        const reply = {
          content: this.content,
          post_id: this.$route.params.postId,
          user_id: this.$store.state.user.userId
        }
        if (reply.content === '') {
          this.$message({
            message: '标题和内容不能为空',
            type: 'warning'
          })
        } else {
          saveReply(reply).then(res => {
            if (res.data.code === 2000) {
              this.$message({
                showClose: true,
                message: '回复成功',
                type: 'success'
              })
              this.dialogVisible = false
              this.content = ''
              this.getReplyData()
            } else {
              this.$message({
                showClose: true,
                message: '回复失败，请重新发帖',
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
    height: 1000px;
    background: #e2e2e2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .conment{
    width: 700px;
    height: 1000px;
    margin-top: 30px;
    margin-left: 120px;
    background: #ffffff;
  }
  .post{
    float: left;
    margin-top: 30px;
    width: 700px;
    background: white;
  }
  .replying{
    float: left;
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
