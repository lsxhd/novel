<template>
  <div>
    <div v-for="(replyData, key) in replyDatas" :key="key">
      <SingleReply :replyData="replyData"></SingleReply>
    </div>
  </div>
</template>

<script>
import SingleReply from './SingleReply'
export default {
  name: 'AllReply',
  components: {SingleReply},
  props: {
    replyDatas: {
    }
  }
}
</script>

<style scoped>

</style>
