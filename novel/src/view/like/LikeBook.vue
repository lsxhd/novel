<template>
  <div>
    <div><Top></Top></div>
    <div><p style="text-align: center;color: #9fadc9">{{text}}</p></div>
    <div style="display: flex;justify-content: center;">
      <div style="width: 1500px">
        <br/><br/><br/>
        <div class="searchDataShow">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="book_name"
              label="书名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="writer"
              label="作者"
              width="180">
            </el-table-column>
            <el-table-column
              prop="book_intro"
              label="简介"
              width="600">
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="180">
              <template slot-scope="scope">
                <el-button
                  type="text"
                  size="small">
                  <router-link :to="{ name: 'info', params: { novelId: tableData[scope.$index].id }}">
                    查看详情
                  </router-link>
                </el-button>
                <el-button
                  type="text"
                  size="small">
                  <router-link :to="{ name: 'read', params: { novelId: tableData[scope.$index].id },query:{chapterId:1}}">
                    点击阅读
                  </router-link>
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <br/>
        <!--<div class="block">-->
          <!--<el-pagination-->
            <!--@size-change="handleSizeChange"-->
            <!--@current-change="handleCurrentChange"-->
            <!--:current-page.sync="currentPage3"-->
            <!--:page-size="5"-->
            <!--layout="prev, pager, next, jumper"-->
            <!--:total="total">-->
          <!--</el-pagination>-->
        <!--</div>-->
      </div>
    </div>
  </div>
</template>

<script>
import {getRelationBook} from '@/api/book'
import Top from '../../components/Top'
export default {
  name: 'LikeBook',
  components: {Top},
  data () {
    return {
      text: '请先登录查看系统为您推荐的书籍哦',
      total: 0,
      currentPage3: 1,
      tableData: [],
      allData: []
    }
  },
  mounted () {
    this.getBooks()
  },
  methods: {
    getBooks () {
      var userId = this.$store.state.user.userId
      if (userId === '' || userId === undefined || !Number.isInteger(parseInt(userId))) {
        this.$message({
          message: '请登录',
          type: 'warning'
        })
      } else {
        getRelationBook(userId).then(res => {
          console.log(res.data)
          this.tableData = res.data.data
          this.total = res.data.number
          this.text = ''
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
