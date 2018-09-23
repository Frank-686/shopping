<template>
  <div class="container product pt-3">
    <div class="potion-title">
      <label for="" class="float-left">您现在的位置：</label>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">首页</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">商品详情</li>
        </ol>
      </nav>
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
}
.breadcrumb {
	padding: 0;
	font-size: 12px;
	background-color: transparent;
}

.position-title label{
  font-size: 12px;
}

a {
	color: #4b4c59;
}
</style>

