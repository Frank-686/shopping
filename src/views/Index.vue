<template>
  <div class="index">
    <loading :active.sync="isLoading" :can-cancel="true" color="#e3004d" :is-full-page="fullPage"></loading>
    <header>
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
    <!-- 左边菜单 -->
    <div class="banner">
      <div class="label-menu">
        <div class="row">
          <div class="col-6" v-for="item in leftMenus" :key="item.id">
            <router-link :to="{ path: '/sift', query: { left: item.bShow } }">
              <div class="item">
                <img src="/static/images/pc-1.png" alt="">
                <a class="ml-2" :href="item.url">{{ item.bShow }}</a>
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <!-- banner 图 -->
      <div class="advertising">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" v-for="item in scrollbarImages" :class="item.id == 1 ? 'active' : ''" :key="item.id" :data-slide-to="item.id - 1">
            </li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item" v-for="item in scrollbarImages" :class="item.id == 1 ? 'active' : ''" :key="item.id">
              <a :href="item.url" target="_blank">
                <img class="d-block w-100" :src="item.bShow" :alt="item.id">
              </a>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
    <!-- 中部数据 -->
    <div class="content-body">
      <div class="item" v-for="item in centerData" :key="item.id">
        <div class="title">
          <div class="container text-left">
            <h1>{{ item.show }}</h1>
            <!-- <button class="btn btn-sm float-right">more &gt;&gt;</button> -->
          </div>
        </div>
        <!-- 商品列表 -->
        <div class="wares">
          <div class="container">
            <div class="row">
              <div v-for="ware in item.wares" :key="ware.id" class="col-3">
                <router-link :to="{ path: '/detail', query: { url: ware.click_url } }">
                  <div class="card">
                    <img class="card-img-top" :src="ware.pict_url" alt="Card image cap">
                    <div class="card-body">
                      <h2 class="ware_title text-left">
                      </h2>
                      <div class="mt-2 text-left">
                        <span class="price"> &#65509;{{ ware.zk_final_price }}</span>
                        <!-- <span class="discount ml-1">{{ ware.coupon_info }} 折</span> -->
                        <!-- <span class="original-price ml-3">原价{{ ware.original_price }}</span> -->
                      </div>
                      <div class="mt-4">
                        <span class="float-left">{{ ware.volume }}人已购买</span>
                        <div class="float-right tianmao">
                          <img src="/static/images/t.png" alt="" srcset="">
                          <span class="ml-1">{{ ware.nick }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </router-link>
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
import MoPaging from '../components/Pagination.vue';
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  name: 'Index',
  components: {
    'app-footer': Footer,
    Loading
	},
	data: function() {
		return {
      topMenus: [],
      leftMenus: [],
      config: {},
			centerData: [],
      scrollbarImages: [],
      topSeachWord: '',
      leftSeachWord: '',
      seachWord: '',
      currentPage: 1,
      count: 0,
      pageSize: 100,
      isLoading: false,
      fullPage: true
		};
  },
  created () {
    this.getTopMenu()
    this.getConfig()
    this.getScrollbar()
  },
	methods: {
    getTopMenu () {
      this.$axios.post('homePage/topMenu?url=www.test.com').then((response)=> {
        this.topMenus = response.data.data
        // this.topSeachWord = response.data.data[2].bShow
        this.getLeftMenu()
      })
    },
    // 获取配置信息
    getConfig () {
      this.$axios.post('homePage/config?url=www.test.com').then((response)=>{
        this.config = response.data.data
      })
    },
    // 获取左侧分类按钮
		getLeftMenu () {
      this.$axios.post('homePage/leftMenu?url=www.test.com').then((response)=>{
        this.leftMenus = response.data.data
        // this.leftSeachWord = response.data.data[0].bShow
        this.getCenterData()
      })
    },
    // 获取中间数据
    getCenterData () {
      this.isLoading = true
      this.$axios.post('homePage/centerData?url=www.test.com&page='+ this.currentPage +'&size=1&top=' + this.topSeachWord + '&left=' + this.leftSeachWord).then((response)=>{
        this.isLoading = false
        this.centerData = response.data.data
        this.count = response.data.data.length
      })
    },
    // 获取中间banner图列表
    getScrollbar () {
      this.$axios.post('homePage/scrollbar?url=www.test.com').then((response)=>{
        this.scrollbarImages = response.data.data
      })
    }
    //从page组件传递过来的当前page
    // pageChange (page) {
    //   this.currentPage = page
    //   this.getCenterData()
    // }
	},
	watch: {
    topSeachWord (newValue, oldValue) {
      if (oldValue !== '') {
        this.getCenterData()
      }
    },
    leftSeachWord (newValue, oldValue) {
      if (oldValue !== '') {
        this.getCenterData()
      }
    },
	}
};
</script>

