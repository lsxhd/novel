<template>
<div>
  <div class="left"><Top></Top></div>
  <div class="left"><SearchBox></SearchBox></div>
  <NovelCarousel></NovelCarousel>
  <Menu></Menu>
  <NovelType :novels="novelsOne"></NovelType>
  <NovelType :novels="novelsTwo"></NovelType>
  <NovelType :novels="novelsThree"></NovelType>
</div>
</template>

<script>
import Top from '../../components/Top'
import SearchBox from '../../components/SearchBox'
import Menu from './Menu'
import NovelType from './NovelType'
import NovelCarousel from './NovelCarousel'
import { getAllBook } from '@/api/book'
export default {
  name: 'Index',
  components: {NovelCarousel, NovelType, Menu, SearchBox, Top},
  data: function () {
    return {
      novelsOne: [],
      novelsTwo: [],
      novelsThree: []
    }
  },
  mounted () {
    this.getNovel()
  },
  methods: {
    getNovel: function () {
      getAllBook().then(res => {
        this.novelsOne = res.data.dataOne
        this.novelsTwo = res.data.dataTwo
        this.novelsThree = res.data.dataThree
      })
    }
  }
}
</script>

<style scoped>
</style>
