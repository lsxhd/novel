<template>
    <div class="book-information">
      <div class="book-img">
        <img src="../../assets/book.jpg"/>
      </div>
      <div class="book-info">
        <h1>
          <em>{{novelInfo.book_name}}</em>
          <span >{{novelInfo.writer}} 著</span>
        </h1>
        <p class="tag">
          <span class="blue">连载</span>
          <span class="blue">签约</span>
          <span class="blue">vip</span>
          <!--<span class="red">悬疑灵异</span>-->
          <!--<span class="red">诡秘悬疑</span>-->
        </p>
        <p class="intro">{{novelInfo.book_intro.substr(0, 30)}}....</p>
        <p>
          <em>
            25.91
          </em>
          <cite>万字</cite>
          <i style="color: #e6e6e6;margin: 0 10px">|</i>
          <em>
            300
          </em>
          <cite>万点击量</cite>
          <i style="color: #e6e6e6;margin: 0 10px">|</i>
        </p>
        <el-row>
          <el-button type="primary" size="medium">
            <router-link :to="{ name: 'read', params: { novelId: novelInfo.id },query:{chapterId:1}}">
              点击阅读
            </router-link>
          </el-button>
          <el-button type="danger" size="medium">加入书架</el-button>
        </el-row>
        <div class="book-info-state"></div>
        <div class="book-info-operation"></div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'BookTop',
  props: {
    novelInfo: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
  .book-information{
    width: 50%;
    position: relative;
    z-index: 2;
    margin-bottom: 30px;
    padding-bottom: 20px;
    background: #fff;
  }
  .book-information .book-img {
    float: left;
    width: 144px;
    height: 192px;
    margin: 20px 100px 20px 0px;
  }
  .book-img a img {
    width: 100%;
    height: 100%;
    transition: transform .3s ease-out;
    color: #fcfcfa;
  }
  a img {
    border: none;
  }
  .book-information .book-info {
    float: left;
    margin-top: 20px;
    margin-left: 30px;
  }
  .book-information .book-info h1 {
    font: 700 28px/38px PingFangSC-Regular,HelveticaNeue-Light,'Helvetica Neue Light','Microsoft YaHei',sans-serif;
    overflow: hidden;
    height: 38px;
    margin-bottom: 12px;
  }
  .book-information .book-info h1 span {
    font: 14px/20px PingFangSC-Regular,'-apple-system',Simsun;
    margin-left: 20px;
  }
  .book-information .book-info .tag {
    font-size: 12px;
    overflow: hidden;
    height: 25px;
    margin-bottom: 12px;
  }
  information .book-info .tag span {
    /*font-size: 12px;*/
    /*display: inline-block;*/
    /*overflow: hidden;*/
    /*height: 22px;*/
    /*margin-right: 22px;*/
    /*padding: 0 10px;*/
    /*text-align: center;*/
    /*vertical-align: middle;*/
    /*border-width: 1px;*/
    /*border-style: solid;*/
    /*border-radius: 15px;*/
  }
  .book-information .book-info .tag span.blue {
    margin-left: 12px;
    color: #3f5a93;
    border-color: #9fadc9;
  }
  .book-information .book-info .tag a.red, .book-information .book-info .tag span.red {
    margin-left: 12px;
    transition: border .3s;
    color: #bf2c24;
    border-color: #ffb0b4;
  }
  .book-information .book-info .tag + .intro {
    /*border: 2px solid floralwhite;*/
    text-align: left;
    font-size: 12px;
    overflow: hidden;
    height: 20px;
    margin-bottom: 11px;
  }
</style>
