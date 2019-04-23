<template>
    <div class="chapter">
      <!--<span class="chapter-1" v-for="(chapter ,index) in novelChapter" :key="index">-->
        <!--<span class="chapter-name">-->
          <!--<span class="chapter-name-number">第{{chapter.chaterId}}章</span>-->
          <!--<span class="chapter-name-1">{{chapter.chaterName}} </span>-->
        <!--</span>-->
        <!--<br v-if="index % 3 === 2" />-->
      <!--</span>-->
      <span class="chapter-1" v-for=" i in number" :key="i">
        <span class="chapter-name">
          <!--:class="{ 'class-a': isA, 'class-b': isB}"-->
          <p class="chapter-name-number">
            <router-link :to="{ name: 'read', params: { novelId: novelInfo.id },query:{chapterId:i}}">
              第{{i}}章
            </router-link>
          </p>
          <!--<span class="chapter-name-1">{{chapter.chaterName}} </span>-->
        </span>
        <!--<br v-if="i % 3 === 2" />-->
      </span>
    </div>
</template>

<script>
export default {
  name: 'NovelChapter',
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
      novelChapter: [
        // {
        //   chaterId: 1,
        //   chaterName: ''
        // },
        // {
        //   chaterId: 2,
        //   chaterName: ''
        // },
        // {
        //   chaterId: 3,
        //   chaterName: ''
        // },
        // {
        //   chaterId: 4,
        //   chaterName: ''
        // },
        // {
        //   chaterId: 5,
        //   chaterName: ''
        // }
      ]
    }
  },
  mounted () {
    this.UpdataNovelChapter()
  },
  methods: {
    UpdataNovelChapter () {
    }
  },
  watch: {
    number () {
      this.UpdataNovelChapter()
    }
  }
}
</script>

<style scoped>
  .chapter{
    width: 100%;
    /*border: solid 1px black;*/
  }
  .chapter-name{
    padding-right: 50px;
    margin-top: 10px;
    padding-right: 150px;
    float: left;
    border-bottom: solid 1px #8e9197;
    text-align: center;
    /*border-bottom: solid 1px skyblue;*/
    /*border: solid 1px aqua;*/
  }
  .chapter-name-number{
    width: 100px;
    margin-right: 20px;
  }
  .chapter-name-1{

  }

</style>
