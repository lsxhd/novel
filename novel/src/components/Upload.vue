<template>
    <div class="upload">
      <el-form ref="newform" :model="books" label-width="80px">
        <el-form-item label="小说名称">
          <el-input v-model="books.book_name"></el-input>
        </el-form-item>
        <el-form-item label="小说作者">
          <el-input v-model="books.writer"></el-input>
        </el-form-item>
        <el-form-item label="小说分类">
          <el-select v-model="books.booktype_id"  placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="小说简介">
          <el-input type="textarea" :rows="5" v-model="books.book_intro"></el-input>
        </el-form-item>
        <el-form-item label="小说内容">
          <el-upload
            class="upload-file"
            ref="fileUpload"
            :on-success="fileSuccess"
            :data="books"
            name="file"
            :limit="2"
            :multiple="true"
            drag
            action="http://localhost:8090/uploadText"
            :auto-upload="false">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传txt文件，且一次只能上传一个TXT文件，不超过50MB</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="小说封面">
          <el-upload
            list-type="picture-card"
            class="upload-img"
            name="file"
            ref="imgUpload"
            drag
            :limit="1"
            :on-success="imgSuccess"
            :data="books"
            action="http://localhost:8090/uploadPictrue"
            :auto-upload="false">
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit()">上传</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
// import {upload} from '@/api/book'
// import axios from 'axios'
export default {
  name: 'Upload',
  data: function () {
    return {
      options: [{
        value: 1,
        label: '都市'
      }, {
        value: 2,
        label: '玄幻'
      }, {
        value: 3,
        label: '武侠'
      }, {
        value: 4,
        label: '军事'
      }, {
        value: 5,
        label: '历史'
      }, {
        value: 6,
        label: '游戏'
      }, {
        value: 7,
        label: '体育'
      }, {
        value: 8,
        label: '科幻'
      }, {
        value: 9,
        label: '奇幻'
      }],
      books: {
        id: -1,
        writer: '',
        book_name: '',
        booktype_id: 1,
        book_intro: '',
        book_pic: '',
        book_source: ''
      },
      filesList: {},
      images: {},
      formDate: new FormData()
    }
  },
  methods: {
    onSubmit () {
      this.$refs.fileUpload.submit()
    },
    fileSuccess (response, file, fileList) {
      console.log(response.id)
      this.books.id = response.id
      this.$refs.imgUpload.submit()
    },
    imgSuccess (response, file, fileList) {
      if (response.code === 2000) {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        })
      }
    }
  }
}
</script>

<style scoped>
  .upload{
    display: flex;
    justify-content: center;
  }
</style>
