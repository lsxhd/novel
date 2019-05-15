<template>
  <div>
    <div>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          fixed
          type="index"
          width="40%">
        </el-table-column>
        <el-table-column
          prop="user_name"
          label="用户名"
          width="160%">
        </el-table-column>
        <el-table-column
          prop="password"
          label="密码"
          width="120">
        </el-table-column>
        <!--<el-table-column-->
          <!--fixed="right"-->
          <!--label="操作"-->
          <!--width="100">-->
          <!--<template slot-scope="scope">-->
            <!--<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>-->
            <!--<el-button type="text" size="small">编辑</el-button>-->
          <!--</template>-->
        <!--</el-table-column>-->
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
</template>

<script>
import {getUsersListByLimit} from '@/api/user'
export default {
  name: 'UserList',
  data () {
    return {
      total: 0,
      currentPage3: 1,
      tableData: [],
      allData: []
    }
  },
  mounted () {
    this.getUser(0, 5)
  },
  methods: {
    getUser (startNumber, endNumber) {
      getUsersListByLimit(startNumber, endNumber).then(res => {
        console.log(res.data)
        this.tableData = res.data.data
        this.total = res.data.number
      })
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      var i = val - 1
      var startNumber = i * 5
      var endNumber = startNumber + 5
      this.getUser(startNumber, endNumber)
    }
  }
}
</script>

<style scoped>
  .block{
    display: flex;
    justify-content: center;
  }
</style>
