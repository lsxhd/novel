<template>
    <div>
      <el-carousel :interval="4000" type="card" height="325px">
        <!--<el-carousel-item v-for="novel in novels" :key="novel">-->
          <!--{{ novel.novelId }}{{novel.imgUrl}}-->
          <!--<a v-link="{path:'/info/'+ novel.novelId}"><img :src=novel.imgUrl></a>-->
        <!--</el-carousel-item>-->
        <el-carousel-item >
          <router-link :to="{ name: 'info', params: { novelId: 15 }}">
            <img src="../../assets/0.jpg"/></router-link>
          <!--<a v-link="{path:'/info/15' }"></a>-->
        </el-carousel-item>
        <el-carousel-item >
          <router-link :to="{ name: 'info', params: { novelId: 16 }}">
            <img src="../../assets/1.jpg"/>
          </router-link>
        </el-carousel-item>
        <el-carousel-item >
          <router-link :to="{ name: 'info', params: { novelId: 17 }}">
            <img src="../../assets/2.jpg"/>
          </router-link>
      </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
export default {
  name: 'NovelCarousel',
  data: function () {
    return {
      novels: [
        {
          novelId: 15,
          imgUrl: '@/@/assets/0.jpg'
        },
        {
          novelId: 16,
          imgUrl: '../../assets/1.jpg'
        },
        {
          novelId: 17,
          imgUrl: '../../assets/2.jpg'
        }
      ]
    }
  },
  methods: {
    change (novelId) {
      this.$router.push({
        path: '/info/',
        query: {
          novelId: novelId
        }
      })
    }
  }
}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
