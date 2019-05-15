<template>
  <div>
    <div><top></top></div>
    <div class="book-top1">
      <BookTop :novelInfo="NovelInfo"></BookTop>
    </div>
    <div class="book-middle1">
      <BookDirectory :number="NovelNumber" :novelInfo="NovelInfo"></BookDirectory>
    </div>
  </div>
</template>

<script>

import BookTop from './BookTop'
import BookDirectory from './BookDirectory'
import { getChapterNumber } from '@/api/book'
import Top from '../../components/Top'
export default {
  name: 'Index',
  components: {Top, BookDirectory, BookTop},
  data: function () {
    return {
      NovelNumber: 0,
      NovelInfo: []
    }
  },
  mounted () {
    this.getNovelNumber()
  },
  methods: {
    getNovelNumber () {
      getChapterNumber(parseInt(this.$route.params.novelId)).then(res => {
        this.NovelNumber = res.data.data.number
        this.NovelInfo = res.data.data.book
      })
    }
  }
}
</script>

<style scoped>
  .book-top1  {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
  .book-middle1{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
</style>
