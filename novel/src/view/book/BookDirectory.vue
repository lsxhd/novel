<template>
    <div style="width: 50%">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="作品简介" name="first">{{novelInfo.book_intro}}</el-tab-pane>
        <el-tab-pane label="作品章节" name="second">
          <NovelChapter :number="novelNumber" :novelInfo="novelInfo"></NovelChapter>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
import NovelChapter from './NovelChapter'
export default {
  name: 'bookDirectory',
  components: {NovelChapter},
  props: {
    number: {
      type: Number,
      required: true
    },
    novelInfo: {
      type: Array,
      required: true
    }
  },
  data: function () {
    return {
      activeName: 'first',
      stretch: true,
      bookIntroduction: '作品信息',
      bookDirectory: '章节目录',
      novelNumber: 0
    }
  },
  mounted () {
    this.novelNumber = this.number
  },
  methods: {
    handleClick () {
      console.log('sdf')
    }
  },
  watch: {
    number () {
      this.novelNumber = this.number
      // console.log('number:' + this.number)
      // console.log('novelNumber:' + this.novelNumber)
    }
  }
}

</script>

<style scoped>

</style>
