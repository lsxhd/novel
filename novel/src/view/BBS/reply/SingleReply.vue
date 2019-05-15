<template>
  <div class="Media">
    <img class="Media-figure" src="../../../assets/profilePhoto/205553_large.png" alt="">
    <div class="Media-body">
      <span class="info">{{replyData.users.user_name}}</span>
      <el-divider direction="vertical"></el-divider>
      <span class="info">{{replyData.gmt_create}}</span>
      <p>{{replyData.content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleReply',
  props: {
    replyData: {
    }
  }
}
</script>

<style scoped>
  .Media {
    padding-top: 10px;
    padding-left: 10px;
    padding-bottom: 10px;
    border-top: 1px solid silver;
    border-bottom: 1px solid silver;
    width: 690px;
    display: flex;
    align-items: flex-start;
  }

  .Media-figure {
    margin-right: 1em;
  }

  .Media-body {
    word-break:break-all;
    flex: 1;
  }
  .info{
    font-family:Georgia, serif;
    font-style:italic;
    font-size: 5px;
  }
</style>
