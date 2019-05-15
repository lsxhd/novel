<template>
  <div class="read">
    <div class="read-content">
      <p style="text-align: center">{{title}}</p>
      <p>{{text}}</p>
    </div>
    <div>
      <el-button-group>
        <el-button type="primary" icon="el-icon-arrow-left" @click="previousPage()">上一页</el-button>
        <el-button type="primary" @click="directory()">目录</el-button>
        <el-button type="primary" @click="nextPage()">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
      </el-button-group>
    </div>
  </div>
</template>

<script>
import { getChapter } from '@/api/book'
export default {
  name: 'ReadBox',
  data: function () {
    return {
      title: '',
      text: ''
    }
  },
  mounted () {
    this.getChapterById()
  },
  methods: {
    getChapterById () {
      getChapter(this.$route.params.novelId, this.$route.query.chapterId).then(res => {
        this.title = '第' + this.$route.query.chapterId + '章'
        this.text = res.data.data
        console.log(this.text)
      })
    },
    // 上一页
    previousPage () {
      if (this.$route.query.chapterId > 1) {
        this.$router.push({
          name: 'read',
          params: {
            novelId: this.$route.params.novelId
          },
          query: {
            chapterId: parseInt(this.$route.query.chapterId) - 1
          }
        })
        this.getChapterById()
      } else {
        this.$message('已经是第一页')
      }
    },
    // 下一页
    nextPage () {
      if (this.$route.query.chapterId < 100000) {
        this.$router.push({
          name: 'read',
          params: {
            novelId: this.$route.params.novelId
          },
          query: {
            chapterId: parseInt(this.$route.query.chapterId) + 1
          }
        })
        this.getChapterById()
      } else {
        this.$message('已经是最后一页')
      }
    },
    // 目录
    directory () {
      this.$router.push({
        name: 'info',
        params: {
          novelId: this.$route.params.novelId
        }
      })
    }
  }
}
</script>

<style scoped>
  .read{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .read-content{
    width: 40%;
    height: auto;
    padding: 10px 30px 20px 30px;
    margin: 10px 10px 10px 10px;
    border: 1px solid skyblue;
    background: #f8f3e9;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
</style>
