<template>
  <div>
    <div><Top></Top></div>
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
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="5"
            layout="prev, pager, next, jumper"
            :total="total">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Top from './Top'
export default {
  name: 'BookList',
  components: { Top },
  data () {
    return {
      total: 0,
      currentPage3: 1,
      tableData: [],
      allData: []
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      var i = val - 1
      // var startNumber = i * 5
      // var endNumber = startNumber + 5
      const number = {
        startNumber: i * 5,
        endNumber: i * 5 + 5
      }
      this.$emit('number', number)
    }
  }
}
</script>

<style scoped>

</style>
