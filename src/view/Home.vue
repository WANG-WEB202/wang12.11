<template>
  <div class="home">
      <van-search v-model="value" placeholder="请输入搜索关键词" />
      <dl v-for="(item,index) in list" :key="index">
        <dt>
            <img :src="item.img" alt="">
        </dt>
        <dd>
          <span>{{item.name}}</span>
          <p>
            {{item.title}}
          </p>
        </dd>
      </dl>
  </div>
</template>

<script>
import axios from "axios"
export default {
data() {
    return {
      value: '',
      list:[]
    };
  },
  created() {
    this.getList()
  },
  methods: {
    getList(){
      axios({
        url:'/getData'
      }).then(res=>{
        console.log(res)
        this.list=res.data.list
      })
    }
  },
}
</script>

<style>
dl{
  display: flex;
  border-bottom: solid 1px #ccc;
  padding: 5px;
}
dl dd span{
  font-weight: bold;
  font-size: 20px;
}
dl dd p{
  color: #666;
}
img{
  border-radius: 50%;
}
</style>