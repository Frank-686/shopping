<template>
<div>
    <header>
      <loading :active.sync="isLoading" :can-cancel="true" color="#e3004d" :is-full-page="true"></loading>
      <div class="top-header">
        <p>
          {{ config.welcome }}
        </p>
      </div>
      <div class="container" style="position: relative;height: 168px;">
        <div class="row">
          <div class="col-6 text-left mt-4">
            <router-link to="/">
              <img class="" :src="config.logo" width="180px" alt="logo">
            </router-link>
          </div>
          <div class="col-6 mt-5">
            <div class="d-flex search">
              <form class="form-inline">
                <input class="form-control form-control-sm" type="search" v-model="seachWord" placeholder="搜索" aria-label="Search">
                <router-link :to="{ path: '/search', query: { 'seachWord': seachWord } }">
                  <button class="btn btn-sm pl-3 pr-3" type="submit">搜索</button>
                </router-link>
              </form>
            </div>
          </div>
        </div>
        <div class="row menu">
          <div class="col">
            <button v-if="$route.path == '/'" class="btn btn-sm btn-default all-categories">所有分类</button>
            <ul class="">
              <li>
                <router-link to="/">
                  首页
                </router-link>
              </li>
              <li v-for="item in topMenus" :key="item.id">
                <router-link :to="{ path: '/sift', query: { top: item.bShow } }">
                  {{ item.bShow }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <div class="container product pt-3">
      <div class="potion-title">
        <label for="" class="float-left" style="font-size: 12px">您现在的位置：</label>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">
              首页
              </router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">商品详情</li>
          </ol>
        </nav>
      </div>
      <div class="detail">
        <div class="img">
          <img :src="product.pict_url" alt="" width="100%">
        </div>
        <div class="de-wrap">
          <!-- <pre>{{ product }}</pre> -->
          <h2>{{ product.title }}</h2>
          <div class="card">
            <div class="text-center" style="color:#FFf;font-size: 25px;font-weight: 600;heigth: 40px;background: #E3004D;width: 100%;padding: 10px 0;">{{ product.coupon_info }}</div>
            <div class="price">
              <div class="float-left">
                <!-- <h4>原价：&#65509;14.8</h4> -->
                <h2>
                  <span>券后价：&#65509;</span>{{ product.zk_final_price }}</h2>
              </div>
              <div class="float-right text-center">
                <div id="qrcode" ref="qrcode"></div>
                <span class="color-red mt-2">手机扫一扫购买</span>
              </div>
            </div>
          </div>
          <hr>
          <div class="price-w">
            已售：{{ product.volume }}件 （独享）券后价：
            <span class="color-red">&#65509;</span>
            <span class="color-red" style="font-size: 30px;font-weight: 600">{{ product.zk_final_price }}</span>
          </div>
          <hr>
          <a :href="product.coupon_click_url" target="_blank">
            <button type="button" class="btn buy">领券购买</button>
          </a>
        </div>
        <div class="ald-carousel">
          <div class="text-center title">
            <span>大家都在抢</span>
          </div>
          <ul class="mt-4">
            <li v-for="(item, index) in productArray" :key="index" @click="url = item.click_url">
              <img :src="item.pict_url" alt="" width="100%">
              <div class="position-absolute">
                {{ item.coupon_info }}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <hr>
      <div class="boutique mt-4 text-left">
        <h1 class="label pl-4">精品推荐</h1>
        <div class="row">
          <div v-for="item in dataList" :key="item.id" class="col-3">
            <div class="card" @click="url = item.click_url">
              <div class="position-absolute">
                <label for="" class="zk_final_price">
                  领券{{ item.zk_final_price }}元
                </label><br>
                <label for="" class="commission_rate mt-2">
                  分享券{{ item.commission_rate }}元
                </label>
              </div>
              <img class="card-img-top" :src="item.pict_url" alt="Card image cap" width="100%">
              <div class="card-body">
                <h4 class="title">
                  {{ item.title }}
                </h4>
                <div class="content">
                  <span class="price">&#65509;{{ item.zk_final_price }}</span>
                  <button class="float-right btn btn-sm btn-danger">立即购买</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 网页底部 -->
    <app-footer></app-footer>
  </div>
</template>
<script>
import Footer from '../components/Footer.vue';
import Loading from 'vue-loading-overlay';
import QRCode from 'qrcodejs2'

export default {
  components: {
    'app-footer': Footer,
    Loading
	},
	data() {
		return {
      topMenus: [],
      isLoading: false,
      config: {},
      currentPage: '',
      url: '',
      product: {},
      seachWord: '',
      dataList: [],
      productArray: [
        { pict_url: '', coupon_info: '' },
        { pict_url: '', coupon_info: '' },
        { pict_url: '', coupon_info: '' }
      ]
    };
  },
  created () {
    this.url = this.$route.query.url
    this.getProjectDetail(this.url)
    this.getTopMenu()
    this.getConfig()
  },
	methods: {
    // 随机显示右边推荐
    rnd () {
      return Math.floor(Math.random()*(49-0+1)+0)
    },
    // 生成二维码
    qrcode(url) {
      let qrcode = null
      this.$refs.qrcode.innerHTML = ""
      qrcode = new QRCode('qrcode', {  
        width: 100,  
        height: 100, // 高度  
        text: url, // 二维码内容
      })
    },
		getTopMenu () {
      this.$axios.post('homePage/topMenu?url=www.test.com').then((response)=> {
        this.topMenus = response.data.data
        this.topSeachWord = response.data.data[2].bShow
      })
    },
    // 获取配置信息
    getConfig () {
      this.$axios.post('homePage/config?url=www.test.com').then((response)=>{
        this.config = response.data.data
      })
    },
    getCaption (obj){
        var index=obj.lastIndexOf("\=");
        obj=obj.substring(index+1,obj.length);
        return obj;
    },
    getProjectDetail (url) {
      var surl = this.getCaption(url)
      var array = surl.split('\\')
      this.getCenterData(array[2], array[3])
      let params = new URLSearchParams()
      params.append('fileUrl', surl)
      this.$axios.post('homePage/goodsDetails', params).then((response)=>{
        this.product = response.data.data.tbk_dg_item_coupon_get_response.results.tbk_coupon[0]
        this.qrcode(this.product.item_url)
      })
    },
     // 获取中间数据
    getCenterData (topSeachWord, leftSeachWord) {
      this.isLoading = true
      let params = new URLSearchParams()
      params.append("top", topSeachWord)
      params.append("left", leftSeachWord)
      var self = this
      this.$axios.post('homePage/centerData?url=www.test.com&page=1'+ this.currentPage +'&size=50', params).then((response)=>{
        this.isLoading = false
        this.dataList = response.data.data[0].wares
        this.productArray[0] = self.dataList[self.rnd()]
        this.productArray[1] = self.dataList[self.rnd()]
        this.productArray[2] = self.dataList[self.rnd()]
        window.scroll(0, 0);
      })
    }
  },
  watch: {
    url (val) {
      this.getProjectDetail(val)
    }
  }
};
</script>

<style scoped>
.product {
	color: #4d4c59;
	padding-bottom: 60px;
}
.breadcrumb {
	padding: 0;
	font-size: 12px;
	background-color: transparent;
}

.potion-title {
	padding-left: 10px;
	width: 200px;
}

a {
	color: #4b4c59;
}

.step {
	flex: 1;
	display: flex;
	justify-content: space-around;
	padding-bottom: 18px;
	border-bottom: 1px dashed #a5a3a8;
}

.step li {
	font-size: 12px;
}

#qrcode {
  margin-bottom: 10px;
}

