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
          <div class="col-6 mt-5">
            <div class="d-flex search">
              <form class="form-inline">
                <input class="form-control form-control-sm" type="search" v-model="keyWord" placeholder="搜索" aria-label="Search">
                <button class="btn btn-sm pl-3 pr-3 text-light btn-seach" type="button" @click="getSearchData">搜索</button>
              </form>
            </div>
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
              <li v-for="item in topMenus" :key="item.id" @click="keyWord = item.bShow" :class="topSeachWord == item.bShow ? 'active' : ''">
                <a @click="key = item.bShow" :class="{'color-red': key == item.bShow }">{{ item.bShow }}</a>
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
          <li v-for="item in [ '男装', '女装', '母婴', '美妆', '居家日用', '鞋包装饰']" :key="item.id" @click="keyWord = item">
            <a @click="key = item" :class="{'color-red': key == item }">{{ item }}</a>
          </li>
        </ul>
        <div class="sort">
          <button class="btn btn-sm bg-tm-red text-light">默认</button>
          <!-- <button class="btn btn-sm">价格排序</button> -->
          <button class="btn btn-sm" :class="{ 'color-red': sort == 'tk_rate_des_asc' }" v-show="sort == 'tk_rate_des_asc'" @click="sort = 'tk_rate_des_des'">销量排序</button>
          <button class="btn btn-sm" :class="{ 'color-red': sort == 'tk_rate_des_des' }" v-show="sort == 'tk_rate_des_des'" @click="sort = 'tk_rate_des_asc'">销量排序</button>
          <!-- <button class="btn btn-sm">佣金排序</button> -->
        </div>
        <div class="data-list" style="min-height: 500px">
          <div class="row">
            <div class="nodata" v-show="dataList.tbk_item_get_response.total_results == 0">
              <img src="/static/images/nodata.png" width="200" alt="" srcset="">
              <h2>暂无数据，请重新搜索</h2>
            </div>
            <div v-show="dataList.tbk_item_get_response.total_results !== 0" v-for="item in dataList.tbk_item_get_response.results.n_tbk_item" :key="item.id" class="col-3">
            <a :href="item.item_url" target="_blank">
              <div class="card">
                <div class="position-absolute">
                  <label for="" class="zk_final_price">
                    领券立减
                    <p>{{ (item.reserve_price - item.zk_final_price).toFixed(2) }}元</p>
                  </label><br>
                  <label for="" class="reserve_price">
                    去领券 >
                  </label>
                </div>
                <img class="card-img-top" :src="item.pict_url" alt="Card image cap" width="100%">
                <div class="card-body">
                  <h4 class="title">
                    {{ item.title }}
                  </h4>
                  <div class="content">
                    <span class="price">&#65509;{{ item.zk_final_price }}</span>
                    <span class="original-price ml-1">原价{{ item.reserve_price }}</span>
                    <button class="float-right btn btn-sm btn-danger text-light">立即购买</button>
                  </div>
                </div>
              </div>
            </a>
            </div>
          </div>
        </div>
        <div class="text-center mb-2">
          <mo-paging :pageSize="100" :pageIndex="currentPage" @change="pageChange"            :total="dataList.tbk_item_get_response.total_results"></mo-paging>
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
      isLoading: false,
      config: {},
      key: '其他',
      fullPage: true,
      currentPage: 1,
      keyWord: '',
      sort: 'tk_rate_des_asc',
      page: 1,
			dataList: {
        tbk_item_get_response: {
          results: {
            n_tbk_item: []
          }
        }
      },
		};
  },
  created () {
    if (this.$route.query.seachWord !== undefined) {
      this.key = this.$route.query.seachWord
    }
    this.getTopMenu();
    this.getConfig();
    this.getSearchData()
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
        this.topSeachWord = response.data.data[0].bShow
      })
    },
    pageChange (index) {
      this.currentPage = index
    },
    // 获取中间数据
    getSearchData () {
      this.isLoading = true
      if (this.key == '') {
        this.key = '其他'
      }
      this.$axios.post('homePage/goodsSearch?url=www.test.com&page='+ this.currentPage + '&size=100&key=' + this.key + '&sort=' +this.sort).then((response)=>{
        this.isLoading = false
        this.dataList = response.data.data
        this.count = response.data.data.length
        window.scroll(0, 0);
      })
    }
  },
  watch: {
    key (val) {
      if (val == '') {
        this.key = '其他'
      }
      this.getSearchData()
    },
    keyWord (val) {
      this.key = val
    },
    currentPage () {
      this.getSearchData()
    },
    sort () {
      this.getSearchData()
    }
  }
};
</script>

<style scoped>
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
	color: #E3004D !important;
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


