<template>
   <div>
     <div style="float: right;padding-right: 100px">
       <el-button type="info" round @click="dialogFormVisible = true" v-if="this.name ==='' || this.password ===''" >登录</el-button>
         <el-dialog title="登录" :visible.sync="dialogFormVisible">
           <el-form :model="form">
             <el-form-item label="用户名" :label-width="formLabelWidth">
               <el-input v-model="name" autocomplete="off"></el-input>
             </el-form-item>
             <el-form-item label="密码" prop="pass" :label-width="formLabelWidth">
               <el-input type="password" v-model="password" autocomplete="off"></el-input>
             </el-form-item>
           </el-form>
           <div slot="footer" class="dialog-footer">
             <el-button @click="dialogFormVisible = false;name='';password=''">取 消</el-button>
             <el-button type="primary" @click="loginUser">确 定</el-button>
           </div>
         </el-dialog>
       <el-tag closable v-if="this.name!=''">欢迎您！ 用户：{{this.name}}</el-tag>
     </div>
     <P>书籍列表</P>
     <div style="float: left">
       <el-input
         placeholder="请输入书名"
         v-model="input">
       </el-input>
     </div>
     <div style="float: left;">
       <el-button type="primary" icon="el-icon-search" @click="getBook()"></el-button>
     </div>
     <div style="float: right;padding-right: 400px">
       <el-popover
         title="历史操作"
         placement="right"
         width="700"
         trigger="click"
         @show="showOperation">
         <el-table :data="operationData">
           <el-table-column width="100" property="order_readername" label="用户"></el-table-column>
           <el-table-column width="150" property="order_operation" label="操作"></el-table-column>
           <el-table-column width="200" property="order_bookname" label="书名"></el-table-column>
           <el-table-column width="300" property="order_time" label="日期"></el-table-column>
         </el-table>
         <el-button slot="reference">历史操作</el-button>
       </el-popover>
     </div>
     <div>
       <el-table
         :data="tableData"
         style="width: 100%">
         <el-table-column type="expand">
           <template slot-scope="props">
             <el-form label-position="left" inline class="demo-table-expand">
               <el-form-item label="馆藏位置">
                 <span>{{ props.row.book_position }}</span>
               </el-form-item>
               <el-form-item label="图书状态">
                 <span>在馆</span>
               </el-form-item>
               <el-form-item label="藏馆在本">
                 <span>{{ props.row.book_count }}</span>
               </el-form-item>
               <el-form-item label="">
                 <el-row>
                   <el-button size="mini" type="primary" round v-if="props.row.book_count > 0" @click="borrowingBook(props.row.book_id,props.row.book_name)">借阅图书</el-button>
                   <el-button size="mini" type="primary" round v-if="props.row.book_count <= 0" @click="bookingBook(props.row.book_id,props.row.book_name)" >预定图书</el-button>
                 </el-row>
               </el-form-item>
             </el-form>
           </template>
         </el-table-column>
         <el-table-column
           type="index"
           label="序号">
         </el-table-column>
         <el-table-column
           label="书名"
           prop="book_name">
         </el-table-column>
         <el-table-column
           label="作者"
           prop="book_author">
         </el-table-column>
         <el-table-column
           label="出版社"
           prop="book_publisher">
         </el-table-column>
         <el-table-column
           label="出版日期"
           prop="book_publish_date">
         </el-table-column>
       </el-table>
     </div>
   </div>
</template>

<script>
import { getAllBook, selectBooks, updateBook } from '@/api/book'
import { user, recordOperation, showOperation } from '@/api/user'
// import axios from 'axios'
export default {
  name: 'Login',
  data: function () {
    return {
      input: '',
      tableData: [],
      user_id: '2',
      name: '',
      password: '',
      dialogFormVisible: false,
      form: {
        name: '',
        password: ''
      },
      formLabelWidth: '120px',
      order: {
        order_readerid: -1,
        order_bookid: -1,
        order_operation: '',
        order_readername: '',
        order_bookname: ''
      },
      operationData: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      getAllBook().then(res => {
        this.tableData = res.data.data
      })
    },
    getBook: function () {
      var bookName = this.input
      if (bookName != null) {
        selectBooks(bookName).then(res => {
          this.tableData = res.data.data
        })
      }
    },
    showOperation: function () {
      showOperation().then(res => {
        this.operationData = res.data.data
      })
    },
    operation: function (bookId, bookName, operation) {
      this.order.order_bookid = bookId
      this.order.order_bookname = bookName
      this.order.order_operation = operation
      this.order.order_readerid = this.user_id
      this.order.order_readername = this.name
      const oreser = this.order
      console.log(JSON.stringify(oreser))
      recordOperation(this.order.order_readerid, this.order.order_bookid, this.order.order_readername, this.order.order_bookname, this.order.order_operation).then(res => {
        console.log(res.data)
        if (res.data.operation === 1) {
          this.$message({
            message: '借阅成功',
            type: 'success'
          })
        } else if (res.data.operation === 2) {
          this.$message({
            message: '预订成功',
            type: 'success'
          })
        }
      })
    },
    borrowingBook: function (id, bookNmae) {
      if (this.name === '' || this.password === '') {
        this.dialogFormVisible = true
      } else {
        const bookId = parseInt(id)
        updateBook(bookId).then(res => {
          console.log(res.data)
        })
        this.operation(bookId, bookNmae, 'borrow')
      }
    },
    bookingBook: function (id, bookNmae) {
      if (this.name === '' || this.password === '') {
        this.dialogFormVisible = true
      } else {
        const bookId = parseInt(id)
        this.operation(bookId, bookNmae, 'appointment')
      }
    },
    loginUser () {
      const username = this.name
      const possword = this.password
      console.log(username + '.....' + possword)
      user(username, possword).then(res => {
        console.log(res.data)
        if (res.data.code === 1000) {
          this.name = ''
          this.password = ''
        } else {
          this.user_id = res.data.data.reader_id
          this.name = res.data.data.reader_username
          this.password = res.data.data.reader_password
        }
      })
      this.dialogFormVisible = false
    }
  }
}
</script>

<style scoped>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