.detail {
	text-align: left;
	margin-top: 32px;
}

.detail .img {
	width: 440px;
	vertical-align: top;
}

.detail > div {
	display: inline-block;
	height: 100%;
}

.detail .de-wrap {
	margin-left: 38px;
	width: 526px;
	padding-top: 5px;
}

.detail .de-wrap h2 {
	font-size: 18px;
	color: #4d4c59;
	font-weight: 600;
}

.detail .de-wrap .card img {
	border: none;
}

.detail .de-wrap .card {
  width: 100%;
  cursor: pointer;
	margin-top: 5px;
	border: none;
	background-color: #f0efef;
}

.detail .de-wrap .card .price {
	height: 148px;
	padding: 10px 18px 10px 18px;
}

.card-img-top {
  width: 283px;
  height: 283px;
  overflow: hidden;
}

.detail .de-wrap .card .price img {
	width: 112px;
	height: 112px;
}
.detail .de-wrap .card .price .color-red {
	color: #ee3f41;
	font-weight: 600;
}

.detail .de-wrap .card .price h4 {
	font-size: 16px;
	margin-top: 40px;
	color: #53575c;
}

.detail .de-wrap .card .price h2 {
	margin-top: 30px;
	color: #d00204;
	font-size: 26px;
}

.detail .de-wrap .card .price h2 span {
	font-size: 14px;
}

.color-red {
	color: #d00204;
}

.price-w {
	font-size: 14px;
	color: #53575c;
}

button.buy {
	height: 54px;
	padding: 0;
	border-radius: 0;
	margin-top: 30px;
	cursor: pointer;
	line-height: 54px;
	width: 147px;
	color: #fcf4f4;
	font-weight: 600;
	background-color: #d00204;
	font-size: 18px;
}

.ald-carousel {
	vertical-align: top;
	margin-left: 63px;
	width: 124px;
}

.ald-carousel .title {
	line-height: 1px;
	border-top: 1px solid #bfbfbf;
}

.ald-carousel .title span {
	background-color: #f5f3f3;
	padding: 0 5px;
}

.ald-carousel ul li {
  margin-bottom: 20px;
  cursor: pointer;
	position: relative;
}

.position-absolute {
	width: 100%;
	padding: 6px 0;
	color: #000;
	font-size: 14px;
	background-color: rgba(255, 255, 255, 0.7);
	bottom: 0;
}

.boutique .label {
	font-style: italic;
	color: #d00204;
	font-size: 26px;
	font-weight: 600;
}
.boutique .col-3 {
  padding: 0 10px;
}

.boutique .row {
  margin-left: -10px;
  margin-right: -10px;
}

.boutique .card {
  margin-top: 20px;
  cursor: pointer;
  height: 390px;
  position: relative;
}

.boutique .title {
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #444443;
  line-height: 1.4;
}

.boutique .card-body {
  padding: 10px 20px;
}

.boutique .price {
  font-size: 14px;
}

.boutique .content {
  margin-top: 25px;
}

.boutique .content button {
  padding: 0;
  width: 75px;
  border-radius: 20px;
  font-size: 12px;
}

.boutique .position-absolute {
  top: 5px;
  display: inline-block;
  height: auto;
  width: auto;
  background-color: transparent;
  left: 10px;
}

.boutique .position-absolute label {
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  font-size: 11px;
  color: #FFF;
  font-weight: 500;
  padding: 3px 5px;
}

.boutique .zk_final_price {
  background-color: #2196F3;
}

.boutique .commission_rate {
  background-color: #d00204;
}

</style>

