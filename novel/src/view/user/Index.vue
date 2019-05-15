<template>
  <div>
    <div><top></top></div>
    <div>
      <el-tabs tab-position="left">
        <el-tab-pane label="个人书架">
          <div class="bookCase">
            <div>
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
                      <router-link :to="{ name: 'read', params: { novelId: tableData[scope.$index].id },query:{chapterId:1}}">
                        点击阅读
                      </router-link>
                    </el-button>
                    <el-button
                      @click.native.prevent="removeBookCase(tableData[scope.$index])"
                      type="text"
                      size="small">
                      移除书架
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="个人信息">个人信息</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Top from '../../components/Top'
import { getAllBookShelf, deleteBookShelf } from '@/api/bookShelf'
export default {
  name: 'Index',
  components: {Top},
  data: function () {
    return {
      isCollapse: true,
      tableData: []
    }
  },
  mounted () {
    this.getBookCase()
  },
  methods: {
    getBookCase () {
      getAllBookShelf(this.$store.state.user.userId).then(res => {
        this.tableData = res.data.data
        console.log(res.data)
      })
    },
    removeBookCase (data) {
      const bookShelf = {
        user_id: this.$store.state.user.userId,
        book_id: data.id
      }
      console.log(bookShelf)
      deleteBookShelf(bookShelf).then(res => {
        console.log(res)
        this.getBookCase()
      })
      console.log(data)
    }
  }
}

</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .bookCase{
    border: 1px silver solid;
    width: 100%;
    height: 1000px;
    display: flex;
    justify-content: center;
  }
</style>
