<template>
<div>
  <div v-for="( postData, key ) in allpostData" :key="key">
    <SinglePost :postData="postData"></SinglePost>
  </div>
  <p style="text-align: center;color: #9fadc9">{{text}}</p>
</div>
</template>

<script>
import SinglePost from './SinglePost'
import {getPostByBookId} from '@/api/post'
export default {
  name: 'AllPost',
  components: {SinglePost},
  props: {
    change: {
    }
  },
  data () {
    return {
      allpostData: {
      },
      text: '恭喜您，你是第一个讨论此书的人'
    }
  },
  mounted () {
    this.getPostData()
  },
  methods: {
    getPostData () {
      console.log(this.$route.params.novelId)
      getPostByBookId(this.$route.params.novelId).then(res => {
        this.allpostData = res.data.data
        if (this.allpostData.length !== 0) {
          this.text = ''
        }
        console.log(res.data)
      })
    }
  },
  watch: {
    change () {
      this.getPostData()
    }
  }
}
</script>

<style scoped>

</style>
