<template>
  <div class="Media">
    <img class="Media-figure" src="../../../assets/profilePhoto/205553_large.png" alt="">
    <div class="Media-body">
      <router-link :to="{ name: 'post', params: { postId: postdata.id }} ">
        <p>{{postData.title}}</p>
      </router-link>
      <p class="name">{{postdata.users.user_name}}</p>
      <p class="name">{{ postdata.gmt_create }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SinglePost',
  props: {
    postData: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      postdata: this.postData
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
