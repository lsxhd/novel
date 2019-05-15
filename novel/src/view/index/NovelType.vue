<template>
  <div>
    <div class="novel-type">
      <div class="novel-type-card" v-for=" (novels, index) in typeNovel " :key=index>
          <el-card class="box-card" >
          <div slot="header" class="clearfix" >
            <span>{{ novels[1].booktype }}</span>
            <el-button style="float: right; padding: 3px 0" type="text">更多》》</el-button>
          </div>
          <div v-for="(novel,index) in novels" :key="index" class="text item">
            <router-link :to="{ name: 'info', params: { novelId: novel.id }}">
              <span class="novel-index">{{index+1}}</span>
              <span>{{novel.book_name }}</span>
              <span style="float: right">{{novel.writer}}</span>
            </router-link>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NovelType',
  props: {
    novels: {
      type: Array,
      required: true
    }
  },
  data: function () {
    return {
      typeNovel: [
      ]
    }
  },
  mounted () {
    this.getdata()
  },
  methods: {
    getdata () {
      this.typeNovel = this.novels
    }
  },
  watch: {
    novels: function (novels) {
      this.typeNovel = this.novels
    }
  }
}
</script>

<style scoped>
  .novel-type{
    margin-top: 20px;
    display: flex;
    justify-content: center;
    /*border: solid 1px darkolivegreen;*/
  }
  .novel-type-card{
    width: 23%;
    display: flex;
    justify-content: center;
    align-items: center;
    /*border: solid 1px #4fff3d;*/
  }
  /** 序号样式 **/
  .novel-index{
    float: left;
    width: 10%;
    text-align: center;
    height: 25px;
    background: #C0C4CC;
    line-height: 25px;
    margin-right: 10px;
  }
  .box-card{
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 300px;
  }
</style>
