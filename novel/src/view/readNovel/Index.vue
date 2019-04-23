<template>
  <div>
    <Top></Top>
    <ReadBox></ReadBox>
  </div>
</template>

<script>
import Top from '../../components/Top'
import ReadBox from './ReadBox'
export default {
  name: 'index',
  components: {ReadBox, Top},
  data: function () {
    return {
      chapter: ''
    }
  },
  mounted () {
    this.getChapter()
  },
  methods: {
    getChapter () {
      console.log(this.$route.params.novelId)
      console.log(this.$route.query.chapterId)
    }
  }
}
</script>

<style scoped>

</style>
