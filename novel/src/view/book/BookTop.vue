<template>
    <div class="book-information">
      <div class="book-img">
        <img :src="src" />
      </div>
      <div class="book-info">
        <h1>
          <em>{{novelInfo.book_name}}</em>
          <span >{{novelInfo.writer}} 著</span>
        </h1>
        <p class="tag">
          <span class="blue">连载</span>
          <span class="blue">签约</span>
          <span class="blue">vip</span>
          <!--<span class="red">悬疑灵异</span>-->
          <!--<span class="red">诡秘悬疑</span>-->
        </p>
        <p class="intro">{{ bookInfo }}....</p>
        <p @click = "openRate()">
          我要评分
          <el-rate
            v-model="value"
            show-text
            :texts = "text"
            :colors="colors">
          </el-rate>
        </p>
        <el-dialog
          title="评价本书"
          :modal="true"
          :modal-append-to-body="true"
          :visible.sync="dialogVisible"
          width="40%"
          :before-close="handleClose">
          <el-rate
            v-model="value"
            show-text
            :texts = "text"
            :colors="colors">
          </el-rate>
          <br/>
          <el-input
            type="textarea"
            :rows="5"
            placeholder="撰写高质量书评的建议：
                        1、喜欢不喜欢本书的原因；
                        2、与同类书籍的比较：故事风格、人物形象、环境描写；
                        3、可以从不同角度描述；"
            v-model="textarea">
          </el-input>

          <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="saveRate()">确 定</el-button>
          </span>
        </el-dialog>
        <el-row>
          <el-button type="primary" size="medium">
            <router-link :to="{ name: 'read', params: { novelId: novelInfo.id },query:{chapterId:1}}">
              点击阅读
            </router-link>
          </el-button>
          <el-button v-if="!isBookCase" type="danger" size="medium" @click ="addBookCase(novelInfo.id)">加入书架</el-button>
          <el-button v-if="isBookCase" type="danger" size="medium" @click ="removeBookCase(novelInfo.id)">移除书架</el-button>
          <el-button type="primary" size="medium">
            <router-link :to="{ name: 'BBS', params: { novelId: novelInfo.id }}">
              讨论此书
            </router-link>
          </el-button>
        </el-row>
        <div class="book-info-state"></div>
        <div class="book-info-operation"></div>
      </div>
    </div>
</template>

<script>
import { insertBookShelf, deleteBookShelf, getBookShelf } from '@/api/bookShelf'
import { insertRate } from '@/api/book'
export default {
  name: 'BookTop',
  props: {
    novelInfo: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      isBookCase: true,
      dialogVisible: false,
      textarea: '',
      value: 0,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
      text: ['不知所云', '随便看看', '值得一读', '不容错过', '经典必读'],
      bookInfo: this.novelInfo.book_intro,
      src: ''
    }
  },
  mounted () {
    var userId = this.$store.state.user.userId
    if (userId === '' || userId === undefined || !Number.isInteger(parseInt(userId))) {
      this.isBookCase = false
    }
  },
  methods: {
    addBookCase (id) {
      var userId = this.$store.state.user.userId
      if (userId === '' || userId === undefined || !Number.isInteger(parseInt(userId))) {
        this.$message({
          message: '请登录',
          type: 'warning'
        })
      } else {
        const bookShelf = {
          user_id: this.$store.state.user.userId,
          book_id: id
        }
        insertBookShelf(bookShelf).then(res => {
          console.log(res)
          this.haveBookCase()
        })
      }
    },
    removeBookCase (id) {
      var userId = this.$store.state.user.userId
      if (userId === '' || userId === undefined || !Number.isInteger(parseInt(userId))) {
        this.$message({
          message: '请登录',
          type: 'warning'
        })
      } else {
        const bookShelf = {
          user_id: this.$store.state.user.userId,
          book_id: id
        }
        console.log(bookShelf)
        deleteBookShelf(bookShelf).then(res => {
          console.log(res)
          this.haveBookCase()
        })
      }
    },
    haveBookCase () {
      const bookShelf = {
        user_id: this.$store.state.user.userId,
        book_id: this.novelInfo.id
      }
      console.log(bookShelf)
      getBookShelf(bookShelf).then(res => {
        if (res.data.code === 2000) {
          this.isBookCase = true
        } else {
          this.isBookCase = false
        }
        console.log(res.data)
      })
    },
    openRate () {
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
    saveRate () {
      const bookRate = {
        user_id: this.$store.state.user.userId,
        book_id: this.novelInfo.id,
        rate: this.value,
        rate_content: this.textarea
      }
      console.log(bookRate)
      insertRate(bookRate).then(res => {
        console.log(res.data)
      })
      this.dialogVisible = false
    },
    handleClose () {
      this.dialogVisible = false
    }
  },
  watch: {
    novelInfo () {
      this.haveBookCase()
      this.bookInfo = this.novelInfo.book_intro.slice(0, 30)
      this.src = require('../../assets/picture/'.concat(this.novelInfo.book_pic))
    }
  }
}
</script>

<style scoped>
  .book-information{
    width: 50%;
    position: relative;
    z-index: 2;
    margin-bottom: 30px;
    padding-bottom: 20px;
    background: #fff;
  }
  .book-information .book-img {
    float: left;
    width: 144px;
    height: 192px;
    margin: 20px 100px 20px 0px;
  }
  .book-img a img {
    width: 100%;
    height: 100%;
    transition: transform .3s ease-out;
    color: #fcfcfa;
  }
  a img {
    border: none;
  }
  .book-information .book-info {
    float: left;
    margin-top: 20px;
    margin-left: 30px;
  }
  .book-information .book-info h1 {
    font: 700 28px/38px PingFangSC-Regular,HelveticaNeue-Light,'Helvetica Neue Light','Microsoft YaHei',sans-serif;
    overflow: hidden;
    height: 38px;
    margin-bottom: 12px;
  }
  .book-information .book-info h1 span {
    font: 14px/20px PingFangSC-Regular,'-apple-system',Simsun;
    margin-left: 20px;
  }
  .book-information .book-info .tag {
    font-size: 12px;
    overflow: hidden;
    height: 25px;
    margin-bottom: 12px;
  }
  information .book-info .tag span {
    /*font-size: 12px;*/
    /*display: inline-block;*/
    /*overflow: hidden;*/
    /*height: 22px;*/
    /*margin-right: 22px;*/
    /*padding: 0 10px;*/
    /*text-align: center;*/
    /*vertical-align: middle;*/
    /*border-width: 1px;*/
    /*border-style: solid;*/
    /*border-radius: 15px;*/
  }
  .book-information .book-info .tag span.blue {
    margin-left: 12px;
    color: #3f5a93;
    border-color: #9fadc9;
  }
  .book-information .book-info .tag a.red, .book-information .book-info .tag span.red {
    margin-left: 12px;
    transition: border .3s;
    color: #bf2c24;
    border-color: #ffb0b4;
  }
  .book-information .book-info .tag + .intro {
    /*border: 2px solid floralwhite;*/
    text-align: left;
    font-size: 12px;
    overflow: hidden;
    height: 20px;
    margin-bottom: 11px;
  }
</style>
