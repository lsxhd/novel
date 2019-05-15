<template>
  <div>
    <div class="Media">
      <img class="Media-figure" src="../../../assets/profilePhoto/205553_large.png" alt="">
      <div class="Media-body">
        <p>{{postData.title}}</p>
        <p class="name">{{uesrName}}</p>
        <p class="name">{{ postData.gmt_create }}</p>
      </div>
    </div>
    <div class="conment">
      <p style="padding-left: 10px">{{postData.content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReplyTop',
  props: {
    postData: {
    }
  },
  data () {
    return {
      uesrName: this.postData.users.user_name
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
  .name{
    font-family:Georgia, serif;
    font-style:italic;
    font-size: 5px;
  }
</style>