<style scoped>
.banner {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	align-items: stretch;
}

.label-menu {
	padding-top: 13px;
	width: 200px;
	background-color: #fff;
}

.label-menu .col-6:nth-child(odd) {
	padding-right: 0;
	position: relative;
}

.label-menu .col-6 {
	height: 50px;
	line-height: 50px;
}

.label-menu .col-6:nth-child(odd) > div::after {
	content: '';
	position: absolute;
	width: 1px;
	height: 20px;
	right: 0;
	background-color: #ccc;
	top: 15px;
}

.label-menu .col-6:nth-child(even) {
	padding-left: 0;
}
.label-menu .item {
	cursor: pointer;
}

.label-menu .col-6:after:nth-child(odd) {
	position: absolute;
	width: 20px;
	right: 0;
}

.label-menu .item img {
	vertical-align: sub;
}

.label-menu .item a {
	color: #5e5e5e;
	font-size: 15px;
}

.label-menu .item.active {
	background-color: #e3004d;
}

.label-menu .item.active a {
	color: #fff;
}

.label-menu .item:hover {
	background-color: #e3004d;
}

.label-menu .item:hover a {
	color: #fff;
}

.advertising {
	width: 1000px;
	min-height: 400px;
}

.carousel {
	height: 100%;
}

.content-body .title {
	height: 50px;
	line-height: 50px;
	border-bottom: 3px solid #e3004d;
}

.content-body .title h1 {
	display: inline-block;
	color: #e3004d;
	font-size: 22px;
	font-weight: 600;
}

.content-body .title .container {
	position: relative;
}

.content-body .title button {
	position: absolute;
	right: 0;
	bottom: 8px;
	width: 94px;
	padding: 0px 20px;
	height: 22px;
	color: #fff;
	line-height: 22px;
	border: none;
	border-radius: 8px;
	background-color: #e3004d;
}

.wares {
	margin-top: 20px;
	padding-bottom: 30px;
}

.wares .col-3 {
	padding: 10px;
}

.wares .row {
	margin-left: -10px;
	margin-right: -10px;
}

.wares .card {
	height: 404px;
	cursor: pointer;
	transition: all 0.6s;
	position: relative;
}

.wares .card:hover {
	-moz-box-shadow: 0px 5px 10px #a1a0a0;
	-webkit-box-shadow: 0px 5px 10px #a1a0a0;
	box-shadow: 0px 5px 10px #a1a0a0;
	transform: scale(1.01);
	z-index: 1000;
}

.wares .ware_title {
	font-size: 14px;
	color: #aaa;
	width: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.wares .price {
	color: #e60112;
	font-size: 22px;
	font-weight: 600;
}

.wares .discount {
	color: #313131;
}

.wares .original-price {
	text-decoration: line-through;
}

.wares .tianmao img {
	vertical-align: bottom;
}

.wares .tianmao {
	color: #c3000f;
}

.wares .card-body {
	font-size: 14px;
}
</style>


