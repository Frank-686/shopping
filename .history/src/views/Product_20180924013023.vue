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
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
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
	border: none;
	background-color: #f0efef;
}

.card-body {
	padding: 0 10 !important;
}
</style>

