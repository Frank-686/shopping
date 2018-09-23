<template>
  <div class="index">
    <div class="banner">
      <div class="label-menu">
        <div class="row">
          <div class="col-6" v-for="item in labelMenus" :key="item.id">
            <div class="item">
              <img src="/static/images/pc-1.png" alt="">
              <a :href="item.url">{{ item.show }}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="advertising">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="/static/images/ad-1.png" alt="First slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/static/images/ad-2.png" alt="Second slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/static/images/ad-3.png" alt="Third slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/static/images/ad-4.png" alt="Third slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/static/images/ad-5.png" alt="Third slide">
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
      <div class="" style="width: 200px;background: #FFF"></div>
    </div>
    <div class="content-body">
      <div class="item" v-for="item in contentData" :key="item.id">
        <div class="title">
          <div class="container text-left">
            <h1>{{ item.show }}</h1>
            <button class="btn btn-sm float-right">more &gt;&gt;</button>
          </div>
        </div>
        <!-- 商品列表 -->
        <div class="wares">
          <div class="container">
            <div class="row">
              <div v-for="item in wares" :key="item.id" class="col-3">
                {{ item }}
              </div>
              <div class="col-3">123</div>
              <div class="col-3">123</div>
              <div class="col-3">123</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'App',
	data: function() {
		return {
			labelMenus: [
				{ show: '女装', url: '', remark: '' },
				{ show: '男装', url: '', remark: '' },
				{ show: '内衣', url: '', remark: '' },
				{ show: '母婴', url: '', remark: '' },
				{ show: '美妆', url: '', remark: '' },
				{ show: '居家', url: '', remark: '' },
				{ show: '鞋包', url: '', remark: '' },
				{ show: '美食', url: '', remark: '' },
				{ show: '数码', url: '', remark: '' },
				{ show: '其他', url: '', remark: '' },
      ],
      contentData: [
        { 
          show: '优惠专区', 
          moreUrl: '',
          wares: [
            { small_images: '', pict_url: '' },
            { small_images: '', pict_url: '' },
            { small_images: '', pict_url: '' },
            { small_images: '', pict_url: '' },
            { small_images: '', pict_url: '' },
            { small_images: '', pict_url: '' },
            { small_images: '', pict_url: '' },
            { small_images: '', pict_url: '' }
          ]  
        },
        { 
          show: '女装特卖', 
          moreUrl: '',
          wares: [
            { small_images: '', pict_url: '' },
            { small_images: '', pict_url: '' },
            { small_images: '', pict_url: '' },
            { small_images: '', pict_url: '' },
            { small_images: '', pict_url: '' },
            { small_images: '', pict_url: '' },
            { small_images: '', pict_url: '' },
            { small_images: '', pict_url: '' }
          ]  
        },
      ]
		};
	},
	methods: {
		name() {},
	},
	watch: {
		data(newValue, oldValue) {},
	},
};
</script>

<style scoped>
.banner {
	height: 372px;
  display: flex;
  justify-content: center;
}

.banner > div {
	height: 100%;
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
	border-bottom: 1px dashed #ccc;
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

.advertising {
	width: 800px;
}

.carousel {
	height: 100%;
}

.content-body .title {
  height: 50px;
  line-height: 50px;
  border-bottom: 3px solid #E3004D;
}

.content-body .title h1 {
  display: inline-block;
  color: #E3004D;
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
  color: #FFF;
  line-height: 22px;
  border: none;
  border-radius: 8px;
  background-color: #E3004D;
}
</style>


