<template>
  <div class="container product pt-3">
    <div class="potion-title">
      <label for="" class="float-left" style="font-size: 12px">您现在的位置：</label>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">首页</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">商品详情</li>
        </ol>
      </nav>
    </div>
    <ul class="step mt-4">
      <li>通过本站去商家购买</li>
      <li>券后9.8元下单并支付</li>
      <li>去淘宝收货</li>
      <li>会本站领取金币或奖励</li>
    </ul>
    <div class="detail">
      <div class="img">
        <img src="https://img.alicdn.com/imgextra/i2/710505494/TB2.benCv5TBuNjSspcXXbnGFXa_!!710505494.jpg" alt="" width="100%">
      </div>
      <div class="de-wrap">
        <h2>这是商品标题，有点长</h2>
        <div class="card">
          <div class="text-center" style="color:#FFf;font-size: 25px;font-weight: 600;heigth: 40px;background: #E3004D;width: 100%;padding: 10px 0;">天猫优惠券5元</div>
          <div class="price">
            <div class="float-left">
              <h4>原价：&#65509;14.8</h4>
              <h2>
                <span>券后价：&#65509;</span>9.8</h2>
            </div>
            <div class="float-right text-center">
              <img src="https://gqrcode.alicdn.com/img?type=hv&text=https://s.click.taobao.com/1QlMGMw&h=300&w=300" alt="" srcset=""><br>
              <span class="color-red">手机扫一扫购买</span>
            </div>
          </div>
        </div>
        <hr>
        <div class="price-w">
          已售：2232件 （独享）券后价：
          <span class="color-red">&#65509;</span>
          <span class="color-red" style="font-size: 30px;font-weight: 600">9.8</span>
        </div>
        <hr>
        <button type="button" class="btn buy">领券购买</button>
      </div>
      <div class="ald-carousel">
        <div class="text-center title">
          <span>大家都在抢</span>
        </div>
        <ul class="mt-4">
          <li v-for="item in [1,2,3]" :key="item" class="text-center">
            <img src="https://img.alicdn.com/bao/uploaded/i3/TB18iy5NpXXXXbbXpXXXXXXXXXX_!!0-item_pic.jpg_300x300.jpg" alt="" width="100%">
            <div class="position-absolute">
              优惠券：19
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
          <div class="card">
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
                <span class="price">&#65509;{{ item.price }}</span>
                <button class="float-right btn btn-sm btn-danger">立即购买</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
	data() {
		return {
      dataList: [
        { 
          title: 'CacheCache秋新款chic韩版减龄甜美卡通休闲简约舒适短袖T恤女潮', 
          pict_url: 'https://img.alicdn.com/bao/uploaded/TB1uvaQdCBYBeNjy0FeXXbnmFXa_!!0-item_pic.jpg_240x240.jpg',
          price: '9.9',
          zk_final_price: '44.56',
          commission_rate: '3.45'
        },
        { 
          title: 'CacheCache秋新款chic韩版减龄甜美卡通休闲简约舒适短袖T恤女潮', 
          pict_url: 'https://img.alicdn.com/bao/uploaded/TB1uvaQdCBYBeNjy0FeXXbnmFXa_!!0-item_pic.jpg_240x240.jpg',
          price: '9.9',
          zk_final_price: '44.56',
          commission_rate: '3.45'
        },
        { 
          title: 'CacheCache秋新款chic韩版减龄甜美卡通休闲简约舒适短袖T恤女潮', 
          pict_url: 'https://img.alicdn.com/bao/uploaded/TB1uvaQdCBYBeNjy0FeXXbnmFXa_!!0-item_pic.jpg_240x240.jpg',
          price: '9.9',
          zk_final_price: '44.56',
          commission_rate: '3.45'
        },
        { 
          title: 'CacheCache秋新款chic韩版减龄甜美卡通休闲简约舒适短袖T恤女潮', 
          pict_url: 'https://img.alicdn.com/bao/uploaded/TB1uvaQdCBYBeNjy0FeXXbnmFXa_!!0-item_pic.jpg_240x240.jpg',
          price: '9.9',
          zk_final_price: '44.56',
          commission_rate: '3.45'
        },
        { 
          title: 'CacheCache秋新款chic韩版减龄甜美卡通休闲简约舒适短袖T恤女潮', 
          pict_url: 'https://img.alicdn.com/bao/uploaded/TB1uvaQdCBYBeNjy0FeXXbnmFXa_!!0-item_pic.jpg_240x240.jpg',
          price: '9.9',
          zk_final_price: '44.56',
          commission_rate: '3.45'
        },
        { 
          title: 'CacheCache秋新款chic韩版减龄甜美卡通休闲简约舒适短袖T恤女潮', 
          pict_url: 'https://img.alicdn.com/bao/uploaded/TB1uvaQdCBYBeNjy0FeXXbnmFXa_!!0-item_pic.jpg_240x240.jpg',
          price: '9.9',
          zk_final_price: '44.56',
          commission_rate: '3.45'
        },
        { 
          title: 'CacheCache秋新款chic韩版减龄甜美卡通休闲简约舒适短袖T恤女潮', 
          pict_url: 'https://img.alicdn.com/bao/uploaded/TB1uvaQdCBYBeNjy0FeXXbnmFXa_!!0-item_pic.jpg_240x240.jpg',
          price: '9.9',
          zk_final_price: '44.56',
          commission_rate: '3.45'
        },
        { 
          title: 'CacheCache秋新款chic韩版减龄甜美卡通休闲简约舒适短袖T恤女潮', 
          pict_url: 'https://img.alicdn.com/bao/uploaded/TB1uvaQdCBYBeNjy0FeXXbnmFXa_!!0-item_pic.jpg_240x240.jpg',
          price: '9.9',
          zk_final_price: '44.56',
          commission_rate: '3.45'
        },
        { 
          title: 'CacheCache秋新款chic韩版减龄甜美卡通休闲简约舒适短袖T恤女潮', 
          pict_url: 'https://img.alicdn.com/bao/uploaded/TB1uvaQdCBYBeNjy0FeXXbnmFXa_!!0-item_pic.jpg_240x240.jpg',
          price: '9.9',
          zk_final_price: '44.56',
          commission_rate: '3.45'
        },
        { 
          title: 'CacheCache秋新款chic韩版减龄甜美卡通休闲简约舒适短袖T恤女潮', 
          pict_url: 'https://img.alicdn.com/bao/uploaded/TB1uvaQdCBYBeNjy0FeXXbnmFXa_!!0-item_pic.jpg_240x240.jpg',
          price: '9.9',
          zk_final_price: '44.56',
          commission_rate: '3.45'
        },
        { 
          title: 'CacheCache秋新款chic韩版减龄甜美卡通休闲简约舒适短袖T恤女潮', 
          pict_url: 'https://img.alicdn.com/bao/uploaded/TB1uvaQdCBYBeNjy0FeXXbnmFXa_!!0-item_pic.jpg_240x240.jpg',
          price: '9.9',
          zk_final_price: '44.56',
          commission_rate: '3.45'
        }
      ]
    };
	},
	methods: {
		name() {},
	},
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

.detail {
	text-align: left;
	margin-top: 32px;
}

.detail .img {
	width: 440px;
	height: 440px;
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
	margin-top: 5px;
	border: none;
	background-color: #f0efef;
}

.detail .de-wrap .card .price {
	height: 148px;
	padding: 10px 18px 10px 18px;
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
  height: 390px;
  position: relative;
}

.boutique .title {
  font-size: 14px;
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

