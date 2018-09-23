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
              <h2><span>券后价：&#65509;</span>9.8</h2>
            </div>
            <div class="float-right text-center">
              <img src="https://gqrcode.alicdn.com/img?type=hv&text=https://s.click.taobao.com/1QlMGMw&h=300&w=300" alt="" srcset=""><br>
              <span class="color-red">手机扫一扫购买</span>
            </div>
          </div>
        </div>
        <hr>
        <div class="price-w">
          已售：2232件 （独享）券后价：<span class="color-red">&#65509;</span><span class="color-red" style="font-size: 30px;font-weight: 600">9.8</span>
        </div>
        <hr>
        <button class="buy">领券购买</button>
      </div>
      <div class="ald-carousel"></div>
    </div>
  </div>
</template>
<script>
export default {
	data() {
		return {};
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
  color: #EE3F41;
  font-weight: 600;
}

.detail .de-wrap .card .price h4 {
  font-size: 16px;
  margin-top: 40px;
  color: #53575C;
}

.detail .de-wrap .card .price h2 {
  margin-top: 30px;
  color: #D00204;
  font-size: 26px;
}

.detail .de-wrap .card .price h2 span {
  font-size: 14px;
}


.color-red {
  color: #D00204;
}

.price-w {
  font-size: 14px;
  color: #53575C;
}

button.buy {
  height: 54px;
  line-height: 54px;
  width: 147px;
  background-color: #D00204;
  font-size: 18px;
}

</style>

