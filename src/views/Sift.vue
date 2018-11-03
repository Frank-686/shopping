<template>
  <div>
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
        </div>
        <div class="row menu">
          <div class="col">
            <ul class="">
              <li>
                <router-link to="/">
                  首页
                </router-link>
              </li>
              <li v-for="item in topMenus" :key="item.id" @click="topSeachWord = item.bShow, getCenterData()" :class="topSeachWord == item.bShow ? 'active' : ''">
                <a @click="topSeachWord = item.bShow" :class="{'color-red': topSeachWord == item.bShow }">{{ item.bShow }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <div class="container search">
      <loading :active.sync="isLoading" :can-cancel="true" color="#e3004d" :is-full-page="fullPage"></loading>
      <div class="text-left">
        <ul class="filters">
          <li v-for="item in leftMenus" :key="item.id">
            <a @click="leftSeachWord = item.bShow, getCenterData()" :class="{'color-red': leftSeachWord == item.bShow}">{{ item.bShow }}</a>
          </li>
        </ul>
        <div class="data-list" style="min-height: 500px">
          <div class="row">
            <div class="item" v-for="item in centerData" :key="item.id">
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
        </div>
        <div class="text-center mb-2">
          <mo-paging :pageSize="pageSize" :pageIndex="currentPage" @change="pageChange" :total="100"></mo-paging>
        </div>
      </div>
    </div>
    <!-- 网页底部 -->
    <app-footer></app-footer>
  </div>
</template>
<script>
import Loading from 'vue-loading-overlay';
import Footer from '../components/Footer.vue';
import MoPaging from '../components/Pagination.vue';
export default {
  components: {
    'app-footer': Footer,
    Loading, MoPaging
	},
	data() {
		return {
      type: '',
      topMenus: [],
      topSeachWord: '',
      leftMenus: [],
      leftSeachWord: '',
      isLoading: false,
      config: {},
      fullPage: true,
      currentPage: 1,
      pageSize: 10,
      count: 0,
			centerData: []
		};
  },
  created () {
    this.topSeachWord = this.$route.query.top
    this.currentPage = Number(this.$route.query.page) ? Number(this.$route.query.page) : 1
    this.leftSeachWord = this.$route.query.left
    this.getTopMenu();
    this.getConfig();
  },
  methods: {
    // 获取配置信息
    getConfig () {
      this.$axios.post('homePage/config?url=www.test.com').then((response)=>{
        this.config = response.data.data
      })
    },
    setCurrentPage (page) {
      this.currentPage = page
    },
    getTopMenu () {
      this.$axios.post('homePage/topMenu?url=www.test.com').then((response)=> {
        this.topMenus = response.data.data
        this.getLeftMenu()
        // this.topSeachWord = response.data.data[0].bShow
      })
    },
    // 获取左侧分类按钮
		getLeftMenu () {
      this.$axios.post('homePage/leftMenu?url=www.test.com').then((response)=>{
        this.leftMenus = response.data.data
        // this.leftSeachWord = response.data.data[0].bShow
        if (this.leftMenus) {
          this.getCenterData()
        }
      })
    },
    pageChange (index) {
      this.currentPage = index
    },
    // 获取中间数据
    getCenterData () {
      this.isLoading = true
      let params = new URLSearchParams()
      let self = this
      if (this.topSeachWord == undefined) {
        self.topSeachWord = ''
      }
      if (this.leftSeachWord == undefined) {
        self.leftSeachWord = ''
      }
      this.setCount();
      params.append('top', self.topSeachWord)
      params.append('left', self.leftSeachWord)
      this.$axios.post('homePage/centerData?url=www.test.com&page='+ this.currentPage +'&size=' + this.pageSize, params).then((response)=>{
        this.isLoading = false
        this.centerData = response.data.data
        this.changeUrl()
        window.scroll(0, 0)
      })
    },
    setCount () {
      console.log(this.topMenus);
      if (this.topSeachWord == '' && this.leftSeachWord == '') {
        this.count = this.topMenus.length * this.pageSize
      }
      if (this.topSeachWord == '' && this.leftSeachWord !== '') {
        this.count = this.topMenus.length * this.pageSize
      }

      if (this.topSeachWord !== '' && this.leftSeachWord == '') {
        this.count = this.leftMenus.length * this.pageSize
      }

      if (this.topSeachWord !== '' && this.leftSeachWord !== '') {
        this.count = this.topMenus.length * this.pageSize * this.topMenus.length
      }

    },
    changeUrl () {
      this.$router.push({
        query: {
          page: this.currentPage,
          top: this.topSeachWord,
          left: this.leftSeachWord
        }
      })
    }
  },
  watch: {
    currentPage (val) {
      this.getCenterData()
      this.changeUrl()
    }
  }
};
</script>

<style scoped>
.card-img-top {
	width: 283px;
	height: 283px;
	overflow: hidden;
}

.nodata {
	width: 100%;
	min-height: 500px;
	text-align: center;
	padding: 30px;
}

.nodata h2 {
	line-height: 1;
	margin-top: 30px;
}

.original-price {
	text-decoration: line-through;
}

.search button {
	border: none;
	color: #444443;
	font-weight: normal;
}

.menu ul li {
	cursor: pointer;
}

ul.filters {
	margin-top: 30px;
	display: inline-block;
	list-style: none;
}

ul.filters li {
	float: left;
	font-size: 18px;
	margin-right: 30px;
}

ul.filters li a {
	cursor: pointer;
}

ul.filters li a.color-red {
	color: #d00204;
}

.types {
	margin-top: 20px;
}

.types .form-check-input {
	margin-top: -2px;
}

.types .form-check {
	display: inline-block;
	margin-right: 30px;
	font-size: 18px;
}

.types button {
	padding: 2px 0.6rem;
	border-radius: 0;
}

.sort {
	margin-top: 30px;
}

.sort button {
	border-radius: 0;
	padding: 3px 0.8rem;
	font-size: 18px;
	background: transparent;
}

.color-red {
	color: #e3004d !important;
}

.data-list {
	margin-top: 20px;
}

.data-list .col-3 {
	padding: 0 10px;
}

.data-list .row {
	margin-left: -10px;
	margin-right: -10px;
}

.data-list .card {
	margin-bottom: 20px;
	height: 390px;
	cursor: pointer;
	transition: all 0.6s;
	position: relative;
}

.data-list .card:hover {
	-moz-box-shadow: 0px 5px 10px #a1a0a0;
	-webkit-box-shadow: 0px 5px 10px #a1a0a0;
	box-shadow: 0px 5px 10px #a1a0a0;
	transform: scale(1.01);
	z-index: 1000;
}
.data-list .title {
	font-size: 14px;
	color: #444443;
	line-height: 1.4;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}

.btn-seach {
	border: 1px solid #d00204 !important;
}

.data-list .card-body {
	padding: 10px 20px;
}

.data-list .price {
	font-size: 18px;
	color: #d00204;
	font-weight: 600;
}

.data-list .content {
	margin-top: 25px;
}

.data-list .content button {
	padding: 0;
	width: 75px;
	border-radius: 20px;
	font-size: 12px;
}

.data-list .position-absolute {
	top: 5px;
	display: inline-block;
	height: auto;
	width: auto;
	background-color: transparent;
	left: 10px;
}

.data-list .zk_final_price {
	background-color: #dc202c;
	font-size: 14px;
	padding: 8px;
	width: 76px;
	text-align: center;
	color: #fff;
	border-bottom: 2px dashed #fff;
}

.data-list .zk_final_price p {
	font-size: 18px;
	margin-top: 5px;
	font-weight: 600;
	text-align: center;
}

.data-list .reserve_price {
	background-color: #805fb0;
	width: 76px;
	padding: 5px;
	font-size: 14px;
	color: #fff;
	text-align: center;
}

nav.page {
	margin-top: 20px;
	margin-bottom: 60px;
}

.pagination {
	justify-content: center;
}

.pagination .page-item {
	margin: 0 2px;
}

.pagination .page-item a {
	color: #7d7d7d;
}

.page-item.active .page-link {
	background-color: #e3004d !important;
	border-color: #e3004d;
	color: #fff;
}
</style>


