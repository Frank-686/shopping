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
    <ul class="step">
        <li>通过本站去商家购买</li>
        <li>券后9.8元下单并支付</li>
        <li>去淘宝收货</li>
        <li>会本站领取金币或奖励</li>
      </ul>
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
  display: flex;
  justify-content: center;
}
</style>

